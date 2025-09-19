import React, { useCallback, useEffect, useState } from 'react'

const CallBackDemo = () => {

      const [userInput, setUserInput] = useState('')
      const [result, setResult] = useState(0)
      const [num1] = useState(9);
      const [num2] = useState(5);
      const sum = useCallback(() => num1 + num2, [num1, num2])

      const newArray = useCallback(() => [num1, num2], [num1, num2])

      useEffect(() => {
            console.log(`The sum is: ${sum()}`)
            // setResult(sum())
            setResult(newArray())
      }, [newArray])

      return (
            <div>
                  <h1>Sum - </h1>
                  <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                  <p>{userInput} - {result}</p>
            </div>
      )
}

export default CallBackDemo
