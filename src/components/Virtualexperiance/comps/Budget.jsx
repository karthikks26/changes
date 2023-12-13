import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import { TiTick } from "react-icons/ti";
const Budget = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/activities");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/content1");
  };
  const [showTick1, setShowTick1] = useState(false);
  const [showTick2, setShowTick2] = useState(false);
  const [showTick3, setShowTick3] = useState(false);
  const [showTick4, setShowTick4] = useState(false);

  return (
    <div className="flex flex-col  w-full h-[100vh] justify-center  bg-[#f4e3dd]">
      <Header />
      <div className="heading flex items-center justify-between m-16">
        <h1 className="font-bold text-xl text-rose-900">
          What is Your Budget?{" "}
        </h1>
        <p className="text-bold text-xl">3 of 6</p>
      </div>
      <div className="grid grid-cols-2 gap-y-4 place-items-center md:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { label: "$", showTick: showTick1, setShowTick: setShowTick1 },
          { label: "$$", showTick: showTick2, setShowTick: setShowTick2 },
          { label: "$$$", showTick: showTick3, setShowTick: setShowTick3 },
          { label: "$$$$", showTick: showTick4, setShowTick: setShowTick4 },
        ].map(({ label, showTick, setShowTick }) => (
          <div
            key={label}
            className="flex flex-col min-h-[12rem] w-[5rem] justify-between items-center bg-white mx-6 px-5 py-5 rounded-t-full rounded-b-full"
          >
            <p className="text-lg">{label}</p>
            <div
              className="relative w-4 h-4 border border-solid border-gray-500 rounded-full flex items-center justify-center"
              onClick={() => setShowTick(!showTick)}
            >
              {showTick && <TiTick size={25} color="#2F4F4F" className="" />}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 px-10 mt-10">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <p>
            Products Available (728){" "}
            <span>
              {" "}
              <a href="/" className="text-underline underline">
                Skip to results
              </a>{" "}
            </span>
          </p>
          <button
            onClick={nextHandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
