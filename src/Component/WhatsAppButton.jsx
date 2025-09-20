// src/Component/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919993452192"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 
                 bg-green-500 text-white p-3 sm:p-4 md:p-5 rounded-full 
                 shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-wavy" />
    </a>
  );
};

export default WhatsAppButton;
