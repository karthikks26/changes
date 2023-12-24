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
import linkdln from './linkdln.jpg'


const ProfileContent = () => {
  return (
    <div>
    <div className='transparent rounded-lg h-100 pb-16'>
        
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
     <div>
     <div class="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-32"></div>
    <div class='flex justify-center'>
      <div class='text-2xl font-bold ml-20'>Rajat Agrawal</div>
      <a href='#'>      <img className='h-10 w-10' src={linkdln}/>

      </a>
    </div>
     </div>
     </SwiperSlide>
      <SwiperSlide>          
      <div>
     <div class="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-32"></div>
    <div class='flex justify-center'>
      <div class='text-2xl font-bold ml-20'>Rajat Agrawal</div>
      <a href='#'>      <img className='h-10 w-10' src={linkdln}/>

      </a>
    </div>
     </div>
          </SwiperSlide>
      <SwiperSlide>          
      <div>
     <div class="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-32"></div>
    <div class='flex justify-center'>
      <div class='text-2xl font-bold ml-20'>Rajat Agrawal</div>
      <a href='#'>      <img className='h-10 w-10' src={linkdln}/>

      </a>
    </div>
     </div></SwiperSlide>
      <SwiperSlide>          
      <div>
     <div class="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-24"></div>
    <div class='flex justify-center'>
      <div class='text-2xl font-bold ml-16'>Rajat Agrawal</div>
      <a href='#'>      <img className='h-10 w-10' src={linkdln}/>

      </a>
    </div>
     </div>
          </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}

export default ProfileContent
