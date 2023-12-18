import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CiCirclePlus } from "react-icons/ci";
import { GoCircle } from "react-icons/go";
import { TiTick } from "react-icons/ti";
const Button = () => {
  // // Use state to track whether the tick is visible
  // const [showTick, setShowTick] = useState(false);

  // const handleClick = () => {
  //   // Toggle the showTick state based on the current selection
  //   setShowTick(!showTick);
  //   // Call the onSelect function to update the selected state
  //   onSelect();
  // };
  return (
    <div>
      <button className="absolute top-0 text-center right-0 border-none rounded-[50%] z-100 ">
        <CiCirclePlus size={30}/>
      </button>
    </div>
  );
};

export default Button;
