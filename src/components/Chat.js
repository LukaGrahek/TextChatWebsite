import React, {useState, useEffect, useRef} from 'react'
import { db, auth } from '../firebase'
import SignOut from './SignOut'
import { collection, orderBy, limit ,query , onSnapshot  } from "firebase/firestore"; 
import SendMessage from './SendMessage';

function Chat(){
    const scroll = useRef()
    const [messages,setMessages] = useState([])
    useEffect(()=>{
        var messagesRef = collection(db, "messages")
        onSnapshot(query(messagesRef, orderBy('createdAt'), limit(50)),(snapshot)=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
        })
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    },[])

    return(
        <div>
            <SignOut />
            <div className='msgs'>
               
                {messages.map(({id, text, photoURL, uid, displayName})=>(
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            
                            <img src={photoURL} alt="../defaultPFP.jpg"></img>
                            
                            <p>{text}</p>
                            
                        </div>
                        <div id = "dName" className={`${uid === auth.currentUser.uid ? 'userCurrent' : 'otherUser'}`}>
                            Sent by: {displayName}
                        </div>
                    </div>
                ))}
            </div>
            
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat