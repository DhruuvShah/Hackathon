import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { allProducts } from '../data/product'; 

// Filter out only the Hyrox products from the central data store
const hyroxProductsData = Object.entries(allProducts)
    .filter(([id]) => id.startsWith('hx'))
    .map(([id, data]) => ({ id, ...data }));

const Hyrox = () => {
  return (
    <div className="pt-20">
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[60vh] bg-cover bg-center flex items-end pb-16 text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              CENTR x HYROX
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- Products Grid Section --- */}
      <section className="py-20 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Updated grid to show 3 columns on large screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {hyroxProductsData.map((product, index) => (
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
                                <p className="text-sm text-gray-400 font-medium">{product.category}</p>
                                <h3 className="text-xl font-bold text-white mt-2 flex-grow">{product.name}</h3>
                                <div className="mt-4">
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

export default Hyrox;

