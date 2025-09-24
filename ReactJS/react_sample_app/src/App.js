import React from 'react'
import RefHookDemo from './components/RefHookDemo'
import Timer from './components/Timer'
import Data from './components/Data'

const App = () => {
      return (
            <div>
                  <RefHookDemo />
                  <hr />
                  <Timer />
                  <hr></hr>
                 <Data /> 
            </div>
      )
}

export default App