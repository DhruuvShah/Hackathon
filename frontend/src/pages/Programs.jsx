import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import regulatorImg from '../assets/images/hyrox_certified_desktop.png.webp';
import acceleratorImg from '../assets/images/Section-1.png.webp';
import recoverImg from '../assets/images/Section-2.png.webp';
import sustainImg from '../assets/images/train_anywhere.png.webp';

export const programsData = [
    { 
        id: 'hyrox-regulator', 
        title: "Hyrox Regulator",
        category: "Full-Body Training",
        description: "Build a powerful, well-rounded physique with a program that balances strength, power, and metabolic conditioning for peak performance.",
        img: regulatorImg,
        tags: ["Strength", "Power", "Conditioning"]
    },
    { 
        id: 'hyrox-accelerator', 
        title: "Hyrox Accelerator",
        category: "Strength and Power",
        description: "Focus on explosive strength and raw power development. This program is designed to increase your core lifts and improve athletic acceleration.",
        img: acceleratorImg,
        tags: ["Explosive", "Powerlifting", "Speed"]
    },
    { 
        id: 'hyrox-recover', 
        title: "Hyrox Recover",
        category: "Post-Data Recovery",
        description: "Optimize your recovery with targeted mobility, flexibility, and low-intensity sessions designed to reduce soreness and improve readiness.",
        img: recoverImg,
        tags: ["Mobility", "Flexibility", "Yoga"]
    },
    { 
        id: 'hyrox-sustain', 
        title: "Hyrox Sustain",
        category: "Stay Race-Ready",
        description: "Maintain your peak fitness level with a balanced program that keeps you sharp, strong, and ready for competition year-round.",
        img: sustainImg,
        tags: ["Endurance", "Maintenance", "Cardio"]
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, type: "spring", stiffness: 190 } }
};

const fadeSide = dir => ({
    hidden: { opacity: 0, x: dir === 'left' ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring", stiffness: 230 } }
});

const Programs = () => (
    <section id="programs" className="py-20 sm:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <MotionInView>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Find Your Program
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Engineered for every goal, from peak performance to active recovery.
                        Choose your path to excellence.
                    </p>
                </motion.div>
            </MotionInView>

            <div className="space-y-24">
                {programsData.map((program, index) => (
                    <MotionInView key={program.id}>
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                            {/* Alternate image and text order for visual variety */}
                            <div className={`group relative rounded-3xl overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <img src={program.img} alt={program.title} className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Animated text, slides from side (alt direction) */}
                            <motion.div
                                variants={fadeSide(index % 2 === 0 ? 'right' : 'left')}
                                initial="hidden"
                                animate="visible"
                                className={`text-center lg:text-left ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                            >
                                <p className="text-blue-400 font-semibold mb-2">{program.category}</p>
                                <h3 className="text-3xl font-bold text-white mb-4">{program.title}</h3>
                                <p className="text-gray-300 text-lg mb-6">{program.description}</p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                                    {program.tags.map(tag => (
                                        <span key={tag} className="glass-effect text-xs font-medium py-1.5 px-3 rounded-full text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/programs/${program.id}`} className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                                    View Program
                                </Link>
                            </motion.div>
                        </div>
                    </MotionInView>
                ))}
            </div>
        </div>
    </section>
);

// Helper to trigger animation only when section is in view
function MotionInView({ children }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-15% 0px" });
    return (
        <div ref={ref}>
            {React.Children.map(children, child =>
                React.cloneElement(child, { animate: inView ? "visible" : "hidden" })
            )}
        </div>
    );
}

export default Programs;
