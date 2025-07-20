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

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:id" element={<ProgramDetails />} />
      <Route element={<UnauthWrapper />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
export default MainRoutes;