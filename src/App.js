import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ProductPage from "./pages/ProductPage";
import MagazinePage from "./pages/MagazinePage";
import RoomPage from "./pages/RoomPage";
import CheckoutPage from "./pages/CheckoutPage";
import { FormProvider } from "./components/Checkoutcomp/FormContext";
import Shipping from "./pages/Shipping";
import Paymentpage from "./pages/Paymentpage";
import Virtualexperiance from "./pages/Virtualexperiance";

function App() {
  return (
    <>
      <FormProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ayatrio-map" element={<MapPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment' element={<Paymentpage />} />
          <Route path='/virtualexperience/*' element={<Virtualexperiance />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </FormProvider>
    </>
  );
}

export default App;
