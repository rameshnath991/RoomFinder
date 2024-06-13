'use client'
import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
import { useFormik } from 'formik';
import { Image } from '@nextui-org/react'


const forgotPassword = () => {

    const formik = useFormik({
        initialValues: {
          phoneNumber: '',
        
        },
    });
    return (
        <div>
        <div className="flex flex-row items-justify"> 
      <Image src="/logo.png" width={70 } height={70} className=''/>
       <Link href= "/login"> <Button color="primary" variant="light"><b>Login </b></Button></Link>
       <Link href="/register"><Button color="primary" variant="light">
       <b>Register</b></Button></Link>
        </div>
      <div className='border-2 border-black m-7 w-auto h-auto p-4 rounded-lg bg-slate-300  '> 
         <form onSubmit={formik.handleSubmit} >
  
         <label htmlFor="phoneNumber">Mobile Number </label>
      <Input
      isClearable
      type="phoneNumber"
      label="PhoneNumber"
      variant="bordered"
      onChange={formik.handleChange}
      name="phoneNumber"
      value={formik.values.phoneNumber}
      placeholder="Enter your phoneNumber"
      
      onClear={() =>{ formik.setFieldValue("phoneNumber", ''), console.log("input cleared") }}
      className="max-w-xs"
      
    />
      {formik.errors.phoneNumber}
    
      <Button type="submit" className="my-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Next
    </Button>
      </form>
      </div>
      </div>
    )
  } 
  export default forgotPassword