import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/madira5.png";
import kaarigar1 from "./photos/madira1.png";
import kaarigar2 from "./photos/madira3.png";
import kaarigar3 from "./photos/madira2.png";
import Img4 from "./photos/madira4.png";

import Img6 from "./photos/madira5.png";
import Img7 from "./photos/img2.jpg";
import Img8 from "./photos/Artifacts6.jpg";
import Img9 from "./photos/Artifacts5.png";
import Img10 from "./photos/Artifacts12.jpg";
import Img11 from "./photos/artifacts43.png";
import Img12 from "./photos/artifacts44.png";
import Img13 from "./photos/artifacts45.png";
import Img14 from "./photos/artifacts22.jpg";
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
    title: "The Double Pour ",
    basePrice: 7999,
    image: kaarigar1,
    link: "#",
    height:35,
    width:25,
    description:"A stunning two-part artwork capturing the elegant chaos of red wine in motion. The first frame shows a graceful pour from a dark bottle, while the second bursts with energy as the wine splashes into a glass, freezing that perfect moment of fluid art. Together, they celebrate indulgence, movement, and the beauty found in everyday elegance.",
  },
  {
    id: 2,
    title: "The Spirit Of Life. ",
    basePrice: 6499,
    image: kaarigar2,
    wallImage: Img6,
    link: "#",
    height:30,
    width:30,
    description:"A mesmerizing play of light and color, The Spirit of Life captures the warmth and energy of a shared drink under vibrant reflections. The glowing oranges and luminous glass forms radiate vitality, symbolizing joy, renewal, and the essence of living fully. Each brushstroke dances with movement, breathing emotion into stillness.",
  },
  {
    id: 3,
    title: "Into The Pour ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
     height:35,
    width:25,
     description:"“Into the Pour” playfully blurs the line between indulgence and imagination. The painting depicts people diving into oversized wine glasses, surrendering to waves of rich crimson hues. With its surreal charm and fluid motion, it celebrates the joy of letting go — an ode to passion, pleasure, and the art of escape.",

  },
  {
    id: 4,
    title: "⁠The Cheers Edition  ",
    basePrice: 7999,
    image: Img4,
    link: "#",
    height:25,
    width:18,
        description:"“The Cheers Edition” captures a timeless toast set against the backdrop of an aged transcript, where history meets celebration. The two clinking glasses symbolize connection, memory, and shared moments that transcend time. With its warm tones and nostalgic texture, the painting feels like a tribute to stories told over every pour.",
  },

  {
    id: 6,
    title: " Sombra ",
    basePrice: 7299,
    image: Img7,
    link: "#",
    height:40,
    width:35,
    description:"“Sombra” captures the serene poetry of light and shadow. A simple wine bottle and delicate branch come alive through their golden reflection, blurring the line between reality and illusion. The soft glow through the window evokes calmness, stillness, and the quiet elegance of everyday beauty frozen in time.",
  },
    {
      id: 7,
      title: "Neat Tap ",
      image: Img8,
      basePrice: 2500,
      link: "#",
      category:"artifacts",
      description:"Where art meets indulgence — this wall-mounted liquor display turns your bar into a statement of sophistication. Industrial steel pipes fuse with rich wood tones, pouring character as smoothly as your finest spirit. It’s not just a dispenser — it’s a scene-stealer.",
    },
     {
        id: 8,
        title: "⁠⁠Suits Serving Platters (Clay)",
        image: Img9,
        basePrice: 3000,
        link: "#",
         category:"artifacts",
        description:"A royal twist to your serveware — these card-shaped bowls bring the thrill of the game to your table. Each piece is sculpted with precision, blending luxury gold trims with the bold charm of hearts, spades, clubs, and diamonds. Perfect for nuts, snacks, or style — this set isn’t just dinnerware, it’s a statement of play, class, and indulgence. Deal your snacks in style.",
      },
        {
          id: 9,
          title: "Chakhna Pallete 1pc",
          image: Img10,
          basePrice: 1000,
          link: "#",
          category:"artifacts",
          description:"Where the buzz meets the bite — these chakhna palettes aren’t just plates, they’re mood boards for madness. Crafted around iconic alcohol bottles, they turn every sip into a scene and every snack into a statement. Because real flavor deserves a little attitude.",
        },
        {    id: 10,
            title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
            image: Img11,
            basePrice: 10000,
            link: "#",
            category:"artifacts",
            description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
          },
          {
            id: 11,
            title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
            image: Img12,
            basePrice: 10000,
            link: "#",
            category:"artifacts",
                description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
          },
          {
            id: 12,
            title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
            image: Img13,
            basePrice: 10000,
            link: "#",
            category:"artifacts",
                description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
          },
          {
            id: 13,
            title: "⁠⁠Faceoff Serving Platter 3pc (Clay) ",
            image: Img14,
            basePrice: 30000,
            link: "#",
            category:"artifacts",
                description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
          },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Madira = ({ cart, setCart }) => {
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
          className="w-full h-full object-cover opacity-45 blur-sm"
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
          Madira Premi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 text-lg md:text-2xl font-light"
        >
          -For the Madira lovers, an exquisite collection of paintings and artifacts to express your love and passion.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
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
                onClick={() => setSelectedProduct(product)}
                className="group block bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#00ffc3] transition-all duration-700 p-2 md:p-5"
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
          category={selectedProduct?.category || "madira"}
        />
      )}
    </section>
  );
};

export default Madira;
