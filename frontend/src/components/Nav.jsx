import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/Logo_-_Horizontal.png.webp'; // Make sure this path is correct

// --- SVG Icon Components ---
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.118 1.243H5.502c-.655 0-1.188-.585-1.118-1.243l1.263-12A1.125 1.125 0 015.502 7.5h12.996c.613 0 1.128.47.158.993z" />
    </svg>
);

const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const HamburgerIcon = () => (
     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { cartItems } = useCart();

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleLogout = () => {
        dispatch(logout());
        setIsOpen(false);
    }

    const linkClass = ({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`;
    const mobileLinkClass = "block py-2 text-lg " + linkClass({isActive: false});

    return (
        <header id="navbar" className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
            <nav className="glass-effect flex items-center justify-between p-3 rounded-2xl shadow-lg">
                <Link to="/" className="flex-shrink-0">
                    <img src={logo} alt="Centr Logo"/>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/programs" className={linkClass}>Programs</NavLink>
                    <NavLink to="/shop" className={linkClass}>Shop</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                </div>

                <div className="flex items-center gap-4">
                    {/* Cart Icon */}
                    <Link to="/cart" className="relative text-gray-400 hover:text-white transition-colors">
                        <CartIcon />
                        {totalItemsInCart > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {totalItemsInCart}
                            </span>
                        )}
                    </Link>

                    {/* Desktop: Profile Icon or Login Button */}
                    <div className="hidden lg:flex">
                        {userInfo ? (
                            <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">
                                <ProfileIcon />
                            </Link>
                        ) : (
                            <Link to="/login" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-xl transition-all transform hover:scale-105">
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
            
            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="lg:hidden mt-2 glass-effect rounded-2xl p-6">
                    <nav className="flex flex-col space-y-4">
                        <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/programs" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Programs</NavLink>
                        <NavLink to="/shop" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Shop</NavLink>
                        <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
                        
                        {userInfo && (
                             <NavLink to="/profile" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Profile</NavLink>
                             
                        )}

                        <div className="border-t border-white/10 pt-4 mt-4">
                            {userInfo ? (
                                <button onClick={handleLogout} className="w-full text-left text-lg text-red-400 hover:text-red-300">
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-5 rounded-xl transition-colors">
                                    Login
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
export default Nav;
