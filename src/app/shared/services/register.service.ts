import { prop, required, minLength, password, compare } from '@rxweb/reactive-form-validators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private dataBase: AngularFirestore,
    private fireAuth: AngularFireAuth,
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
  @required()
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
  signUp(type) {
    if (type) {
      this.fireAuth.signInWithPopup(new firebase.auth[type + 'AuthProvider']())
    }
  }

}
