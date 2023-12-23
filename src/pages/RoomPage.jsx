import React, { useEffect, useState } from "react";
import RoomPageHeader from "../components/Room/RoomPageHeader";
import "../components/Room/styles.css";
import RoomImageList from "../components/Room/RoomImageList";
import RoomInfo from "../components/Room/RoomInfo";
import Reviews from "../components/Room/Other/Reviews";
import Header from "../components/Header";

const RoomPage = () => {
  const [howMuchScrolled, setHowMuchScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHowMuchScrolled(window.scrollY);
      } else {
        setHowMuchScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [howMuchScrolled]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-rooms flex sm:block items-center ">
        <Header />
        <div className="sm:mx-16 mx-2">
          <RoomImageList />
          <RoomInfo />
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default RoomPage;
