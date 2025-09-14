import React, { useState } from 'react';
import Navbar from '../NavBar';

const foodItems = [
  {
    id: 1,
    name: 'Cheese Pizza',
    category: 'Pizza',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1601924582975-3ccde2c98f04',
  },
  {
    id: 2,
    name: 'Double Burger',
    category: 'Burger',
    price: '$10.50',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },
  {
    id: 3,
    name: 'Sushi Platter',
    category: 'Sushi',
    price: '$12.75',
    image: 'https://images.unsplash.com/photo-1562158070-622a8a2960c6',
  },
  {
    id: 4,
    name: 'Fried Chicken',
    category: 'Chicken',
    price: '$9.20',
    image: 'https://images.unsplash.com/photo-1612874741444-e8c6d5ee3c3b',
  },
  {
    id: 5,
    name: 'Taco Fiesta',
    category: 'Tacos',
    price: '$6.80',
    image: 'https://images.unsplash.com/photo-1601924928450-19b261f67bca',
  },
];

const categories = ['All', 'Pizza', 'Burger', 'Sushi', 'Chicken', 'Tacos'];

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* NavBar at the top */}
      <Navbar />

      {/* Menu content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Delicious Menu
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'text-gray-600 border-gray-300 hover:border-orange-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-orange-500 font-bold text-lg mt-1">
                  {item.price}
                </p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
