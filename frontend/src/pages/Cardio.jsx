import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { allProducts } from '../data/product'; // Import the central data store

// Filter out only the Cardio products from the central data store
const cardioProductsData = Object.entries(allProducts)
    .filter(([id]) => id.startsWith('cd'))
    .map(([id, data]) => ({ id, ...data }));

const Cardio = () => {
  return (
    <div className="pt-20">
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[60vh] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('https://shop.centr.com/cdn/shop/files/CEN25_0614-Category_page_DESKTOP_CARDIO.jpg?v=1752112441&width=2000')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
               Cardio Training Equipment
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
               Push your limits with our range of performance-engineered cardio machines.

            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- Products Grid Section --- */}
      <section className="py-20 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardioProductsData.map((product, index) => (
                    <RevealOnScroll key={product.id} delay={index * 50}>
                        <Link to={`/product/${product.id}`} className="glass-effect rounded-3xl overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2">
                            {/* Image container with hover effect */}
                            <div className="relative h-80 overflow-hidden">
                                {/* Primary Image */}
                                <img src={product.imgPrimary} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
                                {/* Secondary Image (visible on hover) */}
                                <img src={product.imgSecondary} alt={`${product.name} alternate view`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-blue-400 font-semibold">{product.category}</p>
                                <h3 className="text-xl font-bold text-white mt-2 flex-grow">{product.name}</h3>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-2xl font-semibold text-white">{product.price}</p>
                                    <div className="inline-block text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 bg-blue-600/20 group-hover:bg-blue-600/50">
                                        View Details
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Cardio;
