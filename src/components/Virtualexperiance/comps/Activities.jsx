import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { dataActivity } from "./data";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Button from "./Button";
const Activities = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/vrooms");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/budget");
  };
  const [selectedRooms, setSelectedRooms] = useState([]);

  const [showbuttoncontent, setShowbuttoncontent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showCircle, setShowCircle] = useState(true);

  const handleClick = () => {
    setShowCircle(!showCircle);
  };
  const handleSelect = (roomId, roomPrice, roomTitle) => {
    setSelectedRooms((prevSelectedRooms) => {
      // if (prevSelectedRooms.length > 0 && prevSelectedRooms[0].id === 0) {
      //   // Remove the first element if it exists
      //   return prevSelectedRooms.slice(1);
      // }

      if (prevSelectedRooms.some((room) => room.id === roomId)) {
        // Remove the room if it was already selected
        return prevSelectedRooms.filter((room) => room.id !== roomId);
      } else {
        // Add the room to the selected rooms
        return [
          ...prevSelectedRooms,
          { id: roomId, price: roomPrice, title: roomTitle },
        ];
      }
    });

    setShowbuttoncontent(true);
    setShowCircle(!showCircle);
  };

  return (
    <div className=" py-4 relative w-full h-full flex justify-center flex-col bg-[#f4e3dd]">
      <Header />
      <div className="heading flex items-center justify-between m-16">
        <h1 className="font-bold text-xl text-rose-900">
          What Does Your Day-to-Day
          <br />
          Activity Level Look Like
        </h1>
        <p className="text-bold text-xl">2 of 6</p>
      </div>

      <button
        className="choose bg-red-400 rounded-md w-20 relative top-0 left-10 h-10"
        onClick={() => {
          handleSelect();
          handleClick();
        }}
      >
        Select
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1  my-0 mx-0 ">
        {dataActivity.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-full block p-6"
            />
            <h3 className="bg-white p-1 rounded-sm absolute right-6 bottom-6">
              {item.title}
            </h3>

            {showbuttoncontent && (
              <Button
                isSelected={selectedRooms.includes(
                  item.id,
                  item.price,
                  item.title
                )}
                onSelect={() => handleSelect(item.id, item.price, item.title)}
              />
            )}

            <div className=" object-cover border border-x-22 curtain absolute bottom-6 left-0 w-full h-0 bg-red-400 transition-all duration-300 ease-in-out opacity-0 group-hover:h-1/2 group-hover:opacity-70 flex items-center justify-center">
              <button className="bg-white px-4 py-2 rounded-md">
                Show more
              </button>
            </div>
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
