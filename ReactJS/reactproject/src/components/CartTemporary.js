import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'


const CartTemporary = () => {

      const tempCartItemsList = useSelector((state) => state.tempCart.cartTempItems)

      const content = tempCartItemsList.length > 0 ? tempCartItemsList.map((item, index) => <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
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