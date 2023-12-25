import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoIosAddCircle, IoMdContacts} from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdMenuBook } from "react-icons/md";
import './styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Multicard = () => {
  return (
    <div>
    <div className='bg-zinc-50 rounded-lg h-100 pb-16'>
        <div className='text-5xl font-bold pt-10 pl-10 pb-10 font-sans'>
          Why Ayatrio so innovative<br />for home furnishing.
        </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{clickable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{ '--swiper-navigation-size': '24px'}}

    >
      <SwiperSlide>
      <div className='ml-8 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
            <div className='mt-8 ml-6 mr-12'>
              <CiDeliveryTruck size={52} />
            </div>
            <h2 className='text-2xl font-bold ml-6 mr-12'>Get flexible delivery and easy pickup.</h2>
            <div className='mt-2 ml-6 mr-12 mb-12'>
              Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.
            </div>
            <br />
            <div className='absolute bottom-1 right-4 mb-8'>
              <IoIosAddCircle size={34} />
            </div>
          </div></SwiperSlide>
      <SwiperSlide>          
      <div className='ml-4 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
            <div className='mt-8 ml-6 mr-12'>
              <IoChatbubblesOutline size={46} />
            </div>
            <h2 className='text-2xl font-bold ml-6 mr-12'>Shop with a Specialist over video.</h2>
            <div className='mt-2 ml-6 mr-12 mb-12'>Choose your next Mac in a guided, one-way video session.</div>
            <br />
            <div className='absolute bottom-1 right-4 mb-8'>
              <IoIosAddCircle size={34} />
            </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>          
      <div className='ml-1 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
            <div className='mt-8 ml-6 mr-12'>
              <IoMdContacts size={48} />
            </div>
            <h2 className='text-2xl font-bold ml-6 mr-12'>Get to know your new Mac.</h2>
            <div className='mt-2 ml-6 mr-12 mb-12'>
              Learn how to get the most out of your new Mac with a free one-on-one Personal Session.
            </div>
            <br />
            <div className='absolute bottom-1 right-4 mb-8'>
              <IoIosAddCircle size={34} />
            </div>
          </div></SwiperSlide>
      <SwiperSlide>          
      <div className='ml-1 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
            <div className='mt-8 ml-6 mr-12'>
              <MdMenuBook size={44} />
            </div>
            <h2 className='text-2xl font-bold ml-6 mr-12'>Get flexible delivery and easy pickup.</h2>
            <div className='mt-2 ml-6 mr-12 mb-12'>
              Learn how to get the most out of your new Mac with a free one-on-one Personal Session.
            </div>
            <br />
            <div className='absolute bottom-1 right-4 mb-8'>
              <IoIosAddCircle size={34} />
            </div>
          </div>
          </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}

export default Multicard
