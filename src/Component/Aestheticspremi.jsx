import React, { useState, useEffect } from "react";
import { frame, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/madira5.png";
// import kaarigar1 from "./photos/Aestheticspremi.jpeg";
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
    id: 2,
    title: "Secrets Of India ",
    basePrice: 6499,
    image: kaarigar2,
    link: "#",
  },
  {
    id: 3,
    title: "Sweet Soltitude ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
  },
  {
    id: 4,
    title: "⁠Old Man’s Friend ",
    basePrice: 7999,
    image: Img4,
    link: "#",
  },
  {
    id: 5,
    title: " ⁠Colours Of Caffeine  ",
    basePrice: 7299,
    image: Img5,
    link: "#",
  },
  {
    id: 6,
    title: "Mrs. Bijou ",
    basePrice: 7299,
    image: Img6,
    link: "#",
  },

  {
    id: 9,
    title: "Colours Of The Mind ",
    basePrice: 7299,
    image: Img8,
    link: "#",
  },
  {
    id: 8,
    title: "⁠Pouring Stories ",
    basePrice: 7299,
    image: Img9,
    link: "#",
  },
   {
      id: 9,
      title: "Handcrafted Dreams ",
      basePrice: 7999,
      image: Img1,
      link: "#",
    },
    {
      id: 10,
      title: "Soulful Symphony ",
      basePrice: 6499,
      image: Img2,
      wallImage: Img19,
      hoverImage: Img19,
      link: "#",
    },
    {
      id: 11,
      title: "Mystic Reflections ",
      basePrice: 7299,
      image: Img3,
      wallImage: Img18,
      hoverImage: Img18,
      link: "#",
    },
  
    {
      id: 12,
      title: "Bohemian Mirage ",
      basePrice: 6799,
      image: Img10,
      wallImage: Img15,
      hoverImage: Img15, // <-- hover image for id 5
      link: "#",
    },
    {
      id: 13,
      title: "Twilight Reverie ",
      basePrice: 7399,
      image: Img11,
      wallImage: Img16,
      hoverImage: Img16,
      link: "#",
    },
    {
      id: 14,
      title: "Golden Horizon ",
      basePrice: 8599,
      image: Img7,
      wallImage: Img17,
      hoverImage: Img17,
      link: "#",
    },
    // {
    //   id: 8,
    //   title: "Crimson Threads ",
    //   basePrice: 7999,
    //   image: Img8,
    //   link: "#",
    // },
    // {
    //   id: 9,
    //   title: "Ethereal Touch ",
    //   basePrice: 7499,
    //   image: Img9,
    //   link: "#",
    // },
  
    {
      id: 15,
      title: "Golden Horizon ",
      basePrice: 8599,
      image: Img13,
      link: "#",
    },
  
    {
      id: 16,
      title: "Ethereal Touch ",
      basePrice: 7499,
      image: Img12,
      link: "#",
    },
    {
      id: 17,
      title: "Ethereal Touch ",
      basePrice: 7499,
      wallImage: Img44,
      link: "#",
    },
    {
      id: 18,
      title: "Ethereal Touch ",
      basePrice: 7499,
      image: Img20,
      wallImage: Img21,
      hoverImage: Img21,
      link: "#",
    },
    {
      id: 19,
      title: "Ethereal Touch ",
      basePrice: 7499,
      image: Img55,
      link: "#",
    },
    {
      id: 20,
      title: "Ethereal Touch ",
      basePrice: 7499,
      image: Img22,
      wallImage: Img24,
      link: "#",
    },
    {
      id: 21,
      title: "Ethereal Touch ",
      basePrice: 7499,
      image: Img23,
      wallImage: Img25,
      link: "#",
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
        item.height === product?.height  &&
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
          Explore the authentic soul of art, handwoven by our finest creators.
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
                    className="w-full h-48 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-[Amita] font-bold text-white mb-2">
                    {product?.title}
                  </h3>
                  {/* <p className="text-teal-400 font-semibold text-lg">
                    ₹ {product?.basePrice}
                  </p> */}
                  {/* <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide">
                    Exclusive Originals
                  </p> */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center gap-2 text-white bg-red-600 px-5 py-2.5 rounded-full shadow hover:bg-red-800 transition-colors"
                  >
                    Buy Now <ArrowRight size={16} />
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
          category="aestheticspremi"
        />
      )}
    </section>
  );
};

export default Aestheticspremi;
