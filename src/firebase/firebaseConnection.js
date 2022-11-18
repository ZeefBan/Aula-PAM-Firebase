// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvBu7pQXYYWamgPOqD3hro0thZrwdWO4A",
  authDomain: "aulapam-1d358.firebaseapp.com",
  databaseURL: "https://aulapam-1d358-default-rtdb.firebaseio.com",
  projectId: "aulapam-1d358",
  storageBucket: "aulapam-1d358.appspot.com",
  messagingSenderId: "318373225686",
  appId: "1:318373225686:web:d4645e5c97e534b6721577",
  measurementId: "G-P5FB2F24VC"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;