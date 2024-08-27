import React from "react";
import style from "./Home.module.css"
import Recentproduct from "../Recentproduct/Recentproduct";
import Categoryslidr from "../Categoryslider/Categoryslider";
import Minslider from "../MinSlider/Minslider";

export default function Home(){
    return<>
    <Minslider/>
    <Categoryslidr/>
    <Recentproduct />
    </>
}