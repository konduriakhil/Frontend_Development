import React, { useReducer } from 'react'

const initialState = 10

const myreducer = (state, action) => {
      switch (action) {
            case 'increment':
                  return state += 1
            case 'decrement':
                  return state -= 1
            case 'reset':
                  return state = 0
            default:
                  return state;
      }
}

const CounterReducer = () => {

      const [counter, dispatch] = useReducer(myreducer, initialState)

      return (
            <div>
                  <h1>Counter- {counter}</h1>
                  <button onClick={() => dispatch('increment')}>Increment</button>
                  <button onClick={() => dispatch('decrement')}>Decrement</button>
                  <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
      )
}

export default CounterReducer