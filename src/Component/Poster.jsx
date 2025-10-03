import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import VanillaTilt from "vanilla-tilt";

import bgImg from "./photos/pencil6.jpeg";
import kaarigar1 from "./photos/Cinema.jpeg";
import kaarigar2 from "./photos/Cinema1.jpeg";
import kaarigar3 from "./photos/Cinema2.jpeg";
import Img4 from "./photos/Cinema3.jpeg";
import Img5 from "./photos/Cinema4.jpeg";
import Img6 from "./photos/Cinema5.jpeg";
import Img7 from "./photos/Cinema6.jpeg";
import Img8 from "./photos/Cinema7.jpeg";
import Img9 from "./photos/Cinema8.jpeg";
// import kaarigar33 from "./photos/madira2.png";
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
import Img26 from "./photos/posters.jpg";

import Img255 from "./photos/best11.jpeg";
import Img245 from "./photos/cinema.jpg";
import motor1 from "./photos/motor.png";
import motor2 from "./photos/motor1.png";
import motor3 from "./photos/moto2.png";
import motor4 from "./photos/motor3.png";
import motor5 from "./photos/motor4.png";
import motor6 from "./photos/motor5.jpeg";
import motor7 from "./photos/motor6.jpeg";
import motor8 from "./photos/motor7.jpeg";
import motor9 from "./photos/motor8.jpeg";
import motor10 from "./photos/motor9.jpeg";
import motor12 from "./photos/motor13.png";
import motor11 from "./photos/motor10.jpeg";
import motor112 from "./photos/painting115.jpg";

import motor13 from "./photos/motor12.jpeg";
import motor32 from "./photos/motor32.jpeg";
import motor55 from "./photos/motor44.jpeg";

import pencil12 from "./photos/best1.jpeg";
import pencil1 from "./photos/pencil.jpeg";
import pencil2 from "./photos/penci3.png";
import pencil3 from "./photos/pencil.png";
import pencil4 from "./photos/pencil2.jpeg";
import pencil5 from "./photos/pencil4.jpeg";
import pencil6 from "./photos/pencil44.png";
import pencil7 from "./photos/pencil5.jpeg";
import pencil13 from "./photos/pencil10.png";
import pencil8 from "./photos/pencil6.jpeg";
import pencil9 from "./photos/pencil7.jpeg";
import pencil10 from "./photos/pencil8.jpeg";
import pencil11 from "./photos/pencil9.jpeg";

import Aesthetics1 from "./photos/Aestheticspremi2.jpeg";
import Aesthetics2 from "./photos/Aestheticspremi3.jpeg";
import Aesthetics3 from "./photos/Aestheticspremi5.jpeg";
import Aesthetics4 from "./photos/Aestheticspremi6.jpeg";
import Aesthetics5 from "./photos/Aestheticspremi4.jpeg";

import Aesthetics6 from "./photos/Aestheticspremi7.jpeg";
import Aesthetics7 from "./photos/Aestheticspremi9.jpeg";

import jua1 from "./photos/Jua.jpg";

import jua3 from "./photos/jua3.png";
import jua4 from "./photos/jua4.png";
// import jua5 from "./photos/jua5.png";
import jua6 from "./photos/jua6.png";
import jua7 from "./photos/juapremi.png";
import jua8 from "./photos/poker.jpeg";

import madira1 from "./photos/madira1.png";
import madira2 from "./photos/madira3.png";
import madira3 from "./photos/madira2.png";
import madira4 from "./photos/madira4.png";

import madira5 from "./photos/madira5.png";

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
  // ---------------- Originals ----------------
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
    id: 4,
    title: "Mystic Reflections ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 5,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img4,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 6,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img5,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 7,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img6,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 8,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img7,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 9,
    title: "Sojourn",
    basePrice: 7999,
    image: Img8,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 10,
    title: "Ethereal Touch ",
    basePrice: 7499,
    image: Img9,
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
    id: 12,
    title: "Mystic Reflections ",
    basePrice: 7299,
    image: Img13,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 13,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img14,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 14,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img15,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 15,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img16,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 16,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img17,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 17,
    title: "Sojourn",
    basePrice: 7999,
    image: Img18,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 18,
    title: "Ethereal Touch ",
    basePrice: 7499,
    image: Img19,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 19,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img20,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 20,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img21,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 21,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img22,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 22,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img23,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 23,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img24,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 24,
    title: "Twilight Reverie ",
    basePrice: 7399,
    image: Img25,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 25,
    title: "Golden Horizon ",
    basePrice: 8599,
    image: Img26,
    link: "#",
    height: 12,
    width: 18,
  },
  {
    id: 51,
    title: "Pencil Artwork",
    image: pencil11,
    link: "#",
    height: 30,
    width: 25,
  },

  {
    id: 71,
    title: "Madira Artwork",
    image: madira4,
    link: "#",
    height: 25,
    width: 18,
  },
  {
    id: 67,
    title: "Jua Collection",
    image: jua8,
    link: "#",
    height: 40,
    width: 25,
  },

  {
    id: 45,
    title: "Hustle, Bustle And Rain ",
    image: pencil5,
    wallImage: pencil6,
    link: "#",
    height: 35,
    width: 18,
  },

  {
    id: 39,
    title: "Motor Artwork",
    image: motor13,
    link: "#",
    height: 40,
    width: 25,
  },
  {
    id: 69,
    title: "Madira Artwork",
    image: madira2,
    wallImage: madira5,
    link: "#",
    height: 30,
    width: 30,
  },

  {
    id: 53,
    title: "Aesthetic Premium",
    image: Aesthetics1,
    link: "#",
    height: 30,
    width: 25,
  },
  {
    id: 62,
    title: "THe Ring Master",
    image: jua3,
    link: "#",
    height: 25,
    width: 25,
  },
  {
    id: 33,
    title: "Motor Artwork",
    image: motor8,
    wallImage: motor2,
    link: "#",
    height: 35,
    width: 18,
  },

  {
    id: 44,
    title: "Pencil Artwork",
    image: pencil4,
    wallImage: pencil3,
    link: "#",
    height: 25,
    width: 20,
  },

  { id: 68, title: "Madira Artwork", image: madira1, link: "#" },

  {
    id: 54,
    title: "Aesthetic Premium",
    image: Aesthetics2,
    link: "#",
    height: 30,
    width: 25,
  },

  {
    id: 29,
    title: "Claws Of Velocity",
    image: motor32,
    wallImage: motor4,
    link: "#",
    height: 36,
    width: 25,
  },

  {
    id: 66,
    title: " ⁠The Parliament ",
    basePrice: 8599,
    image: jua7,
    link: "#",
    height: 35,
    width: 35,
  },

  {
    id: 31,
    title: " Beyond Miles ",
    image: motor6,
    wallImage: motor1,
    link: "#",
    height: 25,
    width: 25,
  },

  {
    id: 56,
    title: " ⁠Colours Of Caffeine  ",
    image: Aesthetics4,
    link: "#",
    height: 25,
    width: 18,
  },
  {
    id: 40,
    title: "Whispers Of A Bloom  ",
    image: pencil12,
    link: "#",
    height: 25,
    width: 25,
  },

  {
    id: 50,
    title: "The Intentional Splash ",
    image: pencil10,
    link: "#",
    height: 25,
    width: 18,
  },
  {
    id: 30,
    title: "Metre Down ",
    image: motor55,
    wallImage: motor5,
    link: "#",
    height: 36,
    width: 25,
  },

  {
    id: 35,
    title: "Born Reckless ",
    image: motor10,
    wallImage: motor12,
    link: "#",
    height: 20,
    width: 15,
  },
  {
    id: 59,
    title: "⁠Pouring Stories ",
    image: Aesthetics7,
    link: "#",
    height: 36,
    width: 25,
  },
  {
    id: 65,
    title: "Face Down, Crown Up",
    image: jua6,
    link: "#",
    height: 40,
    width: 25,
  },

  {
    id: 41,
    title: "The Monochrome Lady.",
    image: pencil1,
    wallImage: pencil2,
    link: "#",
    height: 30,
    width: 20,
  },

  {
    id: 28,
    title: "The Final Lap",
    image: motor3,
    link: "#",
    height: 25,
    width: 25,
  },

  {
    id: 55,
    title: "Old Men's Friend",
    image: Aesthetics3,
    link: "#",
    height: 20,
    width: 15,
  },

  {
    id: 49,
    title: "The Evening Sip ",
    image: pencil9,
    link: "#",
    height: 25,
    width: 20,
  },
  {
    id: 58,
    title: "Colours of The Mind",
    image: Aesthetics6,
    link: "#",
    height: 25,
    width: 18,
  },

  // { id: 64, title: "Jua Collection", image: jua5, link: "#" },

  {
    id: 36,
    title: "Noir Elan",
    image: motor11,
    link: "#",
    height: 30,
    width: 20,
  },

  {
    id: 37,
    title: "The Midnight Cadillac",
    image: motor112,
    link: "#",
    height: 25,
    width: 25,
  },

  {
    id: 48,
    title: "The Morning Street",
    image: pencil8,
    link: "#",
    height: 35,
    width: 20,
  },

  {
    id: 32,
    title: "Scarlet Velocity",
    image: motor7,
    link: "#",
    height: 30,
    width: 18,
  },

  {
    id: 47,
    title: "The Many",
    image: pencil7,
    wallImage: pencil13,
    link: "#",
    height: 30,
    width: 20,
  },
  {
    id: 63,
    title: "Your Majesty ",
    image: jua4,
    link: "#",
    height: 30,
    width: 25,
  },

  {
    id: 34,
    title: "Vroom Town",
    image: motor9,
    link: "#",
    height: 35,
    width: 20,
  },

  {
    id: 70,
    title: "Into The Pour ",
    image: madira3,
    link: "#",
    height: 30,
    width: 20,
  },
  {
    id: 57,
    title: "Mrs. Bijou",
    image: Aesthetics5,
    link: "#",
    height: 25,
    width: 18,
  },

  {
    id: 60,
    title: "The Last Bet",
    image: jua1,
    link: "#",
    height: 40,
    width: 30,
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
          Poster
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6 font-[Amita] text-lg md:text-2xl font-light"
        >
          Museum-grade, high-quality prints that bring striking visuals with
          lasting brilliance.
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
          category="poster"
        />
      )}
    </section>
  );
};

export default Painting;
