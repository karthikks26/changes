// Expandedbar.js
import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import mainlogo from "../../assets/ayatriologo.png";

const Expandedbar = ({ searchText, onClose, onSearch }) => {
  const [searchTexte, setSearchText] = useState(searchText);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);
  return (
    <div className="expanded-search-box p-2  bg-white h-310px w-full flex items-center justify-center">
      <div className="flex flex-row  justify-between bg-white rounded-lg w-full h-[300px]">
        <div className="logo">
          <img src={mainlogo} className="w-44 z-30" alt="" />
        </div>
        <div className="searchDiv  flex flex-col justify-between">
          <div className="searchCon relative w-[600px] h-[40px]  bg-[#e5e5e5] rounded-xl ">
            <input
            ref={inputRef}
              type="text"
              placeholder="Search"
              className="search-input  border px-4 h-full w-full ml-8 rounded-xl focus:outline-none"
              value={searchTexte}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchIcon className="absolute top-[18%] left-[1%] " />
          </div>
          <div className="dropdown flex flex-col mb-8 gap-4 ">
            <div className="head text-slate-400">
                <h2>Popular Searches</h2>
            </div>
           <div className="items">
           <div className="dropdown-item font-bold font-sans ">Products</div>
            <div className="dropdown-item font-bold font-sans ">Rooms</div>
            <div className="dropdown-item font-bold font-sans ">Magazine</div>
            <div className="dropdown-item font-bold font-sans ">Virtual Experience</div>
           </div>
          </div>
        </div>
        <div className="close text-lg mr-2 cursor-pointer" onClick={onClose}>
          Close
        </div>
      </div>
    </div>
  );
};

export default Expandedbar;
