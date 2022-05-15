import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removetocart } from './Redux/Reduxtoolkit/CartReducer'

const Cart = () => {
    const product = useSelector((state)=>state.cart)
    console.log(product)
    const dispatch = useDispatch()
  return (
    <div>
        <div className="container">
           {
               product.map((item)=>{
                   return(
                       <div className="row productcart">
                           <div className="col-md-8">
                               <div className="row">
                                   <div className="col-md-4 cartimage"><img src={item.image} alt="" /></div>
                                   <div className="col-md-4 productname">{item.title}</div>
                               </div>
                           </div>
                           <div className="col-md-4">
                               <div className="row">
                                   <div className="col-md-2 productprice">${item.price}</div>
                                   <div className="col-md-2"><button className='btn btn-primary'onClick={()=>dispatch(removetocart(item.id))}>remove</button></div>
                               </div>
                           </div>
                       </div>
                   )
               })
           }
        </div>
      
    </div>
  )
}

export default Cart
