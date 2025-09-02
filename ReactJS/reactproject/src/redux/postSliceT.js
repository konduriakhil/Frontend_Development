import { createSlice } from "@reduxjs/toolkit"


const initialState = [{
      id: 1,
      title: 'HTML',
      text: 'This is 2 weeks course. This is like the skeleton of the body'
},
{
      id: 2,
      title: 'CSS',
      text: 'This is 2 weeks course. This is like the flesh of the body'
}
]

const postSliceT = createSlice({
      name: 'postst',
      initialState,
      reducers: {
            addingPosts: (state, action) => {
                  state.push(action.payload)
            },
            deletingPosts: (state, action) =>{
                  console.log(state.postst)
            }
      }
})

export const { addingPosts } = postSliceT.actions
export default postSliceT.reducer