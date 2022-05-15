import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase-config';


const User = () => {
    const [email, setemail] = useState('')
    const [password, setpassord] = useState('')
   
   


const getinputdata = () =>{
    createUserWithEmailAndPassword(auth,email, password).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
}


  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder={'enter your email'}/> <br /> <br />
            <input type="password" value={password} onChange={(e)=>{setpassord(e.target.value)}} placeholder={'enter your password'}/> <br /> <br />
            
            <button onClick={getinputdata}>submit</button>
        </form>
      
    </div>
  )
}

export default User
