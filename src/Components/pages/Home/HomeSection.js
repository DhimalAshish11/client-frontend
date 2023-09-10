import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../category/CatAction";

const HomeSection = () => {
  const categories = useSelector((state) => state.categoryInfo);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 h-100 bg-gray-200 p-4 mt-4">
        <h2 className="text-xl font-semibold m-6">Product Categories</h2>
        <ul>
          {categories?.map((category) => (
            <li key={category} className="mb-2">
              <Link
                to={`/${category.toLowerCase()}`}
                className="text-black-500 hover:underline"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        <div className="bg-yellow-500 text-white text-center py-2">
          <p className="text-lg font-semibold">
            Limited-Time Offer: Get 20% Off on All Products!
          </p>
          <p className="text-sm">
            Use code <span className="underline">SALE20</span> at checkout.
          </p>
        </div>
      </aside>

      <main className="w-3/4 p-4">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomeSection;
