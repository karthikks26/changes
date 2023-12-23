import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import MobileSearchBar from '../components/MobileSearch/';
import Filter from '../components/Filter/';
import ayatrio_store from "../assets/icon/ayatrio_store.svg"
import { useNavigate } from 'react-router-dom';
// import Splashscreen from '../components/Splashscreen/Splashscreen';
import './HomePage.css';
import PopUp from '../components/PopUp/PopUp';
// import { useDispatch, useSelector } from 'react-redux';
// import {fetchSliderRequest,selectSliderData, selectSliderLoader} from '../Features/slider/sliderSlice';
import { Oval } from 'react-loader-spinner';
import { selectSliderData, selectSliderLoader } from '../Features/Slices/sliderSlice';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  // const dispatch = useDispatch();
  // const sliderData= useSelector(selectSliderData);
  const dispatch = useDispatch();
  const sliderData = useSelector(selectSliderData);
  const loaderx = useSelector(selectSliderLoader);

  useEffect(() => {
    dispatch({ type: 'FETCH_SLIDER_VIEW_REQUEST' });

  }, [dispatch]);

  console.log(loaderx, "loader");
  console.log(sliderData, "sliderData");
  const loader = false
  const navigate = useNavigate();
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  // useEffect(() => {
  //   dispatch(fetchSliderRequest());
  // }, [dispatch]);
  
  // console.log(sliderData)
  // console.log(loader)

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const popUp = localStorage.getItem('popUp');

  if (loader) {
    return (
      <div className='loader slider-container'>
        <Oval
          height={100}
          width={100}
          color="#FF0000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='Creating your Ayatrio Experience'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }

  return (
    <>
      <div className={`fade-in ${isFilterVisible ? 'show-filter' : 'hide-filter'} overflow-x-hidden`}>
        {popUp === 'true' ? null : <PopUp />}
        {/* <Header /> */}
        {/* <MobileSearchBar /> */}
        
          {isFilterVisible && <>
          <Header />
          <MobileSearchBar />
         </>}
         <Filter />
        <Cards />
        <div>
          <button
            type="button"
            className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex -bottom-3 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => navigate('/ayatrio-map')}
          >
            Near Ayotrio <img src={ayatrio_store} alt="" className="header-div-sStore-icon" />
          </button></div>
      </div>
    </>
  );
};

export default HomePage;
