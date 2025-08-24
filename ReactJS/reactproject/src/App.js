import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import MoviesInfo from './components/MoviesInfo'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/movies' element={<MoviesInfo />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
