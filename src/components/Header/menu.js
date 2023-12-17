import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import manue from "../../assets/icon/manue.svg"
import "./styles.css";

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
        <img src={manue} alt="" className="seachbar-div2-icon" />
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
          ".MuiPaper-root": { borderRadius: "1rem"},
        }}
      >
        <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        <MenuItem onClick={handleClose} >Login</MenuItem>
        <div style={{ height: "1px", backgroundColor: "grey" }}></div>
        <MenuItem onClick={handleClose} >Airbnb your home</MenuItem>
        <MenuItem onClick={handleClose} >Help Centre</MenuItem>
      </Menu>
    </div>
  );
}
