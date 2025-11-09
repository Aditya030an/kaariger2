// src/pages/FailurePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4">
      <FaTimesCircle className="text-red-600 w-24 h-24 mb-6" />
      <h1 className="text-3xl font-bold text-red-700 mb-2">
        Payment Failed ❌
      </h1>
      <p className="text-gray-700 mb-6">
        Oops! Something went wrong while processing your payment.  
        Please try again later or use a different payment method.
      </p>

      <Link
        to="/checkout"
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
      >
        Try Again
      </Link>
    </div>
  );
};

export default PaymentFailed;
