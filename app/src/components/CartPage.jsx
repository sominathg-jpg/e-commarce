import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
const CheckoutPage = () => {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: "Franklin Merino Wool V-Neck Knit",
      price: 199.0,
      quantity: 1,
      image: `https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70`,
    },
    {
      id: 2,
      name: "Judd Slim Dress Chino Pant",
      price: 159.0,
      image: `https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70`,
      quantity: 1,
    },
    {
      id: 3,
      name: "Angus Shawl Cardigan",
      image: `https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70`,
      price: 199.99,
      quantity: 1,
    },
  ]);

  const orderSummary = { delivery: 16.99, discount: 0.0, tax: 12.99 };
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [couponCode, setCouponCode] = useState("");

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const increaseQuantity = (id) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const orderTotal =
    subtotal + orderSummary.delivery + orderSummary.tax - orderSummary.discount;
  const totalSaving = 34.99;

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pt-30">
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Checkout Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            {/* Cart Items */}
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
            <ul className="divide-y divide-gray-200 mb-6">
              {orderItems ? (
                <>
                  {orderItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between py-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          className="w-16 h-16 bg-gray-200 rounded object-cover flex items-center justify-center text-gray-500"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </>
              ) : (
                <button>add Items</button>
              )}
            </ul>
          </div>
          {/* Card Details Section */}

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Card Details</h2>
            <div className="space-y-4">
              {/* Card Number with Icon */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 pl-10"
                  value={cardDetails.cardNumber}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardNumber: e.target.value,
                    })
                  }
                />
                {/* Card Icon */}
                <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Name on Card */}
              <input
                type="text"
                placeholder="Name on Card"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                value={cardDetails.cardName}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cardName: e.target.value })
                }
              />

              {/* Expiry and CVV */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  value={cardDetails.expiry}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, expiry: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-24 p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  value={cardDetails.cvv}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cvv: e.target.value })
                  }
                />
              </div>

              {/* Pay Button */}
              <button className="w-full mt-4 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2">
                <FaCreditCard />
                Pay ${orderTotal.toFixed(2)}
              </button>
            </div>
          </div>
          {/* Right Side: Order Summary */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-600 mr-2">
                      {item.quantity}x
                    </span>
                    <span className="text-gray-800">{item.name}</span>
                  </div>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>${orderSummary.delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-red-500">
                  -${orderSummary.discount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (exc tax)</span>
                <span>${orderSummary.tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-bold text-lg mb-6">
              <span>Order Total</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>

            <div className="p-4 bg-green-50 rounded-lg text-sm text-green-700 font-semibold mb-6">
              Your total saving on this order
              <span className="ml-1">${totalSaving.toFixed(2)}</span>
            </div>

            <div className="flex">
              <input
                type="text"
                placeholder="Coupon code"
                className="flex-1 p-3 border border-gray-300 rounded-l-md focus:ring-purple-500 focus:border-purple-500"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="px-6 py-3 bg-gray-200 text-gray-600 font-semibold rounded-r-md hover:bg-gray-300 transition-colors duration-200">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
