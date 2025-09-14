import React from 'react';
import NavBar from '../NavBar';

function Offers() {
    const offerItems = [
        {
            id: 1,
            title: 'Buy 1 Get 1 Free Pizza',
            description: 'Enjoy double the flavor with our BOGO Pizza deal!',
            image: 'https://images.unsplash.com/photo-1601924928450-19b261f67bca',
            tag: 'BOGO',
        },
        {
            id: 2,
            title: '20% Off Burgers',
            description: 'Sink your teeth into juicy burgers at 20% off!',
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
            tag: 'Limited Time',
        },
        {
            id: 3,
            title: 'Free Drink with Sushi',
            description: 'Get a refreshing drink free with any sushi platter!',
            image: 'https://images.unsplash.com/photo-1562158070-622a8a2960c6',
            tag: 'Freebie',
        },
    ];

    return (
        <div>
            <NavBar />
            <div className="pt-24 min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 px-6 py-16">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Exclusive Offers</h2>
                <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
                    Grab these limited-time deals before they’re gone. Eat well, save more!
                </p>

                {/* Offers Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerItems.map((offer) => (
                        <div
                            key={offer.id}
                            className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <span className="inline-block bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full mb-3">
                                    {offer.tag}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {offer.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{offer.description}</p>
                                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                                    Claim Offer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Offers;
