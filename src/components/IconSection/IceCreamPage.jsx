import React from 'react';
import NavBar from '../NavBar';

const iceCreams = [
  {
    id: 1,
    name: 'Vanilla Delight',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1570197785420-d3c4e6d0da35',
  },
  {
    id: 2,
    name: 'Chocolate Fudge',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1599785209790-0fc98f5cba3d',
  },
  {
    id: 3,
    name: 'Strawberry Swirl',
    price: '$4.20',
    image: 'https://images.unsplash.com/photo-1612197526305-bcf8495c46f0',
  },
  {
    id: 4,
    name: 'Mango Tango',
    price: '$4.75',
    image: 'https://images.unsplash.com/photo-1570197785379-4a4b45a8aa22',
  },
];

function IceCreamPage() {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 md:px-12 pb-16 bg-gradient-to-br from-yellow-100 via-white to-blue-100 min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-500">Cool Ice Creams</h1>
        <p className="mt-2 text-gray-600">Chill out with our creamy delights 🍦</p>
      </div>

      {/* Ice Cream List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {iceCreams.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-orange-500 font-bold text-lg mt-1">{item.price}</p>
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

export default IceCreamPage;
