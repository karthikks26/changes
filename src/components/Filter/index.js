import React, { useState, useEffect } from "react";
import "./styles.css";
import { links } from "../../assets/images-links";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useRef } from "react";

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isScrolled]);
  
  const handleDropdownClick = (event, idx) => {
    event.stopPropagation(); // Prevent the click event from reaching the parent
    if (activeDropdown === idx) {
      setActiveDropdown(null);
    } else {
      setSelectedFilter(idx);
      setActiveDropdown(idx);
    }
  };

  const slide = (shift) => {
    const targetScroll = scrl.current.scrollLeft + shift;

    scrl.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth', // Use smooth scrolling
    });

    setScrollX(targetScroll);
  };

  return (
    <header
      className={`fixed top-16 filter-array transition-all ease-in-out duration-300  z-[99999] ${
        isScrolled ? "bg-white" : "bg-white"
      } `}
    >
      <div className="Filter-array" ref={scrl}>
        <div className=" arrow-left">
          <BsArrowLeftCircleFill className="arrow-nav" onClick={() => slide(-250)}/>
        </div>
        {links.map((value, idx) => (
          <div
            key={idx}
            className={`Filter-array-element ${
              idx === selectedFilter ? "selected-array-element" : ""
            }`}
            onClick={(event) => handleDropdownClick(event, idx)}
            onMouseEnter={() => setActiveDropdown(idx)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <img
              src={value.imgSrc}
              alt="NA"
              className="Filter-array-element-img"
            />
            <p className="Filter-array-element-lebel">{value.label}</p>
            {activeDropdown === idx && (
              <div
                className="absolute top-7 left-0 mt-4 w-full bg-white border rounded shadow-md"
                onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
                >
                {/* Your dropdown content goes here */}
                <p className="p-4">Dropdown Content for {value.label}</p>
                <p className="p-4">Another option</p>
              </div>
            )}
            </div>
        ))}
        <div className=" arrow-right">
            <BsArrowRightCircleFill className="arrow-nav arrow-right" onClick={() => slide(+250)} style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}/>
          </div>
      </div>
    </header>
  );
}

export default Filter;
