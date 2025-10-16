import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);

  }


  // get current user info 
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("inside observer", currentUser);
  //   }
  //   else {
  //     console.log("else observer", currentUser);
  //   }
  // })




  // useEffect(() => { }, [])
  useEffect(() => {
    // mount/set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user in auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    // clear the observer on unmount
    return () => {
      unsubscribe();
    }
  }, [])


  const authInfo = {
    // createUser: createUser
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle
  }


  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;