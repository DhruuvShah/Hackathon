import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { useSelector } from 'react-redux'; // Import useSelector to check login state

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { userInfo } = useSelector((state) => state.auth); // Get user login status

  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
    return total + (price * item.quantity);
  }, 0);

  // Determine the correct link for the "Continue Shopping" button
  const shoppingLink = userInfo ? '/shop' : '/login';
  const buttonText = userInfo ? 'Continue Shopping' : 'Login to Shop';

  return (
    <div className="pt-32 pb-20 bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="glass-effect rounded-3xl p-8 text-center">
              <p className="text-xl text-gray-300">Your cart is currently empty.</p>
              <Link to={shoppingLink} className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all">
                {buttonText}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="glass-effect rounded-2xl p-4 flex items-center gap-4">
                    <img src={item.imgPrimary} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h2 className="font-bold text-lg">{item.name}</h2>
                      <p className="text-gray-400">Qty: {item.quantity}</p>
                      <p className="text-lg font-semibold mt-1">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1 lg:sticky top-32">
                <div className="glass-effect rounded-3xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                  <div className="flex justify-between text-gray-300 mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 mb-4">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default Cart;
