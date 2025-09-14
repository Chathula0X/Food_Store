import React from "react";
import { Link } from "react-router-dom";

function BlogRecipeBanner() {
  return (
    <section className="relative w-full h-[280px] md:h-[320px] bg-gradient-to-r from-orange-100 via-yellow-50 to-pink-100 rounded-3xl shadow-xl my-12 overflow-hidden">
      {/* Background image */}
      <img
        src="https://www.shutterstock.com/image-photo/chef-hands-cooking-meat-steak-adding-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCIm6Ya0YYJrh2vE50NOFW3GmA5vi7mXZtA&s"
        alt="Recipes"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-black h-full px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Discover Our Delicious Recipes
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-xl">
          Explore step-by-step guides and tasty creations from our chefs – perfect for any meal of the day!
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-block px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-lg transition"
        >
          Explore Recipes 🍳
        </Link>
      </div>
    </section>
  );
}

export default BlogRecipeBanner;
