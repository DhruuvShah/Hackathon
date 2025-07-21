import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => (
    <div className="pt-20 bg-black text-white">
        {/* --- Hero Section --- */}
        <section 
            className="relative mt-2 h-[60vh] bg-cover bg-center flex items-center justify-center text-center" 
            style={{ backgroundImage: "url('https://prod-cdn.centr.com/deploy/static/images/aboutUs/hero-xlarge.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
                        To Empower People to Live Well by Energizing Their Every Day.
                    </h1>
                </RevealOnScroll>
            </div>
        </section>

        {/* --- Origin Story Section --- */}
        <section className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <img 
                            src="https://prod-cdn.centr.com/deploy/static/images/aboutUs/story-xlarge.jpg?v=1" 
                            alt="Founder Chris Hemsworth" 
                            className="rounded-3xl shadow-2xl shadow-black/30"
                        />
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Our Origin Story
                            </h2>
                            <div className="mt-6 text-gray-300 leading-relaxed space-y-4 text-lg">
                               <p>
                                   At Centr, we are your training partner, your nutritionist, your wellness coach, and your support system. We know that to live well, you need to move your body, eat nutritious food, and clear your head.
                               </p>
                               <p>
                                   What started as Chris Hemsworth’s personal journey to build a team of world-class experts is now available to everyone. Centr experienced the power of holistic wellness firsthand and was inspired to share that knowledge with the world.
                               </p>
                               <p>
                                   Our team of experts work together to provide you with the tools you need to achieve your goals. Whether you’re a beginner or an expert, we’re here to guide you. Together, we’re stronger.
                               </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>

        {/* --- Our Values Section --- */}
        <section className="py-20 sm:py-24 bg-gray-900/50">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll className="md:order-2">
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white">Our Values</h3>
                            <ul className="mt-4 space-y-2 text-lg text-gray-300 list-disc list-inside">
                                <li>It’s always better to have fun</li>
                                <li>Only you determine your best self</li>
                                <li>Show up for yourself and others</li>
                                <li>Be welcoming to each other</li>
                                <li>Curiosity unlocks potential</li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="md:order-1">
                         <img src="https://prod-cdn.centr.com/deploy/static/images/aboutUs/value1-xlarge.jpg?v=1" alt="Team values" className="rounded-3xl object-cover w-full h-full" />
                    </RevealOnScroll>
                </div>
            </div>
        </section>

        {/* --- Personalized Wellness Coaching Section --- */}
        <section className="py-20 sm:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                     <RevealOnScroll>
                        <img src="https://prod-cdn.centr.com/deploy/static/images/aboutUs/content-1.jpg?v=3" alt="Wellness coaching" className="rounded-3xl object-cover w-full h-full" />
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white">Personalized Wellness Coaching</h3>
                            <p className="mt-4 text-lg text-gray-300 leading-relaxed">We’re your partner through your well-being journey. Our team provides personalized coaching, support, and guidance. Our support, guidance, and innovation is there to empower and inspire.</p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>

        {/* --- Fitness Equipment Section --- */}
        <section className="py-20 sm:py-24 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll className="md:order-2">
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white">Fitness Equipment That Moves You</h3>
                            <p className="mt-4 text-lg text-gray-300 leading-relaxed">Our equipment is thoughtfully designed to power your routine. Expert-designed for every fitness level and goal, from strength, cardio, mobility, and recovery goals.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="md:order-1">
                         <img src="https://prod-cdn.centr.com/deploy/static/images/aboutUs/content-2.jpg?v=3" alt="Fitness equipment" className="rounded-3xl object-cover w-full h-full" />
                    </RevealOnScroll>
                </div>
            </div>
        </section>

        {/* --- Connected Ecosystem Section --- */}
        <section className="py-20 sm:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <img src="https://prod-cdn.centr.com/deploy/static/images/aboutUs/content-3.jpg?v=3" alt="Connected ecosystem" className="rounded-3xl object-cover w-full h-full" />
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white">Connected Ecosystem</h3>
                            <p className="mt-4 text-lg text-gray-300 leading-relaxed">We’re building a connected ecosystem that personalizes your experience through our app and equipment to deliver on your individual fitness goals. We’re with you from the beginning to the end of your journey.</p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    </div>
);

export default About;
