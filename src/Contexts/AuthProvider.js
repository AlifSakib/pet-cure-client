import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  return <div></div>;
};

export default AuthProvider;
