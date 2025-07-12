import axios from "axios";
import React,{useState, useEffect} from "react"
import loaderimg from './images/loading.gif'

const FetchUsers =() =>{

    const[users, setUsers] = useState([]);
    const[loader, setLoader] = useState(false);
    const[disable, setDisable] = useState(true);
    const[errorMsg, setErrorMsg] = useState('');

    useEffect(()=>{
       document.getElementById('btn').addEventListener('click', getUsersData) 
    },[]);

    const getUsersData = () =>{
        setLoader(true);
        setDisable(false);
        axios.get('http://jsonplaceholder.typicode.com/users1234').then((res)=>{
            setUsers(res.data)
            setLoader(false);
            setDisable(true)
        }).catch((err)=>{
            console.log(err.message);
            setErrorMsg(err.message);
            setLoader(false);
            setDisable(true);
        });
    }

    console.log(users);

    return(
        <div>
            <h1>Fetch Users</h1>
            <button id='btn' disabled={disable ? false : true}>
                Fetch Users Info
                {
                loader ? <img src={loaderimg} alt="loading..." height={20} width={25}></img> : null
                }
                </button>    
                {   errorMsg ? <p>{errorMsg}</p> : null }      
            {
                users.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item,index)=><tr key={index}>                        
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address.city}</td>
                        </tr>)
                        }
                    </tbody>
                </table> : null
            }
            
        </div>
    )
}
export default FetchUsers

