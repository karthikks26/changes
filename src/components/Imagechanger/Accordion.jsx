import React, { useState } from 'react';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className='list'>
        <div className='w-280px group'>
          <div
            className={`flex items-center cursor-pointer border-b p-2 ${
              isActive ? 'font-bold' : ''
            }`}
            onClick={handleAccordionToggle}
          >
            <div className='w-full font-bold text-xl pl-20 pt-4 pb-1'>Trending Choices</div>
            <div className={`text-xl font-bold rotate-90 ${isActive ? 'rotate-270' : ''}`}>
              &gt;
            </div>
          </div>
          <div
            className={`overflow-hidden transition-height duration-500 ${
              isActive ? 'h-[120px]' : 'h-0'
            }`}
          >
            <div className='pl-20 pt-5 pb-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
