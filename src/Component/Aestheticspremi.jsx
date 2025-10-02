import React, { useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/madira5.png";
import kaarigar2 from "./photos/Aestheticspremi2.jpeg";
import kaarigar3 from "./photos/Aestheticspremi3.jpeg";
import Img4 from "./photos/Aestheticspremi5.jpeg";
import Img5 from "./photos/Aestheticspremi6.jpeg";
import Img6 from "./photos/Aestheticspremi4.jpeg";

import Img8 from "./photos/Aestheticspremi7.jpeg";
import Img9 from "./photos/Aestheticspremi9.jpeg";

import Img1 from "./photos/luxe1.png";
import Img2 from "./photos/luxe2.png";
import Img3 from "./photos/luxe3.png";

import Img10 from "./photos/luxe5.png";
import Img11 from "./photos/luxe6.png";
import Img7 from "./photos/luxe7.png";

import Img13 from "./photos/luxe10.jpeg";
import Img12 from "./photos/luxe11.jpeg";

import Img44 from "./photos/luxe13.jpeg";
import Img55 from "./photos/luxe14.jpeg";
import Img15 from "./photos/luxe15.png";
import Img16 from "./photos/luxe16.png";
import Img17 from "./photos/luxe17.png";
import Img18 from "./photos/luxe18.png";
import Img19 from "./photos/luxe19.png";
import Img20 from "./photos/luxe20.jpg";
import Img21 from "./photos/luxe21.png";
import Img22 from "./photos/luxe23.jpg";
import Img23 from "./photos/luxe24.jpg";
import Img24 from "./photos/luxe25.png";
import Img25 from "./photos/luxe26.png";
import Img26 from "./photos/img1.jpg";
import Img27 from "./photos/img3.jpg";
import Img28 from "./photos/img4.jpg";
import Img29 from "./photos/img5.jpg";
import Img30 from "./photos/img6.jpg";
import Img31 from "./photos/img7.jpg";
import Img32 from "./photos/img8.jpg";
import Img33 from "./photos/img9.jpg";
import Img34 from "./photos/img10.jpg";
import Img35 from "./photos/img11.jpg";

import ProductCart from "./ProductCard";
import Card from "./Card";

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
    id: 2,
    title: "Secrets Of India ",
    basePrice: 6499,
    image: kaarigar2,
    link: "#",
    height: 30,
    width: 25,
  },
  {
    id: 3,
    title: "Sweet Soltitude ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
    height: 30,
    width: 25,
  },
  {
    id: 4,
    title: "⁠Old Man’s Friend ",
    basePrice: 7999,
    image: Img4,
    link: "#",
    height: 20,
    width: 15,
  },
  {
    id: 5,
    title: " ⁠Colours Of Caffeine  ",
    basePrice: 7299,
    image: Img5,
    link: "#",
    height: 25,
    width: 18,
  },
  {
    id: 6,
    title: "Mrs. Bijou ",
    basePrice: 7299,
    image: Img6,
    link: "#",
    height: 25,
    width: 18,
  },

  {
    id: 7,
    title: "Colours Of The Mind ",
    basePrice: 7299,
    image: Img8,
    link: "#",
    height: 25,
    width: 18,
  },
  {
    id: 8,
    title: "⁠Pouring Stories ",
    basePrice: 7299,
    image: Img9,
    link: "#",
    height: 36,
    width: 25,
  },
  {
    id: 9,
    title: "Moonlight Reverie ",
    basePrice: 7999,
    image: Img1,
    link: "#",
  },
  {
    id: 10,
    title: "Wings And Woods ",
    basePrice: 6499,
    image: Img2,
    wallImage: Img19,
    hoverImage: Img19,
    link: "#",
  },
  {
    id: 11,
    title: "Serenity ",
    basePrice: 7299,
    image: Img3,
    wallImage: Img18,
    hoverImage: Img18,
    link: "#",
  },

  {
    id: 12,
    title: "Luna Femme ",
    basePrice: 6799,
    image: Img10,
    wallImage: Img15,
    hoverImage: Img15, // <-- hover image for id 5
    link: "#",
  },
  {
    id: 13,
    title: "Silvara ",
    basePrice: 7399,
    image: Img11,
    wallImage: Img16,
    hoverImage: Img16,
    link: "#",
  },
  {
    id: 14,
    title: "Trinity Of Grace  ",
    basePrice: 8599,
    image: Img7,
    wallImage: Img17,
    hoverImage: Img17,
    link: "#",
  },
  {
    id: 15,
    title: "Vyom  ",
    basePrice: 8599,
    image: Img13,
    link: "#",
  },

  {
    id: 16,
    title: "Beyond The Veil",
    basePrice: 7499,
    image: Img12,
    link: "#",
  },
  {
    id: 17,
    title: "The Tangerine ",
    basePrice: 7499,
    wallImage: Img44,
    link: "#",
  },
  {
    id: 18,
    title: "Life's Imbalance ",
    basePrice: 7499,
    image: Img20,
    wallImage: Img21,
    hoverImage: Img21,
    link: "#",
  },
  {
    id: 19,
    title: "Gift Of A New Day ",
    basePrice: 7499,
    image: Img55,
    link: "#",
  },
  {
    id: 20,
    title: "Pop Goes The Orange ",
    basePrice: 7499,
    image: Img22,
    wallImage: Img24,
    link: "#",
  },
  {
    id: 21,
    title: "Living Life ",
    basePrice: 7499,
    image: Img23,
    wallImage: Img25,
    link: "#",
  },
  {
    id: 22,
    title: "Chirps on the wall(Set of 16)",
    basePrice: 13500,
    wallImage: Img26,
    link: "#",
    handmadeOption: true,
    paintingOption: false,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 23,
    title: "Beige and Boujee(Set of 9)",
    basePrice: 13500,
    wallImage: Img27,
    link: "#",
     paintFixPrice : 6000,
    handmadeFixPrice : 15000,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 24,
    title: "Leaflets (Set of 4)",
    basePrice: 13500,
    wallImage: Img28,
    link: "#",
    paintFixPrice : 3000,
    handmadeFixPrice : 6000,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 25,
    title: "Between Two Worlds(Set of 3)",
    basePrice: 13500,
    wallImage: Img29,
    link: "#",
    paintFixPrice : 4000,
    handmadeFixPrice : 13500,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 26,
    title: "Stillness (Set of 6)",
    basePrice: 13500,
    wallImage: Img30,
    link: "#",
    paintFixPrice : 5000,
    handmadeFixPrice : 13000,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 27,
    title: "Desert Bloom(Set of 2)",
    basePrice: 13500,
    wallImage: Img31,
    link: "#",
      paintFixPrice : 4000,
    handmadeFixPrice : 11000,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 28,
    title: "Euphoria",
    basePrice: 13500,
    wallImage: Img32,
    link: "#",
  },
  {
    id: 29,
    title: "Trilogue (Set of 3 )",
    basePrice: 13500,
    image: Img33,
    wallImage: Img34,
    link: "#",
      paintFixPrice : 6000,
    handmadeFixPrice : 16500,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 30,
    title: "Timeless Peaks (Set of 3)",
    basePrice: 13500,
    wallImage: Img35,
    link: "#",
      paintFixPrice : 6000,
    handmadeFixPrice : 16000,
    resizeOption: false,
    frameOption: false,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Aestheticspremi = ({ cart, setCart }) => {
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
    <section className="relative overflow-hidden min-h-screen bg-black py-10 md:py-20 px-6 md:px-16">
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
          Aesthetic Corner
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 text-lg md:text-2xl font-light"
        >
          -As the name suggests… Everything Classy, Elegant and Aesthetic!
          Welcome,to the world of luxury and taste.
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
              <Card
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
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
          category="aestheticspremi"
        />
      )}
    </section>
  );
};

export default Aestheticspremi;
