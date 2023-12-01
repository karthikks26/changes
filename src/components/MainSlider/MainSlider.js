import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {list3} from '../../assets/mainslide-list';
// Install Swiper modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function MainSlider() {
  const products = list3.filter((prod) => prod.id === 1 || prod.id === 2 || prod.id === 3);
  
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-fit"
      >
        {products.map((prod, i) => (
          <SwiperSlide key={i}>
            <div className="m-0">
              <div className="items-center justify-center  flex mt-32">
                <img
                  className="h-full "
                  src={prod.imgSrc}
                  alt="Product"
                  width={6000}
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainSlider;