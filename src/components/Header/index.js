import React from "react";
// import "./styles.css";
import mainlogo from "../../assets/ayatriologo.png";
import adtocart from "../../assets/icon/adtocart.svg"
import liketocart from "../../assets/icon/like.svg"
import search from "../../assets/icon/search.svg"
import SimpleBottomNavigation from "./bottombar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "./menu";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Login } from "@mui/icons-material";
import Expandedbar from "./Expandedbar";
import axios from "axios"

function Header({ howMuchScrolled }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/login/sucess", {
        withCredentials: true,
      });

      setUserdata(response.data.user);
      console.log("user: ", response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  
  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const handleLoginNav = () => {
    navigate("/login");
  };
  const handleProfileNav = () => {
    console.log("Profile");
    navigate("/profile");
  };
  const onClose = () => {
    setSearchText("");
  };
  const loginStatus = localStorage.getItem("Login");
  console.log(loginStatus);

  return (
    <header
      className={`fixed w-full  top-0 transition-all ease-in-out duration-300  z-[9999] ${
        isScrolled ? "bg-white" : "bg-white"
      } ${howMuchScrolled > 20 ? "hidden" : ""}`}>
      {!searchText ? (
        <div className="navbar flex justify-evenly items-center w-full">
          <div className="left flex items-center gap-5 ">
            <div className="profile-menu font-bold ">
              <Menu />
            </div>
            <Link to="/virtualexperience/vrooms">
              <div className=" text-costom-co">Virtual Exprience </div>
            </Link>

            <div className=" text-costom-co">New Arivals</div>
          </div>
          <div className="middle">
            <Link to="/home">
              <img src={mainlogo} alt="logo" className="w-48 m-2" />
            </Link>
          </div>
          <div className="right flex items-center gap-4">
            <div className="searchbar pt-4 w-40 h-10 items-right justify-end">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchText}
                placeholder="Search"
                className="searchTerm relative w-[13rem] h-10 bg-[#efefef] p-4 rounded-full active:border-none focus:outline-none"
              />
              <img src={search} alt="" className="seachbar-div2-icon absolute z-10" />
            </div>
            <div className="h-10 w-10 cursor-pointer">

                    <img src={liketocart} alt="" className="seachbar-div2-icon"/>
             
            </div>

            <div className="h-10 w-10 cursor-pointer" onClick={()=>navigate('/cart')}>
                    <img src={adtocart} alt="" className="seachbar-div2-icon" />
            </div>
            {loginStatus === "true" ? (
              <div className="pro flex  " onClick={handleProfileNav}>
                <AccountCircleIcon />
              </div>
            ) : (
              <AccountCircleIcon onClick={handleLoginNav} />
            )}
          </div>
        </div>
      ) : (
        <Expandedbar searchText={searchText} onClose={onClose} />
      )}
    </header>
  );
}
export default Header;
