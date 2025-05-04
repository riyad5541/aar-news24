import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user)

    const createNewUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const authInfo={
        createNewUser,
        user,
        setUser,
        logout,
        userLogin,
        loading
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;