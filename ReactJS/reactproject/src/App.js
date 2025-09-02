import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import MoviesInfo from './components/MoviesInfo'
import Counters from './components/Counters'
import PostsTemporary from './components/PostsTemporary'
import Products from './components/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/movies' element={<MoviesInfo />}></Route>
        <Route path='/counter' element={<Counters />}></Route>
        <Route path='/postst' element={<PostsTemporary />}></Route>
        <Route path='/products' element= {<Products />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
