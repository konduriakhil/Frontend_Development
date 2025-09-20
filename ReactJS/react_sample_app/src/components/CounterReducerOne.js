import React, { useReducer } from 'react'


const initialState = {
      counterOne: 0,
      counterTwo: 20
}

const counterReducer = (state, action) => {
      switch (action.type) {
            case 'increment':
                  return {
                        ...state,
                        counterOne: state.counterOne + 1
                  }
            case 'decrement':
                  return {
                        ...state,
                        counterOne: state.counterOne - 1
                  }
            case 'reset':
                  return {
                        ...state,
                        counterOne: 0
                  }
            case 'incrementtwo':
                  return {
                        ...state,
                        counterTwo: state.counterTwo + 1
                  }
            case 'decrementtwo':
                  return {
                        ...state,
                        counterTwo: state.counterTwo - 1
                  }
            case 'resettwo':
                  return {
                        ...state,
                        counterTwo: 0
                  }
            default:
                  return state;
      }

}

const CounterReducerOne = () => {

      const [counter, dispatch] = useReducer(counterReducer, initialState)

      return (
            <div>
                  <h1>Counter One - {counter.counterOne}</h1>
                  <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                  <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                  <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                  <hr></hr>

                  <h1>Counter Two - {counter.counterTwo}</h1>
                  <button onClick={() => dispatch({type:'incrementtwo'})}>Increment</button>
                  <button onClick={() => dispatch({type:'decrementtwo'})}>Decrement</button>
                  <button onClick={() => dispatch({type: 'resettwo'})}>Reset</button>
            </div>
      )
}

export default CounterReducerOne