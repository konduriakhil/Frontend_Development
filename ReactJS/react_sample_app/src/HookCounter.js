import { useState } from "react"

const HookCounter =() =>{

    const[counter, setCounter]= useState(0)
    const [username, setUsername] = useState('Akhil')
    const [status, setStatus] = useState(true)
    const incremetCounter = () =>{
        setCounter(counter+1);
    }

    const updateUsername = () =>{
        setUsername('Konduri Akhil')
    }

    

    return (
        <div>
            <h1>Functional Component</h1>
            <h2>Counter - {counter}</h2>
            <button onClick={incremetCounter}>Increment</button>            
            <hr></hr>
            <h2>Welcome to {username}</h2>
            <button onClick={updateUsername}>Update Name</button>
            <hr></hr>
            {
                status ? <h2>Welcome {username}</h2> : <h2>Unknown User</h2>
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}
export default HookCounter