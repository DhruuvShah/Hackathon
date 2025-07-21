
import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const policySections = [
    {
        id: 'introduction',
        title: 'Introduction',
        content: 'Welcome to Centr. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@centr.com.'
    },
    {
        id: 'info-collection',
        title: '1. What Information Do We Collect?',
        content: 'We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.'
    },
    {
        id: 'info-usage',
        title: '2. How Do We Use Your Information?',
        content: 'We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.',
        points: [
            'To facilitate account creation and logon process.',
            'To post testimonials with your consent.',
            'To manage user accounts.',
            'To send administrative information to you.'
        ]
    },
    {
        id: 'info-sharing',
        title: '3. Will Your Information Be Shared?',
        content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not share, sell, rent or trade any of your information with third parties for their promotional purposes.'
    }
];

const Privacy = () => (
    <div className="pt-20 bg-black text-white">
        <section className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Privacy Policy</h1>
                        <p className="mt-2 text-gray-400">Last Updated: July 21, 2025</p>
                    </div>
                </RevealOnScroll>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Left Column: Table of Contents */}
                    <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
                        <RevealOnScroll>
                            <nav className="space-y-2">
                                {policySections.map(section => (
                                    <a 
                                        key={section.id} 
                                        href={`#${section.id}`}
                                        className="block text-gray-400 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-colors"
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </RevealOnScroll>
                    </aside>

                    {/* Right Column: Policy Content */}
                    <main className="lg:col-span-3">
                        <RevealOnScroll>
                            <div className="glass-effect rounded-3xl p-8 space-y-8">
                                {policySections.map(section => (
                                    <div key={section.id} id={section.id} className="scroll-mt-24">
                                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                                        <div className="mt-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-ul:text-gray-300">
                                            <p>{section.content}</p>
                                            {section.points && (
                                                <ul>
                                                    {section.points.map((point, index) => (
                                                        <li key={index}>{point}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </main>
                </div>
            </div>
        </section>
    </div>
);

export default Privacy;
