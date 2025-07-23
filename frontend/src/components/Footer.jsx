import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo_-_Horizontal.png.webp"; // Make sure this path is correct

// --- SVG Icon Components for Social Media ---
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-12 mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
      <Link className="flex justify-center items-center mb-6" to="/">
        <img src={logo} alt="Centr Logo" className="h-8 w-auto" />
      </Link>
      <div className="flex justify-center gap-6 mb-8">
        <Link to="/about" className="hover:text-white transition-colors">
          About
        </Link>
        <Link to="/careers" className="hover:text-white transition-colors">
          Careers
        </Link>
        <Link to="/support" className="hover:text-white transition-colors">
          Support
        </Link>
        <Link to="/privacy" className="hover:text-white transition-colors">
          Privacy
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.instagram.com/centrfit/"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/CentrFit/"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="https://www.youtube.com/centrfit"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
          >
            <path d="M23.498 6.186a2.967 2.967 0 00-2.088-2.088C19.479 3.5 12 3.5 12 3.5s-7.479 0-9.41.598A2.967 2.967 0 00.502 6.186C0 8.116 0 12 0 12s0 3.884.502 5.814a2.967 2.967 0 002.088 2.088C4.521 20.5 12 20.5 12 20.5s7.479 0 9.41-.598a2.967 2.967 0 002.088-2.088C24 15.884 24 12 24 12s0-3.884-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
          </svg>
          <span className="sr-only">YouTube</span>
        </a>
        <a
          href="https://x.com/centrfit"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <FaXTwitter
            size={24}
            className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
          />
          <span className="sr-only">X (Twitter)</span>
        </a>
      </div>

      <p>&copy; 2025 Centr. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
