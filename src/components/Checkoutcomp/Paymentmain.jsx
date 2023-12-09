import React from 'react'
import Promo from './Promo'
import Header from '../Header'

const Paymentmain = () => {
  return (
    <div>
    <Header/>
    <div className='grid grid-col-2'>
      <div className='col-span-1 mx-32 mt-32'>
      <Promo/>
        </div>
      </div>
    </div>
  )
}

export default Paymentmain
