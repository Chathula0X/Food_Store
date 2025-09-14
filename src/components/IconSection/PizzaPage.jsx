import React from 'react';
import NavBar from '../NavBar';

const pizzaItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1601924582975-3ccde2c98f04',
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    price: '$10.50',
    image: 'https://images.unsplash.com/photo-1601924928450-19b261f67bca',
  },
  {
    id: 3,
    name: 'Veggie Delight Pizza',
    price: '$9.75',
    image: 'https://images.unsplash.com/photo-1628840042777-c2348f9c6b7b',
  },
  {
    id: 4,
    name: 'BBQ Chicken Pizza',
    price: '$11.20',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be4c',
  },
];

function PizzaPage() {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 md:px-12 pb-16 bg-gradient-to-br from-yellow-50 via-white to-red-50 min-h-screen">
      {/* Hero / Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600">Our Pizza Collection</h1>
        <p className="mt-2 text-gray-600">Freshly baked, cheesy, and delicious!</p>
      </div>

      {/* Pizza Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pizzaItems.map((pizza) => (
          <div
            key={pizza.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{pizza.name}</h3>
              <p className="text-orange-500 font-bold text-lg mt-1">{pizza.price}</p>
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

export default PizzaPage;
