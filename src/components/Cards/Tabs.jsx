import React, { useState } from "react";
import room from "./room.jpg";
import living from "./living.jpg";
import kitchen from "./kitchen.webp";
import work from "./work.jpg";
import "./styles.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContent = () => {
    switch (activeTab) {
      case "all":
        return (
          // <p>
          //   <div className="container  ">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8 ">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src={kitchen}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src={work}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "bedroom":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "livingroom":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={living}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={living}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "kitchen":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={kitchen}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={kitchen}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={kitchen}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={kitchen}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={kitchen}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={kitchen}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "workspace":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={work}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={work}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={work}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={work}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={work}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={work}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "outdoor":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "bathroom":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "babychildren":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   {/* </div>
          // </p> */}
        );
      case "dining":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "hallway":
        return (
          <p>
            <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
            </div>
          </p>
        );
      case "laundry":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      case "accessories":
        return (
          // <p>
          //   <div className="container mr-4">
              <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="row-span-2 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
                <div class="bg-teal-100 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={room}
                    alt="Room"
                  />
                </div>
              </div>
          //   </div>
          // </p>
        );
      default:
        return null;
    }
  };

  const tabsData = [
    { key: "all", label: "All" },
    { key: "bedroom", label: "Bedroom" },
    { key: "livingroom", label: "Living Room" },
    { key: "kitchen", label: "Kitchen" },
    { key: "workspace", label: "Workspace" },
    { key: "outdoor", label: "Outdoor" },
    { key: "bathroom", label: "Bathroom" },
    // { key: "babychildren", label: "Baby & children room" },
    { key: "dining", label: "Dining" },
    { key: "hallway", label: "Hallway" },
    { key: "laundry", label: "Laundry" },
    { key: "accessories", label: "Accessories" },
  ];

  return (
    <>
      <div className="mt-8 mx-2 cursor-pointer sm:mb-0 mb-24">
        <div
          className="bloc-tabs flex flex-row  sm:overflow-hidden sm:mb-[-64px]"
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {tabsData.map((tab, i) => (
            <div
              key={i}
              className={`tabs
          ${
            activeTab === tab.key
              ? "active-tabs  border border-black rounded-full w-28 flex items-center justify-center mx-2 bg-gray-100 whitespace-nowrap"
              : "tabs  border w-28 border-white rounded-full flex items-center justify-center  mx-2 bg-gray-100 whitespace-nowrap"
          }`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="content-tabs">{getContent()}</div>
      </div>
    </>
  );
};

export default Tabs;
