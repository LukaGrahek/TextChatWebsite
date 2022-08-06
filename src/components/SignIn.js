import React from 'react'
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
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInUsingGoogle}>Sign In Using Google</Button>
        </div>
    
    )
}

export default SignIn