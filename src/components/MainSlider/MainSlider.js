import React, { useRef, useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { Oval } from 'react-loader-spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Mainslidestyle.css";
import { list3 } from '../../assets/mainslide-list';

function MainSlider() {
  const [fakeLoading, setFakeLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(true);
    },1500);
  }, []);

  const products = list3.filter((prod) => prod.id === 1 || prod.id === 2 || prod.id === 3);
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  useEffect(() => {
    if (scrl.current) {
      scrl.current.scrollLeft = 380;
      scrl.current.style.transition = 'none';
    }
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

  if (fakeLoading) {
    return (
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
            </div>
          ))}
        </div>
        <div className='arrow-rightS' onClick={() => slide(+380)}>
          <BsArrowRightCircleFill className='arrow-nav arrow-right' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='loader slider-container'>
        <Oval
          height={100}
          width={100}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}

export default MainSlider;
