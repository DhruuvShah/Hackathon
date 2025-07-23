import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { Disclosure } from '@headlessui/react';

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);

const faqs = [
    { question: "How does the AI Workout Planner work?", answer: "Our AI planner uses your goals, available time, and preferred equipment to generate a unique, effective workout plan just for you. It leverages a vast database of exercises and routines designed by our expert trainers." },
    { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time through your profile settings. You will retain access to premium features until the end of your current billing period." },
    { question: "What kind of dietary plans do you offer?", answer: "We offer a wide range of dietary plans, including balanced, vegetarian, vegan, and pescatarian options. All our meal plans are designed by nutritionists to be delicious and easy to prepare." },
    { question: "Is the equipment durable for heavy use?", answer: "Absolutely. All Centr equipment is built to commercial-grade standards, using high-quality materials to ensure durability and performance, whether at home or in a professional gym setting." }
];

const Support = () => (
    <div className="pt-20 bg-black text-white">
        {/* --- Hero Section --- */}
        <section className="py-20 sm:py-24 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Support Center
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        We're here to help. Find answers to common questions or get in touch with our team.
                    </p>
                </RevealOnScroll>
            </div>
        </section>

        {/* --- FAQ & Contact Section --- */}
        <section className="pb-20 sm:pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* FAQ Column */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <RevealOnScroll key={index} delay={index * 100}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <div className="glass-effect rounded-lg p-4">
                                                <Disclosure.Button className="w-full flex justify-between items-center font-semibold text-white text-left">
                                                    <span>{faq.question}</span>
                                                    <ChevronUpIcon className={`${open ? '' : 'transform rotate-180'} transition-transform duration-300 flex-shrink-0 ml-2`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-4 text-gray-300">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                    {/* Contact Column */}
                    <div className="lg:col-span-1">
                         <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                         <RevealOnScroll>
                            <div className="glass-effect rounded-3xl p-8">
                                <form className="space-y-4">
                                    <input type="email" placeholder="Your Email" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500" />
                                    <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
                                    <button type="submit" className="w-full bg-blue-600 hover:cursor-pointer hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                         </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Support;