import React from "react";
import a from "../../../assets/a.jpg";
import b from "../../../assets/b.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import videoBackground from "../../../assets/video1.mp4";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const { products } = useSelector((state) => state.productInfo);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 relative">
        <div className=" absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            id="video-bg"
            className="object-cover w-full h-full"
          >
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to Your E-Commerce Store
          </h1>
          <p className="text-lg mb-8">
            Discover the best deals on our products.
          </p>
          <button className="bg-red-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* Delivery Info  */}

      <section className="bg-grey-100 py-20 ">
        <div className="container mx-auto text-center ">
          <div className="flex flex-wrap justify-center items-stretch ">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="text-xl text-grey-600  m-6">
                    <i className="fas fa-truck mr-2"></i>
                  </div>
                  <h5>Fast Delivery</h5>
                  <p className="text-gray-700">Starts from $100</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="text-xl text-600 m-6">
                    <i className="fas fa-money-bill-wave mr-2"></i>
                  </div>
                  <h5>Money Back</h5>
                  <p className="text-gray-700">7 Days Back</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="text-xl text--600 m-6">
                    <i className="fas fa-lock mr-2"></i>
                  </div>
                  <h5>Payment</h5>
                  <p className="text-gray-700">Secure System</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="text-xl text-600  m-6">
                    <i className="fas fa-undo mr-2"></i>
                  </div>
                  <h5>365 Days</h5>
                  <p className="text-gray-700">For free return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer "
              >
                <img
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-110"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold">
                    {" "}
                    <Link to={`/product/${item.slug}/${item._id}`}>
                      {item.name}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-center">
                    ${item.price.toFixed(2)}
                  </p>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
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

export default HeroSection;
