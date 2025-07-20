import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import ProgramDetails from '../pages/ProgramDetails';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AuthWrapper from './AuthWrapper';
import UnauthWrapper from './UnauthWrapper';
import ShopEquipments from '../pages/ShopEquipments';
import Hyrox from '../pages/Hyrox';
import Cardio from '../pages/Cardio'; 
import HomeGyms from '../pages/HomeGyms';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:id" element={<ProgramDetails />} />
      <Route path="/shop" element={<ShopEquipments />} />
      <Route path="/hyrox" element={<Hyrox />} />
      <Route path="/cardio" element={<Cardio />} />
      <Route path="/home-gyms" element={<HomeGyms />} />
      <Route element={<UnauthWrapper />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
