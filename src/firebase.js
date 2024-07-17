import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe2CAmNxBxNRKdR7pqM3drN-40qaaLAoc",
    authDomain: "url-shortener-b220f.firebaseapp.com",
    projectId: "url-shortener-b220f",
    storageBucket: "url-shortener-b220f.appspot.com",
    messagingSenderId: "893639104417",
    appId: "1:893639104417:web:6032e31238715a57875de0",
    measurementId: "G-5ZNLFSDN6C"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();