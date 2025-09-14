import React from 'react';
import NavBar from '../NavBar';

const dessertItems = [
  {
    id: 1,
    name: 'Chocolate Lava Cake',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1601978991214-06a6cfb8e1f6',
  },
  {
    id: 2,
    name: 'Strawberry Cheesecake',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1601027832432-8c8b277a8c53',
  },
  {
    id: 3,
    name: 'Vanilla Ice Cream',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
  },
  {
    id: 4,
    name: 'Fruit Tart',
    price: '$5.75',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
];

function DessertPage() {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 md:px-12 pb-16 bg-gradient-to-br from-pink-100 via-white to-yellow-100 min-h-screen">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Sweet Desserts</h1>
        <p className="mt-2 text-gray-600">Finish your meal on a sweet note 🍰</p>
      </div>

      {/* Grid of Dessert Items */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {dessertItems.map((item) => (
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
              <p className="text-pink-500 font-bold text-lg mt-1">{item.price}</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
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

export default DessertPage;
