import React, { useRef } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { programsData } from './Programs';

const programDetailsContent = {
    'hyrox-regulator': "This 12-week program is the ultimate all-rounder. It's meticulously structured to enhance every aspect of your fitness: build functional strength with compound lifts, increase your lactate threshold with intense circuits, and improve your engine with dedicated cardio sessions. Perfect for athletes who want to be undeniably good at everything.",
    'hyrox-accelerator': "Pure, unadulterated power. Over 8 weeks, you'll focus on progressive overload with key barbell movements, plyometrics for explosive speed, and accessory work to build a robust foundation. If your goal is to be faster, stronger, and more powerful, this is your path.",
    'hyrox-recover': "Recovery is where you grow. This program complements your hard training with guided mobility flows, deep stretching, and active recovery sessions. Reduce muscle soreness, increase your range of motion, and improve your body's resilience to injury. Think of it as essential maintenance for high-performance athletes.",
    'hyrox-sustain': "You've reached your peak; now stay there. This program is for the in-season athlete who needs to maintain strength and conditioning without accumulating excessive fatigue. It provides the perfect dose of intensity to keep you sharp and ready to compete at a moment's notice."
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 180 } }
};

const ProgramDetails = () => {
    const { id } = useParams();
    const program = programsData.find(p => p.id === id);

    // Animation: Only trigger when section in view
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });

    if (!program) {
        return (
            <div className="py-20 sm:py-24 pt-32 text-center">
                <h2 className="text-2xl text-white">Program not found!</h2>
                <RouterLink to="/programs" className="text-blue-400 hover:underline mt-4 inline-block">Back to Programs</RouterLink>
            </div>
        );
    }

    return (
        <section className="py-20 sm:py-24 pt-32" ref={ref}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Animated Image Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="relative w-full h-96 rounded-3xl overflow-hidden glass-effect flex items-center justify-center mb-8 shadow-2xl shadow-black/30"
                >
                    <img src={program.img} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40" />
                    <img src={program.img} alt={program.title} className="relative w-full h-full object-contain" />
                </motion.div>

                {/* Animated Title & Category */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.07 }}
                    className="text-blue-400 font-semibold mb-2"
                >
                    {program.category}
                </motion.p>
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.12 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    {program.title}
                </motion.h1>

                {/* Animated Description */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.18 }}
                    className="text-lg text-gray-300 leading-relaxed"
                >
                    {programDetailsContent[id]}
                </motion.p>

                {/* Animated Tags */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.26 }}
                    className="flex flex-wrap gap-3 mt-6"
                >
                    {program.tags.map(tag => (
                        <span key={tag} className="glass-effect text-sm font-medium py-1.5 px-4 rounded-full text-gray-200">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Back Link */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.38 }}
                >
                    <RouterLink to="/programs" className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-12">
                        &larr; Back to All Programs
                    </RouterLink>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramDetails;
