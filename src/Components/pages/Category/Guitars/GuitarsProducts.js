import React, { useEffect, useState } from "react";
import a from "../../../../assets/a.jpg";
import b from "../../../../assets/b.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategoryAction } from "../../../product/productAction";
import { getNewProductByCategory } from "../../../../helper/axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const GuitarsProducts = () => {
  const { _id } = useParams();

  const [productDt, setProductDt] = useState([]);

  useEffect(() => {
    const getProductByCat = async () => {
      const { products } = await getNewProductByCategory(_id);

      setProductDt(products);
    };
    getProductByCat();
  }, []);

  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productDt?.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <img
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">
                    <Link to="/productdetail">{item.name}</Link>
                  </h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuitarsProducts;
