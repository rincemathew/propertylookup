// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxUyPPtNZYAfWbtWbo-EvToiEyA0KHbk",
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-lookup-a27cf.firebaseapp.com",
  projectId: "property-lookup-a27cf",
  storageBucket: "property-lookup-a27cf.appspot.com",
  messagingSenderId: "525362326287",
  appId: "1:525362326287:web:97b88f15df16616b4eec7a",
  measurementId: "G-1HBQX72B4T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
