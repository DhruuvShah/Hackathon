import React, { useState } from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import { allProducts } from "../data/product";
import RevealOnScroll from "../components/RevealOnScroll";
import { Disclosure } from "@headlessui/react";
import { useCart } from "../context/CartContext";

// Helper icon component for the accordion
const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts[id];
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(product?.imgPrimary);

  // Get user info and navigation function
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Check if user is logged in
    if (userInfo) {
      const productWithId = { ...product, id };
      addToCart(productWithId, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    } else {
      // If not logged in, redirect to the login page
      navigate("/login");
    }
  };

  if (!product) {
    return (
      <div className="py-20 sm:py-24 pt-32 text-center min-h-screen">
        <h2 className="text-3xl font-bold text-white">Product not found!</h2>
        <RouterLink
          to="/shop"
          className="text-blue-400 hover:underline mt-4 inline-block"
        >
          Back to Shop
        </RouterLink>
      </div>
    );
  }

  const galleryImages = [product.imgPrimary, product.imgSecondary].filter(
    Boolean
  );

  return (
    <section className="py-20 sm:py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <RevealOnScroll>
            <div className="lg:sticky top-32 space-y-4">
              <div className="aspect-square w-full">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/30"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgSrc)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === imgSrc
                        ? "border-blue-500"
                        : "border-transparent hover:border-gray-600"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Product Info */}
          <RevealOnScroll delay={200}>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-white mb-6">
                {product.price}
              </p>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-300 mb-2">
                  Quantity
                </p>
                <div className="inline-flex items-center glass-effect rounded-lg">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-white hover:bg-white/10 rounded-l-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <span className="px-6 text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-white hover:bg-white/10 rounded-r-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 ${
                  added
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-blue-600 hover:cursor-pointer hover:bg-blue-500"
                }`}
              >
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>

              <div className="mt-8 glass-effect rounded-lg p-4">
                <h4 className="font-bold text-white">
                  CENTR X HYROX TRAINING PROGRAM
                </h4>
                <p className="text-gray-300 mt-2 text-sm">
                  Get the competitive edge with Centr's 12-week HYROX-certified
                  training program.{" "}
                  <RouterLink
                    to="/programs"
                    className="text-blue-400 hover:underline"
                  >
                    Learn More
                  </RouterLink>
                </p>
              </div>

              <div className="mt-8 space-y-2">
                <Disclosure>
                  {({ open }) => (
                    <div className="glass-effect rounded-lg p-4">
                      <Disclosure.Button className="w-full flex justify-between items-center font-semibold text-white">
                        <span>Description</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "" : "transform rotate-180"
                          } transition-transform duration-300`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 text-gray-300 prose prose-invert max-w-none">
                        <p>{product.description}</p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <div className="glass-effect rounded-lg p-4">
                      <Disclosure.Button className="w-full flex justify-between items-center font-semibold text-white">
                        <span>Specs</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "" : "transform rotate-180"
                          } transition-transform duration-300`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 text-gray-300">
                        Content for product specifications will go here.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <div className="glass-effect rounded-lg p-4">
                      <Disclosure.Button className="w-full flex justify-between items-center font-semibold text-white">
                        <span>Warranty</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "" : "transform rotate-180"
                          } transition-transform duration-300`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 text-gray-300">
                        Content for warranty information will go here.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
