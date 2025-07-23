import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence, animate } from 'framer-motion';

const formatMoney = (amt) => '$' + amt.toFixed(2);

function AnimatedAmount({ target }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(0, target, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setDisplay(value);
      }
    });
    return () => controls.stop();
  }, [target]);
  return <span className="font-extrabold tracking-tight">{formatMoney(display)}</span>;
}

const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  if (typeof price === 'string') {
    const number = parseFloat(price.replace(/[^0-9.]/g, ''));
    return isNaN(number) ? 0 : number;
  }
  return 0;
};

const CreditCardCheckout = ({ amount, shipping, total, onClose }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const flipTimer = setTimeout(() => setFlipped(true), 1200);
    const closeTimer = setTimeout(() => onClose(), 4300);
    return () => {
      clearTimeout(flipTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 34 }}
      className="fixed left-1/2 bottom-16 z-50 -translate-x-1/2"
      style={{ perspective: 1800 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0, scale: [1, 1.03, 1] }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
          scale: { duration: 0.7, yoyo: 2, ease: "easeInOut" }
        }}
        style={{
          width: 370,
          height: 215,
          position: "relative",
          transformStyle: "preserve-3d"
        }}
        className="mx-auto"
      >
        {/* -- Glass Card Front -- */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-[18px] shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            color: "white",
            boxShadow: "0 8px 64px 0 #1e293b26, 0 0 2px 0 #e0e0e033"
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -inset-5 blur-2xl opacity-20 bg-white/50 rounded-[2.5rem]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-slate-200/5 to-transparent opacity-10 rounded-3xl" />
          </div>
          <div className="text-2xl font-bold mb-7 tracking-wide text-white/80">Processing Payment...</div>
          <div className="relative w-48 h-3 rounded-xl bg-white/10 mb-6 overflow-hidden">
            <motion.div
              initial={{ x: -120 }}
              animate={{ x: 200 }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
              className="absolute left-0 top-0 w-24 h-3 rounded-xl bg-white/60 opacity-60 blur-md"
            />
          </div>
          <div className="text-sm opacity-60 tracking-tight mt-6">centr.pay</div>
        </div>
        {/* -- Glass Card Back (Flips) -- */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center rounded-3xl border border-white/20 bg-white/15 backdrop-blur-[18px] shadow-2xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            color: "white",
            boxShadow: "0 8px 64px 0 #1e293b26, 0 0 2px 0 #e0e0e033"
          }}
        >
          <motion.svg width="58" height="58" viewBox="0 0 54 54" className="mb-2">
            <motion.circle
              cx="27"
              cy="27"
              r="23"
              stroke="url(#glass)"
              strokeWidth="4.3"
              fill="none"
              strokeLinecap="round"
              style={{ rotate: -90, originX: '50%', originY: '50%' }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16
              }}
            />
            <motion.path
              d="M17 28 L25 36 L39 20"
              stroke="#fff"
              strokeWidth="4.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 1.1
              }}
            />
            <defs>
              <linearGradient id="glass" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" stopOpacity="0.7" />
                <stop offset="1" stopColor="#e0e0e0" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </motion.svg>
          <div className="mb-1 text-2xl font-bold text-white/90">
            <AnimatedAmount target={amount} />
            <span className="font-semibold ml-1 text-white/70">Paid</span>
          </div>
          <div className="mb-2 text-base text-white/90">
            Shipping: <span className="font-bold">{shipping === 0 ? 'FREE' : formatMoney(shipping)}</span>
          </div>
          <div className="mb-1 text-lg font-semibold text-white/90">
            <span className="mr-2">Total:</span> <span className="text-white">{formatMoney(total)}</span>
          </div>
          <div className="text-base font-medium tracking-wide text-white/90 mt-1">
            Checked out successfully!
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, loading } = useCart();
  const { userInfo } = useSelector((state) => state.auth);
  const [showCheckout, setShowCheckout] = useState(false);
  const [pendingClear, setPendingClear] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    return total + (parsePrice(item.price) * item.quantity);
  }, 0);

  const shipping = subtotal > 0 && subtotal < 100 ? 4.99 : 0;
  const total = subtotal + shipping;

  const shoppingLink = userInfo ? '/shop' : '/login';
  const buttonText = userInfo ? 'Continue Shopping' : 'Login to Shop';

  // When card closes, THEN clear cart
  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setPendingClear(true);
  };

  // Actually clear the cart after card disappears (pendingClear = true, showCheckout = false)
  useEffect(() => {
    if (!showCheckout && pendingClear) {
      clearCart();
      setPendingClear(false);
    }
  }, [showCheckout, pendingClear, clearCart]);

  const handleCheckout = () => setShowCheckout(true);

  return (
    <div className="pt-32 pb-20 bg-black text-white min-h-screen relative">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Your Cart</h1>
          {loading ? (
            <div className="flex justify-center items-center min-h-[150px]">
              <span className="text-blue-400 text-lg animate-pulse">Loading Cart...</span>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="glass-effect rounded-3xl p-8 text-center">
              <p className="text-xl text-gray-300">Your cart is currently empty.</p>
              <Link to={shoppingLink} className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all">
                {buttonText}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="glass-effect rounded-2xl p-4 flex items-center gap-4">
                    <img src={item.imgPrimary} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h2 className="font-bold text-lg">{item.name}</h2>
                      <p className="text-gray-400">Qty: {item.quantity}</p>
                      <p className="text-lg font-semibold mt-1">{formatMoney(parsePrice(item.price))}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-1 lg:sticky top-32">
                <div className="glass-effect rounded-3xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                  <div className="flex justify-between text-gray-300 mb-2">
                    <span>Subtotal</span>
                    <span>{formatMoney(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 mb-2">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-green-400 font-semibold' : 'text-yellow-300'}>
                      {shipping === 0 ? 'FREE' : formatMoney(shipping)}
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>{formatMoney(total)}</span>
                  </div>
                  <button
                    className="mt-6 w-full bg-blue-600 hover:cursor-pointer hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </RevealOnScroll>
      </section>
      <AnimatePresence>
        {showCheckout && (
          <CreditCardCheckout
            amount={subtotal}
            shipping={shipping}
            total={total}
            onClose={handleCloseCheckout}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
