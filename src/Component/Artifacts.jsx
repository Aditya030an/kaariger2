import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Artifacts2.jpg";
import { ArrowRight } from "lucide-react";

import Img1 from "./photos/Artifacts.jpg";
import Img3 from "./photos/Artifacts1.jpg";
import Img4 from "./photos/Artifacts2.jpg";
import Img5 from "./photos/Artifact3.png";
import Img6 from "./photos/Artifacts4.png";
import Img7 from "./photos/Artifacts5.png";
import Img8 from "./photos/Artifacts6.jpg";

import Img9 from "./photos/Artifacts7.jpg";
import Img10 from "./photos/Artifacts8.jpg";
import Img11 from "./photos/Artifacts9.jpeg";
import Img12 from "./photos/Artifacts10.jpg";
import Img13 from "./photos/Artifacts11.jpg";
import Img14 from "./photos/Artifacts12.jpg";

import Img16 from "./photos/Artifacts14.jpg";
import Img17 from "./photos/Artifacts15.jpg";
import Img18 from "./photos/Artifacts16.jpg";
import Img19 from "./photos/artifacts22.jpg";
import Img20 from "./photos/artifacts23.jpg";
import Img21 from "./photos/artifacts24.jpg";
import Img22 from "./photos/artifacts25.jpg";
import Img23 from "./photos/artifacts26.jpg";
import Img24 from "./photos/artifacts29.png";
import Img25 from "./photos/artifacts30.png";
import Img26 from "./photos/artifacts31.jpg";
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
    title: "Fisherman Incense Holder (Clay) ",
    image: Img1,
    basePrice: 2000,
    link: "#",
  },

  {
    id: 2,
    title: "Hip Doggy Jewellery /Key Pot (Clay)",
    image: Img3,
    basePrice: 3500,
    link: "#",
  },
  {
    id: 3,
    title: "Samurai Incense Holder (Clay)",
    image: Img4,
    basePrice: 2000,
    link: "#",
  },
  {
    id: 4,
    title: "Ace Centre Table ",
    image: Img5,
    basePrice: 30000,
    link: "#",
  },
  {
    id: 5,
    title: "⁠ ⁠Cards Wall Clock",
    image: Img6,
    basePrice: 1500,
    link: "#",
  },
  {
    id: 6,
    title: "⁠⁠Suits Serving Platters (Clay)",
    image: Img7,
    basePrice: 3000,
    link: "#",
  },
  {
    id: 7,
    title: "Neat Tap ",
    image: Img8,
    basePrice: 2500,
    link: "#",
  },

  {
    id: 8,
    title: " ⁠Grande Arena",
    image: Img9,
    basePrice: 50000,
    link: "#",
  },

  {
    id: 9,
    title: "⁠⁠Giveth-Taketh Incense Holder (Clay)",
    image: Img10,
    basePrice: 3000,
    link: "#",
  },
  {
    id: 10,
    title: "Laundy Basket Ball Hoop",
    image: Img11,
    basePrice: 6000,
    link: "#",
  },
  {
    id: 11,
    title: "Laundry Basketball Bin",
    image: Img12,
    basePrice: 4000,
    link: "#",
  },
  {
    id: 12,
    title: "F1 Fender Stand Wooden",
    image: Img13,
    basePrice: 10000,
    link: "#",
  },
  {
    id: 13,
    title: "Chakhna Pallete 1pc",
    image: Img14,
    basePrice: 1000,
    link: "#",
  },

  {
    id: 14,
    title: "Casettee Centre Table",
    image: Img16,
    basePrice: 40000,
    link: "#",
  },
  // {
  //     id: 15,
  //     title: "Artifacts",
  //     image: Img17,
  //     basePrice: 1000,
  //     link: "#",
  // },
  {
    id: 16,
    title: " ⁠⁠Boombox Shelf Table ",
    image: music,
    basePrice: 30000,
    link: "#",
  },
  {
    id: 17,
    title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
    image: Img19,
    basePrice: 30000,
    link: "#",
  },
  {
    id: 18,
    title: "⁠⁠Faceoff Serving Platter 3pc (Clay) ",
    image: Img19,
    basePrice: 30000,
    link: "#",
  },

  {
    id: 19,
    title: "Humané Centre Table",
    image: Img20,
    basePrice: 30000,
    link: "#",
  },
  {
    id: 20,
    title: "Glitch Clock (Clay)",
    image: Img21,
    basePrice: 2500,
    link: "#",
  },

  {
    id: 21,
    title: "Retrovision Table Centre",
    image: Img25,
    basePrice: 25000,
    link: "#",
  },

  {
    id: 22,
    title: "Mr. Funny  Pants 3pc Set (Clay)",
    image: Img26,
    basePrice: 7500,
    link: "#",
  },
  {
    id: 23,
    title: "Mr. Funny  Pants 1pc Set (Clay)",
    image: Img26,
    basePrice: 7500,
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
          Artifacts & Furniture Pieces
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
              <Card product={product} onClick={() => setSelectedProduct(product)} />
             
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
