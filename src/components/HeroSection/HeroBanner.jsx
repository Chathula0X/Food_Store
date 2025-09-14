import React from 'react';
import { BadgePercent, Flame } from 'lucide-react';

function HeroBanner() {
  const offers = [
    {
    //   title: 'Hot & Spicy Combo',
    //   description: '🔥 30% off all spicy meals this week!',
    //   icon: <Flame className="text-white w-8 h-8" />,
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-sale-flyer-template-design-5930ffbbdda44c7319834666eceb9490_screen.jpg?ts=1636989055',
    },
    {
    //   title: 'Member Exclusive Deal',
    //   description: '🎉 Save up to 50% with premium membership!',
    //   icon: <BadgePercent className="text-white w-8 h-8" />,
      image:
        'https://dynamic.brandcrowd.com/template/preview/design/b510e636-6af3-4a4a-934e-ef6aeb168c9b?v=4&designTemplateVersion=1&size=design-preview-standalone-1x',
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Special Offers Just For You</h2>
        <p className="text-gray-500">Enjoy irresistible deals on your favorite meals. Act fast!</p>
      </div>

      {/* Poster-Style Layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="relative w-[600px] h-[847px] rounded-3xl overflow-hidden shadow-xl transform transition hover:scale-105"
          >
            {/* Background Image */}
            <img
              src={offer.image}
              alt={offer.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional: Soft Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
              <div className="mb-4 bg-white/20 backdrop-blur-sm p-4 rounded-full shadow-lg">
                {offer.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{offer.title}</h3>
              <p className="text-white text-xl max-w-md">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroBanner;
