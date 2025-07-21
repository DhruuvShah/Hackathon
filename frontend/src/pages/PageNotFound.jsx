import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll'; // Assuming this component exists

const PageNotFound = () => {
  return (
    <section className="py-20 sm:py-24 pt-32 flex items-center justify-center min-h-screen text-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Glass morphism container */}
          <div className="glass-effect rounded-3xl p-8">
            <h1 className="text-8xl font-extrabold gradient-text">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-white">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Sorry, we couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
            <Link 
              to="/" 
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Go Back Home
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PageNotFound;
