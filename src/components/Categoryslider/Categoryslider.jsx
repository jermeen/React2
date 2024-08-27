import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";


export default function Categoryslidr(){
  
    let[category,setcategory]=useState([])


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000
      };

    function getcategry(){
     axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res)=>{
       console.log(res.data.data) 
       setcategory(res.data.data)   
      })
    }
useEffect(()=>{
    getcategry()
},[])
    return<>
    <h2 className="font-semibold my-3">shop popular categories</h2>
     <Slider {...settings}>
      {
        category.map((category)=><div>
            <img src={category.image} className="w-full h-[200px] object-cover" alt="" />
            <h3>{category.name}</h3>
        </div>)
      }
    </Slider>
    </>
}