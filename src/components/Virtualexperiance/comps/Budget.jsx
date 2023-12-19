import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import { TiTick } from "react-icons/ti";
import Sidebar from "./sidebar";
import { FaCircle } from "react-icons/fa";
const Budget = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/activities");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/content1");
  };
  const [selectedPage, setSelectedPage] = useState("budget");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };
  const [selectedActivity, setSelectedActivity] = useState({});
  // const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  // const handleSelect = () => {
  //   setShowCircle(!showCircle);
  // };

  // const handleClick = (index) => {
  //   setSelectedActivity((prevSelectedRooms) => {
  //     const updatedSelectedRooms = {
  //       ...prevSelectedRooms,
  //       [index]: !prevSelectedRooms[index],
  //     };
  //     return updatedSelectedRooms;
  //   });
  //   // setShowCircle(!showCircle);
  //   setShowbuttoncontent(true);
  // };

  const handleClick = (index) => {
    setSelectedActivity((prevSelectedActivities) => {
      const updatedSelectedActivities = { ...prevSelectedActivities };
      updatedSelectedActivities[index] = !prevSelectedActivities[index];
      return updatedSelectedActivities;
    });
  };
  // const [showTick1, setShowTick1] = useState(false);
  // const [showTick2, setShowTick2] = useState(false);
  // const [showTick3, setShowTick3] = useState(false);
  // const [showTick4, setShowTick4] = useState(false);

  return (
    <div className="pt-4 pb-28 flex flex-col  w-full h-full justify-center  bg-[#f4e3dd]">
      <Header />
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />
      <div className="grid grid-cols-2 gap-y-4 place-items-center md:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { label: "$", index: "first" },
          { label: "$$", index: "second" },
          { label: "$$$", index: "third" },
          { label: "$$$$", index: "fourth" },
        ].map(({ label, index }) => (
          <div
            onClick={() => {
              handleClick(index);
              // handleSelect();
            }}
            key={index}
            className={` relative flex flex-col min-h-[12rem] w-[5rem] justify-between items-center bg-white mx-6 p-5 rounded-t-full rounded-b-full
            ${selectedActivity[index] ? " border-2 border-red-500" : ""}
            `}
          >
            {selectedActivity[index] && (
              <div className="overlay rounded-full absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            )}
            {selectedActivity[label.id] && (
              <div className="overlay rounded-t-full rounded-b-full absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            )}

            <p className="text-lg">{label}</p>
            {/* <div
              className="relative w-4 h-4 border border-solid border-gray-500 rounded-full flex items-center justify-center"
              onClick={() => setShowTick(!showTick)}
            >
              {showTick && <TiTick size={25} color="#2F4F4F" className="" />}
            </div> */}

            {selectedActivity[index] && (
              <div
                className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center"
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
