import React, { useEffect, useReducer } from 'react'
import axios from "axios";


const initialState = {
      loader: true,
      errorMsg: '',
      usersList: []
}

const dataReducer = (state, action) => {
      switch (action.type) {
            case 'FETCH_REQUEST':
                  return {
                        loader: true,
                        errorMsg: '',
                        usersList: []
                  }
            case 'FETCH_SUCCESS':
                  return {
                        loader: false,
                        errorMsg: '',
                        usersList: action.payload
                  }
            case 'FETCH_FAIL':
                  return {
                        loader: false,
                        errorMsg: action.payload,
                        usersList: []
                  }
            default:
                  return state;
      }

}

const FetchDataReducer = () => {

      const [data, dispatch] = useReducer(dataReducer, initialState)

      useEffect(() => {
            dispatch({ type: 'FETCH_REQUEST' });

            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
                  dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            }).catch((err) => {
                  dispatch({ type: 'FETCH_FAIL', payload: err.message })
            })
      }, [])

      return (
            <div>
                  <h1>UserInformationFetching</h1>

                  {data.loader ? 'Loading....' : null}
                  {data.errorMsg ? data.errorMsg : null}

                  <table >
                        <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    data.usersList.length > 0 ? data.usersList.map((item, index) => <tr key={index}>
                                          <td>{item.id}</td>
                                          <td>{item.username}</td>
                                          <td>{item.email}</td>
                                          <td>{item.phone}</td>
                                          <td>{item.address.city}</td>
                                    </tr>) : null
                              }
                        </tbody>
                  </table>

            </div>
      )
}

export default FetchDataReducer