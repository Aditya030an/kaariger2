import React, { useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Artifacts2.jpg";

import Img1 from "./photos/Artifact3.png";
import Img9 from "./photos/Artifacts7.jpg";
import Img11 from "./photos/Artifacts9.jpeg";
import Img12 from "./photos/Artifacts10.jpg";
import Img13 from "./photos/Artifacts11.jpg";
import Img16 from "./photos/Artifacts14.jpg";
import Img20 from "./photos/artifacts23.jpg";
import Img25 from "./photos/artifacts30.png";
import Img27 from "./photos/artifacts34.png";

import music from "./photos/music.png";

import ProductCart from "./ProductCard";
import Card from "./Card";

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
    title: "Ace Centre Table ",
    image: Img1,
    basePrice: 30000,
    link: "#",
  },
  {
    id: 2,
    title: " ⁠Grande Arena",
    image: Img9,
    basePrice: 50000,
    link: "#",
  },
  {
    id: 3,
    title: "Laundy Basket Ball Hoop",
    image: Img11,
    basePrice: 6000,
    link: "#",
  },
  {
    id: 4,
    title: "Laundry Basketball Bin",
    image: Img12,
    basePrice: 4000,
    link: "#",
  },
  {
    id: 5,
    title: "F1 Fender Stand Wooden",
    image: Img13,
    basePrice: 10000,
    link: "#",
  },

  {
    id: 6,
    title: "Casettee Centre Table",
    image: Img16,
    basePrice: 40000,
    link: "#",
  },
  {
    id: 7,
    title: " ⁠⁠Boombox Shelf Table ",
    image: music,
    basePrice: 30000,
    link: "#",
  },

  {
    id: 8,
    title: "Humané Centre Table",
    image: Img20,
    basePrice: 30000,
    link: "#",
  },

  {
    id: 9,
    title: "Retrovision Table Centre",
    image: Img25,
    wallImage: Img27,
    basePrice: 25000,
    link: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Painting = ({ cart, setCart }) => {
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
          Furniture Pieces
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6 font-[Amita] text-lg md:text-2xl font-light"
        >
          Curated statement pieces where design meets craftsmanship.
        </motion.p>
      </div>

      {/* Product Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
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
              <Card
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
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
          category="artifacts"
        />
      )}
    </section>
  );
};

export default Painting;
