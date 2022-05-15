import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const MultipleProducts = () => {


    const [product, setproduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((result)=>{
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
                            <div className=" image">
                            <img src={item.image} alt="" />

                            </div>
                            
                           
                            <Link to={`/singleproduct/${item.id}`} className='btn btn-primary button'>Buy Now</Link>
                        
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
      
    </div>
  )
}

export default MultipleProducts
