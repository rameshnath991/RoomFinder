import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor: 'red', 
    width: 50,
    height: 50,
    left:0,
    right:0,
    mid:0,
    top:0,
    bottom:0,
    borderRadius: '0%'
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      if(state.borderRadius === '50%'){
        const newHeight = state.height + 5
        state.width = newHeight
        state.height = newHeight
      }
      else{
        state.height=state.height+5
      }
    },

    changeWidth(state) {
      if(state.borderRadius === '50%'){
        const newWidth = state.width + 5
        state.width = newWidth
        state.height = newWidth
      }
      else{
        state.width=state.width + 5
      }
    },

    changeShape(state) {
      if( state.borderRadius=== '50%' ){
      state.borderRadius= '0%'
     }
     else{
      state.borderRadius= '50%'
     } 
    },

    changeBackgroundColor(state,actions) {
      state.backgroundColor = actions.payload
    },

    shiftPosition(state,actions) {
      state.right = actions.payload
      state.left = actions.payload
      state.mid = actions.payload
      
    },
    shiftupdownPosition(state,actions) {
      state.top = actions.payload
      state.bottom = actions.payload
    },
    
  },
})

export const { changeHeight, changeShape,changeWidth,changeBackgroundColor,shiftPosition,shiftupdownPosition } = boxSlice.actions
export default boxSlice.reducer