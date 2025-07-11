import { useEffect, useState } from "react"

const LoadDataHook = () => {

    console.log('Component Calling....')

    const [counter, setCounter] = useState(0);

    useEffect(() =>{        
        console.log('inside useEffect hook');
    }, )//without empty dependency array

    return (
        <div>
            <h1>Fetching Data From Server</h1>
            <h2>Count - {counter}</h2>
            <button onClick={() => setCounter(counter +1)}>Increment</button>
        </div>
    )
}
export default LoadDataHook
