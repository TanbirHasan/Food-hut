// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMdRULGUVw7dzrByZxFoZZsSEbeIFovXQ",
  authDomain: "food-hut-ca8d2.firebaseapp.com",
  projectId: "food-hut-ca8d2",
  storageBucket: "food-hut-ca8d2.appspot.com",
  messagingSenderId: "357522143025",
  appId: "1:357522143025:web:b808dc7737cf99f0786210",
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

