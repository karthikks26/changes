import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { dataActivity } from "./data";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
const Activities = () => {
  const navigate = useNavigate()
 const prevHandler = ()=>{
  navigate('/virtualexperience/vrooms')
 }
 const nextHandler = ()=>{
  navigate('/virtualexperience/budget')
 }
  return (
    <div className=" py-4 relative w-full h-[100vh] flex justify-center flex-col bg-[#f4e3dd]">
      <Header/>
      <div className="heading flex items-center justify-between m-16">
    <h1 className="font-bold text-xl text-rose-900" >What Does Your Day-to-Day<br />Activity Level Look Like</h1>
    <p className="text-bold text-xl">2 of 6</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1  my-0 mx-0 ">
        {dataActivity.map((item) => (
          <div key={item.id} className="relative overflow-hidden m-1">
            <div className="">
              <img
                src={item.img}
                alt={item.title}
                className="w-[100%] block min-h-[19rem] pr-12 py-8"
              />
              <h3 className="bg-white p-1 rounded-sm absolute right-[-1px] bottom-6">
                {item.title}
              </h3>
            </div>
            <button className="absolute top-[0px] bg-slate-100 text-center right-0 px-2 py-1 z-100 rounded-[50%] border border-solid border-gray-900">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 px-10 my-4">
        <button onClick={prevHandler} className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white">
          Previous Question
        </button>
        <button onClick={nextHandler} className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] ">
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Activities;
