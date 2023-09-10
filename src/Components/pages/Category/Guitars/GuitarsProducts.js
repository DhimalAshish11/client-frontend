import React from "react";
import a from "../../../../assets/a.jpg";
import b from "../../../../assets/b.jpg";

const GuitarsProducts = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      imageUrl: a,
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl: b,
    },
    {
      id: 2,
      name: "Product 3",
      price: 29.99,
      imageUrl: a,
    },
    {
      id: 2,
      name: "Product 3",
      price: 29.99,
      imageUrl: a,
    },
    {
      id: 2,
      name: "Product 3",
      price: 29.99,
      imageUrl: a,
    },
    {
      id: 2,
      name: "Product 3",
      price: 29.99,
      imageUrl: a,
    },
  ];
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
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
