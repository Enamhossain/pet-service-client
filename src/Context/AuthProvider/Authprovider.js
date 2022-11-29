import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth,signOut, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])
   
    const authInfo = {
    
        createUser,
        login,
        googleLogin,
        logOut,
        user
    
     }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {
                children
               }
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;