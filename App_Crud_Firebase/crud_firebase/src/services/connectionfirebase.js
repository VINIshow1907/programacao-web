import * as firebase from "firebase";   

var firebaseConfig = {   

};   

// Initialize Firebase   

var fireDb = firebase.initializeApp(firebaseConfig);   

export default fireDb.database().ref();   