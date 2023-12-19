import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPlus } from "@fortawesome/free-solid-svg-icons";
import { dataActivity } from "./data";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Button from "./Button";
import ActivityModal from "./ActivityModal";
import { TiTick } from "react-icons/ti";
import Sidebar from "./sidebar";
const Activities = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/vrooms");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/budget");
  };

  const [selectedActivity, setSelectedActivity] = useState({});

  const handleClick = (roomId) => {
    setSelectedActivity((prevSelectedRooms) => {
      const updatedSelectedRooms = {
        ...prevSelectedRooms,
        [roomId]: !prevSelectedRooms[roomId],
      };
      return updatedSelectedRooms;
    });
  };

  return (
    <div className=" py-4 relative w-full h-full flex justify-center flex-col bg-[#f4e3dd]">
      <Header />
      <Sidebar />
      {/* <div className="heading flex items-center justify-between m-16">
        <h1 className="font-bold text-xl text-rose-900">
          What Does Your Day-to-Day
          <br />
          Activity Level Look Like
        </h1>
        {/* <p className="text-bold text-xl">2 of 6</p> 
       </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1  my-0 mx-0 ">
        {dataActivity.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={() => handleClick(item.id)}
              className={`object-cover w-full h-full block p-6
              ${selectedActivity[item.id] ? " border border-red-500" : ""}
              `}
            />
            <h3 className="bg-white p-1 rounded-sm absolute right-6 bottom-6">
              {item.title}
            </h3>

            {selectedActivity[item.id] && (
              <div
                className="room-item absolute inset-6 z-10  flex items-center opacity-50 bg-sky-500 justify-center"
                // style={{ zIndex: 10 }}
              >
                <TiTick
                  className="opacity-100"
                  color="red"
                  size={300}
                  style={{ zIndex: 11, opacity: 100 }}
                />
              </div>
            )}
            <Button />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 px-10 my-4">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>
        <button
          onClick={nextHandler}
          className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Activities;
