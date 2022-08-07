import './App.css';
import React from 'react'
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase.js'
 


function App() {
  const [user] = useAuthState(auth)
  return (
   <>
    <div>
      {user ? <Chat />: <SignIn />}
      
    </div>
    
   </>
  );
}


export default App;
