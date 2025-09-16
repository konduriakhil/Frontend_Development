import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { getTotals } from '../redux/cartSlice';


const Header = () => {

      const dispatch = useDispatch();

      const {cartItems, cartTotalQuantity} = useSelector((state) => state.cart)

      useEffect(()=>{
            dispatch(getTotals())
      },[cartItems])

      console.log(cartTotalQuantity)

      return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container">
                        <Link to='/' className='navbar-brand' >Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                          <Link className="nav-link active" to='/' aria-current="page" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to='/posts' className="nav-link" >Posts</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to='/postst' className="nav-link" >PostsTemporary</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to='/movies' className="nav-link" >MoviesInfo</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to='/counter' className="nav-link" >Counter</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to='/products' className="nav-link" >Products</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to='/carttemp' className="nav-link" >CartTemporary(0)</Link>
                                    </li>

                              </ul>
                              <div className="d-flex" role="search">
                                    <Link to='/cart' >Cart({cartTotalQuantity})</Link>
                              </div> 
                        </div>
                  </div>
            </nav>
      )
}
export default Header