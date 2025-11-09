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
import Img28 from "./photos/artifacts35.jpg";
import Img29 from "./photos/artifacts36.png";

import Img2 from "./photos/Aestheticspremi11.jpg";
import Img3 from "./photos/Aestheticspremi12.png";

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
    description:"A bold fusion of creativity and craftsmanship, this table transforms a simple wooden pallet into a statement piece. Featuring a striking Ace of Spades design in black and white, it adds a playful yet classy touch to any modern living space."
  },
  {
    id: 2,
    title: " ⁠Grande Arena",
    image: Img9,
    basePrice: 50000,
    link: "#",
    description:"The Stadium Coffee Table. Grande Arena is a masterpiece of modern design — a coffee table that brings the thrill of football right into your living room. Crafted from rich natural wood and topped with a sleek glass surface, it features a stunning miniature stadium beneath, complete with players, turf, and cheering crowds. This unique piece blends artistry, craftsmanship, and passion for the game — a true collector’s dream for sports lovers and design enthusiasts alike."
  },
  {
    id: 3,
    title: "Laundy Basket Ball Hoop",
    image: Img11,
    basePrice: 6000,
    link: "#",
    description:"Turn laundry time into game time! 🏀 This Laundry Basketball Hoop adds fun and functionality to your room — just toss your clothes in and score! Made with a sturdy backboard and breathable mesh bag, it keeps your space tidy while making chores feel like a slam dunk. Perfect for bedrooms, dorms, or kids’ rooms!"
  },
  {
    id: 4,
    title: "Laundry Basketball Bin",
    image: Img12,
    basePrice: 4000,
    link: "#",
    description:"Turn your daily chores into a fun game! This Laundry Basketball Bin combines play and practicality — just shoot your clothes through the hoop and score a clean room every time. Perfect for kids, teens, and sports lovers who want to make laundry time exciting while keeping the space tidy and stylish"
  },
  {
    id: 5,
    title: "F1 Fender Stand Wooden",
    image: Img13,
    basePrice: 10000,
    link: "#",
    description:"Bring home the spirit of Formula 1 with this stunning F1 Fender Stand Wooden. Crafted with precision and designed to resemble a real F1 car fender, it adds a bold, sporty vibe to your space. Perfect as a display shelf or wall décor for motorsport enthusiasts, this piece combines craftsmanship, style, and speed in one iconic design.",
  },

  {
    id: 6,
    title: "Casettee Centre Table",
    image: Img16,
    basePrice: 40000,
    link: "#",
    description:"The Cassette Centre Table is a nostalgic fusion of retro charm and modern design. Crafted from premium wood, it replicates the classic audio cassette look, turning a vintage icon into a functional centerpiece. Its sturdy build and detailed craftsmanship make it perfect for living rooms, cafes, or creative studios. A true conversation starter that blends art, utility, and timeless style."
  },
  {
    id: 7,
    title: " ⁠⁠Boombox Shelf Table ",
    image: music,
    basePrice: 30000,
    link: "#",
    description:"A striking fusion of retro charm and modern design, the Boombox Shelf Centre Table reimagines classic cassette aesthetics into functional furniture. Crafted in sleek matte black with a bold red storage compartment, it’s both a nostalgic tribute and a contemporary statement piece. Perfect for creative spaces, studios, or living rooms that celebrate style with substance.",
  },

  {
    id: 8,
    title: "Humané Centre Table",
    image: Img20,
    basePrice: 30000,
    link: "#",
    description:"A sculptural masterpiece that brings art and functionality together. The Humane Centre Table features a finely crafted human face base, symbolizing serenity and depth, topped with a sleek glass surface. Perfect for modern living spaces, it adds a touch of minimalism, sophistication, and soulful character to any room.",
  },

  {
    id: 9,
    title: "Retrovision Table Centre",
    image: Img25,
    wallImage: Img27,
    basePrice: 25000,
    link: "#",
    description:"A perfect blend of nostalgia and modern design, the RetroVision Centre Table transforms a vintage TV frame into a stylish glass-top table. Crafted from rich wood with retro dials and metallic detailing, it brings a unique charm to your living space. Ideal for those who love timeless aesthetics with a creative twist.",
  },
  {
    id: 10,
    title: "The Third Seat (1pc) ",
    basePrice: 30000,
    image: Img2,
    wallImage: Img3,
    link: "#",
    resizeOption: false,
    frameOption: false,
    description:"A sculptural blend of geometry and comfort, The Third Seat transforms modern seating into an art form. With its bold triangular frame and soft cushioned core, it brings harmony between structure and serenity. Perfect for contemporary spaces, this chair is a statement of balance — where design meets imagination.",
  },
  {
    id: 11,
    title: "Mr. Nook",
    image: Img28,
    wallImage: Img29,
    basePrice: 25000,
    link: "#",
    description:"Mr. Nook — a compact fusion of charm and function. Crafted in rich wood, this minimal yet warm bedside table brings an earthy aesthetic to modern living. With a pull-down rattan shelf and soft ambient lighting, it’s perfect for cozy storage or displaying your favorite reads and decor. A true nook of comfort and sophistication for any corner."
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
        {originals.toReversed().map((product, index) => (
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
                category="artifacts"
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
