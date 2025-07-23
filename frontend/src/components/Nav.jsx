import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/Logo_-_Horizontal.png.webp';
import gsap from 'gsap';
// ICONS
import { BsCart2 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { LiaDumbbellSolid } from "react-icons/lia";
import { BsShop, BsInfoCircle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const NAV_TABS = [
  { name: "Home", to: "/", icon: IoHomeOutline },
  { name: "Programs", to: "/programs", icon: LiaDumbbellSolid },
  { name: "Shop", to: "/shop", icon: BsShop },
  { name: "About", to: "/about", icon: BsInfoCircle }
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useCart();
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  // Tooltip always below icon, centered
  const getTooltipStyle = (tabIndex) => {
    if (typeof window === "undefined") return {};
    const tabCount = NAV_TABS.length;
    if (tabIndex === 0) return { left: '0', transform: 'translateX(0)' };
    if (tabIndex === tabCount - 1) return { right: '0', left: 'auto', transform: 'translateX(0)' };
    return { left: '50%', transform: 'translateX(-50%)' };
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <header id="navbar" ref={navbarRef} className="fixed top-3 left-1/2 -translate-x-1/2 w-[96%] max-w-6xl z-50">
      <nav className="glass-effect flex items-center justify-between p-2 rounded-xl shadow-lg min-h-[50px]">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Centr Logo"/>
        </Link>
        {/* --- Desktop Nav --- */}
        <div className="hidden lg:flex items-center gap-6 relative">
          {NAV_TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const active = location.pathname === tab.to;
            return (
              <div
                key={tab.name}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered(tab.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link to={tab.to} className="flex items-center group p-1.5">
                  <Icon className={`w-6 h-6 transition-colors duration-200 ${active ? "text-blue-500" : "text-gray-300 group-hover:text-white"}`} />
                </Link>
                {/* Animated tooltip label BELOW icon */}
                <AnimatePresence>
                  {(hovered === tab.name) && (
                    <motion.div
                      key="tooltip"
                      initial={{ opacity: 0, y: -6, scale: 0.92 }}
                      animate={{ opacity: 1, y: 24, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute z-50 px-3 py-1 mt-1 rounded-md bg-slate-900/95 text-white text-[14px] font-semibold shadow-xl pointer-events-none select-none border border-blue-800"
                      style={getTooltipStyle(idx)}
                    >
                      {tab.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Cart & Profile */}
        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative text-gray-400 hover:text-white transition-colors">
            <BsCart2 className="w-6 h-6" />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[11px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>
          <div className="hidden lg:flex">
            {userInfo ? (
              <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">
                <ProfileIcon />
              </Link>
            ) : (
              <Link to="/login" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded-lg transition-all transform hover:scale-105 text-[15px]">
                Login
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>
      {/* --- Mobile Menu --- */}
      {isOpen && (
        <>
          {/* Fullscreen Black Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/80"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className="fixed left-1/2 top-12 z-50 w-[96%] max-w-sm glass-effect rounded-2xl p-6"
            style={{
              transform: "translateX(-50%)",
              background: "rgba(24,24,28,0.93)"
            }}
            onClick={e => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3">
              {NAV_TABS.map(tab => (
                <Link to={tab.to} className="block py-2 text-base text-gray-400 hover:text-white" onClick={() => setIsOpen(false)} key={tab.name}>
                  {tab.name}
                </Link>
              ))}
              {userInfo && (
                <Link to="/profile" className="block py-2 text-base text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Profile</Link>
              )}
              <div className="border-t border-white/10 pt-3 mt-3">
                {userInfo ? (
                  <button onClick={() => { dispatch(logout()); setIsOpen(false); }} className="w-full text-left text-base text-red-400 hover:text-red-300">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Login
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const HamburgerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);
const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export default Nav;
