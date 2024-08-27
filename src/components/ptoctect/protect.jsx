import React from "react";
import { Navigate } from "react-router-dom";

export default function Protect(props){

    if(localStorage.getItem("userToken")){
       return  props.children
    }
    else {
        Navigate("/Login")
    }

}