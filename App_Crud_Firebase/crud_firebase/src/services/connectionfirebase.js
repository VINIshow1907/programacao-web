import  firebase from "firebase/compat/app";   

let firebaseConfig = {   
    apiKey: "AIzaSyB0qjFSFYPFxsdzlfmZZFyankCH3f3oPUs",
    authDomain: "bdcrudfirestorevinicius.firebaseapp.com",
    projectId: "bdcrudfirestorevinicius",
    storageBucket: "bdcrudfirestorevinicius.appspot.com",
    messagingSenderId: "573217492037",
    appId: "1:573217492037:web:444c0d0d3d35a3d329e72c"
};   

// Initialize Firebase   

var fireDb = firebase.initializeApp(firebaseConfig);   

export default fireDb.database().ref();   