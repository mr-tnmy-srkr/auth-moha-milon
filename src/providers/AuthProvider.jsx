import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // const authInfo = { name: "tanmoy sarkar" };

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  //observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "observing current user inside useEffect auth provider",
        currentUser
      );
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signInUser, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  // see https://reactjs.org/docs/rendering-elements.html for more info
  children: PropTypes.node,
};

export default AuthProvider;

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the providerF
 * **/
