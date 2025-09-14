import React from 'react';
import NavBar from '../NavBar';

const chickenItems = [
  {
    id: 1,
    name: 'Spicy Grilled Chicken',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1605478902349-e7cc4453e03c',
  },
  {
    id: 2,
    name: 'Crispy Fried Chicken',
    price: '$8.50',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
  },
  {
    id: 3,
    name: 'BBQ Chicken Wings',
    price: '$7.75',
    image: 'https://images.unsplash.com/photo-1625941052124-f758cd56e60b',
  },
  {
    id: 4,
    name: 'Butter Chicken Curry',
    price: '$10.20',
    image: 'https://images.unsplash.com/photo-1608138270203-2c4717f9bb29',
  },
];

function ChickenPage() {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 md:px-12 pb-16 bg-gradient-to-br from-red-50 via-white to-yellow-50 min-h-screen">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">Delicious Chicken Dishes</h1>
        <p className="mt-2 text-gray-600">Tasty, juicy, and full of flavor!</p>
      </div>

      {/* Grid of Chicken Items */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {chickenItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-red-500 font-bold text-lg mt-1">{item.price}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
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

export default ChickenPage;
