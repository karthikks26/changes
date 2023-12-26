import React, { useState } from "react";
import { dataActivity } from "./data";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";

import { TiTick } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import Sidebar from "./sidebar";
const Activities = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/vrooms");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/budget");
  };

  const [selectedPage, setSelectedPage] = useState("activities");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const [selectedActivity, setSelectedActivity] = useState({});
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };

  const handleClick = (roomId) => {
    setSelectedActivity((prevSelectedRooms) => {
      const updatedSelectedRooms = {
        ...prevSelectedRooms,
        [roomId]: !prevSelectedRooms[roomId],
      };
      return updatedSelectedRooms;
    });
    // setShowCircle(!showCircle);
    // setShowbuttoncontent(true);

    // Toggle the showCircle state based on the current state of the selected room
    setShowCircle((prevShowCircle) => !prevShowCircle);
    // Toggle the showbuttoncontent state based on the current state of the selected room
    setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  };
  return (
    <div className=" py-4 relative w-full h-full flex justify-center flex-col bg-[#f4e3dd]">
      <Header />
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />
      {/* <div className="heading flex items-center justify-between m-16">
        <h1 className="font-bold text-xl text-rose-900">
          What Does Your Day-to-Day
          <br />
          Activity Level Look Like
        </h1>
        {/* <p className="text-bold text-xl">2 of 6</p> 
       </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1  my-0 mx-0 ">
        {dataActivity.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            {/* {selectedActivity[item.id] && (
              <div className="overlay rounded-2xl absolute top-0 left-0 w-full h-full opacity-50 p-1 bg-black"></div>
            )} */}
            <img
              src={item.img}
              alt={item.title}
              style={{ borderRadius: "1rem" }}
              onClick={() => {
                handleClick(item.id);
                handleSelect();
              }}
              className={`object-cover  w-full h-full block p-1
              ${
                selectedActivity[item.id]
                  ? " overlay z-10 black opacity-100"
                  : ""
              }  ${selectedActivity[item.id] ? "border-2 border-red-500" : ""}
              `}
            />
            <h3
              className={` p-1 rounded-sm absolute right-0 bottom-0
              ${
                selectedActivity[item.id]
                  ? "font-semibold text-white absolute left-2 bottom-2 bg-transparent"
                  : "bg-white"
              }
              `}
            >
              {item.title}
            </h3>

            {selectedActivity[item.id] && (
              <div
                className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center"
                // style={{ zIndex: 10 }}
              >
                <div className="circle-container relative flex justify-center items-center">
                  <FaCircle size={30} color="black" className="opacity-100" />

                  <TiTick
                    className="opacity-100 absolute"
                    color="white"
                    size={30}
                    style={{ opacity: 100 }}
                  />
                </div>
              </div>
            )}
            {/* <Button /> */}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 px-10 my-4">
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
