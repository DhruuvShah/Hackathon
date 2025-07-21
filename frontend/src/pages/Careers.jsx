import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';

const jobOpenings = [
    {
        title: 'Senior Frontend Engineer',
        location: 'Remote (US)',
        department: 'Engineering',
    },
    {
        title: 'Product Manager, Mobile Apps',
        location: 'Los Angeles, CA',
        department: 'Product',
    },
    {
        title: 'Content Strategist, Fitness',
        location: 'Remote (Global)',
        department: 'Content',
    },
    {
        title: 'UI/UX Designer',
        location: 'Los Angeles, CA',
        department: 'Design',
    },
];

const Careers = () => (
    <div className="pt-20 bg-black text-white">
        {/* --- Hero Section --- */}
        <section 
            className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Join Our Mission
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Help us empower people to live well by energizing their every day. We’re looking for passionate, innovative people to join our global team.
                    </p>
                </RevealOnScroll>
            </div>
        </section>

        {/* --- Open Positions Section --- */}
        <section className="py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Current Openings</h2>
                </RevealOnScroll>
                <div className="mt-12 space-y-6">
                    {jobOpenings.map((job, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className="glass-effect rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                    <p className="text-gray-400 mt-1">{job.department} • {job.location}</p>
                                </div>
                                <Link to="#" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex-shrink-0">
                                    Apply Now
                                </Link>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default Careers;