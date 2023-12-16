import React, { useState } from 'react';
const Doublecard = () => {
  const img = [
    "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <div className="main w-full h-full m-2 flex p-2">
        <div className="left text-container flex flex-col items-center justify-center w-1/2 h-full  p-1">
        <div className="flex w-full h-full justify-center items-center">
           <div className='relative flex justify-center items-center  w-full h-full'>
            <h1 className='text-white font-bold text-2xl absolute'>Ayatrio</h1>
           <img src={img[0]} alt="" className="w-[100%] h-[100%]" />
           </div>
          </div>
        </div>
        <div className="right image-container flex w-1/2 h-full p-1">
          <div className="flex w-full h-full justify-center items-center">
          <div className='relative flex justify-center items-center  w-full h-full'>
            <h1 className='text-white font-bold text-2xl absolute'>Ayatrio</h1>
            <img src={img[1]} alt="" className="w-[100%] h-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doublecard;
