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
        <div class="grid sm:grid-cols-4 grid-cols-1 gap-4">
          <div class="col-span-1">
            <div className='col-span-1 sm:ml-12 ml-2 mt-16'>
              <div className='mb-2'>Inspiration to installation</div>
              <div className='font-bold sm:text-3xl text-xl mb-4'>Meet our designers, to make your dream to true</div>
              <div className='sm:text-xl  text-lg mb-8'>We bring your vision to life with free white glove services</div>
              <button className='bg-black pt-2 pb-2 pl-4 pr-4 mb-24 rounded-full flex justify-center items-center text-white'>Book an appointment</button>
            </div>  </div>
          <div class="col-span-3">
            <ProfileContent />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
