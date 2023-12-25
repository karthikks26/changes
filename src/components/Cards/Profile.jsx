import React from "react";
import linkdln from "./linkdln.jpg";
import Man from "../../assets/photo/pexels-pixabay-220453.jpg";
import LinkedIn from "../../assets/photo/icons8-linkedin-50.svg";

const Profile = () => {
  return (
    <div>
      <div className="bg-zinc-100">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-16">
          <div className="col-span-1 sm:ml-12 ml-2 mt-16">
            <div className="mb-2">Inspiration to installation</div>
            <div className="font-bold sm:text-3xl text-xl mb-4">
              Meet our designers, to make your dream to true
            </div>
            <div className="sm:text-xl  text-lg mb-8">
              We bring your vision to life with free white glove services
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-black pt-2 pb-2 pl-4 pr-4 mb-24 rounded-full flex justify-center items-center text-white">
                Book an appointment
              </button>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center rounded-lg bg-slate-300 my-auto h-[300px] flex-col gap-3 mx-auto sm:mx-0 sm:w-auto w-[80vw]">
            <div className="bg-black rounded-full h-40 w-40">
              <img src={Man} className="rounded-full h-40 w-40" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="text-3xl font-bold">Rajat Agrawal</div>
              <a href="#" className="flex items-center justify-center">
                <img className="h-7 w-7" src={LinkedIn} alt="none" />
              </a>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center flex-col gap-3 rounded-lg bg-slate-300  my-auto mx-auto sm:mx-0 sm:w-auto w-[80vw] h-[300px]  ">
            <div className="bg-black rounded-full h-40 w-40">
              <img src={Man} className="rounded-full h-40 w-40" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 ">
              <div className="text-3xl font-bold">Rajat Agrawal</div>
              <a href="#" className="flex items-center justify-center">
                <img className="h-7 w-7" src={LinkedIn} alt="none" />
              </a>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center flex-col gap-3 rounded-lg bg-slate-300 my-auto h-[300px] mx-auto sm:mx-0 sm:w-auto w-[80vw]">
            <div className="bg-black rounded-full h-40 w-40">
              <img src={Man} className="rounded-full h-40 w-40" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 ">
              <div className="text-3xl font-bold">Rajat Agrawal</div>
              <a href="#" className="flex items-center justify-center">
                <img className="h-7 w-7" src={LinkedIn} alt="none" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
