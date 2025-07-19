import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const statsData = [
    { value: "10k+", label: "Active Members", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { value: "50+", label: "Expert Trainers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg> },
    { value: "98%", label: "Satisfaction Rate", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg> },
    { value: "100+", label: "Fitness Programs", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M19 21 9 11l-4 4-1.5-1.5L9 8 21 3l-1.5-1.5L14 7l-5-5L7.5 3.5 9 5l-4 4L3 7.5 2 9l2 2-2 2 1.5 1.5L6 13l4 4-2 2 1.5 1.5Z"></path></svg> }
];

const Stats = () => (
    <section id="stats" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {statsData.map((stat, index) => (
                    <RevealOnScroll key={index} delay={index * 100}>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600/10 mx-auto mb-4">
                            {stat.icon}
                        </div>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-gray-400">{stat.label}</p>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
);
export default Stats;