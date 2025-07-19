import React from 'react';
const Footer = () => (
    <footer className="border-t border-white/10 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p className="text-2xl font-bold tracking-tight text-white mb-4">Centr</p>
            <div className="flex justify-center gap-6 mb-6">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <p>&copy; 2025 Centr. All Rights Reserved.</p>
        </div>
    </footer>
);
export default Footer;
