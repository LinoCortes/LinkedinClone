// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuAl3ezcVqNWwB4r5toIPw7u8V3hXZHxU",
  authDomain: "linkedin-clone-e559a.firebaseapp.com",
  projectId: "linkedin-clone-e559a",
  storageBucket: "linkedin-clone-e559a.appspot.com",
  messagingSenderId: "1090138722981",
  appId: "1:1090138722981:web:0c7e6e599e7c49cf4b334c",
  measurementId: "G-0F9G380ZX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth,app};