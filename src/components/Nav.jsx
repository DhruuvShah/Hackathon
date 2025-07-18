import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const links = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/about', label: 'About' },
  { to: '/login', label: 'Login' }
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar flex items-center justify-between px-10 py-4 bg-[var(--glass)] shadow-xl backdrop-blur-md sticky top-0 z-50 border-b border-[var(--primary)]/20">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="logo text-3xl font-black tracking-wide"
        whileHover={{ scale: 1.09, rotate: -3 }}
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent drop-shadow-neon"
        >
          Centr
        </Link>
      </motion.div>
      <div className="flex gap-6">
        {links.map(({ to, label }) => (
          <Link key={to} to={to} tabIndex={0}>
            <motion.div
              whileHover={{ scale: 1.12, color: 'var(--secondary)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={
                `font-semibold px-3 py-1 rounded-lg text-lg tracking-wide 
                transition-all duration-200 
                ${location.pathname === to
                  ? 'bg-[var(--primary)]/20 text-[var(--primary)] shadow-[0_2px_16px_#9f4fff88]'
                  : 'text-white hover:text-[var(--secondary)] hover:bg-[var(--accent)]/10'}`
              }
              style={
                location.pathname === to
                  ? { textShadow: '0 0 8px var(--primary)' }
                  : {}
              }
            >
              {label}
            </motion.div>
          </Link>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.08, boxShadow: '0 4px 24px var(--secondary)' }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <Button className="hidden md:block ml-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold px-7 py-2 rounded-2xl shadow-md border-0">
          <Link to="/login" className="hover:text-[var(--accent)] transition">Start Free Trial</Link>
        </Button>
      </motion.div>
    </nav>
  );
}
