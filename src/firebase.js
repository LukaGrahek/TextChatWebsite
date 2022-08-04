import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
 
const firebaseConfig ={
    apiKey: "AIzaSyAaaYs5edEXUfHIk5t78iNPlXKSmOLuJl0",
    authDomain: "textchat-website.firebaseapp.com",
    projectId: "textchat-website",
    storageBucket: "textchat-website.appspot.com",
    messagingSenderId: "614525618302",
    appId: "1:614525618302:web:373f58f7cb56d0ffe6b02f",
    measurementId: "G-LG653HWRVC"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



const auth = new GoogleAuthProvider();
//const auth = firebase.auth()
 
export {db, auth} 