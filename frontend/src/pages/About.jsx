import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => (
    <section id="about" className="py-20 sm:py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
                <img src="https://placehold.co/120x120/1E293B/FFFFFF?text=C" alt="Centr Logo" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-gray-700" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                    We believe that everyone holds the key to unlock their ultimate potential. We provide the tools, guidance, and community to help you build a lasting, healthy lifestyle through technology and human-centric design.
                </p>
            </RevealOnScroll>
        </div>
    </section>
);
export default About;