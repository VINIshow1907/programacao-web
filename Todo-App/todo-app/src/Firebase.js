import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB3jwKWmzkc4nFJGW2hZ7-Orc_eALE4lyQ",
    authDomain: "todo-app-d8f88.firebaseapp.com",
    projectId: "todo-app-d8f88",
    storageBucket: "todo-app-d8f88.appspot.com",
    messagingSenderId: "846298233092",
    appId: "1:846298233092:web:6a42c086e9ceb22a84f851"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
  export {db}