import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/pencil4.jpeg";
import Img1 from "./photos/pencil.jpeg";
import Img2 from "./photos/penci3.png";
import Img3 from "./photos/pencil.png";
import Img4 from "./photos/pencil2.jpeg";
import Img5 from "./photos/pencil4.jpeg";
import Img6 from "./photos/pencil44.png";
import Img7 from "./photos/pencil5.jpeg";
import Img12 from "./photos/pencil10.png";
import Img8 from "./photos/pencil6.jpeg";
import Img9 from "./photos/pencil7.jpeg";
import Img10 from "./photos/pencil8.jpeg";
import Img11 from "./photos/pencil9.jpeg";

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
    title: "Guardians Of The Green ",
    basePrice: 8199,
    image: Img4,
    wallImage: Img3,
    hoverImage: Img3, // NEW IMAGE shown on hover
    link: "#",
    height:25,
    width:20,
    description:"“Guardians of the Green” depicts a tranquil forest scene in striking black and white tones. A group of graceful deer stands beneath tall trees, their forms illuminated by soft beams of light filtering through the canopy. The contrast between shadow and radiance captures nature’s quiet majesty — a moment where stillness feels sacred and the forest breathes with life.",
  },

  {
    id: 4,
    title: "The Monochrome Lady. ",
    basePrice: 8199,
    image: Img1,
    wallImage: Img2,
    hoverImage: Img2, // NEW IMAGE shown on hover
    link: "#",
    height:30,
    width:20,
    description:"“The Monochrome Lady” portrays a beautiful woman bathed in shades of black and white, where light and shadow dance across her features. The absence of color heightens her grace, emotion, and timeless elegance. Every contour and gaze speaks in silence — a poetic blend of mystery and sophistication.",
  },
  {
    id: 5,
    title: "Hustle, Bustle And Rain  ",
    basePrice: 6799,
    image: Img5,
    wallImage: Img6,
    hoverImage: Img6, // <-- hover image for id 5
    link: "#",
    height:35,
    width:18,
    description:"A moody monochrome cityscape captures the rhythm of urban life under a veil of rain. Cars move through glistening streets as towering buildings fade into mist, reflecting both chaos and calm. The scene beautifully blends motion and stillness, embodying the poetry hidden in everyday rush.",
  },
  {
    id: 7,
    title: "The Many ",
    basePrice: 8599,
    image: Img7,
    wallImage: Img12,
    link: "#",
    height:30,
    width:20,
    description:"“The Many” is a captivating black-and-white composition featuring three eyes aligned vertically, each with a distinct gaze. The layered eyes symbolize perception, depth, and the unseen dimensions of consciousness. Through minimalist contrast and repetition, the painting evokes mystery — a silent exploration of how we see, and how we are seen.",
  },
  {
    id: 8,
    title: "A Morning Street ",
    basePrice: 7999,
    image: Img8,
    link: "#",
    height:35,
    width:20,
    description:"This monochrome painting captures the quiet soul of an old Indian street at dawn. The soft mist and diffused light blend into the aged architecture, where silhouettes of people begin their daily chores. The sweeping figure in the foreground symbolizes simplicity and rhythm in everyday life — a gentle harmony between man, light, and the timeless city.",
  },
  {
    id: 9,
    title: "The Evening Sip ",
    basePrice: 7499,
    image: Img9,
    link: "#",
    height:25,
    width:20,
    description:"“The Evening Sip” is a hyper-realistic sketch capturing the quiet luxury of unwinding. Whiskey glasses glisten with melting ice cubes, their textures rendered in exquisite detail. The monochrome tones highlight light and reflection, evoking warmth, sophistication, and the calm ritual of a perfect evening.",
  },
  {
    id: 10,
    title: "The Intentional Splash ",
    basePrice: 7399,
    image: Img10,
    link: "#",
     height:25,
    width:18,
    description:"A moment frozen in motion, The Intentional Splash captures the precise instant an ice cube meets water — chaos turned into elegance. Each ripple and droplet tells a story of controlled spontaneity, where stillness and energy coexist. The artwork celebrates simplicity, precision, and the beauty hidden in everyday motion.",
  },
  {
    id: 11,
    title: "⁠The Good Card ",
    basePrice: 8599,
    image: Img11,
    link: "#",
    height:30,
    width:25,
    description:"A powerful sketch of a crushed Ace of Spades — symbolizing both victory and defeat in a single frame. The rough lines and broken edges reflect the fragile balance between luck and fate, where even the strongest card can fall under pressure.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Pencilpremi = ({ cart, setCart }) => {
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
      {/* Background Image (light, low opacity, no blur) */}
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
          <span className="block w-20 h-1  mx-auto mb-3 md:mb-6 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-full"></span>
          Pencilpremi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6  font-[Amita] text-lg md:text-2xl font-light"
        >
         -No colours! Just black and white and it’s a vibee!!! Enjoy our Monochrome musings!
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
                href={product?.link}
                onClick={() => setSelectedProduct(product)}
                className="group block bg-white shadow-lg border border-gray-200 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#38b2ac] transition-all duration-700 p-2 md:p-5"
              >
                <div className="relative overflow-hidden rounded-2xl h-48 md:h-72 flex items-center justify-center">
                  <motion.img
                    src={product?.image}
                    alt={product?.title}
                    className={`absolute w-full h-full transition-opacity duration-700 ease-out 
      ${
        product?.hoverImage
          ? "group-hover:opacity-0 object-contain"
          : "object-contain"
      }`}
                  />

                  {product?.hoverImage && (
                    <motion.img
                      src={product?.hoverImage}
                      alt={`${product?.title} Hover`}
                      className="absolute w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                    />
                  )}
                </div>
                <div className="pt-4 text-center">
                  <h3 className="text-[16px] md:text-xl font-[Amita] font-semibold md:font-bold text-gray-800 mb-2">
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
          category="pencilpremi"
        />
      )}
    </section>
  );
};

export default Pencilpremi;
