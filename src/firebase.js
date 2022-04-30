// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDLJu3g1h4UNz4KNRZv6Cucrw69HCTmCDM",
    authDomain: "slack-clone-96342.firebaseapp.com",
    projectId: "slack-clone-96342",
    storageBucket: "slack-clone-96342.appspot.com",
    messagingSenderId: "710966328173",
    appId: "1:710966328173:web:00f8f38ef5c08e2b40b864",
    measurementId: "G-YE9J5FCEHG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth=firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider,db};