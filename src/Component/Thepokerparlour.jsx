import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Jua.jpg";
import kaarigar1 from "./photos/Jua.jpg";

import Img4 from "./photos/jua3.png";
import Img5 from "./photos/jua4.png";
// import Img6 from "./photos/jua5.png";
import Img7 from "./photos/jua6.png";
import Img8 from "./photos/juapremi.png";
import Img9 from "./photos/poker.jpeg";
import ProductCart from "./ProductCard";

// TiltCard
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

// Products
const originals = [
  {
    id: 1,
    title: "The Last Bet ",
    basePrice: 7999,
    image: kaarigar1,
    link: "#",
    height:40,
    width:30,
    description:"“The Last Bet” captures the tension of a final poker hand — a dimly lit table scattered with cards, cigars, wine glasses, and stacks of money. The smoky atmosphere  evoke suspense, temptation, and the thrill of risk. Every detail reflects the quiet chaos before fate is sealed — one final move, one last gamble.",
  },

  {
    id: 4,
    title: "The Ring Master ",
    basePrice: 7999,
    image: Img4,
    link: "#",
    height:25,
    width:25,
    description:"A close-up view of a roulette wheel captures the thrilling tension of chance — the ball suspended between fate and fortune. Rich textures and muted colors evoke the timeless allure of the casino floor, where every spin feels like a performance led by an unseen master of luck.",
  },
  {
    id: 5,
    title: "Your Majesty ",
    basePrice: 6499,
    image: Img5,
    link: "#",
    height:30,
    width:25,
    description:"A bold reinterpretation of the King of Hearts, blending geometric precision with royal elegance. The rich red and gold tones symbolize passion and power united in harmony. Modern minimalism meets timeless royalty — the heart of the deck reborn.",
  },
  // {
  //   id: 6,
  //   title: "Suits Serving Platters ",
  //   basePrice: 7299,
  //   image: Img6,
  //   link: "#",
  // },
  {
    id: 7,
    title: "Face Down, Crown Up ",
    basePrice: 7999,
    image: Img7,
    link: "#",
     height:40,
    width:25,
    description:"A captivating play of chance and control — where countless cards lie face down, yet one reigns above them all. The Queen of Hearts emerges boldly, symbolizing confidence, power, and grace amidst chaos. This artwork reminds us that true strength stands out, even when surrounded by uncertainty.",
  },
  {
    id: 8,
    title: " ⁠The Parliament ",
    basePrice: 6499,
    image: Img8,
    link: "#",
    height:35,
    width:35,
    description:"This painting titled The Parliament portrays a lively gathering around a grand roulette table, symbolizing debate, decision, and chance. Each player appears deeply engaged, representing diverse voices and opinions converging in one circle. Through its rich vintage tones and dynamic composition, it mirrors the energy, tension, and unity found in every great assembly of minds.",
  },
  {
    id: 9,
    title: "⁠Velvet Wager ",
    basePrice: 6499,
    image: Img9,
    link: "#",
    height: 35,
    width: 35,
    description:"A captivating painting featuring a beautiful girl in a checkered shirt gracefully holding a set of cards. Her confident gaze and poised demeanor capture the allure of mystery and risk. With soft, velvety tones and subtle lighting, the artwork blends elegance and suspense — embodying the charm of a high-stakes moment frozen in time.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Thepokerparlour = ({ cart, setCart }) => {
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
    <section className="relative overflow-hidden min-h-screen bg-black py-10 md:py-20 px-6 md:px-16 ">
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-white leading-tight tracking-wider"
        >
          <span className="block w-20 h-1 mx-auto mb-3 md:mb-6 bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 rounded-full"></span>
          The Poker Parlour
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 text-lg md:text-2xl font-light"
        >
          -We love betting don’t we? One-of-a-kind collection of artpieces for
          the enthusiasts!
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10  lg:gap-14">
        {originals.map((product, index) => (
          <motion.div
            key={product?.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <TiltCard>
              <a
                href={product?.link}
                className="group block bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#00ffc3] transition-all duration-700 p-2 md:p-5"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-48 md:h-72 object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="text-[16px] md:text-xl font-[Amita] font-semibold md:font-bold text-white mb-2">
                    {product?.title}
                  </h3>

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

      {/* Animated Divider */}
      <motion.div
        className="relative z-10 w-4/5 mx-auto mt-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
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
          category="thepokerparlour"
        />
      )}
    </section>
  );
};

export default Thepokerparlour;
