import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userEmail: null,
  isLogin: false
}

export const counterSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
  },
})


export const { 
    setUserEmail,
} = counterSlice.actions

export default counterSlice.reducer