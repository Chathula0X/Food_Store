import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuBanner() {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <section className="relative w-full h-[280px] md:h-[320px] bg-yellow-400 rounded-3xl shadow-xl my-12">
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-black h-full px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Discover Our New Menu</h2>
        <p className="text-md md:text-lg mb-5 max-w-xl">
          Fresh flavors, bold spices, and handcrafted meals just for you.
        </p>
        <button
          onClick={() => navigate('/menu')} // Navigate to MenuPage
          className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
}

export default MenuBanner;
