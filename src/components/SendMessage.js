import React, {useState} from 'react'
import {Button, Input} from '@mui/material'
import { db, auth } from '../firebase.js'
import { doc, setDoc, serverTimestamp,collection} from "firebase/firestore"; 

function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')
    async function sendMessage(e){
        e.preventDefault() //prevent page from refreshing when presseing Send button
        const {uid, photoURL, displayName} = auth.currentUser
        var messagesRef = collection(db, "messages")
        await setDoc(doc(messagesRef),{
            text: msg,
            photoURL,
            uid,
            displayName,
            createdAt: serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '70%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Message..."/>
                    <Button style={{ width: '18%',height: '3%', fontSize: '30px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} variant="contained" type="submit">➡</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
