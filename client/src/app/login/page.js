'use client'

import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setLoginDetails } from "@/redux/reducerSlices/userSlice";
import { useDispatch } from "react-redux";

const Required=()=>{
  return(
  <div textcolor="red-900">
 <h1>  *It's required*!!!  </h1> 
  </div>
)}
const LoginSchema = Yup.object().shape({
 
     phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),

    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),    

});


const LogIn = () => {
  const dispatch =useDispatch()

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema:LoginSchema,
    onSubmit: values => {
      loginUser(values)
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const loginUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:7000/login', requestOptions);
  const data= await response.json()
  if(response.status =='200'){
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src= "/logo.png"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Welcome To R/F
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {data.msg}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
   dispatch(setLoginDetails(data))
    if(data.user.role == 'user'){
      router.push('/dashboard')
    }else{
      router.push('/adminDashboard')
    }
        }else{
    toast.error(data.msg)
  }
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