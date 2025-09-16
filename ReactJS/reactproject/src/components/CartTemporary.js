import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToTempCart } from '../redux/cartTempSlice'

 

const CartTemporary = () => {

      const tempCartItemsList = useSelector((state) => state.tempCart.cartTempItems)

      const dispatch = useDispatch();

      const content = tempCartItemsList.length > 0 ? tempCartItemsList.map((item, index) => <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
                  <button onClick={()=>{dispatch(addToTempCart(item))}} className='btn btn-outline-success mx-2' >+</button>                  
                  {item.quantity}
                  <button>-</button>
            </td>
            <td>{item.quantity * item.price}</td>
      </tr>) : null

      return (
            <>
                  <Header />
                  <section className='container py-5'>
                        {
                              tempCartItemsList.length > 0 ? <table className='table'>
                                    <thead>
                                          <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total Amount</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                content
                                          }
                                    </tbody>
                              </table> : <div className='alert alert-info'>No Items are in the Temporary Cart</div>
                        }
                  </section>
                  <Footer />
            </>
      )
}

export default CartTemporary


