import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { toast } from "react-toastify";
export const ContextProvider = createContext();
export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forget, setForget] = useState();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
    toast.success("sucessfully Log out");
  };
  const profileUpdate = (updated) => {
    return updateProfile(auth.currentUser, updated);
  };
  useEffect(() => {
    const ovjervation = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      ovjervation();
    };
  }, []);

  const updateNewProfile = (updated) => {
    return updateProfile(auth.currentUser, updated)
      .then(() => {
        setUser({ ...auth.currentUser, ...updated });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Error updating profile:", error);
      });
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const informationPass = {
    signUp,
    setUser,
    user,
    loading,
    logOut,
    logIn,
    profileUpdate,
    updateNewProfile,
    forgetPass,
    forget,
    setForget,
  };
  return (
    <div>
      <ContextProvider.Provider value={informationPass}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
}
