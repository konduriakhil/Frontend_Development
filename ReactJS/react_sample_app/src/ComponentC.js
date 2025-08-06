import React, { useContext } from 'react'
import ComponentE from './ComponentE'
import { UserContext, SubjectsContext } from './App'
import ComponentF from './ComponentF'


const ComponentC = () => {

      const { username, id } = useContext(UserContext)
      const subjects = useContext(SubjectsContext)
      console.log(username)
      return (
            <div>
                  <h1>ComponentC</h1>
                  <h2>Username: {username}</h2>
                  <p>id: {id}</p>
                  <h3>Subjects: {subjects.join( ', ' )}</h3>
                  <hr></hr>
                  <ComponentF />
            </div>
      )
}

export default ComponentC