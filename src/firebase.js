import firebase from 'firebase'
const firbaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaaYs5edEXUfHIk5t78iNPlXKSmOLuJl0",
    authDomain: "textchat-website.firebaseapp.com",
    projectId: "textchat-website",
    storageBucket: "textchat-website.appspot.com",
    messagingSenderId: "614525618302",
    appId: "1:614525618302:web:373f58f7cb56d0ffe6b02f",
    measurementId: "G-LG653HWRVC"
})
const db = firebaseApp.firestore()

const auth = firebase.auth()

export {}