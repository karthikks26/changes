import React from 'react'
import apple from '../../Dropitems/apple.jpg'

const Phone = () => {
  return (
    <div>
      <div className='relative flex justify-center items-center mr-10 ml-10'>
      <div className=' text-black z-20 font-bold text-4xl absolute mb-36'>Why Ayatrio is the best<div className='ml-10'>place to buy home</div><div className='ml-32'>farnising</div></div>
      <div className='text-black z-20 absolute text-lg mt-28'>You can choose a payment option that works for<div className='ml-1'>you, pay less with a trade-in, connect your new</div><div className='ml-2'>iPhone to your carrier, and get set up quickly. </div><div className='ml-3'>You can also chat with a Specialist anytime.</div></div>
       <div className='text-sky-600 z-20 absolute text-lg' style={{marginTop:'22%'}}><a href='#'>Learn more &gt;</a></div>    
           <img src={apple} alt="" className="h-100 w-100" />
           </div><br/>

    </div>
  )
}

export default Phone
