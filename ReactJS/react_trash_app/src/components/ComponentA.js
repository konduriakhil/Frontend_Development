import React, { useContext } from 'react'
import { UserContext, UserNames } from '../App'


const ComponentA = () => {

      const data = useContext(UserContext)
      const names = useContext(UserNames)

      return (
            <div>
                  <h1>ComponentC</h1>
                  <h2>UserNames Data:</h2>
                  <ul>
                        {
                              data.map((item, index) => <div key={index}>
                                    <li key={index}>{item.username}</li>
                                    {/* <li key={index}>{item.id}</li> */}
                              </div>

                              )
                        }
                  </ul>
                  <hr></hr>
                  <h2>{names.join(', ')}</h2>

            </div>
      )
}

export default ComponentA