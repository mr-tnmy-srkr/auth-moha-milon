// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpQCF6s2dTMtEBPVM8I4qZoVLo_bf-D54",
  authDomain: "auth-moha-milon-217de.firebaseapp.com",
  projectId: "auth-moha-milon-217de",
  storageBucket: "auth-moha-milon-217de.appspot.com",
  messagingSenderId: "223028342449",
  appId: "1:223028342449:web:962122990a9aa66c227c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;