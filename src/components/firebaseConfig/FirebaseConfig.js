 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcq8EyUypTP9O0bWMb-SvV9IIc8G8O62s",
  authDomain: "fir-auth-feroj.firebaseapp.com",
  projectId: "fir-auth-feroj",
  storageBucket: "fir-auth-feroj.appspot.com",
  messagingSenderId: "248500833358",
  appId: "1:248500833358:web:f7aa97ba4cdcb47e26c71f",
  measurementId: "G-7SD89BRXKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
 