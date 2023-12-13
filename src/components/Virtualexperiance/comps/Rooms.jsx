import React, { useState } from "react";
import { dataRooms } from "./data";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import { FaCartPlus } from "react-icons/fa";
import Modal from "./CartModal";
import Overview from "./overviewModal";
import { FaEye } from "react-icons/fa";

const Rooms = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedImage, setSelectedimage] = useState(false);
  const navigate = useNavigate();
  const nextHandler = () => {
    navigate("/virtualexperience/activities");
  };

  const [showbuttoncontent, setShowbuttoncontent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [showCircle, setShowCircle] = useState(true);

  const handleClick = () => {
    setShowCircle(!showCircle);
  };
  const handleSelect = (roomId, roomPrice, roomTitle, roomImage) => {
    setSelectedRooms((prevSelectedRooms) => {
      if (prevSelectedRooms.some((room) => room.id === roomId)) {
        // Remove the room if it was already selected
        return prevSelectedRooms.filter((room) => room.id !== roomId);
      } else {
        // Add the room to the selected rooms
        return [
          ...prevSelectedRooms,
          { id: roomId, price: roomPrice, title: roomTitle, image: roomImage },
        ];
      }
    });

    setShowbuttoncontent(true);
    setShowCircle(!showCircle);
  };

  const addToCart = () => {
    setIsOpen(true);
    console.log("selectedrooms", selectedRooms);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-4 relative w-full h-full flex flex-col justify-center bg-[#f4e3dd]">
      <Header />
      <div className="heading flex items-center justify-between m-20">
        <h1 className="font-bold text-xl text-rose-900">
          Which Rooms Are You <br />
          Shopping For New Flooring{" "}
        </h1>
        <p className="text-bold text-xl">1 of 6</p>
        <FaCartPlus
          size={30}
          onClick={() => {
            addToCart();
            setShowbuttoncontent(false);
          }}
        />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
        {dataRooms.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="room-item object-cover w-full h-full block p-6"
            />
            <h3 className="bg-white p-1 rounded-sm absolute right-6 bottom-6">
              {item.title}
            </h3>
            
            <div
              className={` mx-0 my-0 border border-x-22 opacity-0 bg-red-400 py-4 text-center absolute bottom-6 left-0 w-full aspect-w-16 transition-opacity duration-10000 ease-in-out  group-hover:opacity-100
              }`}
            >
              <p>Add to cart</p>
            </div>

            <FaEye className=" absolute top-10 right-10 w-10 h-10 rounded-full bg-white p-3 flex items-center justify-center opacity-0 transition-all duration-10000 ease-in-out group-hover:opacity-100" />

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
          </div>
        ))}
      </div>

      {isOpen && <Modal selectedRooms={selectedRooms} onClose={closeModal} />}
      {/* <button
        // onClick={addToCart}

        className="rounded-2xl px-3 py-1 mb-4 text-center text-white font-bold bg-[#2F4F4F] absolute right-40 bottom-1"
      >
        Save to Cart
      </button> */}
      <button
        onClick={nextHandler}
        className="rounded-2xl px-3 py-1 mb-4 text-center text-white font-bold bg-[#2F4F4F] absolute right-2 bottom-1"
      >
        Next Question
      </button>
      {/* <CartModal
        isOpen={showModal}
        onClose={closeModal}
        selectedRooms={selectedRooms}
      /> */}
    </div>
  );
};

export default Rooms;
