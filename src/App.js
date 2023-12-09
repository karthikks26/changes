import "./App.css";
import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ProductPage from "./pages/ProductPage";
import Magazine from "./pages/MagazinePage";
import RoomPage from "./pages/RoomPage";
import MagazinePage from "./pages/MagazinePage";
import CheckoutPage from "./pages/CheckoutPage";
import { FormProvider } from "./components/Checkoutcomp/FormContext";
import Shipping from "./pages/Shipping";
import Paymentpage from "./pages/Paymentpage";

function App() {
  
  return (
    <>
    <FormProvider>
    <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/ayatrio-map" element={<MapPage/>} /> 
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/magazine" element={<MagazinePage/>} />
        <Route path="/rooms" element={<RoomPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path='/shipping' element={<Shipping/>} />
        <Route path='/payment' element={<Paymentpage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </FormProvider>
    </>
  );
}

export default App;
