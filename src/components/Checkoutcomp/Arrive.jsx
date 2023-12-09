import React from 'react'
import OrderSum from './OrderSum'
import { useNavigate } from 'react-router-dom'
import shoe from './shoe.avif'

const Arrive = () => {
    let navigate=useNavigate();
    const handleClick=()=>{
        navigate('/payment')
    }
  return (
    <div>
    <div className='grid grid-cols-2'>
        <div className='col-span-1'>
        <h3 className='mb-4'>When would you like to get your order?</h3>
        <div className='col-span-2'></div>
        <div className='mb-10 flex items-center deliver border border-black rounded-xl h-14 w-80 border-solid border-2 p-1'>
  <a className='flex-grow pl-4 text-sm' href='#'>Arrives Thu, 14 Dec - Wed, 3 Jan</a>
  <p className='flex items-end pr-4 text-gray-500 text-sm'>1250.00</p>
</div>

        <h3 className='mb-4'>Arrives Thu,14 Dec-Wed,3 Jan</h3>
        <img src={shoe} alt='shoe'className='h-20 w-20'/>
        <h6 className='mt-4 text-gray-500 text-sm'>This is an international shipment requiring customers clearance</h6>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded-full w-96" onClick={handleClick} >Continue</button>
        </div>
        <div className='col-span-1'>
            <OrderSum />
        </div>
    </div>
    </div>
  )
}

export default Arrive
