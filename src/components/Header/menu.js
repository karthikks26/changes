import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import manue from "../../assets/icon/manue.svg";
import "./styles.css";
import Menucomp from "../Menucomp/Menucomp";
import Featured from "../../Dropitems/Featured";
import Styles from "../../Dropitems/Styles";
import Colours from "../../Dropitems/Colours";
import Rooms from "../../Dropitems/Rooms";
import Collections from "../../Dropitems/Collections";
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
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="icon_container"
      >
        <img src={manue} alt="" className="header-div-icon" />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": { borderRadius: "1rem" },
        }}
      >
        {/* <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        <MenuItem onClick={handleClose} >Login</MenuItem>
        <div style={{ height: "1px", backgroundColor: "grey" }}></div>
        <MenuItem onClick={handleClose} >Airbnb your home</MenuItem>
        <MenuItem onClick={handleClose} >Help Centre</MenuItem> */}
      </Menu>
      {anchorEl ? (
        <>
          <div
            className="absolute dropdown-content top-20 left-0 mt-10 w-full bg-white shadow-md flex flex-col
transition-all ease-linear duration-2000 
"
            onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
          >
            <div className="px-[30px] my-5">
              <div className="filter_container flex gap-32">
                <div className="menuLog flex flex-col gap-4">
                  <Link to="/virtualexperience/vrooms">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                      Virtual Experience
                    </button>
                  </Link>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                    Sign In
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                    Sign Up
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
                    Airbnb your home
                  </button>{" "}
                  <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-blue-700">
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
