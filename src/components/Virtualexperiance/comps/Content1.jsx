import React, { useState } from "react";
import Image1 from "../../../assets/last3/image1.png";
import Image2 from "../../../assets/last3/image2.png";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "./sidebar";
import { TiTick } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import { TilesData, dataTiles } from "./data";
const Content1 = () => {
  const navigate = useNavigate();
  const prevHandler = () => {
    navigate("/virtualexperience/budget");
  };
  const nextHandler = () => {
    navigate("/virtualexperience/content2");
  };
  const [selectedPage, setSelectedPage] = useState("content4");

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
    setShowCircle(!showCircle);
    setShowbuttoncontent(!showbuttoncontent);
  };

  const [selected, setSelected] = useState(null);
  const handleImageClick = (image) => {
    setSelected(image === selected ? null : image);
  };
  return (
    <div className=" py-4 w-full h-full bg-[#f4e3dd] text-sm ">
      <Header />
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />

      <div className="card-container flex flex-row justify-center  gap-20">
        {/* <div className="card-1 max-w-xs relative">
          {selected === Image1 && (
            <div
              className="room-item absolute top-2 right-36 z-10  flex items-center opacity-50 justify-center"
              // style={{ zIndex: 10 }}
            >
              <div className="circle-container relative flex justify-center items-center">
                <FaCircle size={20} color="black" className="opacity-100" />

                <TiTick
                  className="opacity-100 absolute"
                  color="white"
                  size={20}
                  style={{ opacity: 100 }}
                />
              </div>
            </div>
          )}
          <img
            className={`rounded-2xl  relative  w-44 h-52 ${
              selected === Image1
                ? "border-2 border-red-500 overlay rounded-2xl absolute top-0 left-0 w-44 h-52 opacity-50 bg-black"
                : ""
            }
                        `}
            onClick={() => handleImageClick(Image1)}
            src={Image1}
            alt="None"
          />
          <h4 className="font-bold">Wood Look</h4>
          <p className=" text-gray-400">
            Whether you're looking for real hardwood or floors that look like
            real hardwood, you'll find a variety of colors and widths of planks
            to help you find the perfect floor.
          </p>
        </div> */}
        {/* <div className="card-2 max-w-xs relative">
          
          {selected === Image2 && (
            <div
              className="room-item absolute top-2 right-36 z-10  flex items-center opacity-50 justify-center"
              // style={{ zIndex: 10 }}
            >
              <div className="circle-container relative flex justify-center items-center">
                <FaCircle size={20} color="black" className="opacity-100" />

                <TiTick
                  className="opacity-100 absolute"
                  color="white"
                  size={20}
                  style={{ opacity: 100 }}
                />
              </div>
            </div>
          )}
          <img
            className={` rounded-2xl relative  w-44 h-52 ${
              selected === Image2
                ? "border-2 border-red-500 overlay rounded-2xl absolute top-0 left-0 w-44 h-52 opacity-50 bg-black"
                : ""
            }
                        `}
            onClick={() => handleImageClick(Image2)}
            src={Image2}
            alt=""
          />
          <h3 className="font-bold">Tile Look</h3>
          <p className="text-gray-400">
            From concrete to Carrarra marble to the hottest tile looks,
            available in oversize rectangles to square tile looks to designer
            curated sheet vinyl.
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1  my-0 mx-0 ">
          {dataTiles.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
            >
              {/* {selectedActivity[item.id] && (
                <div className="overlay rounded-2xl absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
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
                }
               ${selectedActivity[item.id] ? " border-2 border-red-500 " : ""}
              `}
              />
              <h3
                className={` p-1 rounded-sm 
              ${
                selectedActivity[item.id]
                  ? "font-semibold text-white absolute left-2 bottom-2 bg-transparent"
                  : "bg-white absolute right-1 bottom-1"
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 px-10 mt-10">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
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
