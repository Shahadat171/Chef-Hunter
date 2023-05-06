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
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);

    }
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

    useEffect(() =>{
         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    } ,[])
    
    
    const authInfo = {
         error,
         setError,
         profileUpdateData,
         loading,
         setLoading,
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