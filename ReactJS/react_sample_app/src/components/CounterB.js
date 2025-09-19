import React from 'react'
import Footer from './Footer'
import Header from './Header'
import reusableCounter from './reusableCounter'

const CounterB = (props) => {

      const { myname, city, counter, incrementCounter, decrementCounter, resetCounter } = props

      return (
            <>
                  <Header />
                  <section className='content'>
                        <h1>This is {myname} form {city}</h1>
                        <h1>CounterB- {counter}</h1>
                        <button onClick={incrementCounter}>Increment</button>
                        <button onClick={decrementCounter}>Decrement</button>
                        <button onClick={resetCounter}>Reset</button>
                  </section>
                  <Footer />
            </>
      )
}

export default reusableCounter(CounterB)