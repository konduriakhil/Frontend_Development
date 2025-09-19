import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './components/Home'
import CounterA from "./components/CounterA";
import About from "./components/About";
import Register from './components/Register'
import Contact from './components/Contact'
import TodoList from './components/TodoList'
import CounterB from "./components/CounterB";


export const SubjectsContext = React.createContext();
export const UserContext = React.createContext();
function App() {

      const subjects = ['HTML', 'JS', 'REACT']

      return (
            <UserContext.Provider value={{ username: 'akhilkonduri', id: '488' }}>
                  <SubjectsContext.Provider value={subjects}>
                        <BrowserRouter>
                              <Routes>
                                    <Route path="/" element={<Home />}></Route>
                                    <Route path="/about" element={<About />}></Route>
                                    <Route path="/contact" element={<Contact />}></Route>
                                    <Route path="/register" element={<Register />}></Route>
                                    <Route path="/todo" element={<TodoList />}></Route>
                                    <Route path="/countera" element={<CounterA />}></Route>
                                    <Route path="/counterb" element={<CounterB myname='Konduri Akhil' city= 'Martur' />}></Route>

                              </Routes>
                        </BrowserRouter>
                  </SubjectsContext.Provider>
            </UserContext.Provider>
      )
}

export default App
