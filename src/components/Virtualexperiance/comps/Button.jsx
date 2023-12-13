import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CiCirclePlus } from "react-icons/ci";
import { GoCircle } from "react-icons/go";
import { TiTick } from "react-icons/ti";
const Button = ({ isSelected, onSelect }) => {
  // Use state to track whether the tick is visible
  const [showTick, setShowTick] = useState(false);

  const handleClick = () => {
    // Toggle the showTick state based on the current selection
    setShowTick(!showTick);
    // Call the onSelect function to update the selected state
    onSelect();
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="absolute top-5 text-center right-5 bg-white border-none rounded-[50%] z-100 "
      >
        {showTick && <TiTick size={25} color="#2F4F4F" />}
        {!showTick && <GoCircle size={30} color="white" />}
      </button>
    </div>
  );
};

export default Button;
