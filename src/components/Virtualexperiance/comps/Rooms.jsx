import React from "react";
import { dataRooms } from "./data";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
const Rooms = () => {

  const navigate = useNavigate()
  const nextHandler = ()=>{
   navigate('/virtualexperience/activities')
  }
  return (
    <div className="mb-8 py-4 relative w-full h-full flex flex-col justify-center  bg-[#f4e3dd]">
      <Header/>
      <div className="heading flex items-center justify-between m-20">
    <h1 className="font-bold text-xl text-rose-900" >Which Rooms Are You <br />Shopping For New Flooring </h1>
    <p className="text-bold text-xl">1 of 6</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1  my-0 mx-2">
        {dataRooms.map((item) => (
          <div key={item.id} className="relative overflow-hidden m-1">
            <div className="">
              <img
                src={item.img}
                alt={item.title}
                className="w-[100%] block min-h-[14rem] p-6"
              />
              <h3 className="bg-white p-1 rounded-sm absolute right-6 bottom-6">
                {item.title}
              </h3>
            </div>
            <Button />
          </div>
        ))}
      </div>
      <button
        onClick={nextHandler}
        className="rounded-2xl px-3 py-1 text-center text-white font-bold bg-[#2F4F4F] absolute right-2 bottom-1"
      >
        Next Question
      </button>
    </div>
  );
};

export default Rooms;
