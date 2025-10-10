import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      articles: [
            {
                  id: 1,
                  title: 'HTML Online Training',
                  text: 'You can learn HTML, which is like the body of the webpage(skeleton)'
            },
            {
                  id: 2,
                  title: 'CSS',
                  text: 'You can learn CSS, which is like the body of the webpage(Flesh)'
            }
      ]
}

const postSlice = createSlice({
      name: 'posts',
      initialState,
      reducers: {
            addPost: (state, action) => {
                  // state.articles.push(action.payload)
                  console.log(action);
            },
            deletePost: (state, action) => {
                  state.articles = state.articles.filter(item => item.id !== action.payload)
            }
      }
})

export const { addPost, deletePost } = postSlice.actions

export default postSlice.reducer
