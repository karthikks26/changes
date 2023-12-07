import React,{ useEffect, useState } from "react";
import RoomPageHeader from '../components/Room/RoomPageHeader'
import '../components/Room/styles.css'
import RoomImageList from '../components/Room/RoomImageList'
import RoomInfo from '../components/Room/RoomInfo'
import Reviews from '../components/Room/Other/Reviews'
import Header from '../components/Header'

const RoomPage = () => {

  const [howMuchScrolled,setHowMuchScrolled] = useState(0);

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

  return (
    <>
    <Header howMuchScrolled={howMuchScrolled} />
    <div className='mx-16'>
      {
        howMuchScrolled < 20 ? '' : (
          <RoomPageHeader howMuchScrolled={howMuchScrolled} />
        )
      }
      <RoomImageList/>
      <RoomInfo/>
      <Reviews/>
    </div>
    </>
  )
}

export default RoomPage