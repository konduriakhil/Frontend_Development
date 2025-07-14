import React, {useState, useEffect} from "react";
import loaderimg from './images/loading.gif'
import axios from "axios";


const Trail = () =>{
    
    const[users,setUsers] = useState([]);
    const[loader, setLoader] = useState(false);
    const[disable, setDisable] = useState(true);
    const[errorMsg, setErrMessage] = useState('')


    const getUsersList = () =>{
        setLoader(true)
        axios.get('http://jsonplaceholder.typicode.com/users').then((res)=>{
            setUsers(res.data)
            setLoader(false)
            setDisable(false)

        }).catch((err)=>{
            console.log(err.message)
            setLoader(false)
            setDisable(false)
            setErrMessage('Something went wrong please check it!')

        })
    }
    console.log(users)


    useEffect(()=>{
        document.getElementById('btn').addEventListener('click', getUsersList)
    },[])


    return (<div>
        <h1>Fetch User Data</h1>
        <button id="btn" disabled={disable ? false : true }>
            Fetch Users Info
            {loader ? <img src={loaderimg} alt='Loading...' width={25} height={25}/> : null}
        </button>
        <hr></hr>
        {
            users.length > 0 ? <table border={3} cellPadding={8} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index)=><tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address.city}</td>
                        </tr>)
                    }
                </tbody>
            </table>
             : null
        }
        {
            errorMsg ? <p>{errorMsg}</p>: null
        }
    </div>
    )

}
export default Trail