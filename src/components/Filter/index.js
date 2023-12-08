import React, { useState, useEffect } from "react";
import "./styles.css";
import { links } from "../../assets/images-links";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useRef } from "react";
import { Link } from "react-router-dom";
import Skeletonlogo from "../Skeleton/Skeletonlogo";
import Skeletonicons from "../Skeleton/Skeletonicons";
function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);
  const [fakeLoading,setFakeLoading]=useState(false)
  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(true)
    }, 2500)
  }, [])

  const handleDropdownClick = (event, idx) => {
    event.stopPropagation(); 
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
      <div className="filter">
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
            {
              value && fakeLoading?<img
              src={value.imgSrc}
              alt="NA"
              className="Filter-array-element-img"
            />:<Skeletonicons/>
            }
            {value && fakeLoading?<p className="Filter-array-element-lebel">{value.label}</p>:""}
            {activeDropdown === idx && (
              <div
                className="absolute top-7 left-0 mt-4 w-full bg-white border rounded shadow-md flex flex-col"
                onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
                >
                {/* Your dropdown content goes here */}
                <p className="p-4">Dropdown Content for {value.label}</p>
                <Link className="p-4" to="/products">Another option 1</Link>
                <Link className="p-4" to="/products">Another option 2</Link>
                <Link className="p-4" to="/products">Another option 3</Link>
              </div>
            )}
            </div>
        ))}
        <div className=" arrow-right">
            <BsArrowRightCircleFill className="arrow-nav arrow-right" onClick={() => slide(+250)} style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}/>
          </div>
      </div>
      <div className="after-arrow">
      <div className="at">Filters</div>
        <Link to="/magazine">
        <div className="at">Find the Right Floor</div>
        </Link>
       
      </div>
      </div>
    </header>
  );
}

export default Filter;
