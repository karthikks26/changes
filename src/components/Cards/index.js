import Card from './card';
import { list } from '../../assets/cards-list';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PopUp from '../Reviews/PopUp';
import './styles.css'
import MainSlider from "../MainSlider/MainSlider";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
function Cards() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const [indexClicked, setClicked] = useState(-1);

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="pb-20">
      <MainSlider/>
      <div className="pt-20 px-10 mb-20 py-10 bg-white">
        <div className="mb-2 w-full">
          <h2 className="text-bold text-2xl font-serif ml-4">Beach and resort.</h2>
        </div>
        <PopUp isPopupVisible={isPopupVisible} closePopup={closePopup}/>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={5}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="px-10">
            
          {list.map((value, idx) => {
            return (
              <SwiperSlide key={idx} className="">
                <div className="grid grid-cols-1 mt-2 h-fit">
                  <Card
                    title={value.title}
                    date={value.date}
                    price={value.price}
                    desc={value.desc}
                    imgSrc={value.imgSrc}
                    rating={value.rating}
                    key={idx}
                    setPopupVisible={setPopupVisible}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="pt-10 px-10 py-10 bg-white">
        <div className="mb-2 w-full">
          <h2 className="text-bold text-2xl font-serif ml-4">Beach and resort.</h2>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={5}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {list.map((value, idx) => {
            return (
              <SwiperSlide key={idx} className="">
                <div className="grid grid-cols-1 mt-4 h-fit">
                  <Card
                    title={value.title}
                    date={value.date}
                    price={value.price}
                    desc={value.desc}
                    imgSrc={value.imgSrc}
                    rating={value.rating}
                    key={idx}
                    setPopupVisible={setPopupVisible}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default Cards;
