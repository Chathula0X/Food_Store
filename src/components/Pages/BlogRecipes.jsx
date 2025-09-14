import React from "react";
import NavBar from "../NavBar";

const blogData = [
  {
    id: 1,
    title: "Classic Margherita Pizza Recipe",
    author: "Chef Mario",
    date: "August 5, 2025",
    image: "https://source.unsplash.com/featured/?pizza",
    excerpt: "Learn how to make an authentic Margherita Pizza at home with fresh ingredients and simple steps.",
  },
  {
    id: 2,
    title: "Perfectly Crispy Fried Chicken",
    author: "Chef Lisa",
    date: "July 30, 2025",
    image: "https://source.unsplash.com/featured/?fried-chicken",
    excerpt: "Step-by-step guide to making golden, crunchy, and juicy fried chicken with a secret marinade.",
  },
  {
    id: 3,
    title: "Chocolate Lava Cake in 20 Minutes",
    author: "Chef Anna",
    date: "July 25, 2025",
    image: "https://source.unsplash.com/featured/?chocolate-cake",
    excerpt: "This easy molten lava cake recipe is rich, gooey, and will melt in your mouth.",
  },
];

const BlogRecipes = () => {
  return (
    <div>
        <NavBar />
    <div className="pt-24 px-6 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">🍴 Our Recipes & Food Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-2">By {blog.author} • {blog.date}</p>
              <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              <button className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-full text-sm hover:bg-red-600">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogRecipes;
