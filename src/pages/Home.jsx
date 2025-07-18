import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap'; 

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="home-section flex flex-col justify-center items-center min-h-[60vh] text-center"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'anticipate' }}
      >
        Where The <span className="text-primary">Strong</span> Get Stronger
      </motion.h1>
      <motion.p
        className="mb-8 text-zinc-300 max-w-2xl text-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Train like Thor with world-class workouts, meal plans, and mindfulness programs by Chris Hemsworth and elite trainers. Level up your fitness, nutrition, and mindset—all in one app.
      </motion.p>
      <motion.button
        className="hero-button px-8 py-3 text-lg rounded-lg font-semibold shadow-xl bg-primary text-black hover:scale-105 transition"
        whileHover={{ scale: 1.1, backgroundColor: '#1AFFB0' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Start Free Trial
      </motion.button>
    </section>
  );
}
