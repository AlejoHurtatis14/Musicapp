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
      return this.fireAuth.signInWithPopup(new firebase.auth[type + 'AuthProvider']()).then(logueado => {
        console.log("Logueado ", logueado);
        if (logueado.credential) {
          var token = logueado.credential['accessToken'];
        }
      }, error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          var pendingCred = error.credential;
          var email = error.email;
          this.fireAuth.fetchSignInMethodsForEmail(email).then(methods => {
            if (methods[0] === 'password') {
              // Si la contraseña falla, se solicita al usuario la nueva contraseña (Falta realizar)
              this.fireAuth.signInWithEmailAndPassword(email, 'password').then(user => {
                // return user.linkWithCredential(pendingCred);
              }).then(function () {
                // Google account successfully linked to the existing Firebase user.
              });
              return;
            }
            // All the other cases are external providers.
            // Construct provider object for that provider.
            // TODO: implement getProviderForProviderId.
            // var provider = getProviderForProviderId(methods[0]);
            // // At this point, you should let the user know that they already has an account
            // // but with a different provider, and let them validate the fact they want to
            // // sign in with this provider.
            // // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
            // // so in real scenario you should ask the user to click on a "continue" button
            // // that will trigger the signInWithPopup.
            // this.fireAuth.signInWithPopup(provider).then(function (result) {
            //   // Remember that the user may have signed in with an account that has a different email
            //   // address than the first one. This can happen as Firebase doesn't control the provider's
            //   // sign in flow and the user is free to login using whichever account they own.
            //   // Step 4b.
            //   // Link to Google credential.
            //   // As we have access to the pending credential, we can directly call the link method.
            //   result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function (usercred) {
            //     // Google account successfully linked to the existing Firebase user.
            //   });
            // });
          });
        }
      });
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
