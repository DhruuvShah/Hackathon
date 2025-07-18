import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="footer bg-black/90 backdrop-blur-md py-10 mt-10 flex flex-col items-center gap-4"
    >
      <div className="flex gap-5 mb-2">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <Youtube className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
        </a>
      </div>
      <div className="text-zinc-300 text-sm">
        © {new Date().getFullYear()} Centr. All rights reserved.
      </div>
      <div className="flex gap-4 text-xs text-zinc-500">
        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </motion.footer>
  );
}
