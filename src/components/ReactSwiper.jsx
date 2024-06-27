import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
          className="w-full h-96"
          src="https://th.bing.com/th/id/OIP.PMBiSa-JBIhSrPqckRRxyQHaEK?rs=1&pid=ImgDetMain"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96"
          src="https://th.bing.com/th/id/OIP.ylvI5Jem741I2sN2WySPZAAAAA?rs=1&pid=ImgDetMain"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96"
          src="https://ares.decipherzone.com/blog-manager/uploads/banner_8585ee35-ba2b-46dd-b9d5-8467e70dee5f.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReactSwiper;
