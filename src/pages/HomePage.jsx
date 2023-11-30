import React from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import MobileSeachBar from "../components/MobileSearch/";
import Filter from "../components/Filter/"
import { Button } from '@mui/material';
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
      <Button style={{textAlign:"center",margin:"20px auto"}} variant="outlined" startIcon={<Map />} onClick={()=>navigate('/ayatrio-map')}>
        View Map
      </Button>
    </>
  )
}

export default HomePage