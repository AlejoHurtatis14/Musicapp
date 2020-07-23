import { prop, required } from '@rxweb/reactive-form-validators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  private _usuario: string;
  private _password: string;

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
  get password(): string {
    return this._password;
  }

  //Type es el complemento del provider para inicar
  signIn(datos?, type?): Promise<any> {
    if (type) {
      return this.fireAuth.signInWithPopup(new firebase.auth[type + 'AuthProvider']());
    } else {
      return this.fireAuth.signInWithEmailAndPassword(datos.usuario, datos.password);
    }
  }

  signOut() {
    this.fireAuth.signOut().then((resp) => {
      console.log("Respuesta ", resp);
    }, error => {
      console.log("Error ", error);
    });
  }

}
