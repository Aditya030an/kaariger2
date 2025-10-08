import React, { useState} from "react";
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
import Img33 from "./photos/artifacts28.png";
import Img34 from "./photos/artifacts27.png";
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
    id: 9,
    title: "⁠⁠Giveth-Taketh Incense Holder (Clay)",
    image: Img10,
    basePrice: 3000,
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
      id: 15,
      title: "Eclipsera Pole (Clay)",
      image: Img30,
      wallImage:Img32,
      moreImage:Img31,
      basePrice: 35000,
      link: "#",
  },
  {
    id: 17,
    title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
    image: Img38,
    basePrice: 10000,
    link: "#",
  },
  {
    id: 28,
    title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
    image: Img39,
    basePrice: 10000,
    link: "#",
  },
  {
    id: 29,
    title: "⁠⁠Faceoff Serving Platter 1pc (Clay) ",
    image: Img40,
    basePrice: 10000,
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
    id: 20,
    title: "Glitch Clock (Clay)",
    image: Img21,
    basePrice: 2500,
    link: "#",
  },
  {
    id: 22,
    title: "Mr. Nook",
    image: Img28,
    wallImage: Img29,
    basePrice: 25000,
    link: "#",
  },
  {
    id: 23,
    title: "Mr. Funny  Pants 3pc Set (Clay)",
    image: Img26,
    basePrice: 7500,
    link: "#",
  },
  {
    id: 24,
    title: "Mr. Funny  Pants 1pc Set (Clay)",
    image: Img35,
    basePrice: 2500,
    link: "#",
  },
  {
    id: 25,
    title: "Mr. Funny  Pants 1pc Set (Clay)",
    image: Img36,
    basePrice: 2500,
    link: "#",
  },
  {
    id: 26,
    title: "Mr. Funny  Pants 1pc Set (Clay)",
    image: Img37,
    basePrice: 2500,
    link: "#",
  },
  {
    id: 27,
    title: "The Cardenza Coffee Table",
    image: Img33,
    wallImage:Img34,
    basePrice: 27000,
    link: "#",
  },
  {
    id: 28,
    title: "Modern Relic",
    image: Img41,
    wallImage:Img42,
    moreImage:Img43,
    basePrice: 16000,
    link: "#",
  },
  {
    id: 29,
    title: "Timeless unity",
    image: Img44,
    wallImage:Img45,
    basePrice: 82000,
    link: "#",
  },
   {
      id: 30,
      title: "Kava Cups set of 2(Clay)",
      basePrice: 3000,
      image:Img46,
      link: "#",
      resizeOption: false,
      frameOption: false,
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
              <Card product={product} category="artifacts" onClick={() => setSelectedProduct(product)} />
             
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
