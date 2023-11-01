import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../helper/axios";
import { setUser } from "../user/UserSlice";
import { CustomModal } from "../custom/CustomModal";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productInfo);
  const { cartItemCount } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  console.log(cartItemCount);

  const [searchProduct, setSearchProduct] = useState([]);

  const handleOnLogout = () => {
    // log out from server by removing the access and refresh JWTs

    logoutAdmin(user._id);

    //clear storages
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");

    // reset store
    dispatch(setUser({}));
    navigate("/");
  };

  /* const handleOnSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    const searchProduct = products.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchProduct(searchProduct);
    console.log(searchProduct);
  };
 */
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-20">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-semibold">YourGuitars</div>

          {/* Navigation Links */}
          <ul className="flex space-x-4 mt-3 color-white">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link to="/" className="hover:text-gray-300">
              Products
            </Link>
            <Link to="/" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/contact/" className="hover:text-gray-300">
              Contact
            </Link>
          </ul>

          {/* Search Bar */}
          <div className="relative">
            <CustomModal />
          </div>

          <div className="flex items-center space-x-4">
            {user?._id ? (
              <Link
                to="#!"
                className="hover:text-gray-300"
                onClick={handleOnLogout}
              >
                Sign Out
              </Link>
            ) : (
              <Link to="/user-login/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>
            )}

            {/* Shopping Cart Icon */}
            <Link to={`/cart/${products.slug}/${products._id}`}>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cartItemCount > 0 && ( // Only display if there are items in the cart
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
