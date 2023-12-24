import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProfileContent from './ProfileContent';

const Profile = () => {
  return (
    <div>
      <div className='bg-zinc-100'>
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-1">
            <div className='col-span-1 ml-12 mt-16'>
              <div className='mb-2'>Inspiration to installation</div>
              <div className='font-bold text-3xl mb-4'>Meet our designers, to make your dream to true</div>
              <div className='text-xl mb-8'>We bring your vision to life with free white glove services</div>
              <button className='bg-black pt-2 pb-2 pl-4 pr-4 mb-24 rounded-full text-white'>Book an appointment</button>
            </div>  </div>
          <div class="col-span-3">
            <ProfileContent />
          </div>
        </div>
      </div>

    </div>

  )
}

export default Profile
