import React from "react";
import HeroSection from "./HeroSection";

const Sidebar = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      imageUrl: "/product1.jpg",
      category: "Category A",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Category B",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Category C",
    },
    {
      id: 3,
      name: "Product 3",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Category D",
    },
    {
      id: 4,
      name: "Product 4",
      price: 29.99,
      imageUrl: "/product2.jpg",
      category: "Category B",
    },
    // Add more product objects as needed
  ];
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
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

export default Sidebar;
