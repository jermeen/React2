import axios from "axios";
import {createContext, useEffect, useState } from "react"



export let usercart=createContext();

export default function UserContextprovider(porps){
  
  let headers={
    token:localStorage.getItem("userToken"),
  }
let[cartId,setcartId] = useState(0)

    function addproducttocart(productId){
       return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
                productId: productId,
            },
            {
                headers
            }
        )
        .then((res)=>res)
        .catch((err)=>err);
    }

    function GetLoggedusercart(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
         .then((res)=>{
            // console.log(res.data.data._id)
            setcartId(res.data.data._id)
            return res
         })
         .catch((err)=>err);
     }

     function Updatecartproductquantity(productId,newcount){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count: newcount},{headers})
         .then((res)=>res)
         .catch((err)=>err);
     }

     function deleteproduct(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
         .then((res)=>res)
         .catch((err)=>err);
     }

     function Checkout(cardId,url,formdata){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${url}`
            ,{
                shippingAddress:formdata
            },{
                headers
            }
        )
         .then((res)=>res)
         .catch((err)=>err);
     }
     useEffect(()=>{
        GetLoggedusercart()
     },[])

    return <usercart.Provider value={{addproducttocart ,GetLoggedusercart ,Updatecartproductquantity,deleteproduct,Checkout,cartId}}>
     {porps.children}
    </usercart.Provider>
}