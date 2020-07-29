import { prop, required, minLength, password, compare } from '@rxweb/reactive-form-validators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Perform } from '../Functions/functions-generals';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private dataBase: AngularFirestore,
    public fireAuth: AngularFireAuth,
  ) { }

  private _nombre: string;
  private _email: string;
  private _usuario: string;
  private _password: string;
  private _repeatPassword: string;

  set nombre(value: string) {
    this._nombre = value;
  }

  @prop()
  @required()
  get nombre(): string {
    return this._nombre;
  }

  set email(value: string) {
    this._email = value;
  }

  @prop()
  @required()
  get email(): string {
    return this._email;
  }

  set usuario(value: string) {
    this._usuario = value;
  }

  @prop()
  @required()
  get usuario(): string {
    return this._usuario;
  }

  set password(value: string) {
    this._password = value;
  }

  @prop()
  @required({ message: 'Este campo es requerido' })
  @minLength({ value: 5 })
  @password({
    validation: { digit: true, specialCharacter: true, lowerCase: true, upperCase: true }
  })
  get password(): string {
    return this._password;
  }

  set repeatPassword(value: string) {
    this._repeatPassword = value;
  }

  @required()
  @compare({ fieldName: 'password' })
  get repeatPassword(): string {
    return this._repeatPassword;
  }

  //Type es el complemento del provider para inicar
  async signUp(type?): Promise<any> {
    let user;
    if (type) {
      await this.fireAuth.signInWithPopup(new firebase.auth[type + 'AuthProvider']()).then(usuario => {
        if (usuario.user) {
          this.sendEmailVerifyUser();
          localStorage.setItem('id', usuario.user.uid);
          localStorage.setItem('token', '');
          user = usuario;
        }
      }, error => {
        console.log("Error ", error);
      });
    } else {
      await this.fireAuth.createUserWithEmailAndPassword(this.email, this.password).then(usuario => {
        if (usuario.user) {
          this.sendEmailVerifyUser();
          localStorage.setItem('id', usuario.user.uid);
          localStorage.setItem('token', '');
          user = usuario;
        }
      }, error => {
        Perform.execute().createNotification('No fue posible registrarse.', error.message, 'error');
      });
    }
    return user;
  }

  sendEmailVerifyUser() {
    return this.fireAuth.currentUser.then(u => {
      u.sendEmailVerification()
    }).then(() => {
    }, error => {
      console.log("Error ", error);
    })
  }

}
