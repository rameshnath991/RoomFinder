'use client'
import React from 'react'
import RoomCard from '@/components/roomCard/page';
import { useSelector } from 'react-redux';
const Favorites = () => {
const {favItems} = useSelector(state=>state.product)
  return (
    <div>
        {favItems.map((item)=>{
            return <RoomCard item={item}/>
        })}
    </div>
  )
}

export default Favorites