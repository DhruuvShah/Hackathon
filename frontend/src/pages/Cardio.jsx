import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll'; // Assuming this component exists

// --- Mock Data for the Cardio Collection Page ---
const cardioProductsData = [
    { 
        id: 'cd01', 
        name: 'Official Hyrox Perform Tread',
        price: '$5,299.00',
        img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800',
        category: 'Performance Treadmills'
    },
    { 
        id: 'cd02', 
        name: 'Inspire Series T7x Treadmill with 15.6" Screen',
        price: '$5,999.00',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
        category: 'Premium Treadmills'
    },
    { 
        id: 'cd03', 
        name: 'Inspire Series T7 Treadmill',
        price: '$5,499.00',
        img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800',
        category: 'Premium Treadmills'
    },
    { 
        id: 'cd04', 
        name: 'Inspire Series T5x Treadmill with 15.6" Screen',
        price: '$4,999.00',
        img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800',
        category: 'Folding Treadmills'
    },
    { 
        id: 'cd05', 
        name: 'Inspire Series T5 Treadmill',
        price: '$4,599.00',
        img: 'https://images.unsplash.com/photo-1623944333939-99c2f8f53c40?q=80&w=800',
        category: 'Folding Treadmills'
    },
    { 
        id: 'cd06', 
        name: 'Inspire Series T4x Folding Treadmill with 10" Screen',
        price: '$3,999.00',
        img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800',
        category: 'Folding Treadmills'
    },
    { 
        id: 'cd07', 
        name: 'Inspire Series T4 Folding Treadmill',
        price: '$2,999.00',
        img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800',
        category: 'Folding Treadmills'
    },
    { 
        id: 'cd08', 
        name: 'Centr Run-8 Treadmill with 10" Screen',
        price: '$1,599.00',
        img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800',
        category: 'Home Essentials'
    },
    { 
        id: 'cd09', 
        name: 'Centr RUNR Treadmill',
        price: '$1,199.00',
        img: 'https://images.unsplash.com/photo-1581009137052-c40971b5146b?q=80&w=800',
        category: 'Home Essentials'
    },
];

const Cardio = () => {
  return (
    <div className="pt-20">
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[60vh] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Cardio Training Equipment
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-200">
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
                        <Link to="#" className="glass-effect rounded-3xl overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src={product.img} alt={product.name} className="w-full h-72 object-cover" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-blue-400 font-semibold">{product.category}</p>
                                <h3 className="text-xl font-bold text-white mt-2 flex-grow">{product.name}</h3>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-2xl font-semibold text-white">{product.price}</p>
                                    <div className="inline-block text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 bg-blue-600/20 group-hover:bg-blue-600/50">
                                        View
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
