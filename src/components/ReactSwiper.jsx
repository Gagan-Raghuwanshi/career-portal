import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img3 from '../../public/jvmgowy4.png'

const ReactSwiper = () => {
  return (
    <Swiper
      cssMode={false}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // Adjust delay as per your requirement
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper "
    >
      <SwiperSlide>
        <img
          className="w-full h-[500px]"
          src="https://itechnasik.com/wp-content/uploads/2023/11/Mern-Stack-Developer.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px]"
          src="https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px]"
          src={img3}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReactSwiper;
