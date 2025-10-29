import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/cinema.jpg";
import Img1 from "./photos/cinema.jpg";
import Img2 from "./photos/artifacts23.jpg";
import Img3 from "./photos/luxe23.jpg";
import Img_3 from "./photos/luxe25.png";
import Img4 from "./photos/madira1.png";
import Img5 from "./photos/artifacts30.png";
import Img6 from "./photos/artifacts46.jpg";
import Img7 from "./photos/artifacts47.png";
import Img8 from "./photos/artifacts48.png";
import Img9 from "./photos/artifacts49.jpg";
import Img10 from "./photos/artifacts50.png";

import ProductCart from "./ProductCard";

// --- VanillaTilt Wrapper
function TiltCard({ children }) {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);
  return <div ref={tiltRef}>{children}</div>;
}

// --- Products list with base price (for reference)
const products = [
  {
    id: 6,
    title: "Modern Relic",
    category: "artifacts",
    image: Img6,
    wallImage: Img7,
    moreImage: Img8,
    basePrice: 16000,
    link: "#",
  },
  {
    id: 7,
    title: "Timeless unity",
    image: Img9,
    wallImage: Img10,
    basePrice: 82000,
    link: "#",
  },
  {
    id: 1,
    title: "A Deep Breath ",
    category: "handmade",
    basePrice: 7499,
    image: Img1,
    link: "#",
    height: 25,
    width: 18,
    description:"“The Deep Breath” portrays an abstract, serene face captured in the moment of inhaling peace. Soft, flowing brushstrokes merge hues of blue, gold, and white — symbolizing calm, clarity, and release. The contours dissolve into airy patterns, evoking a sense of stillness and renewal — as if the entire canvas itself exhales tranquility.",
  },
  {
    id: 2,
    title: "Humané Centre Table",
    category: "artifacts",
    basePrice: 30000,
    image: Img2,
    link: "#",
  },
  {
    id: 3,
    title: "Pop Goes The Orange",
    category: "aestheticspremi",
    basePrice: 7499,
    image: Img3,
    wallImage: Img_3,
    link: "#",
    height: 35,
    width: 25,
  },
  {
    id: 4,
    title: "The Double Pour",
    category: "handmade",
    basePrice: 7999,
    image: Img4,
    link: "#",
    height: 35,
    width: 25,
    description:"A stunning two-part artwork capturing the elegant chaos of red wine in motion. The first frame shows a graceful pour from a dark bottle, while the second bursts with energy as the wine splashes into a glass, freezing that perfect moment of fluid art. Together, they celebrate indulgence, movement, and the beauty found in everyday elegance.",
  },
  {
    id: 5,
    title: "Retrovision Table Centre",
    category: "artifacts",
    basePrice: 25000,
    image: Img5,
    link: "#",
  },
];

const Bestsellerpage = ({ cart, setCart }) => {
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
    <section className="relative bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-12 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-[Amita] font-bold text-white text-center mb-2">
            <span className="inline-block w-12 h-[2px] bg-white mr-3 align-middle" />
            ट्रेंडी ,टॉप - Our Bestsellers
            <span className="inline-block w-12 h-[2px] bg-white ml-3 align-middle" />
          </h2>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-lg"
          style={{ backgroundImage: `url(${bgImg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </section>

      {/* Product Grid */}
      <div className="px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product?.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
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
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductCart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          category={selectedProduct?.category}
        />
      )}
    </section>
  );
};

export default Bestsellerpage;
