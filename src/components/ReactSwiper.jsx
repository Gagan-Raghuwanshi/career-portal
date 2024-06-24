import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";


const ReactSwiper = () => {
  return (

      <Swiper
        cssMode={false}
        navigation={true}
        autoplay={{ delay: 3000 }} // Adjust delay as per your requirement
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-16"
      >
        <SwiperSlide>
          <img className="w-full h-96" src="https://nikonrumors.com/wp-content/uploads/2014/09/Nikon-D750-sample-photo1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src="https://nikonrumors.com/wp-content/uploads/2014/09/Nikon-D750-sample-photo1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-96" src="https://nikonrumors.com/wp-content/uploads/2014/09/Nikon-D750-sample-photo1.jpg" alt="" />
        </SwiperSlide>
     
      </Swiper>
  );
};

export default ReactSwiper;