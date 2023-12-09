import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Maincontainer from '../components/Virtualexperiance/Maincontainer';

const Virtualexperiance = () => {
  return (
    <Routes>
      <Route path="/*" element={<Maincontainer />} />
    </Routes>
  );
};

export default Virtualexperiance;
