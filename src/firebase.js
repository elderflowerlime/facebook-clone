// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-hk-AMalWVqftFAUPORb8RvdRzPrIp1g",
    authDomain: "fb-clone-b02fe.firebaseapp.com",
    projectId: "fb-clone-b02fe",
    storageBucket: "fb-clone-b02fe.appspot.com",
    messagingSenderId: "207964190236",
    appId: "1:207964190236:web:689488f4c011f2f80dd1d9",
    measurementId: "G-6C53KLVJK3"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db; 