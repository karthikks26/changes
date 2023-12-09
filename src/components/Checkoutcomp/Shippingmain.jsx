import React from 'react'
import Arrive from './Arrive'
import Header from '../Header'

const Shippingmain = () => {
  return (
    <div>
    <Header/>
    <div className='grid grid-col-2'>
      <div className='col-span-1 mx-32 mt-32'>
      <Arrive/>
      </div>
      </div>
    </div>
  )
}

export default Shippingmain
