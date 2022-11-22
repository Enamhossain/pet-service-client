import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)



const Authprovider = ({children}) => {
    

    const createUser = (email,password) =>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    const authInfo = {
    
        createUser,
        login
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