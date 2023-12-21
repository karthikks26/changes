// Expandedbar.js
import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/icon/search.svg"
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
          <div className="searchCon relative w-[600px] h-[40px]  bg-[#efefef] rounded-full ">
            <input
            ref={inputRef}
              type="text"
              placeholder="Search"
              className="search-input px-4 h-full w-full ml-8 bg-transparent focus:outline-none"
              value={searchTexte}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img src={search} alt="" className=" search_icon_mar w-5 mx-1 my-1.5 top-[18%] left-[1%]  absolute z-10" />
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
        <div className="close text-base font-medium mr-4 cursor-pointer" onClick={onClose}>
          Close
        </div>
      </div>
    </div>
  );
};

export default Expandedbar;
