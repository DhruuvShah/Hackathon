import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => (
    <section id="hero" className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
            <RevealOnScroll>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">Redefine Your <span className="gradient-text">Potential</span></h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">Experience the pinnacle of personalized fitness. Our programs adapt to you, pushing your limits and unlocking peak performance.</p>
                <RouterLink to="/programs" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30">Start Your Journey</RouterLink>
            </RevealOnScroll>
        </div>
    </section>
);
export default Hero;