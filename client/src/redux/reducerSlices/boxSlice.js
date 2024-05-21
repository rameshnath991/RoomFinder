import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: 'red',
     width:50,
     height: 50
}

const BoxSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeheight(state) {
      state.height= state.height + 1
    },
   
  },
})

export const { changeheight } = BoxSlice.actions
export default BoxSlice.reducer