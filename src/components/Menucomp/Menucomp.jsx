import React from "react";
import Featured from "../../Dropitems/Featured";
import Styles from "../../Dropitems/Styles";
import Colours from "../../Dropitems/Colours";
import Rooms from "../../Dropitems/Rooms";
import Collections from "../../Dropitems/Collections";

const Menucomp = () => {
  return (
    <>
      <div
        className="absolute dropdown-content top-7 left-0 mt-10 w-full bg-white shadow-md flex flex-col
transition-all ease-linear duration-2000 
"
        onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
      >
        <div className="px-[50px] my-5">
          <h2 className="main_heading">Shop Wallpapers</h2>
          <div className="filter_container flex gap-32">
            <Featured />
            <Collections />
            <Styles />
            <Colours />
            <Rooms />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menucomp;
