import React from 'react'
//import firebase from 'firebase/compat/app'
import {auth} from '../firebase.js'
import Button from '@mui/material/Button'
import { GoogleAuthProvider } from "firebase/auth";
import {signInWithPopup} from "firebase/auth";


 

function SignIn(){ 
    function signInUsingGoogle(){
        const provider = new GoogleAuthProvider();
        //const auth = getAuth();
        signInWithPopup(auth, provider);
    }
    return(
        <div>
            <Button onClick={signInUsingGoogle}>Sign In Using Google</Button>
        </div>
    
    )
}

export default SignIn