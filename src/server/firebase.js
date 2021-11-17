// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU6Ke93vR4F0mYXqgaGD2Zn8X6ClTg7w0",
  authDomain: "slack-react-clone-17bce.firebaseapp.com",
  projectId: "slack-react-clone-17bce",
  storageBucket: "slack-react-clone-17bce.appspot.com",
  messagingSenderId: "836678197051",
  appId: "1:836678197051:web:a265049757fd8e8c32211e",
  measurementId: "G-KKRJXXWQCQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
