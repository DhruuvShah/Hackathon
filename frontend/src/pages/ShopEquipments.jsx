import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll'; // Assuming this component exists

// --- Mock Data for the Shop Page ---

const collectionsData = [
    { name: 'Centr x Hyrox', img: 'https://images.unsplash.com/photo-1581009137052-c40971b5146b?q=80&w=800', path: '/hyrox' },
    { name: 'Cardio', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800', path: '/cardio' },
    { name: 'Home Gyms', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800', path: '/shop/home-gyms' },
    { name: 'Benches & Racks', img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800', path: '/shop/racks' },
    { name: 'Weights', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800', path: '/shop/weights' },
    { name: 'Accessories', img: 'https://images.unsplash.com/photo-1590487988256-5ed29f62c5c9?q=80&w=800', path: '/shop/accessories' },
];

const productsData = [
    { id: 1, name: 'Centr 1 Home Gym', price: '$2,499.99', img: 'https://images.unsplash.com/photo-1594737625787-a8a121c44aCA?q=80&w=800', category: 'Home Gyms' },
    { id: 2, name: 'Adjustable Dumbbell Set (5-50 lbs)', price: '$599.99', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800', category: 'Weights' },
    { id: 3, name: 'Performance Treadmill', price: '$1,999.00', img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800', category: 'Cardio' },
    { id: 4, name: 'Competition Kettlebell (16kg)', price: '$89.99', img: 'https://images.unsplash.com/photo-1580261450048-a052a1071c82?q=80&w=800', category: 'Weights' },
];


const ShopEquipments = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Run Toward The <br /> Future of Fitness
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-200">
              Centr is taking your cardio to the next level with our brand new treadmills.
            </p>
            <Link 
              to="#" 
              className="inline-block mt-8 bg-white text-black font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Shop Collection
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- Collections Section with Horizontal Scroll --- */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-4">
                <RevealOnScroll>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Shop Collections</h2>
                        <p className="text-lg text-gray-400 mt-2">Bring the gym to your space.</p>
                    </div>
                </RevealOnScroll>
                {/* Scroll Arrows */}
                <div className="hidden md:flex gap-2">
                    <button onClick={() => scroll(-300)} className="glass-effect rounded-full p-3 text-white hover:bg-white/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button onClick={() => scroll(300)} className="glass-effect rounded-full p-3 text-white hover:bg-white/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Scrolling Container */}
            <div 
              ref={scrollContainerRef}
              className="mt-8 flex space-x-6 overflow-y-hidden pb-4 scrollbar-hide overflow-x-hidden"
            >
                {collectionsData.map((collection, index) => (
                    <div key={collection.name} className="flex-shrink-0 w-3/4 sm:w-1/3 lg:w-1/4 xl:w-1/5">
                        <RevealOnScroll delay={index * 100}>
                            <Link to={collection.path} className="group block relative rounded-2xl overflow-hidden aspect-[3/4]">
                                <img src={collection.img} alt={collection.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white font-bold text-lg">{collection.name}</h3>
                                </div>
                            </Link>
                        </RevealOnScroll>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Products Section --- */}
      <section className="py-20 sm:py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Equipment</h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map((product, index) => (
                    <RevealOnScroll key={product.id} delay={index * 100}>
                        <div className="glass-effect rounded-3xl overflow-hidden group flex flex-col h-full">
                            <div className="relative overflow-hidden">
                                <img src={product.img} alt={product.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-blue-400 font-semibold">{product.category}</p>
                                <h3 className="text-xl font-bold text-white mt-2 flex-grow">{product.name}</h3>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-xl font-semibold text-white">{product.price}</p>
                                    <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ShopEquipments;




