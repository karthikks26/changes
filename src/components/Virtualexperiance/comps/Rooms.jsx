import React, { useState } from "react";
import { dataRooms } from "./data";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import { TiTick } from "react-icons/ti";
import Sidebar from "./sidebar";

const Rooms = () => {
  const navigate = useNavigate();
  const nextHandler = () => {
    navigate("/virtualexperience/activities");
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
    <div className="py-4 relative w-full h-full flex flex-col justify-center bg-[#f4e3dd]">
      <Header />
      
      <Sidebar />

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
        {dataRooms.map((item) => (
          <div
            key={item.id}
            className=" relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={() => handleClick(item.id)}
              className={`room-item object-cover w-full h-full block p-6 ${
                selectedActivity[item.id] ? " border border-red-500" : ""
              } `}
            />

            <h3 className="bg-white p-1 rounded-sm absolute right-6 bottom-6">
              {item.title}
            </h3>

            {selectedActivity[item.id] && (
              <div
                className="room-item absolute inset-6 z-10  flex items-center opacity-50 bg-sky-500 justify-center"
               
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
      <button
        onClick={nextHandler}
        className="rounded-2xl px-3 py-1 mb-4 text-center text-white font-bold bg-[#2F4F4F] absolute right-2 bottom-1"
      >
        Next Question
      </button>
    </div>
  );
};

export default Rooms;
