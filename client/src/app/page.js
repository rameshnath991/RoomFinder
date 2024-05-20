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
      
      <h1 className='text-white justify-end py-52 px-16'> <b className='px-8 '>WELLCOME TO ROOMFINDER</b> <br/>
      <p> 
        <i>Save Money Save Time Away From Broker</i>
      </p> </h1> 
      <LogIn />
  </div>
  </div>
  )
}

export default Home