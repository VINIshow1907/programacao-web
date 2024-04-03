import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvEmkoxSFqBmOuT5Nvn6pFgUwDS7sEqCM",
  authDomai : "miniblog-f606a.firebaseapp.com",
  projectId: "miniblog-f606a",
  storageBucket: "miniblog-f606a.appspot.com",
  messagingSenderId: "179806219115",
  appId: "1:179806219115:web:1f0bf988ad330f2621ba2e"
};

const db = getFirestore(app);
const app = initializeApp(firebaseConfig);

export{db};