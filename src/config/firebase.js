import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//firestore service
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO7rbtFtyG7-WoGqFlKrWUGSjFAZ8NL4U",
  authDomain: "test-project-7e1d4.firebaseapp.com",
  projectId: "test-project-7e1d4",
  storageBucket: "test-project-7e1d4.appspot.com",
  messagingSenderId: "1099132016741",
  appId: "1:1099132016741:web:4979af01cb44cd666e4e8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Setting up Auth into app
const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
export default auth;

export const db = getFirestore(app);
