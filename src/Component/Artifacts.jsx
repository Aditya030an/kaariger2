import React, { useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/Artifacts2.jpg";

import Img1 from "./photos/Artifacts.jpg";
import Img3 from "./photos/Artifacts1.jpg";
import Img4 from "./photos/Artifacts2.jpg";
import Img6 from "./photos/Artifacts4.png";
import Img7 from "./photos/Artifacts5.png";
import Img8 from "./photos/Artifacts6.jpg";
import Img10 from "./photos/Artifacts8.jpg";
import Img14 from "./photos/Artifacts12.jpg";
import Img19 from "./photos/artifacts22.jpg";
import Img21 from "./photos/artifacts24.jpg";
import Img26 from "./photos/artifacts31.jpg";
import Img28 from "./photos/artifacts35.jpg";
import Img29 from "./photos/artifacts36.png";
import Img30 from "./photos/artifacts39.jpg";
import Img31 from "./photos/artifacts38.png";
import Img32 from "./photos/artifacts37.png";
// import Img33 from "./photos/artifacts28.png";
// import Img34 from "./photos/artifacts27.png";
import Img35 from "./photos/artifacts40.png";
import Img36 from "./photos/artifacts41.png";
import Img37 from "./photos/artifacts42.png";
import Img38 from "./photos/artifacts43.png";
import Img39 from "./photos/artifacts44.png";
import Img40 from "./photos/artifacts45.png";
import Img41 from "./photos/artifacts46.jpg";
import Img42 from "./photos/artifacts47.png";
import Img43 from "./photos/artifacts48.png";
import Img44 from "./photos/artifacts49.jpg";
import Img45 from "./photos/artifacts50.png";
import Img46 from "./photos/Aestheticspremi10.jpg";
import Img47 from "./photos/Aestheticspremi16.jpg";
import Img48 from "./photos/Aestheticspremi17.jpg";
import Img49 from "./photos/Aestheticspremi18.jpg";
import Img50 from "./photos/artifacts72.jpg";
import Img51 from "./photos/artifacts73.jpg";
import Img52 from "./photos/artifacts74.jpg";
import Img53 from "./photos/artifacts75.jpg";
// import Img54 from "./photos/artifacts76.jpg";
// import Img55 from "./photos/artifacts77.jpg";
import Img56 from "./photos/artifacts78.jpg";
import Img57 from "./photos/artifacts79.jpg";
import Img58 from "./photos/artifacts80.jpg";
import Img59 from "./photos/artifacts81.jpg";
import Img60 from "./photos/artifacts82.jpg";
import Img61 from "./photos/artifacts83.jpg";

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
    id: 15,
    title: "Eclipsera Pole (Clay)",
    image: Img30,
    wallImage: Img32,
    moreImg: [Img31, Img56, Img57, Img58],
    basePrice: 35000,
    link: "#",
    resizeOption: false,
    frameOption: false,
    description:
      "A striking designer art piece featuring a vertical series of handcrafted ceramic forms gracefully aligned on a slender metal stand. The contrast of monochrome tones and flowing curves creates a sculptural statement of balance, movement, and modern sophistication—perfect for contemporary interiors or gallery-style spaces.",
  },
  {
    id: 28,
    title: "Modern Relic",
    image: Img41,
    wallImage: Img42,
    moreImage: Img43,
    moreImg: [Img43, Img50, Img51, Img52, Img53],
    basePrice: 16000,
    link: "#",
    description:
      "A contemporary sculpture featuring interlocking abstract shapes in earthy tones of brown, beige, and gray. Crafted with smooth matte textures, it adds a sense of balance, depth, and modern artistry to the space.",
  },
  {
    id: 29,
    title: "Timeless unity",
    image: Img44,
    wallImage: Img45,
    basePrice: 70000,
    link: "#",
    description:
      "Sleek. Minimal. Poetic.These handcrafted wooden sculptures redefine modern elegance — blending raw natural wood with bold black and white textures. Each figure stands tall with graceful symmetry, embodying calm presence and artistic balance. Perfect for contemporary homes that appreciate simplicity with soul.",
  },
  {
    id: 30,
    title: "Kava Cups set of 2(Clay)",
    basePrice: 3000,
    image: Img46,
    moreImg: [Img47, Img48, Img49],
    link: "#",
    resizeOption: false,
    frameOption: false,
    description:
      "These handcrafted clay cone cups redefine the ritual — elegant, earthy, and unapologetically different. Set atop sculpted cube stands, they blend minimalism with a touch of rebellion, turning every sip into a quiet statement of style.",
  },
  {
    id: 1,
    title: "Fisherman Incense Holder (Clay) ",
    image: Img1,
    moreImg: [Img59, Img60, Img61],
    basePrice: 2000,
    link: "#",
    description:
      "A finely crafted designer sculpture depicting a fisherman seated in a minimalist boat, gently holding an incense stick. This elegant piece blends traditional symbolism with contemporary artistry, evoking calmness, reflection, and spiritual balance—ideal for refined interior décor or meditative spaces.",
  },

  {
    id: 2,
    title: "Hip Doggy Jewellery /Key Pot (Clay)",
    image: Img3,
    basePrice: 3500,
    link: "#",
    description:
      "Unleash luxury with this bold Bulldog Storage Companion! Crafted in matte black with golden accents, it’s not just décor — it’s attitude. Drop your keys, coins, or accessories straight into its jaws of style — where function meets fierce sophistication.",
  },
  {
    id: 3,
    title: "Samurai Incense Holder (Clay)",
    image: Img4,
    basePrice: 2000,
    link: "#",
    description:
      "Elegance meets serenity in this handcrafted ceramic incense holder — two minimalist warriors frozen in graceful motion, embodying calm and discipline. As the incense burns, gentle trails of smoke rise between them, creating a tranquil dance of aroma and artistry. Perfect for elevating your space with Zen sophistication and timeless charm.",
  },
  {
    id: 5,
    title: "⁠ ⁠Cards Wall Clock",
    image: Img6,
    basePrice: 1500,
    link: "#",
    description:
      "Time just got a royal twist. This wall clock isn’t just about ticking seconds — it’s a deck of destiny in motion. With playing cards swirling inside, every glance feels like a high-stakes game between fate and fortune. A perfect blend of bold design and rebellious elegance — where every hour is a winning hand.",
  },
  {
    id: 6,
    title: "⁠⁠Suits Serving Platters (Clay)",
    image: Img7,
    basePrice: 3000,
    link: "#",
    description:
      "A royal twist to your serveware — these card-shaped bowls bring the thrill of the game to your table. Each piece is sculpted with precision, blending luxury gold trims with the bold charm of hearts, spades, clubs, and diamonds. Perfect for nuts, snacks, or style — this set isn’t just dinnerware, it’s a statement of play, class, and indulgence. Deal your snacks in style.",
  },
  {
    id: 7,
    title: "Neat Tap ",
    image: Img8,
    basePrice: 2500,
    link: "#",
    description:
      "Where art meets indulgence — this wall-mounted liquor display turns your bar into a statement of sophistication. Industrial steel pipes fuse with rich wood tones, pouring character as smoothly as your finest spirit. It’s not just a dispenser — it’s a scene-stealer.",
  },

  {
    id: 9,
    title: "⁠⁠Giveth-Taketh Incense Holder (Clay)",
    image: Img10,
    basePrice: 3000,
    link: "#",
    description:
      "Ash meets aura — one hand gathers what’s gone, the other releases what remains. The incense burns slow, tracing smoke like a secret prayer between stillness and chaos. It’s not just ritual — it’s rebellion wrapped in calm.",
  },

  {
    id: 13,
    title: "Chakhna Pallete 1pc",
    image: Img14,
    basePrice: 1000,
    link: "#",
    description:
      "Where the buzz meets the bite — these chakhna palettes aren’t just plates, they’re mood boards for madness. Crafted around iconic alcohol bottles, they turn every sip into a scene and every snack into a statement. Because real flavor deserves a little attitude.",
  },

  // {
  //   id: 17,
  //   title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
  //   image: Img38,
  //   basePrice: 1000,
  //   link: "#",
  //   description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
  // },
  // {
  //   id: 28,
  //   title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
  //   image: Img39,
  //   basePrice: 1000,
  //   link: "#",
  //       description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
  // },
  // {
  //   id: 29,
  //   title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
  //   image: Img40,
  //   basePrice: 1000,
  //   link: "#",
  //       description:"Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
  // },
  {
    id: 18,
    title: "⁠⁠Faceoff Serving Platter 3pc (Clay) ",
    image: Img19,
    basePrice: 3000,
    link: "#",
    description:
      "Who said plates have to behave? These weird-face platters turn dining into an art of expression — bold, bizarre, and unapologetically fun. Each face carries its own attitude, serving your food with a side of chaos and creativity. Because ordinary was never on the menu.",
  },
  {
    id: 20,
    title: "Glitch Clock (Clay)",
    image: Img21,
    basePrice: 2500,
    link: "#",
    description:
      "Time, redefined — this abstract wall clock isn’t here to just tell hours; it’s here to steal them. A fusion of art and attitude, it turns every second into a visual story. Bold shapes, unexpected lines, and a vibe that says “time doesn’t control me — I style it.",
  },

  {
    id: 23,
    title: "Mr. Funny  Pants 3pc Set (Clay)",
    image: Img26,
    basePrice: 7500,
    link: "#",
    description:
      "-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  },
  // {
  //   id: 24,
  //   title: "Mr. Funny  Pants 1pc Set (Clay)",
  //   image: Img35,
  //   basePrice: 2500,
  //   link: "#",
  //   description:"-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  // },
  // {
  //   id: 25,
  //   title: "Mr. Funny  Pants 1pc Set (Clay)",
  //   image: Img36,
  //   basePrice: 2500,
  //   link: "#",
  //   description:"-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  // },
  // {
  //   id: 26,
  //   title: "Mr. Funny  Pants 1pc Set (Clay)",
  //   image: Img37,
  //   basePrice: 2500,
  //   link: "#",
  //   description:"-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  // },
  // {
  //   id: 27,
  //   title: "The Cardenza Coffee Table",
  //   image: Img33,
  //   wallImage:Img34,
  //   moreImg:[Img54 , Img55],
  //   basePrice: 27000,
  //   link: "#",
  //   description:"When play meets purpose — this Playing Card Table turns imagination into furniture! Built like a “House of Cards” yet sturdy enough to hold your coffee conversations, it’s a playful nod to classic casino charm and creative design. The glossy red-and-white finish adds a pop of fun to any room, making it a perfect centerpiece for your living space, lounge, or café corner.",
  // },
  
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
          Artifacts
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
