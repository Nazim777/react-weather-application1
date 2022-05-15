import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfeQ5x3UofddS2iVutNyoxdBZmTKr8UHI",
  authDomain: "simple-project-new.firebaseapp.com",
  projectId: "simple-project-new",
  storageBucket: "simple-project-new.appspot.com",
  messagingSenderId: "307493783692",
  appId: "1:307493783692:web:f31cb50a2d68801755d3a9"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)