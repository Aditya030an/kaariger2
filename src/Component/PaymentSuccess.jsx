// src/pages/SuccessPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <FaCheckCircle className="text-green-600 w-24 h-24 mb-6" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase! Your payment has been successfully processed.
      </p>

      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
