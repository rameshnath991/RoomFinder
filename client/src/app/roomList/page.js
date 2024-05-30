'use client'
import Image from 'next/image'
import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import LikeBotton from '../like/page';
import RoomCard from '@/components/roomCard/page';
const RoomList = () => {
    const roomList =[
        {id: 111, price:4000, description: ' Good', roomImage:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fhotel%2520room&psig=AOvVaw2aOWQCMlDsPYnnhCsI5HKH&ust=1717157805911000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIigv7yttYYDFQAAAAAdAAAAABAE' },
        {id: 222, price:6000, description: 'very good', roomImage:'https://www.shutterstock.com/image-photo/luxury-modern-hotel-room-260nw-1421130716.jpg' },
        {id: 333, price:5000, description: 'Good', roomImage:'https://www.shutterstock.com/image-photo/4star-hotel-room-260nw-571480.jpg' },
        {id: 444, price:7000, description: 'Goodr', roomImage:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Felite-hotel.html&psig=AOvVaw2aOWQCMlDsPYnnhCsI5HKH&ust=1717157805911000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIigv7yttYYDFQAAAAAdAAAAABAZ' },
        {id: 555, price:8000, description: 'good', roomImage:'https://images.trvl-media.com/lodging/9000000/8240000/8233700/8233649/b4e3b704.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium' },

      ]
  return (
   <div>
    <div><Image src="/room.jpg" width={200} height={300}/></div>
   <div className='flex'>
        {roomList.map((item)=> <RoomCard item={item}/> )}
    </div>
   
    </div>
  )
}

export default RoomList