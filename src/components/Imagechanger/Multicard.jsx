import React, { useState } from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoIosAddCircle, IoMdContacts, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdMenuBook } from "react-icons/md";

const Multicard = () => {
  const [startIndex, setStartIndex] = useState(0);
 
  const handleRightArrowClick = () => {
    if(startIndex==0){
      setStartIndex((prevIndex) => (prevIndex + 1) % 4);
    }
  };

  const handleLeftArrowClick = () => {
    if(startIndex==1){
      setStartIndex((prevIndex) => (prevIndex - 1 + 4) % 4);

    }
  };

  const renderGrid = (index) => {
    switch (index) {
      case 0:
        return (
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
          </div>
        );
      case 1:
        return (
          <div className='ml-3 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
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
        );
      case 2:
        return (
          <div className='ml-3 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
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
          </div>
        );
      case 3:
        return (
          <div className='ml-3 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
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
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='bg-zinc-50 rounded-lg h-110 pb-16'>
        <div className='text-5xl font-bold pt-10 pl-10 pb-10 font-sans'>
          Why Ayatrio so innovative<br />for home furnishing.
        </div>
        {/* Main Display Container */}
        <div className='flex overflow-x-hidden p-4'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='mr-4'>
              {renderGrid((startIndex + i) % 4)}
            </div>
          ))}
        </div>
        <div className='flex mt-4 ml-20'>
          <IoIosArrowBack size={30} className='cursor-pointer mr-4 'style={{marginLeft:'90%'}} onClick={handleLeftArrowClick} />
          <IoIosArrowForward size={30} className='cursor-pointer' onClick={handleRightArrowClick} />
        </div>
      </div>
      
    </div>
  );
};

export default Multicard;
