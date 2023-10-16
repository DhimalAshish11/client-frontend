import React, { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const CustomModal = () => {
  const { products } = useSelector((state) => state.productInfo);
  const [searchProduct, setSearchProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filterProduct = products.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchProduct(filterProduct);
  };

  // Handle navigation when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      const selectedProductData = products.find(
        (product) => product._id === selectedProduct
      );
      if (selectedProductData) {
        navigate(`/product/${selectedProductData.slug}/${selectedProduct}`);
      }
    }
  }, [selectedProduct, navigate, products]);

  return (
    <div className="">
      <Combobox
        value={searchProduct.find((item) => item._id === selectedProduct)}
        onChange={(selectedOption) => setSelectedProduct(selectedOption._id)}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              placeholder="Search..."
              displayValue={(data) => data.name}
              onChange={handleOnSearch}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {searchProduct?.length === 0 ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                searchProduct?.map((data) => (
                  <Combobox.Option
                    key={data._id}
                    value={data}
                    onSelect={() => setSelectedProduct(data._id)}
                  >
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        } cursor-default select-none py-2 pl-10 pr-4`}
                      >
                        <a href={`/product/${data.slug}/${data._id}`}>
                          {data.name}
                        </a>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
