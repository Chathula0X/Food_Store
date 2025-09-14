import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function HeroPage() {
  return (
    <section className="relative bg-[url('https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg')] bg-cover bg-center min-h-screen">

      {/* Stronger Yellow Overlay + Dark Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-yellow-400/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center text-white min-h-screen">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Find Your Favorite Food<br /> Delivered Fast & Fresh
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          Search meals, restaurants, or cuisines near you. Fast delivery, high quality, and great taste!
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-xl bg-white rounded-full shadow-lg flex items-center px-4 py-2"
        >
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for dishes or restaurants..."
            className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition">
            Search
          </button>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-100 transition"
        >
          Order Now <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}

export default HeroPage;
