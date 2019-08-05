import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"


var firebaseConfig = {
    apiKey: "AIzaSyDTDYuCV_2wZi9ymxh_gkAyXTtS0RhWsws",
    authDomain: "projeto-de-notas.firebaseapp.com",
    databaseURL: "https://projeto-de-notas.firebaseio.com",
    projectId: "projeto-de-notas",
    storageBucket: "",
    messagingSenderId: "955622267115",
    appId: "1:955622267115:web:645a3991f350c164"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }