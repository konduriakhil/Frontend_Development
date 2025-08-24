import {createSlice} from '@reduxjs/toolkit'

const initialState = [{
      id: 1,
      title: 'HTML',
      text: "This is one basic for the web page development"
},
      {
            id:2,
            title: 'CSS',
            text: 'Beautification of the HTML and it is like the flesh of the body'
      }
]

const postSlice = createSlice({
      name:'posts',
      initialState,
      reducers:{

      }
})

export default postSlice.reducer