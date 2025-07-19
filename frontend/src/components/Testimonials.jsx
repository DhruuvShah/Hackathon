import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const testimonialsData = [
    { name: "Alex Johnson", joined: "6 months ago", quote: "Centr has completely changed my perspective on fitness. The workouts are challenging but rewarding, and the data helps me see real progress. It feels like having a personal trainer in my pocket.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Samantha Lee", joined: "1 year ago", quote: "The design is stunning and so intuitive. It's the first fitness app I've actually stuck with. The Mindful Movement program has been a game-changer for my stress levels and flexibility.", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" }
];

const Testimonials = () => (
    <section id="testimonials" className="py-20 sm:py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Members Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Real stories from people who transformed their lives with Centr.
                    </p>
                </div>
            </RevealOnScroll>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <RevealOnScroll key={index} delay={index * 200}>
                        <div className="glass-effect p-8 rounded-3xl h-full">
                            <p className="text-gray-300">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-6">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-400">Joined {testimonial.joined}</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
);
export default Testimonials;