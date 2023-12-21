import React from 'react'
import Accordion from './Accordion'
import Carousel from './Carousel'

const Imagechanger = () => {
  return (
    <div>
      <div className=' bg-gray-100 rounded-lg h-90 ml-5 mr-5'>
        <div className='grid grid-cols-2'>
            <div className='col-span-1'>
                <Accordion/>
                <Accordion/>
                <Accordion/>
            </div>
            <div className='col-span-1'>
                <Carousel/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Imagechanger
