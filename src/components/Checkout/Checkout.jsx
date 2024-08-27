import React, { useContext, useState } from "react";
import {useFormik} from "formik"
import axios from "axios"
import { UserContext } from "../Context/Usercontext";
import { usercart } from "../Context/Usercart";

export default function Checkout(){
  
    let {Checkout ,cartId}=useContext(usercart)

    let Formik =useFormik({
        initialValues:{
                details:"",
                phone:"",
                city:"",
        },
        onSubmit:()=>handlecheckout(cartId,`http://localhost:5173`)
    })


 async function handlecheckout(cardId,url){
 let {data}=await Checkout(cardId,url,Formik.values);
  
 window.location.href = data.session.url 
 
}  

    return<>
    
    <h2 className="font-bold text-lg text-center my-4 text-emerald-700">
        check out  now
    </h2>
<form onSubmit={Formik.handleSubmit} className="max-w-md mx-auto">

  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.details}
       name="details"
      type="text" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlForfor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your details</label>
  </div>
 
  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.phone}
       name="phone"
      type="tel" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={Formik.handleBlur}
      onChange={Formik.handleChange}
      value={Formik.values.city}
       name="city"
      type="text" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your city</label>
  </div>
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    check out
  </button>
</form>

    </>
}