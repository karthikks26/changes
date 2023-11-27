import "./App.css";
import React, { useState } from 'react';
import Header from "./components/Header";
import MobileSeachBar from "./components/MobileSearch/";
import Filter from "./components/Filter/"
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Popup from "./components/Reviews/PopUp";

function App() {
  return (
    <div>
      <Header />
      <MobileSeachBar />
      <Filter />
      <Cards/>
    </div>
  );
}

export default App;
