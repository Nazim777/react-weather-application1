import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const {id} = useParams()

    const [user, setuser]= useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setuser(resp)
            })
        })

    },[])
  return (
    <div>
        <div className="container">
            <div className="row">
                
                            <div className="col-md-5" key={user.id}>
                                <p>{user.id}</p>
                                <p>username: {user.username}</p>
                                <p>name: {user.name}</p>
                                <p>email: {user.email}</p>
                                <p>phone: {user.phone}</p>
                                <p>website:{user.website}</p>
                            </div>
                        
            </div>
        </div>
      
    </div>
  )
}

export default Userdetails
