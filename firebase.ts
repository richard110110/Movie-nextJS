// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCITTeLO2JJCAUDaSMaUvvk7I8rZQr6dI0",
  authDomain: "netflix-clone-7c3a8.firebaseapp.com",
  projectId: "netflix-clone-7c3a8",
  storageBucket: "netflix-clone-7c3a8.appspot.com",
  messagingSenderId: "953755706636",
  appId: "1:953755706636:web:1f7fe51422a21d90691529",
  measurementId: "G-Z4FYMXZHTL"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps().length ? initializeApp(firebaseConfig):getApp()
const db = getFirestore()
const auth = getAuth()


export default app
export {auth, db}


