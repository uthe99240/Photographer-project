// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFJdDlVIQTPQ3eIcIWgCkarEJPSY19qDw",
  authDomain: "photographer-project-a2c0f.firebaseapp.com",
  projectId: "photographer-project-a2c0f",
  storageBucket: "photographer-project-a2c0f.appspot.com",
  messagingSenderId: "900185167275",
  appId: "1:900185167275:web:ea7e1b2b6035f5b296aeee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;