import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios';

const Register = () => {

      const[formdata, setFormdata] = useState({username: '', email: ''})
      const[formErrors, setFormErrors] = useState({username: '', email: ''})

      const handleSubmit =(event)=>{
            event.preventDefault();
            // Validate the form
            if(formValidation()){
            console.log(formdata)
            let data={username: formdata.username, email: formdata.email}
            axios.post('http://localhost/reactAPI/users.php', JSON.stringify(data), {
                  headers: {
                        'Content-Type': 'application/json'
                  }
            }).then(res =>{
                        let info = res.data
                        console.log(info)
                        console.log(info.message)
                        setFormdata({username: '', email: ''})
                  }).catch(err =>{
                        console.log(err.message)
                  })
            
            }
            else{
                  console.log('Sorry! No Data Found');
            }
      }

      const updateHandle  = (event) =>{
            setFormdata({
                  ...formdata,
                  [event.target.name]: event.target.value
            })
      }

      const isValidEmail = (email) =>{
            let isValid = true;
            var filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!filter.test(email)){
                  isValid = false;                  
            }
            return isValid
      }

      const formValidation = () =>{
            let valid = true;
            let errors ={}

            if(formdata.username === ''){
                  valid = false;
                  errors.username = 'Username is Required';
            }
            if(formdata.email === ''){
                  valid = false;
                  errors.email= 'Email is Required'
            }
            else{
                  valid = true;
                  if(!isValidEmail(formdata.email)){
                        valid = false;
                        errors.email= 'Enter Valid Email'
                  }                  
            }
            setFormErrors(errors)
            return valid;
      }

      const checkField = (event) =>{
            if(event.target.value === ''){
 
                  setFormErrors({
                        ...formErrors,
                        [event.target.name] : ''
                  })
            };
          
      }

      const checkValue = (event) =>{
            if(event.target.value === ''){
                  setFormErrors({
                        ...formErrors,
                        [event.target.name]: event.target.name + ' is Required '
                  })
            }
      }

      return (
            <React.Fragment>
                  <Header />
                  <section className='content'>
                        <h1>Register Here</h1>
                        <form method='POST' action='' onSubmit={handleSubmit} autoComplete='off'>

                              <div className='formgroup'>
                                    <label>Username</label>
                                    <input  onBlur={checkValue} onFocus={checkField} type='text' name='username' className='formcontrol' value={formdata.username} onChange={updateHandle} />
                                    {formErrors.username ? <span className='error'>{formErrors.username}</span> : null}                                    
                              </div>

                              <div className='formgroup'>
                                    <label>Email</label>
                                    <input type='text' onBlur={checkValue} onFocus={checkField} name='email' className='formcontrol' value={formdata.email} onChange={updateHandle} />
                                    { formErrors.email ? <span className='error'>{formErrors.email}</span>:null}
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
