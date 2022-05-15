import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {addtocart} from './Redux/Reduxtoolkit/CartReducer'
import { useDispatch } from 'react-redux'

const SingleProduct = () => {
    const {id} = useParams()
    const dispatch= useDispatch()


    const [user, setuser]= useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((result)=>{
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
                
                            <div className="col-md-5 details" key={user.id}>
                                <img src={user.image} alt="" />
                                
                            </div>
                            <div className="col-md-5">
                            <h4>{user.title}</h4>
                                <h5>{user.category}</h5>
                                <h3>${user.price}</h3>
                                <p>{user.description}</p>
                                <button className='btn btn-primary' onClick={()=>dispatch(addtocart(user))}>add to cart</button>

                            </div>
                        
            </div>
        </div>
      
    </div>
  )
}

export default  SingleProduct
