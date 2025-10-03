import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Cinema2.jpeg";
import kaarigar1 from "./photos/Cinema.jpeg";
import kaarigar2 from "./photos/Cinema1.jpeg";
import kaarigar3 from "./photos/Cinema2.jpeg";
import Img4 from "./photos/Cinema3.jpeg";
import Img5 from "./photos/Cinema4.jpeg";
import Img6 from "./photos/Cinema5.jpeg";
import Img7 from "./photos/Cinema6.jpeg";
import Img8 from "./photos/Cinema7.jpeg";
import Img9 from "./photos/Cinema8.jpeg";
import Img10 from "./photos/Cinema9.jpeg";
import Img11 from "./photos/Cinema10.jpeg";

import Img13 from "./photos/cinema12.jpg";
import Img14 from "./photos/cinema13.jpg";
import Img15 from "./photos/cinema14.jpg";
import Img16 from "./photos/cinema15.jpg";
import Img17 from "./photos/cinema16.jpg";
import Img18 from "./photos/cinema17.jpg";
import Img19 from "./photos/cinema18.jpg";
import Img20 from "./photos/cinema19.jpg";
import Img21 from "./photos/cinema20.jpg";
import Img22 from "./photos/cinema21.jpg";
import Img23 from "./photos/cinema22.jpg";
import Img24 from "./photos/cinema23.jpg";
import Img25 from "./photos/cinema24.jpg";

import ProductCart from "./ProductCard";

// TiltCard component
function TiltCard({ children }) {
  const tiltRef = React.useRef(null);

  React.useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        perspective: 1000,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="will-change-transform">
      {children}
    </div>
  );
}

const originals = [
  {
    id: 1,
    title: "Handcrafted Dreams ",
    basePrice: 7999,
    image: kaarigar1,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 2,
    title: "Soulful Symphony ",
    basePrice: 6499,
    image: kaarigar2,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 3,
    title: "Mystic Reflections ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 4,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img4,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 5,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img5,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 6,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img6,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 7,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img7,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 8,
    title: "Sojourn",
    basePrice: 7999,
    image: Img8,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 9,
    title: "Ethereal Touch ",
    basePrice: 7499,
    image: Img9,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 10,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img10,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 11,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img11,
    link: "#",
    height: 12,
    width: 18,
  },

  {
    id: 13,
    title: "Mystic Reflections ",
    basePrice: 7299,
    image: Img13,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 14,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img14,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 15,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img15,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 16,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img16,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 17,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img17,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 18,
    title: "Sojourn",
    basePrice: 7999,
    image: Img18,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 19,
    title: "Ethereal Touch ",
    basePrice: 7499,
    image: Img19,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 20,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img20,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 21,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img21,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 22,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img22,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 23,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img23,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 24,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img24,
    link: "#",
    height: 12,
    width: 18,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Cinemapremi = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    const existing = cart.find(
      (item) =>
        item.id === product?.id &&
        item.artType === product?.artType &&
        item.basePrice === product?.basePrice &&
        item.price === product?.price &&
        item.image === product?.image &&
        item.width === product?.width &&
        item.height === product?.height &&
        item.media === product?.media &&
        item.selectedFrame === product?.selectedFrame
    );
    if (existing) {
      const updated = cart.map((item) =>
        item === existing ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <section className="relative overflow-hidden min-h-screen bg-white py-10 md:py-20 px-6 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-70 blur-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-gray-900 tracking-wider"
        >
          <span className="block w-20 h-1 mx-auto mb-3 md:mb-6 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-full"></span>
          Cinema Solace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6 font-[Amita] text-lg md:text-2xl font-light"
        >
          -Fellow Movie buffs find a huge variety of posters to redefine your
          spaces and visit your favourite movies every day!
        </motion.p>
      </div>

      {/* Product Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
        {originals.map((product, index) => (
          <motion.div
            key={product?.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <TiltCard>
              <a
                onClick={() => setSelectedProduct(product)}
                href={product?.link}
                className="block bg-white shadow-lg border border-gray-200 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#38b2ac] transition-all duration-700 p-2 md:p-5"
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={product?.image || product?.wallImage}
                    alt={product?.title}
                    className="w-full h-48 md:h-72 object-contain group-hover:scale-110 transition-transform duration-700 ease-out "
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="pt-4 text-center">
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
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <motion.div
        className="relative z-10 w-4/5 mx-auto mt-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {/* Product Modal */}
      {selectedProduct && (
        <ProductCart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          category="cinemapremi"
        />
      )}
    </section>
  );
};

export default Cinemapremi;
