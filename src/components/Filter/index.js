import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { links } from "../../assets/images-links";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Collections from '../../Dropitems/Collections'
import Styles from '../../Dropitems/Styles'
import Colours from '../../Dropitems/Colours'
import Rooms from '../../Dropitems/Rooms'
import Featured from '../../Dropitems/Featured'

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

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
      className={`fixed top-16  filter-array transition-all ease-in-out duration-300  z-[20] ${
        isScrolled ? "bg-white" : "bg-white"
      } `}
    >
      <div className="filter">
        <div className="Filter-array" ref={scrl}>
          <div className={`arrow-left ${scrollX === 0 ? 'hidden' : ''}`}>
            <BsArrowLeftCircleFill className="arrow-nav" onClick={() => slide(-250)} />
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
              {value
              && (
                <p className="Filter-array-element-lebel">{value.label}</p>
              )}
              
              {activeDropdown === idx && (
                <div
                  className="absolute dropdown-content top-7 left-0 mt-8 w-full bg-white shadow-md flex flex-col
                 transition-all ease-linear duration-2000 
                  "
                  onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
                >

      <div className='px-[50px] my-5'>
      <h2 className='main_heading'>Shop Wallpapers</h2>
      <div className='filter_container flex gap-32'>
        <Featured />
        <Collections />
        <Styles />
        <Colours />
        <Rooms />
       
      </div>
    </div>

                </div>
              )}
            </div>
          ))}
          <div className=" arrow-right">
            <BsArrowRightCircleFill className="arrow-nav arrow-right" onClick={() => slide(+250)} style={{ overflowX: 'auto', scrollBehavior: 'smooth' }} />
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
