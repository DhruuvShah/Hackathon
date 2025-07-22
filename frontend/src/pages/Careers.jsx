import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { toast } from "react-toastify";

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

const Careers = () => {
  const handleApply = () => {
    toast.success("Applied Successfully");
  };

  return (
    <div className="pt-20 bg-black text-white">
      {/* --- Hero Section --- */}
      {/* ... */}
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
                  <button
                    type="button"
                    onClick={handleApply}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex-shrink-0 hover:cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
