import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Category = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-6"
      >
        <SwiperSlide>
          <div className="flex flex-col relative items-center">
            <img src={img1} className="w-full h-[450px]" alt="" />
            <p className="text-white font-normal text-3xl absolute bottom-5">Salads</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col relative items-center">
            <img src={img2} className="w-full h-[450px]" alt="" />
            <p className="text-white font-normal text-3xl absolute bottom-5">Soups</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col relative items-center">
            <img src={img3} className="w-full h-[450px]" alt="" />
            <p className="text-white font-normal text-3xl absolute bottom-5">pizzas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col relative items-center">
            <img src={img4} className="w-full h-[450px]" alt="" />
            <p className="text-white font-normal text-3xl absolute bottom-5">desserts</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col relative items-center">
            <img src={img5} className="w-full h-[450px]" alt="" />
            <p className="text-white font-normal text-3xl absolute bottom-5">Soup</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
