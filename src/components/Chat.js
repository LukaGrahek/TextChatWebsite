import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import SignOut from './SignOut'
import { collection, orderBy, limit ,query , onSnapshot  } from "firebase/firestore"; 

function Chat(){
    const [messages,setMessages] = useState([])
    useEffect(()=>{
        var messagesRef = collection(db, "messages")
        onSnapshot(query(messagesRef, orderBy('createdAt'), limit(50)),(snapshot)=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
        })
        //
    },[])
    
    return(
        <div>
            <SignOut />
            <p>Chat:</p>
            {/* {console.log(messages.map)} */}
            {messages.map(({id, text, photoURL})=>(
                <div key={id}>
                    
                    <img src={photoURL} alt=""></img>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}

export default Chat