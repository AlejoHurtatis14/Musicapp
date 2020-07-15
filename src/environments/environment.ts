// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyApcJkMi332lEBFq0pqQnw2VpaQMmOfGnw",
    authDomain: "aplicacionmusica.firebaseapp.com",
    databaseURL: "https://aplicacionmusica.firebaseio.com",
    projectId: "aplicacionmusica",
    storageBucket: "aplicacionmusica.appspot.com",
    messagingSenderId: "719003813794",
    appId: "1:719003813794:web:16abd717615fb181f154fb",
    measurementId: "G-JGR5HV6SW8",
  },
  apiKeyMusiMatch: "24cfbf9043e212897e8f2927daecb7f0",
  complementoMusixMatch: "/ws/1.1/",
  complementoApiGoogle: "/signin/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

//URL peticion de acceso a plataforma con api de google
//https://accounts.google.com/o/oauth2/v2/auth?client_id=719003813794-s9932lepg5rl10q1t3ouevb5doiaublb.apps.googleusercontent.com&redirect_uri=http://localhost:4200&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email
