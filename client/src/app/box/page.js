'use client'
import { changeHeight, changeShape,changeWidth,changeBackgroundColor, shiftPosition } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Box = () => {
    const {height, width, backgroundColor, borderRadius, right, top } = 
    useSelector(state=>state.box)
    const dispatch = useDispatch()
  const generateArea = () => {
    if(borderRadius === '50%'){
      return Math.PI * (width/2) ** 2
    }else{
      return width * height
    }

  }
  return (
    <div className='flex items-center flex-col p-20'>
      <div style={{backgroundColor, height, width, borderRadius, right, top, position:'relative', margin:'200px' }}>
      </div>
      {generateArea()}
      <Button onClick={()=> dispatch(shiftPosition({value:100, type:'horizontal'}))}>Left</Button>
      <Button onClick={()=> dispatch(shiftPosition({value:-100, type:'horizontal'}))}>Right</Button>
      <Button onClick={()=> dispatch(shiftPosition({value:-100, type:'vertical'}))}>Top</Button>
      <Button onClick={()=> dispatch(shiftPosition({value:100, type:'vertical'}))}>Bottom</Button>
      <Button onClick={()=>dispatch(changeWidth()) }>+Width</Button>
      <Button onClick={()=> dispatch(changeHeight())}>+Height</Button>
      <Button  onClick={()=> dispatch(changeShape())}>Change shape</Button>
      <Input onChange={(e)=>dispatch(changeBackgroundColor(e.target.value)) } placeholder='Enter color'/>
     </div>
  )
}
export default Box