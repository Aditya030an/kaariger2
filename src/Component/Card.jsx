import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Card = ({ product, onClick }) => {
  return (
    <a
      href={product?.link}
      onClick={onClick}
      className="group block bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#00ffc3] transition-all duration-700 p-2 md:p-5"
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
        <h3 className="text-[16px] md:text-xl font-[Amita] font-semibold md:font-bold text-white mb-2">
          {product?.title}
        </h3>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="inline-flex text-[12px] md:text-[20px] items-center gap-2 text-white bg-gray-800 px-5 py-2.5 rounded-full shadow hover:bg-black transition-colors"
        >
          Buy Now <ArrowRight size={16} />
        </motion.button>
      </div>
    </a>
  );
};

export default Card;
