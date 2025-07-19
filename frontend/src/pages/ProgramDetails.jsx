import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { programsData } from './Programs'; // Import mock data

const ProgramDetails = () => {
    const { id } = useParams();
    // In a real app, you might fetch this by ID. Here we find it.
    const program = programsData.find(p => p.id === id);

    const programDetailsContent = {
        strength: "Our Foundation Strength program is a 12-week progressive plan designed to build muscle, increase power, and improve your core lifts. You will focus on compound movements like squats, deadlifts, and bench presses, supplemented with accessory work to ensure balanced development. Suitable for intermediate lifters.",
        yoga: "This program combines Vinyasa yoga flows with deep stretching and guided meditation to create a holistic mind-body experience. Improve your flexibility, calm your nervous system, and build functional strength over 8 weeks. Perfect for all fitness levels.",
        hiit: "Get ready to sweat with Ignite HIIT. These 30-minute sessions are designed for maximum calorie burn and metabolic conditioning. Using a combination of bodyweight exercises and explosive movements, this 6-week program will push your cardiovascular limits and transform your physique."
    };

    if (!program) {
        return (
            <div className="py-20 sm:py-24 pt-32 text-center">
                <h2 className="text-2xl text-white">Program not found!</h2>
                <RouterLink to="/programs" className="text-blue-400 hover:underline mt-4 inline-block">Back to Programs</RouterLink>
            </div>
        );
    }

    return (
        <section className="py-20 sm:py-24 pt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <img src={program.img} alt={program.title} className="w-full h-96 object-cover rounded-3xl mb-8" />
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{program.title}</h1>
                <p className="text-lg text-gray-300 leading-relaxed">{programDetailsContent[id]}</p>
                 <RouterLink to="/programs" className="text-blue-400 hover:underline mt-8 inline-block">&larr; Back to All Programs</RouterLink>
            </div>
        </section>
    );
};
export default ProgramDetails;