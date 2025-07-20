import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import logo from '../assets/images/Logo_-_Horizontal.png.webp';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        setIsOpen(false);
    }

    const linkClass = ({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`;
    const mobileLinkClass = "block py-2 " + linkClass({isActive: false});

    return (
        <header id="navbar" className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
            <nav className="glass-effect flex items-center justify-between p-3 rounded-2xl shadow-lg">
                <Link to="/"><img src={logo} alt="Centr Logo" /></Link>
                <div className="lg:flex items-center gap-8">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/programs" className={linkClass}>Programs</NavLink>
                    <NavLink to="/shop" className={linkClass}>Shop</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                </div>
                <div className="lg:flex items-center">
                    {userInfo ? (
                         <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-5 rounded-xl transition-all">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-xl transition-all transform hover:scale-105">
                            Login
                        </Link>
                    )}
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="lg:hidden mt-2 glass-effect rounded-2xl p-4">
                    <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>HOME</NavLink>
                    <NavLink to="/programs" className={mobileLinkClass} onClick={() => setIsOpen(false)}>PROGRAMS</NavLink>
                    <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>ABOUT</NavLink>
                    <NavLink to="/shop" className={mobileLinkClass} onClick={() => setIsOpen(false)}>SHOP</NavLink>
                    <div className="mt-4 border-t border-white/10 pt-4">
                        {userInfo ? (
                            <button onClick={handleLogout} className="w-full text-center bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-5 rounded-xl">
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-xl">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};
export default Nav;
