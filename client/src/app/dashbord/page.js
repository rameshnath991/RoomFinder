'use client'
import React from 'react'
import NavBar from '@/components/navbar/page'
import SideBar from '@/components/sidebar/page'
import MainSection from './mainSection'
import LoginSection from './loginSection'
import { useSelector } from 'react-redux'

const Dashbord  = () => {
  const value = useSelector(state=> state.counter.value)

  return (
    <div>
        <NavBar/>
        <div className='flex'>
            <SideBar/>
            {value}
            <LoginSection/>
            <MainSection/>
        </div>
       
    </div>
  )
}

export default Dashbord 