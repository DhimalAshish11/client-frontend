import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategoryAction } from "../../product/productAction";

const HomeSection = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { cats } = useSelector((state) => state.categoryInfo);
  console.log(cats);

  useEffect(() => {
    dispatch(getProductByCategoryAction(_id));
  }, [dispatch, _id]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 h-100 bg-gray-200 p-4 mt-4">
        <h2 className="text-xl font-semibold m-6">Product Categories</h2>
        <ul>
          {cats?.map((cat) => (
            <li key={cat._id} className="mb-2">
              <Link
                to={`category/${cat.slug}/${cat._id}`}
                className="text-black-500 hover:underline"
              >
                {cat.title}
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
