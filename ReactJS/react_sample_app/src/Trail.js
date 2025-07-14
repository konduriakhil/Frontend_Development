import {useState} from "react";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";


const Trail = () => {

    const[formdata, setFormData] = useState({username:'Akhil',email:'akhil@gmail.com'})


    const submitHandler =(event) =>{
        event.preventDefault()
        console.log(formdata)
    }

    const handleData = (event) => {
        setFormData({
            ...formdata,
            [event.target.name]: event.target.value
        })
    }

  return (
    <div>
        <Header></Header>
        <section className="content">
        <h1>Form Details</h1>
            <form method='POST' action='' onSubmit={submitHandler}>
              
                <div className="formgroup">
                    <label>Username</label>
                    <input type="text" name="username" value={formdata.username} onChange={handleData} />
                </div>

                <div className="formgroup"  >
                    <label>Email</label>
                    <input type="text" name='email' value={formdata.email} onChange={handleData}/>
                </div>

                <div className="formgroup" value='submit'>
                    <input type="submit" />
                </div>
            </form>
        </section>
        <Footer></Footer>
    </div>
  )
}

export default Trail



