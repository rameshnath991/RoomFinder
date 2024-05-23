import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: 'red',
     width:50,
     height: 50,
     borderRadius: '0%'
}

const BoxSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeheight(state) {
      state.height= state.height + 5
    },
    changewidth(state) {
      state.width= state.width + 5
    },
    changeshape(state) {
     if( state.borderRadius=== '50%'){
      state.borderRadius= '0%'
  
     }
     else{
      state.borderRadius= '50%'
     }
    },
    changebackgroundColor(state, action) {
      state.backgroundColor=  action.payload
    },
   
  },
})

export const { changeheight , changewidth,changeshape,changebackgroundColor} = BoxSlice.actions
export default BoxSlice.reducer