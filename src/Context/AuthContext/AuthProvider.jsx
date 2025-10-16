import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    })
    // clear the observer on unmount
    return () => {
      unsubscribe();
    }
  }, [])




  const authInfo = {
    // createUser: createUser
    user,
    createUser,
    signInUser
  }


  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;