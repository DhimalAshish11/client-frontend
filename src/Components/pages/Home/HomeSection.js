import React from "react";
import HeroSection from "./HeroSection";

const HomeSection = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      imageUrl: "/product1.jpg",
      category: "Guitars",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Amps",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Pedals & FX",
    },
    {
      id: 3,
      name: "Product 3",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Studio",
    },
    {
      id: 4,
      name: "Product 4",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "PA/Live",
    },

    {
      id: 4,
      name: "Product 4",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Keyboards & Synths",
    },

    {
      id: 4,
      name: "Product 4",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Accessories",
    },

    {
      id: 4,
      name: "Product 4",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Pre-Owned",
    },
    {
      id: 4,
      name: "Product 4",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Specials",
    },

    // Add more product objects as needed
  ];
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 h-100 bg-gray-200 p-4 mt-4">
        <h2 className="text-xl font-semibold m-6">Product Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <a href="#" className="text-black-500 hover:underline">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main className="w-3/4 p-4">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomeSection;
