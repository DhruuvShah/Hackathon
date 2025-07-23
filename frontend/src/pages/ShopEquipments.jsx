import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
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

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 170 } }
};

const staggerChildren = {
  visible: {
    transition: { staggerChildren: 0.13 }
  }
};

function SectionInView({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <div ref={ref}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          initial: "hidden",
          animate: inView ? "visible" : "hidden",
          transition: { delay }
        })
      )}
    </div>
  );
}

const ShopEquipments = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const progress =
        scrollWidth > clientWidth
          ? (scrollLeft / (scrollWidth - clientWidth)) * 100
          : 0;
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
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
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
          <SectionInView>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Run Toward The <br /> Future of Fitness
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.13 }}
              className="mt-4 max-w-xl text-base sm:text-lg text-gray-200"
            >
              Centr is taking your cardio to the next level with our brand new treadmills.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ delay: 0.21 }}>
              <Link
                to="/cardio"
                className="inline-block mt-8 bg-white text-black font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
              >
                Shop Collection
              </Link>
            </motion.div>
          </SectionInView>
        </div>
      </section>

      {/* --- Collections Section with Horizontal Scroll --- */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <SectionInView>
              <motion.div variants={fadeUp}>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white">
                    Shop Collections
                  </h2>
                  <p className="text-lg text-gray-400 mt-2">
                    Bring the gym to your space.
                  </p>
                </div>
              </motion.div>
            </SectionInView>
            <div className="hidden md:flex gap-2 mt-4 md:mt-0 mx-auto md:mx-0">
              <button
                onClick={() => scroll(-300)}
                className="glass-effect rounded-full p-3 text-white hover:bg-white/10 transition-colors"
              >
                {/* left arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
              </button>
              <button
                onClick={() => scroll(300)}
                className="glass-effect rounded-full p-3 text-white hover:bg-white/10 transition-colors"
              >
                {/* right arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
              </button>
            </div>
          </div>
          {/* --- Animated Collection Cards --- */}
          <motion.div
            ref={scrollContainerRef}
            className="mt-8 flex space-x-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {collectionsData.map((collection, index) => (
              <motion.div
                key={collection.name}
                variants={{
                  hidden: { opacity: 0, y: 34, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, delay: index * 0.11, type: "spring", stiffness: 200 } }
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 24px 0 rgba(56,189,248,0.13)",
                  transition: { type: "spring", stiffness: 220 }
                }}
                className="flex-shrink-0 w-2/3 sm:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <Link
                  to={collection.path}
                  className="group block relative rounded-2xl overflow-hidden aspect-[3/4]"
                >
                  <motion.img
                    src={collection.img}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.09, filter: "blur(1px) brightness(1.09)" }}
                    transition={{ type: "spring", stiffness: 150 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.09, duration: 0.39, type: "spring", stiffness: 150 }}
                    className="absolute bottom-4 left-4"
                  >
                    <h3 className="text-white font-bold text-lg">
                      {collection.name}
                    </h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {/* --- NEW Custom Scroll Progress Bar --- */}
          <div className="mt-8 h-1 w-full bg-gray-800 rounded-full md:hidden">
            <div
              className="h-1 bg-white rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopEquipments;
