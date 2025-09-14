import React from 'react';
import NavBar from '../NavBar';

const coffeeItems = [
  {
    id: 1,
    name: 'Espresso',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1587731602754-a59cf6c4c828',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
  },
  {
    id: 3,
    name: 'Latte',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  },
  {
    id: 4,
    name: 'Mocha',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1600180758890-6c7e27e31b44',
  },
];

function CoffeePage() {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 md:px-12 pb-16 bg-gradient-to-br from-amber-100 via-white to-stone-200 min-h-screen">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6F4E37]">Brewed Just for You ☕</h1>
        <p className="mt-2 text-gray-600">Discover our rich and aromatic coffee selections</p>
      </div>

      {/* Coffee Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {coffeeItems.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#3B2F2F]">{coffee.name}</h3>
              <p className="text-[#6F4E37] font-bold text-lg mt-1">{coffee.price}</p>
              <button className="mt-4 bg-[#6F4E37] text-white px-4 py-2 rounded-full hover:bg-[#4B382A] transition">
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

export default CoffeePage;
