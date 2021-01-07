// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbhgp46JQLS0JovjHHVr4AIimCGynwkjM",
    authDomain: "tinder-clone-751f1.firebaseapp.com",
    projectId: "tinder-clone-751f1",
    storageBucket: "tinder-clone-751f1.appspot.com",
    messagingSenderId: "202275996399",
    appId: "1:202275996399:web:482debd8b1a8087e17d11a",
    measurementId: "G-C8TNV065K5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore();

  export default database;
  