import { useState, useEffect } from 'react';
import './App.css'
import User from './components/User';
import UserList from './components/UserList'



function App() {
  const [username, setUsername] = useState('john');

  useEffect(()=>{
  console.log('Hello');
    }, [username]);
  return (
    <>
    <input onChange={(e)=> setUsername(e.target.value)}/>
    <User 
    username = {username}
    
    // num={1} 
    // yesno={true}
    // posts={[1,2,3,'a','b','c']}
    // handleClick={()=> alert("Hello")}
    />
    <UserList/>
    </>
  )
}

export default App
