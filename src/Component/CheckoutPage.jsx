// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CheckoutPage = () => {
  const location = useLocation();
  const totalFromNav = location.state?.total || 0;

  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // calculate total price before discount
  const totalAmount = totalFromNav;

  // Apply coupon
  const handleApplyCoupon = () => {
    if (couponCode.trim() === "KAARIGAR20") {
      const discountAmount = totalFromNav * 0.2;
      setDiscount(discountAmount);
      setIsCouponApplied(true);
      setErrorMsg("");
    } else {
      setDiscount(0);
      setIsCouponApplied(false);
      setErrorMsg("Invalid coupon code");
    }
  };

  const finalAmount = totalAmount - discount;
  // const finalAmount = 1;

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${backendUrl}/api/create-order`, {
        amount: finalAmount * 100, // Send discounted amount
      });

      // Redirect to PhonePe payment page
      window.location.href = response.data.checkoutPageUrl;
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Error initiating payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[400px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Checkout</h1>

        <p className="text-gray-700 mb-2">Total Amount:</p>
        <h2 className="text-3xl font-semibold mb-4 text-center text-green-600">
          ₹{totalAmount.toLocaleString()}
        </h2>

        {/* Coupon Code Field */}
        <div className="mb-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            disabled={isCouponApplied}
          />
          <button
            onClick={handleApplyCoupon}
            disabled={isCouponApplied}
            className={`w-full py-2 rounded text-white ${
              isCouponApplied
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isCouponApplied ? "Coupon Applied" : "Apply Coupon"}
          </button>
          {errorMsg && (
            <p className="text-red-500 text-sm mt-1">{errorMsg}</p>
          )}
        </div>

        {/* Show discount and final amount */}
        {isCouponApplied && (
          <div className="mb-4 text-center">
            <p className="text-green-600 font-medium">
              Coupon applied! You saved ₹{discount.toLocaleString()} 🎉
            </p>
            <p className="text-lg font-semibold">
              New Total: ₹{finalAmount.toLocaleString()}
            </p>
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Pay with PhonePe"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
