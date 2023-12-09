import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Button = () => {
  return (
    <button className="absolute top-[1px] bg-slate-100 text-center right-[1px] px-2 py-1 z-100 rounded-[50%] border border-solid border-gray-900">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default Button;
