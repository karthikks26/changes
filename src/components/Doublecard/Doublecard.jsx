import React, { useState } from "react";
const Doublecard = () => {
  const img = [
    "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <div className="main-imgsrc w-full h-full  flex sm:flex-row flex-col  " >
        <div className="left-imgsrc text-container flex flex-col my-3 sm:m-0 px-5 items-center justify-center sm:w-1/2 w-full h-full">
          <div className="flex w-full h-full justify-center items-center">
            <div className="relative flex justify-center items-center  w-full h-full">
              <h1 className=" text-white z-20 font-bold text-2xl absolute">
                Ayatrio
              </h1>
              <img
                src={img[0]}
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="right-imgsrc rounded-none image-container flex sm:w-1/2 w-full h-full px-5">
          <div className="flex w-full h-full justify-center items-center">
            <div className="relative flex justify-center items-center  w-full h-full">
              <h1 className=" text-white z-20 font-bold text-2xl absolute">
                Ayatrio
              </h1>
              <img src={img[1]} alt="" className="w-[100%] h-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doublecard;
