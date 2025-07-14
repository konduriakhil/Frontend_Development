import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Error404 from "./components/Error404";
import TodoList from "./components/TodoList";

function App() {

      return (

            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path='/about' element={<About></About>} />
                        <Route path="/contact" element={<Contact></Contact>}></Route>
                        <Route path="/register" element={<Register></Register>}></Route>
                        <Route path="/todo" element={<TodoList />}></Route>
                        <Route path="*" element={<Error404></Error404>}></Route>
                  </Routes>
            </BrowserRouter>
      )

}

export default App