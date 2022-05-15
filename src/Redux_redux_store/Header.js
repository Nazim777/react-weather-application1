import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {


    const state = useSelector((state)=>state.cart)
  return (
    <div>




<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-ComShop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         
          <Link  className="nav-link active"  to="/">Home</Link>
        </li>

        <li className="nav-item">
         
          <Link  className="nav-link active"  to="/cart">Cart</Link>
        </li>
        
        
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
      <div className="d-flex cartlength">
          cartitem({state.length})
      </div>
    </div>
  </div>
</nav>











      
    </div>
  )
}

export default Header
