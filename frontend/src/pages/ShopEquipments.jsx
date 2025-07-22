import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "../components/RevealOnScroll";
import hyrox from "../assets/images/CEN25_0614-Shop_home_page_HYROX.jpg.jpeg";
import cardio from "../assets/images/CEN25_0614-Shop_home_page_CARDIO.jpg.jpeg";
import homeGyms from "../assets/images/CEN25_0614-Shop_home_page_HOME_GYMS.jpg.jpeg";
import benchesRacks from "../assets/images/CEN25_0614-Shop_home_page_BENCHES.jpg.jpeg";
import weights from "../assets/images/CEN25_0614-Shop_home_page_WEIGHTS.jpg.jpeg";
import accessories from "../assets/images/CEN25_0614-Shop_home_page_ACCESSORIES.jpg.jpeg";

// --- Mock Data for the Shop Page ---

const collectionsData = [
  { name: "Centr x Hyrox", img: hyrox, path: "/hyrox" },
  { name: "Cardio", img: cardio, path: "/cardio" },
  { name: "Home Gyms", img: homeGyms, path: "/home-gyms" },
  { name: "Benches & Racks", img: benchesRacks, path: "/benches-racks" },
  { name: "Weights", img: weights, path: "/weights" },
  { name: "Accessories", img: accessories, path: "/accessories" },
];

const productsData = [
  {
    id: 1,
    name: "Centr 1 Home Gym",
    price: "$2,499.99",
    img: "https://shop.centr.com/cdn/shop/files/centr-1-home-gym-functional-trainer-499512.jpg?v=1724214568&width=1200",
    category: "Home Gyms",
  },
  {
    id: 2,
    name: "Centr Hex Dumbbells",
    price: "$19.99",
    img: "https://shop.centr.com/cdn/shop/files/centr-hex-dumbbells-347924.jpg?v=1738030634&width=1200",
    category: "Weights",
  },
  {
    id: 3,
    name: "Centr RUNR Treadmill",
    price: "$1,199.99",
    img: "https://shop.centr.com/cdn/shop/files/centr-runr-742140.jpg?v=1739902523&width=1200",
    category: "Cardio",
  },
];

const ShopEquipments = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      // Calculate progress, ensuring we don't divide by zero if not scrollable
      const progress = scrollWidth > clientWidth ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Run once on mount to set initial state
      handleScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="pt-20">
      {/* --- Hero Section --- */}
      <section
        className="relative mt-2 h-[70vh] bg-cover bg-center flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://shop.centr.com/cdn/shop/files/Centr-RUNR-S-2500x900.webp?v=1728602389&width=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Run Toward The <br /> Future of Fitness
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-200">
              Centr is taking your cardio to the next level with our brand new
              treadmills.
            </p>
            <Link
              to="/cardio"
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
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <RevealOnScroll>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white">
                  Shop Collections
                </h2>
                <p className="text-lg text-gray-400 mt-2">
                  Bring the gym to your space.
                </p>
              </div>
            </RevealOnScroll>
            <div className="hidden md:flex gap-2 mt-4 md:mt-0 mx-auto md:mx-0">
              <button
                onClick={() => scroll(-300)}
                className="glass-effect rounded-full p-3 text-white hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => scroll(300)}
                className="glass-effect rounded-full p-3 text-white hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="mt-8 flex space-x-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide"
          >
            {collectionsData.map((collection, index) => (
              <div key={collection.name} className="flex-shrink-0 w-2/3 sm:w-1/3 lg:w-1/4 xl:w-1/5">
                <RevealOnScroll delay={index * 100}>
                  <Link to={collection.path} className="group block relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={collection.img} alt={collection.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">
                        {collection.name}
                      </h3>
                    </div>
                  </Link>
                </RevealOnScroll>
              </div>
            ))}
          </div>
          {/* --- NEW Custom Scroll Progress Bar --- */}
          <div className="mt-8 h-1 w-full bg-gray-800 rounded-full md:hidden">
            <div
              className="h-1 bg-white rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* --- Products Section --- */}
      <section className="py-20 sm:py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Equipment
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product, index) => (
              <RevealOnScroll key={product.id} delay={index * 100}>
                <div className="glass-effect rounded-3xl overflow-hidden group flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-blue-400 font-semibold">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-white mt-2 flex-grow">
                      {product.name}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xl font-semibold text-white">
                        {product.price}
                      </p>
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
