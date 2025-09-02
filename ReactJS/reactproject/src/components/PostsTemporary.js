import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux' 
import { v4 as uuidv4} from 'uuid'
import { addingPosts } from '../redux/postSliceT'
import { deletePost } from '../redux/postSlice'


const PostsTemporary = () => {

      const data = useSelector((state) => state.postst)
      const [formData, setFormData] = useState({title: '', text: ''})
      const dispatch = useDispatch();

      const hadleInputs = (event) =>{
            setFormData({
                  ...formData,
                  [event.target.name] : event.target.value,
            })
      }

      const hadleSubmit = (event) => {
            event.preventDefault();
            const newData = {
                  id: uuidv4(),
                  ...formData
            }
            dispatch(addingPosts(newData));
            console.log(data)
      }

      return (
            <div>
                  <Header />
                  <section className='container py-5'>
                        <div className='row'>

                              <div className='col-md-6'>
                                    <h4>Add Posts</h4>
                                    <form onSubmit={hadleSubmit}>
                                          <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1"  className="form-label">Enter Title</label>
                                                <input type="text" onChange={hadleInputs} name='title' value={formData.title} className="form-control" id="exampleFormControlInput1" />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Subject Description</label>
                                                <textarea className="form-control" onChange={hadleInputs} name='text' value={formData.text} id="exampleFormControlTextarea1" rows="3"></textarea>
                                          </div>
                                          <div className="mb-3">
                                                <input type='submit' value='Add Post' className='btn btn-primary' />
                                          </div>
                                    </form>
                              </div>

                              <div className='col-md-6'>
                                    <h4>Posts List</h4>
                                    {
                                          data.length > 0 ? data.map((item, index) => <div className='alert alert-info' key={index}>
                                                <h5>{item.title}</h5>
                                                <p>{item.text}</p>
                                                <button onClick={()=> dispatch(deletePost(item.id)) } className="btn btn-sm btn-warning">Delete</button>
                                          </div>) : null
                                    }
                              </div>

                        </div>
                  </section>
                  <Footer />
            </div>
      )
}

export default PostsTemporary