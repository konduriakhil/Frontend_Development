import React, { use, useEffect, useRef, useState } from 'react'

const RefHookDemo = () => {

      const [counter, setCounter] = useState(0)
      const [userInput, setUserInput] = useState('')

      const counterRef = useRef(0)
      const inputRef = useRef()
      const divRef = useRef()

      useEffect(() => {
            inputRef.current.style.cssText = 'background-color: #efefef; width: 50%; width: 50%; height: 34px'
            document.getElementById('input').style.borderRadius='10px'
            divRef.current.style.cssText = 'margin: 20px; border: 2px solid red; padding: 20px ' 
            inputRef.current.focus();
      }, [])

      const incrementCounter = () => {
            // setCounter(counter + 1)
            counterRef.current++
            console.log(counterRef.current)
      }

      const handleUserInput = (event) => {
            setUserInput(event.target.value)
      }

      console.log('Calling...')

      return (
            <div ref={divRef}>
                  <h1>State - {counter}</h1>
                  <button onClick={incrementCounter}>Increment</button>
                  <hr></hr>

                  <input id='input' ref={inputRef} type='text' value={userInput} onChange={handleUserInput} />
                  <p>{userInput} - {counterRef.current}</p>
            </div>
      )
}

export default RefHookDemo
