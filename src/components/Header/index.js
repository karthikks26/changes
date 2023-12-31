import React from "react";
import "./styles.css";
import mainlogo from "../../assets/ayatriologo.png";
import adtocart from "../../assets/icon/adtocart.svg";
import liketocart from "../../assets/icon/like.svg";
import userprofile from "../../assets/icon/profile.svg";
import search from "../../assets/icon/search.svg";
import ayatrio_store from "../../assets/icon/ayatrio_store.svg";
import SimpleBottomNavigation from "./bottombar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "./menu";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Login } from "@mui/icons-material";
import Expandedbar from "./Expandedbar";
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux'
import { searchProductsRequest } from "../../Features/search/searchSlice";

function Header({ howMuchScrolled }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/auth/login/sucess",
        {
          withCredentials: true,
        }
      );

      setUserdata(response.data.user);
      console.log("user: ", response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  const [searchQuery,setSearchQuery] = useState('');
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(searchProductsRequest(searchQuery));
    console.log("search called");
  },[dispatch,searchQuery])

  
  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };
    fetchData();
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
    setSearchQuery("");
  };
  const loginStatus = localStorage.getItem("Login");
  console.log(loginStatus);

  return (
    <header
      className={`fixed w-full sm:bg-none  top-0 transition-all ease-in-out duration-300  z-[9999] ${
        isScrolled ? "bg-white" : "bg-white"
      } ${howMuchScrolled > 20 ? "hidden" : ""}`}>
      {!searchQuery ? (
        <div className="navbar flex justify-evenly items-center w-full">
          <div className="left flex items-center sm:gap-5 ">
            <div className="profile-menu font-bold ">
              <Menu />
            </div>
            <Link to="/virtualexperience/vrooms">
              <div className=" text-costom-co">Virtual Exprience </div>
            </Link>

            <div className=" text-costom-co">New Arivals</div>
          </div>
          <div className="mainlogo">
            <Link to="/home">
              <img src={mainlogo} alt="logo" className="w-48 m-2" />
            </Link>
          </div>
          <div className="right flex items-center gap-4">
            {/* map-icon */}

            <div className="searchbar pt-4 w-40 h-10 items-right justify-end">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                placeholder="Search"
                className="searchTerm relative font-semibold placeholder-gray-400 w-[13rem] h-10 bg-[#efefef] p-4 rounded-full active:border-none focus:outline-none"
              />
              <img
                src={search}
                alt=""
                className="seachbar-div2-icon absolute z-10"
              />
            </div>
            <div className="icon_container cursor-pointer">
              <img src={liketocart} alt="" className="header-div-icon" />
              <div className="cart-notification">12</div>
            </div>

            <div
              className="icon_container cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <img src={adtocart} alt="" className="header-div-icon" />
              <div className="cart-notification">3</div>
            </div>
            {loginStatus === "true" ? (
              <div
                className="pro flex icon_container "
                onClick={handleProfileNav}
              >
                <img src={userprofile} alt="" className="header-div-icon" />
              </div>
            ) : (
              <img
                src={userprofile}
                onClick={handleLoginNav}
                alt=""
                className="header-div-icon"
              />
            )}
          </div>

          <div className="map-icon">
            <button
              type="button"
              className="flex items-center justify-center  z-10  text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => navigate("/ayatrio-map")}
            >
              <img
                src={ayatrio_store}
                alt=""
                className="header-div-sStore-icon"
              />
            </button>
          </div>
        </div>
      ) : (
        <Expandedbar searchQuery={searchQuery} onClose={onClose} />
      )}
    </header>
  );
}
export default Header;
