import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import {

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from "firebase/auth"

import {auth} from "firebase/auth"
import { useEffect } from "react";
// ************

const userAuthContext= createContext()

export function userAuthContextProvider({children}){

    const[user, setUser] = useState("")

  function signUp(emali, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(emali, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }

useEffect(()=>{
const unsbscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currrentUser);

})
return()=>{
    unsbscribe()
}
},[]);
    return <userAuthContext.Provider value={{ user, signUp}}>{children}</userAuthContext.Provider>;

}

export function useUserAuth(){
    return useContext(userAuthContext)
} 