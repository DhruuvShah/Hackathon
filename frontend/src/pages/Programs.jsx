import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

export const programsData = [
    { id: 'strength', title: "Foundation Strength", description: "Build a powerful physique with our foundational strength and conditioning program.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop" },
    { id: 'yoga', title: "Mindful Movement", description: "Enhance flexibility, balance, and mental clarity with guided yoga and meditation.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" },
    { id: 'hiit', title: "Ignite HIIT", description: "Torch calories and boost your metabolism with high-intensity interval training sessions.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" }
];

const Programs = () => (
    <section id="programs" className="py-20 sm:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Tailored Fitness Programs</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        From strength training to mindfulness, find the perfect program designed to help you achieve your goals.
                    </p>
                </div>
            </RevealOnScroll>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programsData.map((program, index) => (
                    <RevealOnScroll key={program.id} delay={index * 200}>
                        <Link to={`/programs/${program.id}`}>
                            <div className="glass-effect rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2">
                                <img src={program.img} alt={program.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                                    <p className="text-gray-300 mt-2">{program.description}</p>
                                </div>
                            </div>
                        </Link>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
);
export default Programs;