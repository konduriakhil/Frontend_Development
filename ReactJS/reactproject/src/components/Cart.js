import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decrementCartItems, getTotals, removeFromCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

      const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)


      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getTotals())
      }, [dispatch, cartItems])

      const content = cartItems.length > 0 ? cartItems.map((item, index) => <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
                  <button onClick={() => dispatch(addToCart(item))} className='btn btn-outline-success mx-2'>+</button>
                  {item.quantity}
                  <button onClick={() => dispatch(decrementCartItems(item))} className='btn btn-outline-danger mx-2'>-</button>
            </td>
            <td>{item.quantity * item.price}</td>
            <td>
                  <button onClick={() => dispatch(removeFromCart(item))} className='btn btn-danger'>Delete</button>
            </td>
      </tr>) : null

      return (
            <>
                  <Header />
                  <section className='container py-5'>
                        {
                              cartItems.length > 0 ? <div><table className='table'>
                                    <thead>
                                          <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total Amount</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {content}
                                    </tbody>

                              </table>
                                    <div className='d-flex justify-content-between' >
                                          <div>
                                                <Link to='/products' className='btn btn-info' >Continue Shopping</Link>
                                          </div>
                                          <div>
                                                <button onClick={() => dispatch(clearCart())} className='btn btn-danger'>Clear Cart</button>
                                          </div>
                                          <div>
                                                <h5>Grand Total - {cartTotalAmount.toFixed(2)}</h5>
                                                <Link to='/checkout' className='btn btn-primary'>Proceed to Checkout</Link>
                                          </div>
                                    </div>
                              </div> : <div>
                                    <div className='alert alert-info'>
                                          No Items Found in Class
                                    </div>
                                    <div>
                                          <Link to='/products' className='btn btn-success' >Continue Shopping</Link>
                                    </div>
                              </div>
                        }
                  </section>
                  <Footer />

            </>
      )
}

export default Cart