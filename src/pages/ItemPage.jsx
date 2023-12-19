import React, { useState, useEffect, useRef } from 'react';
import { Pagination, Navigation, Scrollbar ,Mousewheel,FreeMode} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel"
import "swiper/css/scrollbar";
import 'swiper/swiper-bundle.css';

import Item from '../components/Item/Item';
import Header from '../components/Header';
// import Cards from '../components/Cards';
import ItemCard from '../components/Item/ItemCard';



const ItemPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wallpaperProducts, setWallpaperProducts] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const swiperOptions = {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar,Mousewheel,FreeMode],
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,

  };
  const swiperOptions2 = {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar,Mousewheel,FreeMode],
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,

  };
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        setWallpaperProducts([
          {
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },
          {
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },{
            productName: 'Product 1',
            price: '$100',
            subcategory: 'Category 1',
            images: 'image_url_1.jpg',
            ratings: 4.5,
          },
          // Add more products as needed
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowFilter(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full">
        {showFilter ? <Header /> : null}

        <Item fixer={showFilter} />

       <div className="swiper1 mt-5">
       <Swiper {...swiperOptions} onSwiper={(swiper) => (swiperRef.current = swiper)}>
          {isLoading ? (
            <SwiperSlide>
              <div className="flex">Loading...</div>
            </SwiperSlide>
          ) : (
            wallpaperProducts.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 mt-2 h-full fade-in">
                  <ItemCard
                    title={product.productName}
                    price={product.price}
                    desc={product.subcategory}
                    imgSrc={product.images}
                    rating={product.ratings}
                    key={idx}
                    setPopupVisible={setPopupVisible}
                    cssClass={'card1flex'}
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
       </div>
       <hr />
        <div className="swiper2 mt-5 ">
        <Swiper {...swiperOptions2} onSwiper={(swiper) => (swiperRef.current = swiper)}>
          {isLoading ? (
            <SwiperSlide>
              <div className="flex">Loading...</div>
            </SwiperSlide>
          ) : (
            wallpaperProducts.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 mt-2 h-full fade-in">
                  <ItemCard
                    title={product.productName}
                    price={product.price}
                    desc={product.subcategory}
                    imgSrc={product.images}
                    rating={product.ratings}
                    key={idx}
                    setPopupVisible={setPopupVisible}
                    cssClass={'card1flex'}
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
