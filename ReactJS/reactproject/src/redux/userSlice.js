import {createSlice} from '@reduxjs/toolkit'

const initialState = [{
      id: 1,
      firstname: 'Konduri',
      lastname: "Akhil"
},
{
      id: 2,
      firstname: 'Srikanth',
      lastname: "Kuna"
},
]

const userSlice = createSlice({
      name:'user',
      initialState,
      reducers:{

      }
})

export default userSlice.reducer