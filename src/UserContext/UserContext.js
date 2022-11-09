import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../firebase/firebase.init';

export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]=useState('');
    const [loader, setLoader]=useState(false)

    const googleProvider=new GoogleAuthProvider();
    const gitProvider=new GithubAuthProvider();

    // create user 
    const createUser=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // loginUser
    const loginUser=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // loginWithGoogle
    const googleLogin=()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }


    //   update Profile
  const update = (displayName, photoURL) => {
    updateProfile(auth.currentUser, {
        
      displayName: displayName,
      photoURL: photoURL,
    });
  };



    // gitLogin
    const gitLogin=()=>{
        setLoader(true)
        return signInWithPopup(auth, gitProvider);
    }

    // logoutUser

    const logOutUser=()=>{
        setLoader(true)
        return signOut(auth)
    }



    // useEffect

    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(true)
        })
        return ()=> unsubscribed();
    },[])

    const userInfo={
        user,
        createUser,
        loginUser,
        logOutUser,
        googleLogin,
        gitLogin,
        loader,
        update
    }
    return (
       <AuthContext.Provider value={userInfo}>
    {children}
       </AuthContext.Provider>
    );
};

export default UserContext;