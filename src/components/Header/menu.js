import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import manue from "../../assets/icon/manue.svg";
import "./styles.css";
import Menucomp from "../Menucomp/Menucomp";
import Featured from "../../Dropitems/Featured";
import { GrMenu } from "react-icons/gr";
import Styles from "../../Dropitems/Styles";
import Colours from "../../Dropitems/Colours";
import Rooms from "../../Dropitems/Rooms";
import Collections from "../../Dropitems/Collections";
import { MenuBook } from "@mui/icons-material";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <GrMenu className="font-bold text-2xl" onClick={()=>setAnchorEl(!anchorEl)}/>
      {anchorEl ? (
        <>
          <div
            className="absolute dropdown-content z-50 h-[82vh] overflow-auto top-20 left-0 mt-10 w-full bg-white shadow-md flex flex-col
transition-all ease-linear duration-2000 
"
            onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
          >
            <div className="px-[30px] my-5">
              <div className="filter_container flex gap-32">
                <div className="menuLog flex flex-col gap-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                    Sign In
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-red-600">
                    Sign Up
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-green-600 hover:text-white">
                  Airbnb your home
                  </button> <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-yellow-600 hover:text-white">
                  Help Centre
                  </button>
                </div>

                <Collections />
                <Styles />
                <Colours />
                <Rooms />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
