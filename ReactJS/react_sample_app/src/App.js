import React from 'react'
import CounterReducer from './components/CounterReducer'
import CounterReducerOne from './components/CounterReducerOne'
import FetchDataReducer from './components/FetchDataReducer'


const App = () => {
      return (
            <div>
                  {/* <CounterReducer /> */}
                  {/* <CounterReducerOne /> */}
                  <FetchDataReducer />
            </div>
      )
}

export default App