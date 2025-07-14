import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

const Register = () => {

      const[formdata, setFormdata] = useState({username: '', email: ''})

      const handleSubmit =(event)=>{
            event.preventDefault();
            console.log(formdata)
      }

      const updateHandle  = (event) =>{
            setFormdata({
                  ...formdata,
                  [event.target.name]: event.target.value
            })
      }

      return (
            <React.Fragment>
                  <Header />
                  <section className='content'>
                        <h1>Register Here</h1>
                        <form method='POST' action='' onSubmit={handleSubmit}>

                              <div className='formgroup'>
                                    <label>Username</label>
                                    <input type='text' name='username' className='formcontrol' value={formdata.username} onChange={updateHandle} />
                              </div>

                              <div className='formgroup'>
                                    <label>Email</label>
                                    <input type='text' name='email' className='formcontrol' value={formdata.email} onChange={updateHandle} />
                              </div>

                              <div className='formgroup'>
                                    <input type='submit' value='Save' />
                              </div>

                        </form>
                  </section>
                  <Footer></Footer>
            </React.Fragment>
      )
}

export default Register