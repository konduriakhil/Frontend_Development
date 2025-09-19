import React, { useMemo, useState } from 'react'

const MemoDemo = () => {

      const [counterOne, setCounterOne] = useState(0)
      const [counterTwo, setCounterTwo] = useState(0)

      const incrementCounterOne = () => {
            setCounterOne(counterOne + 1)
      }
      const incrementCounterTwo = () => {
            setCounterTwo(counterTwo + 1)
      }
      const isEven = useMemo(() => {
            let i = 0
            while(i <= 1100000000)i++;
            return counterOne % 2 === 0             
      }, [counterOne])

      return (
            <div>
                   <h1>Counter One - {counterOne} - {isEven ? 'Even' : 'Odd'}</h1>
                  <button onClick={incrementCounterOne}>Counter One</button>
                  <hr></hr>
                  <h1>Counter Two - {counterTwo}</h1>
                  <button onClick={incrementCounterTwo}>Counter Two</button>
            </div>
      )
}

export default MemoDemo