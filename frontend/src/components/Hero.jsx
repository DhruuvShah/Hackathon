import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => (
    <section id="hero" className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://media1.popsugar-assets.com/files/thumbor/ZCEsLlGyZ75tIfXGFsiWYvBfGKg=/6495x4024/top/filters:format_auto():quality(85):extract_cover()/2022/09/27/985/n/1922729/tmp_tCCALX_b3ed58eba0ba50f6_Chris_Hemsworth_Centr_Power_2_1_.jpg')" }}>
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