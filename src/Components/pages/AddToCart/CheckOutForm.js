import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { postOrder, postStripePayment } from "../../../helper/axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { OrderNumber } from "../../../helper/orderNumber";
import { useNavigate } from "react-router-dom";
import { resetcart } from "../../addToCart/CartSlice";

const CheckOutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.cartInfo);
  console.log(carts);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const productTotal = carts.reduce((acc, item) => {
      return acc + item.price * item.orderqty;
    }, 0);

    setTotal(productTotal);
  });

  const [formDt, setFormDt] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    try {
      const { clientSecret } = await postStripePayment({
        amount: total,
        currency: "aud",
        paymentMethodType: "card",
      });
      const client_Secret = clientSecret;
      console.log(client_Secret);
      const { paymentIntent } = await stripe.confirmCardPayment(client_Secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            /*  name: formDt.fName, */
            email: formDt.email,
          },
        },
      });
      if (paymentIntent.status === "succeeded") {
        const orderNumber = OrderNumber();
        console.log(orderNumber);
        await postOrder({ formDt, carts, orderNumber });

        localStorage.setItem("orderNumber", orderNumber);

        console.log({ formDt, carts, orderNumber });

        dispatch(resetcart([]));

        toast.success("Payment Successful");

        navigate("/order-complete");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium">
          Email
        </label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="your.email@gmail.com"
            onChange={handleOnChange}
          />
        </div>

        <label for="fname" class="mt-4 mb-2 block text-sm font-medium">
          First Name
        </label>
        <div class="relative">
          <input
            type="text"
            id="fname"
            name="fname"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Sam"
            onChange={handleOnChange}
          />
        </div>

        <label for="lname" class="mt-4 mb-2 block text-sm font-medium">
          Last Name
        </label>
        <div class="relative">
          <input
            type="text"
            id="lname"
            name="lname"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Max"
            onChange={handleOnChange}
          />
        </div>

        <label for="phone" class="mt-4 mb-2 block text-sm font-medium">
          Phone
        </label>
        <div class="relative">
          <input
            type="number"
            id="phone"
            name="phone"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder=""
            onChange={handleOnChange}
          />
        </div>

        <label for="address" class="mt-4 mb-2 block text-sm font-medium">
          Address
        </label>
        <div class="relative">
          <input
            type="text"
            id="address"
            name="address"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder=""
            onChange={handleOnChange}
          />
        </div>

        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">${total}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Shipping</p>
            <p class="font-semibold text-gray-900">$8.00</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">${total + 8}</p>
        </div>
      </div>

      <CardElement options={{ hidePostalCode: true }} />

      <button
        class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
        type="submit"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckOutForm;
