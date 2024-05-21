'use client'
import NavBar from '@/components/navbar/page'
import React from 'react'
import LogIn from './login/page'


const Home = () => {
  return (
    <div>
    <div >
      <NavBar/>
      </div>

      <div className="bg-scroll bg-[url('/home1.png')] h-[630px] flex justify-center">
      
      <h1 className='text-white justify-end py-52 px-16'> <b className=' text-3xl '>WELLCOME TO ROOMFINDER</b> <br/>
      <p> 
        <i className='px-16 py-4 text-green-400'>Save Money Save Time Away From Broker</i>
      </p> </h1> 
      <LogIn />
  </div>
  </div>
  )
}

export default Home