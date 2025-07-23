import React, { useRef, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const testimonialsData = [
    { name: "Alex Johnson", joined: "6 months ago", quote: "Centr has completely changed my perspective on fitness. The workouts are challenging but rewarding, and the data helps me see real progress. It feels like having a personal trainer in my pocket.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Samantha Lee", joined: "1 year ago", quote: "The design is stunning and so intuitive. It's the first fitness app I've actually stuck with. The Mindful Movement program has been a game-changer for my stress levels and flexibility.", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: i => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.18, type: "spring", stiffness: 320, damping: 28 }
    })
};

const headerVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] } }
};

const Testimonials = () => {
    // Animate avatar pulsing using GSAP for a "fit/active" feeling
    const avatarRefs = useRef([]);

    useEffect(() => {
        avatarRefs.current.forEach((el, idx) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { scale: 1 },
                    {
                        scale: 1.09,
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut",
                        delay: idx * 0.3
                    }
                );
            }
        });
    }, []);

    return (
        <section id="testimonials" className="py-20 sm:py-24 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <motion.div
                        variants={headerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Members Say</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                            Real stories from people who transformed their lives with Centr.
                        </p>
                    </motion.div>
                </RevealOnScroll>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <RevealOnScroll key={index} delay={index * 200}>
                            <motion.div
                                className="glass-effect p-8 rounded-3xl h-full"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.35 }}
                                custom={index}
                            >
                                <p className="text-gray-300">"{testimonial.quote}"</p>
                                <div className="flex items-center mt-6">
                                    {/* Avatar with subtle pulse animation */}
                                    <img
                                        ref={el => (avatarRefs.current[index] = el)}
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover shadow-lg"
                                        style={{ willChange: "transform" }}
                                    />
                                    <div className="ml-4">
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">Joined {testimonial.joined}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
