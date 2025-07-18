import Nav from './Nav';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="layout-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
