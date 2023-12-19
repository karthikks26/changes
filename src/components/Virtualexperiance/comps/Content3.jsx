import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "./sidebar";
const Content3 = () => {
  let navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/content2");
  };
  const donehandler = () => {
    navigate("/home");
  };
  return (
    <div className=" py-4 w-full h-full bg-[#f4e3dd]  text-sm">
      <Header />
      <Sidebar />
      <div className="container flex flex-row items-center gap-10 justify-center">
        <div className="w-1/5 h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="w-6 h-20 bg-orange-400 "></div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            3" -4" <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">3"-4" Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>

        <div className="w-1/5 h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="w-8 h-20 bg-orange-400"></div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            5"- 6" <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">5"-6" Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>
        <div className="w-1/5 h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="w-10 h-20 bg-orange-400"></div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            7"- 9" <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">7"-9" Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>
        <div className="w-1/5 h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="flex flex-row items-center gap-1">
            <div className="w-8 h-20 bg-orange-400"></div>
            <div className="w-6 h-20 bg-orange-400"></div>
            <div className="w-10 h-20 bg-orange-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            Multiple Widths <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">Multiple Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>
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
            onClick={donehandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content3;
