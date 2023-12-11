import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import MobileSearchBar from '../components/MobileSearch/';
import Filter from '../components/Filter/';
import { Map } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen/Splashscreen';
import './HomePage.css';
import PopUp from '../components/PopUp/PopUp';

const HomePage = () => {
  const navigate = useNavigate();
  const [isFilterVisible, setIsFilterVisible] = useState(true);

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

  return (
    <>
      <div className={`fade-in ${isFilterVisible ? 'show-filter' : 'hide-filter'}`}>
        {popUp === 'true' ? null : <PopUp />}
        <Header />
        <MobileSearchBar />
        {isFilterVisible && <Filter />}
        <Cards />
        <button
          type="button"
          className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bottom-0 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => navigate('/ayatrio-map')}
        >
          Show Map <Map className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default HomePage;
