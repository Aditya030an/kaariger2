import { motion } from "framer-motion";
import jua from "./photos/jua3.png";
import cinema from "./photos/cinema.jpg";
import music from "./photos/music.png";
import canvas from "./photos/canvas.png";

import img1 from "./photos/Artifacts2.jpg";
import img2 from "./photos/img2.jpg";
import img3 from "./photos/img11.jpg";
import Img26 from "./photos/artifacts31.jpg";
import Img27 from "./photos/artifacts46.jpg";
import Img28 from "./photos/artifacts47.png";
import Img29 from "./photos/artifacts48.png";

import Img30 from "./photos/Aestheticspremi11.jpg";
import Img31 from "./photos/Aestheticspremi12.png";
import Img32 from "./photos/Aestheticspremi10.jpg";

import ProductCart from "./ProductCard";
import { useState } from "react";

const newReleases = [
  {
    id: 1,
    title: "The Ring Master",
    category: "Canvas Craft",
    basePrice: 2500,
    subCategory: "handmade",
    image: jua,
    snippet: "Add a burst of color and personality to your studio wall.",
    height: 25,
    width: 25,
    description:"A close-up view of a roulette wheel captures the thrilling tension of chance — the ball suspended between fate and fortune. Rich textures and muted colors evoke the timeless allure of the casino floor, where every spin feels like a performance led by an unseen master of luck.",
  },
  {
    id: 2,
    title: "A Deep Breath ",
    category: "Art Printables",
    subCategory: "handmade",
    basePrice: 1400,
    image: cinema,
    snippet: "Celebrate art in every form with custom cutouts and patterns.",
    height: 25,
    width: 18,
    description:"“The Deep Breath” portrays an abstract, serene face captured in the moment of inhaling peace. Soft, flowing brushstrokes merge hues of blue, gold, and white — symbolizing calm, clarity, and release. The contours dissolve into airy patterns, evoking a sense of stillness and renewal — as if the entire canvas itself exhales tranquility.",
  },
  {
    id: 3,
    title: " ⁠⁠Boombox Shelf Table ",
    category: "Textile & Design",

    basePrice: 30000,
    subCategory: "artifacts",
    image: music,
    snippet: "Textile makeover meets utility and charm.",
  },
  {
    id: 4,
    title: "Vintage Poster Wall Kit",
    category: "Decor Prints",
    basePrice: 1200,
    image: canvas,
    snippet: "Bring your walls to life with nostalgic charm.",
  },

  {
    id: 10,
    title: "The Third Seat (1pc) ",
    basePrice: 30000,
    image: Img30,
    wallImage: Img31,
    link: "#",
    resizeOption: false,
    frameOption: false,
  },

  {
    id: 7,
    title: "Mr. Funny  Pants 3pc Set (Clay)",
    category: "Clay Art",
    subCategory: "artifacts",
    basePrice: 7500,
    image: Img26,
    snippet: "A quirky clay figure that adds humor and charm to any space.",
  },
  {
    id: 8,
    title: "Samurai Incense Holder (Clay)",
    category: "Clay Art",
    subCategory: "artifacts",
    basePrice: 2000,
    image: img1,
    snippet: "Bold shapes and colors for a contemporary look.",
    description:"Elegance meets serenity in this handcrafted ceramic incense holder — two minimalist warriors frozen in graceful motion, embodying calm and discipline. As the incense burns, gentle trails of smoke rise between them, creating a tranquil dance of aroma and artistry. Perfect for elevating your space with Zen sophistication and timeless charm.",
  },
  {
    id: 9,
    title: "Sombra",
    category: "Painting",
    subCategory: "handmade",
    image: img2,
    basePrice: 13500,
    snippet: "Bold shapes and colors for a contemporary look.",
    height: 40,
    width: 35,
    description:"“Sombra” captures the serene poetry of light and shadow. A simple wine bottle and delicate branch come alive through their golden reflection, blurring the line between reality and illusion. The soft glow through the window evokes calmness, stillness, and the quiet elegance of everyday beauty frozen in time.",
  },
  {
      id: 32,
      title: "Kava Cups set of 2(Clay)",
      basePrice: 3000,
      image:Img32,
      link: "#",
      resizeOption: false,
      frameOption: false,
    },
  {
    id: 10,
    title: "Timeless Peaks (Set of 3)",
    category: "Aesthetic",
    subCategory: "aestheticspremi",
    wallImage: img3,
    snippet: "Bold shapes and colors for a contemporary look.",
    basePrice: 13500,
    link: "#",
    paintFixPrice: 6000,
    handmadeFixPrice: 16000,
    resizeOption: false,
    frameOption: false,
  },
  {
    id: 11,
    title: "Modern Relic",
    category: "Furniture",
    subCategory: "artifacts",
    image: Img27,
    wallImage: Img28,
    moreImage: Img29,
    basePrice: 16000,
    link: "#",
  },
];

export default function NewReleases({ cart, setCart }) {
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
    <section className="py-10 md:py-6 bg-[url('/canvas.png')] bg-repeat bg-[#fdfaf6]">
      <div className="w-full md:max-w-6xl mx-auto px-3 ">
        <h2 className="text-3xl md:text-5xl font-bold font-[Amita] text-center text-[#3a2e1f] mb-7">
          ‘ताज़ा माल’ – Our Fresh Releases
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-2 md:gap-10 w-max  md:pr-6">
            {newReleases.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#fff9f2] border-4 border-[#d2b48c] rounded-[20px] shadow-lg overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all min-w-[250px] md:min-w-[340px] max-w-[250px] md:max-w-[340px]"
              >
                <img
                  src="/brushstroke.svg"
                  className="absolute top-0 right-0 w-20 opacity-30 pointer-events-none"
                  alt=""
                />
                <div className="h-40 md:h-80 w-full overflow-hidden  border-b-4 border-[#d2b48c] relative">
                  <img
                    src={product?.image || product?.wallImage}
                    alt={product?.title}
                    className="object-contain h-full w-full"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#f4e2d8] text-[#513d2c] font-mono text-xs px-3 py-1 rounded-full shadow">
                    {product?.category}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#3e2c1b] md:mb-2">
                    {product?.title}
                  </h3>
                  <p className="text-sm text-[#5c4631] leading-relaxed">
                    {product?.snippet}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" inline-block bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-black transition-all duration-300"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Explore Piece → */}
                    Buy Now →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductCart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          category={selectedProduct?.subCategory}
        />
      )}
    </section>
  );
}
