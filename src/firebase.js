import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrcXSfCqe9kZSPr0TEmC6NSLHYF279uWM",
  authDomain: "netflix-clone-ab784.firebaseapp.com",
  projectId: "netflix-clone-ab784",
  storageBucket: "netflix-clone-ab784.appspot.com",
  messagingSenderId: "220629538336",
  appId: "1:220629538336:web:7071b6041e0181074b0e45",
  measurementId: "G-QR5F87C9B0"
});

const auth = getAuth(firebaseApp);

export {auth};