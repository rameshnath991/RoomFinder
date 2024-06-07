'use client'

import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';


 
const Required=()=>{
  return(
  <div textcolor="red-900">
 <h1>  *It's required*!!!  </h1> 
  </div>
)}
const SignupSchema = Yup.object().shape({
  
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),    
  email: Yup.string().email('Invalid email').required(Required),

});


const LogIn = () => {

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    onSubmit: values => {
      loginUser(values)
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const loginUser = async(values)=>{
    const requestOptions = {
      method: 'POST',

      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:7000/login', requestOptions);

  }

  return ( 

    <div>

      
      
      <div className="flex justify-center ">

      
        <div className='border-2 border-black m-7 w-auto h-auto p-4 rounded-lg bg-slate-300  '>
          
      
      <div className="text-center text-3xl text-blue-900  ">   <b>LogIn Into R/F </b> </div> <br/>
    <form onSubmit={formik.handleSubmit}>

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

        <label htmlFor="password">Password</label>
    <Input
      isClearable
      type="password"
      label="Password"
      variant="bordered"
      onChange={formik.handleChange}
      name="password"
      value={formik.values.password}
      placeholder="Enter your password"
      onClear={() =>{ formik.setFieldValue("password", ''), console.log("input cleared")}}
      className="max-w-xs"
    />
        {formik.errors.password} <br/>

    <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-center  w-60 rounded-lg">
      LogIn
    </Button> <br/>

     <div className="text-center ">  or </div>
    
     <Link href="/forgotpassword"> <Button className="bg-gradient-to-tr from-pink-500  text-blue-600 text-center  w-60 rounded-lg ">
      Forgot password?
    </Button> </Link>

    <p> If you don't have an account,</p><Link href="/register"><Button color="primary" variant="light">
        <b>Register</b></Button></Link>instead.
  </form>
    </div>
    </div>
    </div>
  );
};

export default LogIn