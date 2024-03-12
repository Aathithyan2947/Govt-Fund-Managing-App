import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAloLwwsWU1GivFZPqYG6Fk_Ls-8UoMGYA",
  authDomain: "govt-fund-webapp.firebaseapp.com",
  projectId: "govt-fund-webapp",
  storageBucket: "govt-fund-webapp.appspot.com",
  messagingSenderId: "166301918449",
  appId: "1:166301918449:web:6791ec124edbed027fb550",
  measurementId: "G-0DQ0PSLN0L"
};

// New Config
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyCLz3caNpqzNfRuLseGcX6arp8ALfVmbEM",
//   authDomain: "gpc-web-app-6fb38.firebaseapp.com",
//   projectId: "gpc-web-app",
//   storageBucket: "gpc-web-app.appspot.com",
//   messagingSenderId: "639340573214",
//   appId: "1:639340573214:web:b28b1622c189e37be4740f",
//   measurementId: "G-L956DVTLSK"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider= new GoogleAuthProvider()
export const auth = getAuth(app)
export const db=getFirestore(app)


