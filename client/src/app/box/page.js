'use client'
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from '@nextui-org/react'
import { changeheight,changewidth, changeshape,changebackgroundColor } from '@/redux/reducerSlices/boxSlice'

const Box = () => {

    const {backgroundColor,width,height,borderRadius}= useSelector(state => state.box)
    const dispatch = useDispatch()
    
   
  return (
    <div> 
     <div style={{backgroundColor: backgroundColor,height: height,width:width, borderRadius:borderRadius}}>
      hi
    </div>  
    <Button onClick={()=> dispatch(changewidth())}>+Width</Button> 
    <Button onClick={()=> dispatch(changeheight())}>+Height</Button> 
    <Button onClick={()=> dispatch(changeshape())}>Change shape</Button> 
    <Input onChange={(e)=> dispatch(changebackgroundColor(e.target.value))} placeholder = "enter color" />
     </div>
  )
}

export default Box