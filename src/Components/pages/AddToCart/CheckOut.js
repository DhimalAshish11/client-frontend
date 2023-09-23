import React, { useState } from "react";

const CheckOut = () => {
  /*  const cartItems = useSelector((state) => state.carts.carts); */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your checkout logic here
    /*  console.log("Form Data:", formData);
    console.log("Cart Items:", cartItems); */
    // Redirect to a thank you page or order summary page
    // Example: history.push('/thank-you');
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method:</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === "creditCard"}
                onChange={handlePaymentChange}
              />{" "}
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handlePaymentChange}
              />{" "}
              PayPal
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
