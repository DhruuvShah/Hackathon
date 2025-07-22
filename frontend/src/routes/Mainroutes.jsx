import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import ProgramDetails from '../pages/ProgramDetails';
import Login from '../pages/Login';
import AuthWrapper from './AuthWrapper';
import UnauthWrapper from './UnauthWrapper';
import ShopEquipments from '../pages/ShopEquipments';
import Hyrox from '../pages/Hyrox';
import Cardio from '../pages/Cardio';
import HomeGyms from '../pages/HomeGyms';
import Profile from '../pages/Profile';
import Weights from '../pages/Weights';
import BenchesRacks from '../pages/BenchesRacks';
import Accessories from '../pages/Accessories';
import PageNotFound from '../pages/PageNotFound';
import ProductDetails from '../pages/ProductDetails';
import Support from '../pages/Support';
import Privacy from '../pages/Privacy';
import Careers from '../pages/Careers';
import Cart from '../pages/Cart';




const MainRoutes = () => {
  return (
    <Routes>
      {/* --- Public Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:id" element={<ProgramDetails />} />
      <Route path="/shop" element={<ShopEquipments />} />
      <Route path="/hyrox" element={<Hyrox />} />
      <Route path="/cardio" element={<Cardio />} />
      <Route path="/home-gyms" element={<HomeGyms />} />
      <Route path="/weights" element={<Weights />} />
      <Route path="/benches-racks" element={<BenchesRacks />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/support" element={<Support />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/cart" element={<Cart />} />


      {/* --- Unauthenticated Routes --- */}
      <Route element={<UnauthWrapper />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* --- Authenticated Routes --- */}
      <Route element={<AuthWrapper />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />

      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;


