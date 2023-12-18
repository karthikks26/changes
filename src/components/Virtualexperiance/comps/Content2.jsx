import React from "react";

import image1 from "../../../assets/last3/i (1).webp";
import image2 from "../../../assets/last3/i (2).webp";
import image3 from "../../../assets/last3/i (3).webp";
import image4 from "../../../assets/last3/i (4).webp";
import image6 from "../../../assets/last3/i (7).webp";
import image11 from "../../../assets/last3/i (8).webp";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "./sidebar";
const Content2 = () => {
  let navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/budget");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/content3");
  };
  return (
    <div className="py-4 w-full h-full pb-4 bg-[#f4e3dd] text-sm">
      <Header />
      <Sidebar />

      <div className="tiles flex justify-center items-center flex-col gap-10 ">
        <div className="row-1 flex flex-row gap-20">
          <div>
            <img className="w-12 h-12" src={image1} alt="" />
            <p>Off white</p>
          </div>

          <div>
            <img className="w-12 h-12" src={image2} alt="" />
            <p>Natural</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image3} alt="" />
            <p>Taupe</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image4} alt="" />
            <p>
              Medium <br /> Brown
            </p>
          </div>
          <div>
            <img className="w-12 h-12" src={image6} alt="" />
            <p>Grey</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image11} alt="" />
            <p>Smoke</p>
          </div>
        </div>
        <div className="row-1 flex flex-row gap-20">
          <div>
            <img className="w-12 h-12" src={image1} alt="" />
            <p>Off white</p>
          </div>

          <div>
            <img className="w-12 h-12" src={image2} alt="" />
            <p>Natural</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image3} alt="" />
            <p>Taupe</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image4} alt="" />
            <p>
              Medium <br /> Brown
            </p>
          </div>
          <div>
            <img className="w-12 h-12" src={image6} alt="" />
            <p>Grey</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image11} alt="" />
            <p>Smoke</p>
          </div>
        </div>
        <div className="row-1 flex flex-row gap-20">
          <div>
            <img className="w-12 h-12" src={image1} alt="" />
            <p>Off white</p>
          </div>

          <div>
            <img className="w-12 h-12" src={image2} alt="" />
            <p>Natural</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image3} alt="" />
            <p>Taupe</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image4} alt="" />
            <p>
              Medium <br /> Brown
            </p>
          </div>
          <div>
            <img className="w-12 h-12" src={image6} alt="" />
            <p>Grey</p>
          </div>
          <div>
            <img className="w-12 h-12" src={image11} alt="" />
            <p>Smoke</p>
          </div>
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

export default Content2;
