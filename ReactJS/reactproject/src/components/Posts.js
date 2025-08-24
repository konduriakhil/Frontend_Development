import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Posts = () => {

    const posts = useSelector(state => state.posts)
    const users = useSelector(state => state.users)
    const movies = useSelector(state => state.movies)
    
    console.log(movies)
    console.log(posts);
    console.log(users);
    
  return (
    <div>
      <Header />
      <section className='container'>
            <h1 className='py-2'>Posts</h1>
            <div className='row'>
              <div className='col-md-6'>
                {
                  posts.length > 0 ? posts.map((item, index)=> <div key={index}>
                    <h3>{item.title}</h3>
                    <div >{item.text}</div>
                  </div>) : null
                }
              </div>

            </div>
      </section>
      <Footer />
    </div> 
  )
}

export default Posts