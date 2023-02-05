import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyDXBk2pShrb3YN5FxWc-ZEIwIJQETu58",
    authDomain: "linked-clone-95704.firebaseapp.com",
    projectId: "linked-clone-95704",
    storageBucket: "linked-clone-95704.appspot.com",
    messagingSenderId: "348998890186",
    appId: "1:348998890186:web:362b046f111003d6653a33"
};

// connects to our database 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
