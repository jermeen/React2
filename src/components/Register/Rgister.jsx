import React, { useContext, useState } from "react";
import style from "./Register.module.css"
import {useFormik} from "formik"
import * as YUP from "yup" 
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Usercontext";

  
export default function Register(){
 
  let {userlogin,setuserlogin}=useContext(UserContext)
    let navgaite =useNavigate()
    const [Error,setError]=useState("")
    const [isLoading,setisLoading]=useState(false)

  function getregister(values){
    setisLoading(true)
    axios
    .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)  
    .then((res)=>{
        console.log(res)
        setisLoading(false)
        if(res.data.message ==="success"){
            localStorage.setItem("userToken", res.data.token)
            setuserlogin(res.data.token)
            navgaite("/")
        }
    })  
    .catch((error)=>{
        setisLoading(false)
    //   console.log(error.response.data.message);
      setError(error.response.data.message)
    })
}  

  let validationSchema=YUP.object().shape({
    name:YUP.string().min(3,"min length is 3").max(10,"max length is 10").required("name is required"),
    email:YUP.string().email("invaild email").required("email is reguired"),
    phone:YUP.string().matches(/^01[0125][0-9]{8}$/,"invaild phone").required("phone is requird"),
    password:YUP.string().matches(/^[A-Za-z0-9]{6,10}$/,"password shoud be 6and  10 char"),
    rePassword:YUP.string().oneOf([YUP.ref("password")],"password And repassword is not the same").required("repassword is required")
 })

    let Formik =useFormik({
        initialValues:{
                name: "",
                email:"",
                password:"",
                rePassword:"",
                phone:""
        },
        validationSchema,
        onSubmit:getregister
    })

    return<>

    <h2 className="font-bold text-lg text-center my-4 text-emerald-700">
        Register Now
    </h2>
<form        
onSubmit={Formik.handleSubmit} className="max-w-md mx-auto">

  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.name}
       name="name"
      type="text" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Name</label>
 {Formik.errors.name && Formik.touched.name ?(
 <span className="text bg-red-500">{Formik.errors.name}</span>
 ):null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.email}
       name="email"
      type="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email</label>
      {Formik.errors.email && Formik.touched.email ?(
 <span className="text bg-red-500">{Formik.errors.email}</span>
 ):null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.phone}
       name="phone"
      type="tel" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone</label>
      {Formik.errors.phone && Formik.touched.phone ?(
 <span className="text bg-red-500">{Formik.errors.phone}</span>
 ):null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.password}
       name="password"
      type="password" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Password</label>
      {Formik.errors.password && Formik.touched.password ?(
 <span className="text bg-red-500">{Formik.errors.password}</span>
 ):null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.rePassword}
       name="rePassword"
      type="password" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Repassword</label>
      {Formik.errors.rePassword && Formik.touched.rePassword ?(
 <span className="text bg-red-500">{Formik.errors.rePassword}</span>
 ):null}
  </div>
  {
    Error ? (<div className="w-1/2 mx-auto bg-red-700 text-white font-bold rounded-lg p-2 my-2">{Error}</div>)
    :null}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {isLoading ? <i  className="fas fa-spinner fa-spin"></i>:"Register"}
  </button>
</form>

    </>
}