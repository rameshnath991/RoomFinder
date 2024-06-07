'use client'
import {Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const Required=()=>{
  return(
  <div textcolor="red-900">
 <h1> It is required!!! </h1> 
  </div>
)}
const RegisterSchema = Yup.object().shape({
  
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),
  midName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required), 
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required), 
   conformpassword: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),
 
  email: Yup.string().email('Invalid email').required(Required),

});

const RegisterForm = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      midName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      email: '',
      password: ''
   
    },
    onSubmit: values => {
      registerUser(values)

      //alert(JSON.stringify(values, null, 2));
    },
  });

  const registerUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:7000/register', requestOptions);
  const data= await response.JSON()

  }
 
  return (
    <div >
  
    <div className="flex justify-center  bg-green-200 p-5 ">
    <div className='border-2 border-black m-7 w-72 p-4 rounded-lg bg-slate-400  '>
    
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
       
      <Input 
      isClearable
      label="firstName"
      variant="bordered"
      onChange={formik.handleChange}
      name="firstName"
      value={formik.values.firstName}
      placeholder="Enter your firstName"
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("firstName", '')
      }}
    />
        {formik.errors.firstName} 
        

        <label htmlFor="midName">Mid Name</label>
      <Input
      isClearable
      label="midName"
      variant="bordered"
      onChange={formik.handleChange}
      name="midName"
      value={formik.values.midName}
      placeholder="Enter your midName"
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("midName", '')
      }}
    />
        {formik.errors.midName}
      <label htmlFor="lastName">Last Name</label>
      <Input
      isClearable
      label="lastName"
      variant="bordered"
      onChange={formik.handleChange}
      name="lastName"
      value={formik.values.lastName}
      placeholder="Enter your lastName"
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("lastName", '')
      }}
    />
      {formik.errors.lastName}

      <label htmlFor="address"> Address </label>
      <Input 
      isClearable
      label="address"
      variant="bordered"
      onChange={formik.handleChange}
      name="address"
      value={formik.values.address}
      placeholder="Enter your address"
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("address", '')
      }}
    />
        {formik.errors.address} 

      <label htmlFor="phoneNumber">phoneNumber</label>
       <Input 
       isClearable
       label="phoneNumber"
       variant="bordered"
       onChange={formik.handleChange}
       name="phoneNumber"
       value={formik.values.phoneNumber}
       placeholder="Enter your phoneNumber"
       className="max-w-xs"
       onClear={()=>{
         formik.setFieldValue("phoneNumber", '')
       }}
     />
         {formik.errors.phoneNumber} 

      <label htmlFor="email">Email Address</label>
      <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      onChange={formik.handleChange}
      name="email"
      value={formik.values.email}
      placeholder="Enter your email/Mobile Number"
      defaultValue="junior@nextui.org"
      onClear={() =>{ formik.setFieldValue("email", ''), console.log("input cleared")}}
      className="max-w-xs"
     
    />

{formik.errors.email}
<label htmlFor="password">Passwosd</label>
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
       {formik.errors.password}

    <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Register
    </Button>
    <p>Already have an account? </p> <Link href= "/login"> <Button color="primary" variant="light"><b>Sign In </b></Button></Link>instead.
    </form>
    </div>
    </div>
    </div>
  );
};

export default RegisterForm;
