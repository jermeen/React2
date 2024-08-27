import React, { useEffect, useState } from "react";
import style from "./Productdetails.module.css"
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import Slider from "react-slick";


export default function Productdetails(){
    let [product,setproduct]=useState(null);
    let[relatedproduct,setrelatedproduct]=useState(null)


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000
      };

    let {id ,category} =useParams()

    function getproduct(id){
       axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)        
       .then((res)=>{
        console.log(res.data.data);
        setproduct(res.data.data)
       })
       .catch((res)=>{
        console.log(res);    
       })
    }
    function getallproducts(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then((res)=>{
           let y =res.data.data.filter((product)=> product.category.name==category)
           console.log(y)
           setrelatedproduct(y)
        })
    }
useEffect(()=>{
    getproduct(id),
    getallproducts()
},[id,category])
    return<>
    <div className="flex flex-wrap py-5 px-3 items-center">
    <div className="w-1/4">
    <Slider {...settings}>
     {product?.images.map((img)=><img src={img} className="w-full"/>)}
    </Slider>
    </div>
    <div className="w-3/4">
    <h3 className="font-semibold capitalize text-2xl">{product?.title}</h3>
    <h3 className="text-gray-700 my-4">{product?.description}</h3>
    <div className="flex justify-between p-3">
                    <span>{product?.price} EGP</span>
                    <span><i className="fas fa-star text-yellow-400"></i>{product?.ratingsAverage}</span>
                </div>
                <button className="btn w-full text-white bg-emerald-600 px-4 py-2 rounded-lg">Add TO cart</button>
    </div>
    </div>

    <div className="flex flex-wrap py-5 px-3">
        {relatedproduct ?   relatedproduct.map((product)=>(
         <div key={product.id} className="w-1/6 mb-4"><div className="product p-2ذ">
          <Link to={`/Productdetails/${product.id}/${product.category.name}`}>
                <img src={product.imageCover} className="w-full" alt="productphoto"/>
                <h3 className="mb-3 text-emerald-600">{product.category.name}</h3>
                <h3 className="font-semibold mb-3">{product.title.split(" ").slice(0,2).join(" ")}</h3>
                <div className="flex justify-between p-3">
                    <span>{product.price} EGP</span>
                    <span><i className="fas fa-star text-yellow-400"></i>{product.ratingsAverage}</span>
                </div>
                </Link>
            <button className="btn text-white bg-emerald-600 px-4 py-2 rounded-lg">Add TO cart</button>
         </div></div>
        )) : <div class="spinner"></div>}
    </div>
    </>
}