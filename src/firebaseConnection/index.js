import firebase from "firebase/app";

import 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyD7eehnZzjYEcGSEbBxsohojgYL8nawspg",
    authDomain: "aula01-3c5aa.firebaseapp.com",
    databaseURL: "https://aula01-3c5aa-default-rtdb.firebaseio.com",
    projectId: "aula01-3c5aa",
    storageBucket: "aula01-3c5aa.appspot.com",
    messagingSenderId: "142221156499",
    appId: "1:142221156499:web:02412a72fe937985562d66",
    measurementId: "G-KGZ232T61K"
  };


if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);

}



export default firebase;