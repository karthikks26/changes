import React from 'react';
import './Splashscreen.css'; 
const Splashscreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
       
        <img
          src="https://s3-symbol-logo.tradingview.com/logo-yazilim--600.png"
          alt="Logo"
          className="w-24 h-auto animate-pulse transition-all ease-linear duration-1000" 
        />
        <h1 className="text-2xl mt-4 font-bold">AirBnb</h1>
      </div>
    </div>
  );
};

export default Splashscreen;
