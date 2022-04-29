import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Car = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
return(
    <>   
    <div>
        <Slider {...settings}>
            <img src="/images/car.001.jpeg" width={960} height={500}  alt="MyInfo" />
            <img src="/images/car.002.jpeg" width={960} height={500}  alt="MyInfo" />
            <img src="/images/car.003.jpeg" width={960} height={500}  alt="MyInfo" />
            <img src="/images/car.004.jpeg" width={960} height={500}  alt="MyInfo" />
        </Slider>
</div>
</>
    )
}
export default Car