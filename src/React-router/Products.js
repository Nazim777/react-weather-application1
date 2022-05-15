import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Products = () => {


    const [product, setproduct] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setproduct(resp)
            })
        })
    },[])
  return (
    <div>
    <div className="container">
        <div className="row">
            {
                product.map((item)=>{
                    return(
                        <div className="col-md-4" key={item.id}>
                            <h6>id: {item.id}</h6>
                            <h6>username: {item.username}</h6>
                            <h6>name: {item.name}</h6>
                            <Link to={`/userdetails/${item.id}`} className='btn btn-primary'>userdetails</Link>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
      
    </div>
  )
}

export default Products
