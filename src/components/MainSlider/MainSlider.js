import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Mainslidestyle.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import {list3} from '../../assets/mainslide-list';
// Install Swiper modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function MainSlider() {
  const products = list3.filter((prod) => prod.id === 1 || prod.id === 2 || prod.id === 3);
  const [scrollX, setScrollX] = useState(1);
  const scrl = useRef(null);

  useEffect(() => {
    scrl.current.scrollLeft = 380;
    scrl.current.style.transition = 'none';
  }, []);

  const slide = (shift) => {
  if (scrl.current) {
    const targetScroll = scrl.current.scrollLeft + shift;

    scrl.current.scrollTo({
      left: targetScroll,
    });

    setScrollX(targetScroll);
  }
};
  return (
    // <div>
    //   <Swiper
    //     spaceBetween={30}
    //     loop={true}
    //     centeredSlides={true}
    //     autoplay={false}
    //     slidesPerView={2.5}
    //     // autoplay={{
    //     //   delay: 2500,
    //     //   disableOnInteraction: false,
    //     // }}
        
    //     modules={[Autoplay, Pagination, Navigation]}
    //     className="mySwiper h-fit"
    //   >
    //     {products.map((prod, i) => (
    //       <SwiperSlide key={i}>
    //         <div className="m-0">
    //           <div className="items-center justify-center flex">
    //             <img
    //               className="mainSlider"
    //               src={prod.imgSrc}
    //               alt="Product"
    //               style={{ width: '50rem', height: '100vh' }}
    //             />
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <div className='slider-container'>
       <div className='arrow-left' onClick={() => slide(-380)}>
        <BsArrowLeftCircleFill className='arrow-nav' />
      </div>
      <div className='slider-cont' ref={scrl}> 
      {products.map((prod, i) => (
          <div key={i}>
              <div className="items-center justify-center flex sd">
                <img
                  className="sd rounded-sm"
                  src={prod.imgSrc}
                  alt="Product"
                />
            </div>
          </div>))}
    </div>
    <div className='arrow-rightS' onClick={() => slide(+380)}>
        <BsArrowRightCircleFill className='arrow-nav arrow-right' />
      </div>
    </div>
  );
}

export default MainSlider;