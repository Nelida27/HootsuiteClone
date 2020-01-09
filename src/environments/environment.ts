// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  social:{
    twlink:'https://twitter.com/hootsuite',
    fblink:'https://www.facebook.com/hootsuite',
    lnlink:'https://www.linkedin.com/company/hootsuite',
    youlink:'https://www.youtube.com/user/hootsuite',
    inlink:'https://www.instagram.com/hootsuite/'
  },

    firebase: {
      apiKey: "AIzaSyDTDMzZV22Gisodf4uvNSPLJDj-F4qvrk0",
      authDomain: "crudexample-69d61.firebaseapp.com",
      databaseURL: "https://crudexample-69d61.firebaseio.com",
      projectId: "crudexample-69d61",
      storageBucket: "crudexample-69d61.appspot.com",
      messagingSenderId: "403376872828",
      appId: "1:403376872828:web:889488bd97a1ab4495d8f9",
      measurementId: "G-5CHFT7HXT9"
    }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
