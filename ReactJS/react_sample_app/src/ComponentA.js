import { useContext } from 'react'
import React  from 'react'
import { UserContext, SubjectsContext } from './App'

const ComponentA = () => {

      const sub = useContext(SubjectsContext)
  return (
    <div>
      <h1>ComponentA</h1>
      <h2>Subjects: </h2>
      <ul>
      {
            sub.map((item, index)=><li key={index}>{item}</li>)
      }
      </ul>
    </div>
  )
}

export default ComponentA