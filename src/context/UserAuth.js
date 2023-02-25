import { createContext, useContext, useEffect, useState } from "react";

import app from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
export const auth = getAuth(app);

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        localStorage.setItem("appUser", true);
        setUser(currentUser);
      } else {
        localStorage.removeItem("appUser");
      }
    });
  }, [auth]);

  return (
    <userAuthContext.Provider
      value={{ user, login, signup, logout, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
