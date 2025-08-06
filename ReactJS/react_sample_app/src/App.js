import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentC from "./ComponentC";
import ComponentE from "./ComponentE";
import ComponentF from "./ComponentF";
import React from "react";
import ComponentA from "./ComponentA";


export const SubjectsContext = React.createContext();
export const UserContext = React.createContext();
function App() {

      const subjects = ['HTML', 'JS', 'REACT']

      return (
            <UserContext.Provider value={{username: 'akhilkonduri', id: '488'}}>
                  <SubjectsContext.Provider value={subjects}>
            <div>
                  <ComponentC  />
                  <hr></hr>
                  <ComponentE />
                  <hr></hr>
                  <ComponentA />
            </div>
            </SubjectsContext.Provider>
            </UserContext.Provider>
      )
}

export default App
