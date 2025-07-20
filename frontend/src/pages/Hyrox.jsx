import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll'; // Assuming this component exists

// --- Mock Data for the Hyrox Collection Page ---
const hyroxProductsData = [
    { 
        id: 'hx01', 
        name: 'Official HYROX Sled',
        img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800',
        category: 'Performance Sleds'
    },
    { 
        id: 'hx02', 
        name: 'Competition Sandbags',
        img: 'https://images.unsplash.com/photo-1610742652221-4a6a5b2d0b03?q=80&w=800',
        category: 'Functional Training'
    },
    { 
        id: 'hx03', 
        name: 'Competition Power Sled',
        img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800',
        category: 'Performance Sleds'
    },
    { 
        id: 'hx04', 
        name: 'Conditioning Power Rope',
        img: 'https://images.unsplash.com/photo-1590487988256-5ed29f62c5c9?q=80&w=800',
        category: 'Functional Training'
    },
    { 
        id: 'hx05', 
        name: 'HYROX Performance Wall Balls',
        img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800',
        category: 'Functional Training'
    },
    { 
        id: 'hx06', 
        name: 'Official HYROX Wall Ball Target',
        img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
        category: 'Gym Accessories'
    },
    { 
        id: 'hx07', 
        name: 'Competition Bumper Plates',
        img: 'https://images.unsplash.com/photo-1581009137052-c40971b5146b?q=80&w=800',
        category: 'Weight Plates'
    },
    { 
        id: 'hx08', 
        name: 'Limited Edition HYROX Kettlebell',
        img: 'https://images.unsplash.com/photo-1580261450048-a052a1071c82?q=80&w=800',
        category: 'Kettlebells'
    },
    { 
        id: 'hx09', 
        name: 'Competition Octo Kettlebells',
        img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800',
        category: 'Kettlebells'
    },
    { 
        id: 'hx10', 
        name: 'Official HYROX Commercial Dumbbells',
        img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800',
        category: 'Dumbbells'
    },
    { 
        id: 'hx11', 
        name: 'Official HYROX Performance Racks',
        img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800',
        category: 'Racks & Storage'
    },
    { 
        id: 'hx12', 
        name: 'Official HYROX Performance Turf',
        img: 'https://images.unsplash.com/photo-1598295893413-c71f1a88521f?q=80&w=800',
        category: 'Gym Flooring'
    },
];

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {hyroxProductsData.map((product, index) => (
                    <RevealOnScroll key={product.id} delay={index * 50}>
                        <Link to="#" className="glass-effect rounded-3xl overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src={product.img} alt={product.name} className="w-full h-72 object-cover" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-gray-400 font-medium">{product.category}</p>
                                <h3 className="text-xl font-bold text-white mt-2 flex-grow">{product.name}</h3>
                                <div className="mt-4">
                                    <div className="inline-block text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 bg-blue-600/20 group-hover:bg-blue-600/50">
                                        View Product
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
