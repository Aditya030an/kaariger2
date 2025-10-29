import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/slide3.jpeg";
import kaarigar1 from "./photos/motor.png";
import kaarigar2 from "./photos/motor1.png";
import kaarigar3 from "./photos/moto2.png";
import Img4 from "./photos/motor3.png";
import Img5 from "./photos/motor4.png";
import Img6 from "./photos/motor5.jpeg";
import Img7 from "./photos/motor6.jpeg";
import Img8 from "./photos/motor7.jpeg";
import Img9 from "./photos/motor8.jpeg";
import Img10 from "./photos/motor9.jpeg";
import Img14 from "./photos/motor13.png";
import Img11 from "./photos/motor10.jpeg";
import Img12 from "./photos/motor11.jpeg";
import Img13 from "./photos/motor12.jpeg";
import Img44 from "./photos/motor32.jpeg";
import Img55 from "./photos/motor44.jpeg";

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
    title: "Beyond Miles ",
    basePrice: 7999,
    image: Img6,
    wallImage: kaarigar1,
    hoverImage: kaarigar1,
    link: "#",
    height: 25,
    width: 25,
    description:"“Beyond Miles” evokes the quiet freedom of a journey unfolding on open roads. Painted in soft watercolour tones, it captures the rear view of a rider lost in motion — where distance fades and dreams take the lead. The artwork celebrates wanderlust, solitude, and the poetry of endless horizons.",
  },
  {
    id: 2,
    title: "Peak Bliss  ",
    basePrice: 6499,
    image: Img8,
    wallImage: kaarigar2,
    hoverImage: kaarigar2,
    link: "#",
    height: 35,
    width: 18,
    description:"A lone rider speeds through a rain-kissed mountain road, chasing freedom between sky and earth. The sunlight pierces through drifting clouds, illuminating the winding path ahead. Every droplet, every turn, captures the essence of motion and peace — the pure joy of riding at the edge of nature’s beauty.",
  },
  {
    id: 3,
    title: "The Final Lap ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
    height: 25,
    width: 25,
    description:"“The Final Lap” captures the raw intensity and thrill of an F1 car in its ultimate sprint toward victory. With dynamic motion and streaks of colour, the painting freezes a heartbeat of speed, focus, and adrenaline. It embodies the spirit of competition — where precision meets passion in the race against time.",
  },
  {
    id: 4,
    title: "Claws Of Velocity ",
    basePrice: 8199,
    image: Img44,
    wallImage: Img4,
    hoverImage: Img4,
    link: "#",
    height: 30,
    width: 20,
    description:"“Claws of Velocity” captures the fierce grip of speed as an F1 car tears through the track from a striking aerial view. The sweeping lines and blurred motion evoke both power and precision, like claws raking through time itself. It’s a visual symphony of control, chaos, and the unrelenting hunger for victory.",
  },
  {
    id: 5,
    title: "Metre Down ",
    basePrice: 6799,
    image: Img55,
    wallImage: Img5,
    hoverImage: Img5, // <-- hover image for id 5
    link: "#",
    height: 36,
    width: 25,
        description:"“Metre Down” captures the pulse of urban India through vibrant, abstract lines that mirror the rhythm of city streets. At its heart, an Indian auto rickshaw speeds ahead — bold, lively, and full of character. The painting celebrates motion, colour, and the everyday chaos that fuels life on the go.",
  },
  // {
  //   id: 6,
  //   title: "Twilight Reverie ",
  //   basePrice: 7399,
  //   image: Img6,
  //   link: "#",
  // },
  {
    id: 7,
    title: "Scarlet Velocity ",
    basePrice: 8599,
    image: Img7,
    link: "#",
    height: 30,
    width: 18,
    description:"“Scarlet Velocity” captures the raw power and elegance of a speeding motorcycle head-on. The front view reveals gleaming chrome details, blazing red paint that symbolizes passion and speed, and light reflections that seem to blur into motion. The artwork evokes the thrill of racing, the pulse of freedom, and the spirit of unstoppable momentum.",
  },
  // {
  //   id: 8,
  //   title: "Sojourn",
  //   basePrice: 7999,
  //   image: Img8,
  //   link: "#",
  // },
  {
    id: 9,
    title: "Vroom Town ",
    basePrice: 7499,
    image: Img9,
    link: "#",
    height: 35,
    width: 20,
    description:"A thrilling depiction of vintage race cars hurtling through a vibrant track, capturing the essence of speed and competition. The bold colors and dynamic lines create a sense of motion and adrenaline. The artwork celebrates the golden age of racing — where precision, passion, and velocity ruled the road.",
  },
  {
    id: 10,
    title: "Born Reckless ",
    basePrice: 7399,
    image: Img10,
    wallImage: Img14,
    link: "#",
    height: 20,
    width: 15,
    description:"“Born Reckless” portrays a dirt bike head-on, coated in dust and adrenaline. The front view bursts with rugged energy — mud splashes, roaring tires, and a fearless rider’s silhouette behind the handlebars. Bold strokes and earthy tones capture the wild spirit of adventure, rebellion, and the raw thrill of off-road freedom.",
  },
  {
    id: 11,
    title: "Noir Elan ",
    basePrice: 8599,
    image: Img11,
    link: "#",
    height: 30,
    width: 20,
    description:"“Noir Élan” portrays a striking supercar parked gracefully in a vintage town under a bright, sunlit sky. The polished surface reflects the charm of old architecture around it, blending modern luxury with timeless elegance. The stillness of the scene captures quiet confidence — power at rest amid classic beauty.",
  },
  {
    id: 12,
    title: "Sojourn",
    basePrice: 7999,
    image: Img12,
    link: "#",
    height: 25,
    width: 25,
  },
  {
    id: 13,
    title: "Retro Motion ",
    basePrice: 7499,
    image: Img13,
    link: "#",
    height: 40,
    width: 25,
    descripton:"A bold celebration of the golden age of automobiles, Retro Motion captures the spirit of speed and style in vivid geometric forms. The warm reds, oranges, and yellows reflect the energy of a bygone era, where craftsmanship met adventure. With its dynamic composition and art-deco flair, the painting radiates timeless elegance and forward momentum.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Gaadi = ({ cart, setCart }) => {
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
          मोटर Premi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6  font-[Amita] text-lg md:text-2xl font-light"
        >
          -Sublime & Timeless pieces, capturing speed,style and soul!
        </motion.p>
      </div>

      {/* Product Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10  lg:gap-14">
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
                    className={`absolute w-full h-48 md:h-72 transition-opacity duration-700 ease-out 
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
                      className="absolute w-full h-48 md:h-72 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
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
          category="gaadi"
        />
      )}
    </section>
  );
};

export default Gaadi;
