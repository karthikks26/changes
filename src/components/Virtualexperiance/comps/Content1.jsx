import React from "react";
import Image1 from "../../../assets/last3/image1.png";
import Image2 from "../../../assets/last3/image2.png";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "./sidebar";
const Content1 = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/budget");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/content2");
  };
  return (
    <div className=" py-4 w-full h-full bg-[#f4e3dd] text-sm ">
      <Header />
      <Sidebar />

      <div className="card-container flex flex-row justify-center  gap-20">
        <div className="card-1 max-w-xs relative">
          <img className=" w-44 h-52" src={Image1} alt="None" />
          <h4 className="font-bold">Wood Look</h4>
          <p className=" text-gray-400">
            Whether you're looking for real hardwood or floors that look like
            real hardwood, you'll find a variety of colors and widths of planks
            to help you find the perfect floor.
          </p>
          <CiCirclePlus className="top-0 right-0 absolute w-7 h-7 opacity-50" />
        </div>
        <div className="card-2 max-w-xs relative">
          <img className=" w-44 h-52" src={Image2} alt="" />
          <h3 className="font-bold">Tile Look</h3>
          <p className="text-gray-400">
            From concrete to Carrarra marble to the hottest tile looks,
            available in oversize rectangles to square tile looks to designer
            curated sheet vinyl.
          </p>
          <CiCirclePlus className="top-0 right-0 absolute w-7 h-7 opacity-50" />
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

export default Content1;
