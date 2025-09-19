import React from 'react'
import Footer from './Footer'
import Header from './Header'
import reusableCounter from './reusableCounter'

const CounterA = (props) => {


      const { counter, incrementCounter, decrementCounter, resetCounter } = props
      return (
            <>
                  <Header />
                  <section className='content'>
                        <h1>CounterA- {counter}</h1>
                        <button onClick={incrementCounter}>Increment</button>
                        <button onClick={decrementCounter}>Decrement</button>
                        <button onClick={resetCounter}>Reset</button>
                  </section>
                  <Footer />
            </>
      )
}

export default reusableCounter(CounterA)