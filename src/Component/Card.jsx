import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Card = ({ product, onClick, category }) => {
  return (
    <a
      href={product?.link}
      onClick={onClick}
      className="group block backdrop-blur-xl bg-white border border-white/20 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#00ffc3] transition-all duration-700 p-2 md:p-5"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <motion.img
          src={product?.image || product?.wallImage}
          alt={product?.title}
          className="w-full h-48 md:h-72 object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Title + Button */}
      <div className="pt-4 text-center">
        <h3 className="text-[16px] md:text-xl font-[Amita] font-semibold md:font-bold text-black mb-2">
          {product?.title}
        </h3>
        {category === "artifacts" && (
          <h3 className="text-[16px] md:text-xl flex flex-col items-center gap-0.5 font-[Amita] font-medium md:font-semibold text-black mb-2">
            {/* ₹ {product?.basePrice.toLocaleString()} */}
            <span className="line-through text-gray-400 text-sm">
              ₹{product?.basePrice?.toLocaleString()}
            </span>
            <span className="text-black font-semibold">
              ₹{(product?.basePrice * 0.8).toLocaleString()}
            </span>
          </h3>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" inline-block bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-black transition-all duration-300"
        >
          {/* Explore Piece → */}
          Buy Now →
        </motion.button>
      </div>
    </a>
  );
};

export default Card;
