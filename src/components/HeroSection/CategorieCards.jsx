import React from 'react';
import { Pizza, Drumstick, Cake, IceCream, Coffee, Salad } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Pizza', icon: <Pizza className="w-8 h-8 text-orange-500" />, path: '/PizzaPage' },
  { name: 'Chicken', icon: <Drumstick className="w-8 h-8 text-red-500" />, path: '/ChickenPage' },
  { name: 'Desserts', icon: <Cake className="w-8 h-8 text-pink-500" />, path: '/DessertsPage' },
  { name: 'Ice Cream', icon: <IceCream className="w-8 h-8 text-purple-500" />, path: '/IceCreamPage' },
  { name: 'Coffee', icon: <Coffee className="w-8 h-8 text-yellow-900" />, path: '/CoffePage' },
  { name: 'Salads', icon: <Salad className="w-8 h-8 text-green-500" />, path: '/SaladPage' },
];

function CategorieCards() {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular Categories</h2>
        <p className="text-gray-500">Browse by your favorite food types</p>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((category, idx) => {
          const cardContent = (
            <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="mb-3">{category.icon}</div>
              <h4 className="text-gray-700 font-medium">{category.name}</h4>
            </div>
          );

          return category.path ? (
            <Link to={category.path} key={idx}>
              {cardContent}
            </Link>
          ) : (
            <div key={idx}>{cardContent}</div>
          );
        })}
      </div>
    </section>
  );
}

export default CategorieCards;
