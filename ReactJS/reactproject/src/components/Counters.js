import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'



const Counters = () => {
     
      const counter = useSelector(state => state.counter);
      const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <section className=' container counter py-5'>
            <h1>Counter - {counter}</h1>
            <button onClick={ () => dispatch(increment())}>Increment Counter</button>
            <button onClick={ () => dispatch(decrement())}>Decrement Counter</button>
            <button onClick={ () => dispatch(reset())}>Reset Counter</button>
            <hr></hr>
            
      </section>
      <Footer />
    </div>
  )
}

export default Counters