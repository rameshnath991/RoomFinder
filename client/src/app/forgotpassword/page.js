'use client'
import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
import { useFormik } from 'formik';
 

const forgotPassword = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
        
        },
    });
    return (
        <div>
        <NavBar/>
      <div className='border-2 border-black m-7 w-auto h-auto p-4 rounded-lg bg-slate-300  '> 
         <form onSubmit={formik.handleSubmit} >
  
  <label htmlFor="email">Email Address</label>
    <Input justify-
    isClearable
    type="email"
    label="Email"
    variant="bordered"
    onChange={formik.handleChange}
    name="email"
    value={formik.values.email}
    placeholder="Enter your email/Mobile number"
    
    onClear={() =>{ formik.setFieldValue("email", ''), console.log("input cleared") }}
    className="max-w-xs border-none "
    
  />
      {formik.errors.email}
      <Button type="submit" className="my-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Next
    </Button>
      </form>
      </div>
      </div>
    )
  } 
  export default forgotPassword