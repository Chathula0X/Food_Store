import React from 'react';
import NavBar from '../NavBar';

const saladItems = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36',
  },
  {
    id: 2,
    name: 'Caesar Salad',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1601050690084-3f82c01c1d3f',
  },
  {
    id: 3,
    name: 'Avocado Salad',
    price: '$6.49',
    image: 'https://images.unsplash.com/photo-1613141412017-1db6e4113d31',
  },
  {
    id: 4,
    name: 'Quinoa Salad',
    price: '$5.75',
    image: 'https://images.unsplash.com/photo-1589308078054-832f54572e8f',
  },
];

function SaladPage() {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 md:px-12 pb-16 bg-gradient-to-br from-lime-100 via-white to-green-200 min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700">Fresh & Healthy Salads 🥗</h1>
        <p className="mt-2 text-gray-600">Enjoy a variety of nutritious, refreshing salad bowls</p>
      </div>

      {/* Salad Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {saladItems.map((salad) => (
          <div
            key={salad.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={salad.image}
              alt={salad.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800">{salad.name}</h3>
              <p className="text-green-600 font-bold text-lg mt-1">{salad.price}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
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

export default SaladPage;
