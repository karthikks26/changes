import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rooms from './comps/Rooms';
import Activities from './comps/Activities';
import Budget from './comps/Budget';
import Content1 from './comps/Content1';
import Content2 from './comps/Content2';
import Content3 from './comps/Content3';

const Maincontainer = () => {
  return (
    <Routes>
      <Route path="vrooms" element={<Rooms />} />
      <Route path="activities" element={<Activities />} />
      <Route path="budget" element={<Budget />} />
      <Route path="content1" element={<Content1 />} />
      <Route path="content2" element={<Content2 />} />
      <Route path="content3" element={<Content3 />} />
    </Routes>
  );
};

export default Maincontainer;
