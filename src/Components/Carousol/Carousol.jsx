/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";

const Carousol = () => {





  return (
    <div>
      {" "}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/pbz3J0B/laura-wolvaardt.jpg" alt="" />
          <span className=" text-lg font-bold">
            {" "}
            Ahead of Bangladesh's tour of South Africa, the CSA (Cricket South
            Africa) has announced opener Laura Wolvaardt's as captain of all
            three formats.
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QHt79C3/rajshahi.jpg" alt="" />

          <span className=" text-lg font-bold">
            {" "}
            One sustains bullet wound as Rajshahi ward councillor comes under
            attack One sustains bullet wound as Rajshahi ward councillor comes
            under
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SdC2p6x/newspaper.jpg" />

          <span className=" text-lg font-bold">
            9 news portals and 8 online newspapers granted registration The
            Ministry of Information and Broadcasting of Bangladesh has recently
            authorised the registration
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/s1KCgBz/the-election-commission.jpg"
            alt=""
          />
          <span className=" text-lg font-bold">
            9 news portals and 8 online newspapers granted registration The
            Ministry of Information and Broadcasting of Bangladesh has recently
            authorised the registration
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ZM9SyqG/russia-us-web.jpg" alt="" />

          <span className=" text-lg font-bold">
            National flags of Russia and the US fly at Vnukovo International
            Airport in Moscow, Russia April 11, 2017. Photo: REUTERS/Maxim
            Shemetov
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/vk2gNSW/unending-loan-default-crisis-in-banks.png"
            alt=""
          />

          <span className=" text-lg font-bold">
            Why must the poor be collateral damage of BNP-AL standoff?
            Why must the poor be collateral damage of BNP-AL standoff?
            Why must the poor be collateral damage of BNP-AL standoff?
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousol;
