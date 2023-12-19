import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedPage, onSelectPage }) => {
  // const [selected, setSelected] = useState("content1");
  // console.log("Current selected state:", selected);
  // const navigate = useNavigate();

  // const getCircleClassName = (content) => {
  //   const isSelected = selected === content;
  //   return `circle relative z-20 w-5 h-5 rounded-full mb-20 ${
  //     isSelected ? "bg-red-700 ring-0" : "bg-transparent ring-2 ring-brown-700"
  //   }`;
  // };

  const circleData = [
    {
      id: "/virtualexperience/vrooms",
      tag: "vrooms",
      text: "Which Room(s) are you shopping for new Flooring?",
    },
    {
      id: "/virtualexperience/activities",
      tag: "activities",
      text: "What does your Day-to-Day activity look like ?",
    },
    {
      id: "/virtualexperience/budget",
      tag: "budget",
      text: "What is your budget ?",
    },
    {
      id: "/virtualexperience/content1",
      tag: "content4",
      text: "What kind of flooring are you interested in ?",
    },
    {
      id: "/virtualexperience/content2",
      tag: "content5",
      text: "Which color of wood flooring are you interested in ?",
    },
    {
      id: "/virtualexperience/content3",
      tag: "content6",
      text: "Which Width of Wood Flooring Would You Prefer",
    },
    // Add more circle data as needed
  ];

  return (
    <div className="w-full h-full  z-0 bg-[#f4e3dd] rounded flex flex-row gap-6 pt-16 pb-4 px-3">
      <h1 className="w-1/2 text-2xl px-32 font-bold  text-rose-900">
        {circleData.map((circle) => {
          return circle.tag === selectedPage ? circle.text : null;
        })}
      </h1>

      <div className="top-10 w-1/2  flex flex-row gap-10 relative items-centre justify-center">
        {circleData.map((circle, index) => (
          <div key={circle.tag} className="part-circle flex flex-row ">
            <button
              onClick={() => {
                onSelectPage(circle.tag);
                // navigate(circle.id);
              }}
            >
              <div
                className={` relative z-20 w-5 h-5 rounded-full mb-20 ${
                  circle.tag === selectedPage
                    ? "bg-red-700 ring-0"
                    : "bg-transparent ring-2 ring-brown-700"
                }`}
              ></div>
              {/* <div className={getCircleClassName(circle.tag)}></div> */}
            </button>
            {index < circleData.length && (
              <div className="line absolute top-2 left-39 right-40 z-0  h-0.5 w-1/2 bg-orange-50 "></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
