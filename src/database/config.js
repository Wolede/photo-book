import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC88a-7harvQXX-Qv5H1VskEIXjnoJkXac",
    authDomain: "photobook-5b8e6.firebaseapp.com",
    databaseURL: "https://photobook-5b8e6.firebaseio.com",
    projectId: "photobook-5b8e6",
    storageBucket: "photobook-5b8e6.appspot.com",
    messagingSenderId: "509620266081",
    appId: "1:509620266081:web:651bbc49f083f982"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database};