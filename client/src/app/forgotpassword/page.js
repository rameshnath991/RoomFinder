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
      <div className="flex text-center bg-blue-300 "> 
         <form onSubmit={formik.handleSubmit} className="text-center">
  
  <label htmlFor="email">Email Address</label>
    <Input
    isClearable
    type="email"
    label="Email"
    variant="bordered"
    onChange={formik.handleChange}
    name="email"
    value={formik.values.email}
    placeholder="Enter your email/Mobile number"
    
    onClear={() =>{ formik.setFieldValue("email", ''), console.log("input cleared") }}
    className="max-w-xs"
    
  />
      {formik.errors.email}
      <Button type="submit" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Next
    </Button>
      </form>
      </div>
      </div>
    )
  } 
  export default forgotPassword