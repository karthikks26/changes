import React from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import MobileSeachBar from "../components/MobileSearch/";
import Filter from "../components/Filter/"
import { Map } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <>
     <Header />
      <MobileSeachBar />
      <Filter />
      <Cards/>
      <button type="button" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bottom-2 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>navigate('/ayatrio-map')}>Show Map <Map className='ml-2' /> </button>
    </>
  )
}

export default HomePage