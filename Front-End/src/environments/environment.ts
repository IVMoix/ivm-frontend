// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frontend-ivm',
    appId: '1:925576698069:web:02d27fae03b263637b6a5c',
    storageBucket: 'frontend-ivm.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCyXNgCvnBZ72bFkK4Wp9KNoZmy-ZbXCyc',
    authDomain: 'frontend-ivm.firebaseapp.com',
    messagingSenderId: '925576698069',
  },
  production: false,
  //URL: "https://backend-ivmoix.koyeb.app/"
  URL: "http://localhost:8080/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
