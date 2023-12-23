import React from 'react'
import linkdln from './linkdln.jpg';

const Profile = () => {
  return (
    <div>
    <div className='bg-zinc-100'>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 ml-12 mt-16'>
          <div className='mb-2'>Inspiration to installation</div>
          <div className='font-bold text-3xl mb-4'>Meet our designers, to make your dream to true</div>
          <div className='text-xl mb-8'>We bring your vision to life with free white glove services</div>
          <button className='bg-black pt-2 pb-2 pl-4 pr-4 mb-24 rounded-full text-white'>Book an appointment</button>
        </div>
        <div className='col-span-1'>
        <div className="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-20"></div>
        <div className='flex justify-center'>
        <div className='text-3xl font-bold ml-12'>Rajat Agrawal</div>
        <a href='#'>
      <img className='h-10 w-10' src={linkdln}/>
    </a></div>
        </div>
        <div className='col-span-1'>
        <div className="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-12"></div>
        <div className='flex justify-center'>
        <div className='text-3xl font-bold ml-12'>Rajat Agrawal</div>
        <a href='#'>      <img className='h-10 w-10' src={linkdln}/>

    </a></div>        </div>
        <div className='col-span-1'>
        <div className="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-12"></div>
        <div className='flex justify-center'>
        <div className='text-3xl font-bold ml-12'>Rajat Agrawal</div>
        <a href='#'>      <img className='h-10 w-10' src={linkdln}/>

    </a></div>        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile
