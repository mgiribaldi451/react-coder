
import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCUnYXKIR5t5jKiuMncYK23a0doExxLb9A",
    authDomain: "react-coder451.firebaseapp.com",
    projectId: "react-coder451",
    storageBucket: "react-coder451.appspot.com",
    messagingSenderId: "860289727612",
    appId: "1:860289727612:web:3c26875916c341e6865df9"
  };



  const app = firebase.initializeApp(firebaseConfig);


  export function getFirestore(){
      return firebase.firestore(app)
  }