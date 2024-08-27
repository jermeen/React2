import React from "react";
import style from "./MinSlider.module.css"
import Slider from "react-slick";
import Slider1 from "../../assets/slider-image-1.jpeg"
import Slider2 from "../../assets/slider-image-2.jpeg"
import Slider3 from "../../assets/slider-image-3.jpeg"
import Slider4 from "../../assets/grocery-banner.png"
import Slider5 from "../../assets/grocery-banner-2.jpeg"

export default function Minslider(){


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1700
      };

    return<>
        <div className="flex flex-wrap py-5 px-3 items-center my-5">
            <div className="w-3/4">
            <Slider {...settings}>
            <img src={Slider3} className="w-full object-cover h-[400px]" alt="" />
            <img src={Slider4} className="w-full object-cover h-[400px]" alt="" />
            <img src={Slider2} className="w-full object-cover h-[400px]" alt="" />
            </Slider>
            </div>
            <div className="w-1/4">
            <img src={Slider5} className="w-full h-[200px]" alt="" />
            <img src={Slider1} className="w-full h-[200px]" alt="" />
            </div>
        </div>
     </>
}