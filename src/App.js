import "./App.css";
import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ProductPage from "./pages/ProductPage";
import Magazine from "./pages/MagazinePage";
import RoomPage from "./pages/RoomPage";
import MagazinePage from "./pages/MagazinePage";



function App() {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/ayatrio-map" element={<MapPage/>} /> 
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/magazine" element={<MagazinePage/>} />
        <Route path="/rooms" element={<RoomPage/>} />
      </Routes>
    </>
  );
}

export default App;
