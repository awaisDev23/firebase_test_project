import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth, { providerGoogle } from "../config/firebase";
function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   console.log(auth?.currentUser?.email);

  //async await (try to solve your errors);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input
        placeholder="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={signIn}>Sign_In</button>
      <button onClick={signInwithGoogle}>Google SignIn</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default Auth;
