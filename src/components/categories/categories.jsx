import React, { useContext, useEffect, useState } from "react";
import style from "./Categories.module.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { usercart } from "../Context/Usercart";
import toast from 'react-hot-toast';


export default function categories(){
     
  
    let [products,setproducts]=useState([])
     
    let {addproducttocart} =useContext(usercart)

    function getproduct(){

    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then((res)=>{
        console.log(res.data.data);
        setproducts(res.data.data);
    })
    .catch((res)=>{
        console.log(res)
    })
    }
    useEffect(()=>{
        getproduct()
    },[])

    return<>
    <div className="flex flex-wrap py-5 px-3">
        {products.length>0 ?   products.map((product)=>(
         <div key={product._id} className="w-1/6 mb-4"><div className="product p-2ذ">
                <img src={product.image} className="w-full h-[200px]" alt="productphoto"/>
                <h3 className="mb-3 text-emerald-600">{product.name}</h3>
                <h3 className="font-semibold mb-3">{product.title}</h3>
         </div></div>
        )) : <div class="spinner"></div>}
    </div>
    </>
}