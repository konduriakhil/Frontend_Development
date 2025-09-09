import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/porductSlice'
import { addToCart } from '../redux/cartSlice'
import { addToTempCart } from '../redux/cartTempSlice'


const Products = () => {

      const productlist = useSelector((state) => state.products.items)
      const pStatus = useSelector((state) => state.products.status)
      const pError = useSelector((state) => state.products.error)
      const dispatch = useDispatch();

      useEffect(() => {
            if (pStatus == 'idle') {
                  dispatch(fetchProducts())
            }
      }, [productlist, dispatch])

      const addProductToCart = (product) => {
            dispatch(addToCart(product));
            dispatch(addToTempCart(product));
      }

      return (
            <div>
                  <Header />
                  <section className=' container py-5'>
                        <div className='row'>
                              <h1>Products List</h1>
                              {pStatus == 'loading' ? <p>Loading...</p> : null}
                              {pError ? <p className='alert alert-danger'>{pError}</p> : null}
                              {
                                    productlist.length > 0 ? productlist.map((item, index) => <div className='col-md-3 my-5' key={index}>
                                          <img height='150' width='150' src={item.image} />
                                          <h4>{item.title.substr(0, 30)}</h4>
                                          <p>Price: {item.price}</p>
                                          <button onClick={() => addProductToCart(item)} className='btn btn-warning'>Add To Cart</button>
                                    </div>) : null
                              }
                        </div>
                  </section>
                  <Footer />
            </div>
      )
}

export default Products