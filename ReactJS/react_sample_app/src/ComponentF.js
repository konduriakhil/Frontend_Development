import React, { Component } from 'react'
import { UserContext, SubjectsContext } from './App'


class ComponentF extends Component {
  render() {
    return (
        <div>
          <SubjectsContext.Consumer>
            {
              (subjects) => {
                return (
                  <div>
                    <h1>ComponentF</h1>
                    <h2>Subjects: {subjects.join(', ')}</h2>
                  </div>
                )                
              }
            }
          </SubjectsContext.Consumer>
        </div>
      )
  }
}

export default ComponentF