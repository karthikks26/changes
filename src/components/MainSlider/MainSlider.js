import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import { list3 } from "../../assets/mainslide-list";
import "swiper/css";

const Mainslider = () => {
  const products = [...list3];
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="main w-full mt-20 h-[80vh] bg-stone-950" style={{ WebkitUserSelect: "none" }}>
      <Swiper
        effect="parallax"
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        mousewheel={false}
        className="sliderMain w-full h-full flex justify-center items-center no-swiping"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {products.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <div className="flex items-center justify-center space-x-3 h-full">
              {i > 0 && (
                <div
                  className={`imgPrev ${
                    i === products.length - 1 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <img
                    src={products[i - 1].imgSrc[0]}
                    alt={`Product ${i - 1}`}
                    className="w-full h-full object-cover rounded-md transition-transform transform scale-95 hover:scale-100"
                  />
                </div>
              )}

              <div
                className={`
                  imgCurrent ${
                    i === 0 || i === products.length - 1 ? "w-full" : "w-full md:w-1/2"
                  }
                `}
                data-swiper-parallax={i === swiper?.activeIndex ? 0 : -200}
              >
                <img
                  src={item.imgSrc[0]}
                  alt={`Product ${i}`}
                  className="w-full h-full object-cover rounded-md transition-transform transform scale-100 hover:scale-105"
                />
              </div>

              {i < products.length - 1 && (
                <div className={`imgNext ${i === 0 ? "w-1/2" : "w-1/3"}`}>
                  <img
                    src={products[i + 1].imgSrc[0]}
                    alt={`Product ${i + 1}`}
                    className="w-full h-full object-cover rounded-md transition-transform transform scale-95 hover:scale-100"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        {swiper && swiper.activeIndex !== 0 && (
          <div className="after:font-bold after:text-white swiper-button-prev" onClick={handlePrev}></div>
        )}
        {swiper && swiper.activeIndex !== products.length - 1 && (
          <div className="after:font-bold after:text-white swiper-button-next" onClick={handleNext}></div>
        )}
      </Swiper>
    </div>
  );
};

export default Mainslider;
