import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase=()=>{
const [user,setUser]=useState({})

const auth = getAuth();

//Google signIn

const signInWithGoogle=()=>{


    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)
   
    
}

//State management
useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth,user=>{
if(user){
    setUser(user);
}else{
    setUser({});
}
    })
    return ()=> unsubscribed;
},[])

//Signing Out

const signingOut=()=>{
signOut(auth)
.then(()=>{});


}

return {
    user,
    signingOut,
    
    signInWithGoogle
}


}
export default useFirebase;