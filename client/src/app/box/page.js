'use client'
import { changeHeight, changeShape,changeWidth,changeBackgroundColor,shiftPosition,shiftupdownPosition } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Box = () => {
  
    const {height, width, backgroundColor, borderRadius,right,left,mid,top,bottom } = 
    useSelector(state=>state.box)
    const dispatch = useDispatch()

  const generateArea = () => {
    if(borderRadius==='50%'){

    return Math.PI * (width/2) ** 2
  }
  else{
    return  width * height
  }

  }
  return (
    <div className='flex items-center flex-col p-32'>
      <div className=' m-2 ' style={{backgroundColor, height, width, borderRadius,right,left,mid,top,bottom, position:'relative' }}>
      </div>
      {generateArea()}
    <Button className='m-1' onClick={()=>dispatch(shiftPosition(-100)) }>Left</Button>
    <Button className='m-1' onClick={()=>dispatch(shiftPosition(100)) } > Right </Button>
    <Button className='m-1' onClick={()=>dispatch(shiftPosition(0)) } >Mid</Button>
    <Button className='m-1' onClick={()=>dispatch(shiftupdownPosition(-100)) }>Top</Button>
    <Button className='m-1' onClick={()=>dispatch(shiftupdownPosition(100)) }>Bottom</Button>
    <Button className='m-1' onClick={()=>dispatch(changeWidth()) }>+Width</Button>
    <Button className='m-1' onClick={()=> dispatch(changeHeight())}>+Height</Button>
    <Button className='m-1' onClick={()=> dispatch(changeShape())}>Change shape</Button>
    <Input onChange={(e)=>dispatch(changeBackgroundColor(e.target.value)) } placeholder='Enter color name' className='flex items-center m-2' />
    </div>
  )
}
export default Box