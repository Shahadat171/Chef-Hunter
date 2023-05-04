import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../assets/firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ( {children} ) => {

    const googleProvider = new GoogleAuthProvider();
    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState('')

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
    } ,[])
    
    const profileUpdateData = (user, regName, photo)=> {
        return updateProfile(auth.currentUser, {
            displayName: regName, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    const authInfo = {
         error,
         setError,
         profileUpdateData,
         loading,
         googleSignIn,
         createUser,
         signIn,
         user,
         logOut
        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;