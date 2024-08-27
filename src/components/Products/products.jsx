import React, { useContext, useEffect, useState } from "react";
import style from "./Products.module.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { usercart } from "../Context/Usercart";
import toast from 'react-hot-toast';


export default function Product(){
     
    let[currentid,setcurrentid]=useState(0)
    let [loading,setloading]=useState(false)
    let [products,setproducts]=useState([])
     
    let {addproducttocart} =useContext(usercart)

 async function addcart(id){
    setcurrentid(id)
    setloading(true)
  let response = await addproducttocart(id)
   console.log(response.data) 
   if(response.data.status == "success"){
   toast.success(response.data.message)
   setloading(false)
  }else{
    toast.error(response.data.message)
    setloading(false)   
}
}



    function getproduct(){

    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
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
         <div key={product.id} className="w-1/6 mb-4"><div className="product p-2ذ">
          <Link to={`Productdetails/${product.id}/${product.category.name}`}>
                <img src={product.imageCover} className="w-full" alt="productphoto"/>
                <h3 className="mb-3 text-emerald-600">{product.category.name}</h3>
                <h3 className="font-semibold mb-3">{product.title.split(" ").slice(0,2).join(" ")}</h3>
                <div className="flex justify-between p-3">
                    <span>{product.price} EGP</span>
                    <span><i className="fas fa-star text-yellow-400"></i>{product.ratingsAverage}</span>
                </div>
                </Link>
            <button onClick={()=>addcart(product.id)} className="btn text-white bg-emerald-600 px-4 py-2 rounded-lg">
                {loading && currentid == product.id?<i className="fas fa-spinner fa-spin"></i>:"Add TO cart"}
                </button>
         </div></div>
        )) : <div class="spinner"></div>}
    </div>
    </>
}