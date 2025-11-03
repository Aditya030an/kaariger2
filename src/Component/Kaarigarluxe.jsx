import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/luxe8.png";
import kaarigar1 from "./photos/luxe1.png";
import kaarigar2 from "./photos/luxe2.png";
import kaarigar3 from "./photos/luxe3.png";

import Img5 from "./photos/luxe5.png";
import Img6 from "./photos/luxe6.png";
import Img7 from "./photos/luxe7.png";

import Img11 from "./photos/luxe10.jpeg";
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

import Img26 from "./photos/img8.jpg";
import Img27 from "./photos/img9.jpg";
import Img28 from "./photos/img10.jpg";
import Img29 from "./photos/img11.jpg";
import Img30 from "./photos/artifacts46.jpg";
import Img31 from "./photos/artifacts47.png";
import Img32 from "./photos/artifacts48.png";
import Img33 from "./photos/artifacts39.jpg";
import Img34 from "./photos/artifacts37.png";
import Img35 from "./photos/artifacts38.png";
import Img36 from "./photos/cinema.jpg";
import Img37 from "./photos/artifacts49.jpg";
import Img38 from "./photos/artifacts50.png";

import Img39 from "./photos/Aestheticspremi11.jpg";
import Img40 from "./photos/Aestheticspremi12.png";

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
    title: "Moonlight Reverie",
    basePrice: 7999,
    image: kaarigar1,
    link: "#",
    height: 36,
    width: 25,
    description:"This artwork captures a dreamy harmony between nature and celestial beauty. The glowing orange moons rise over misty mountains, bathing the trees and autumn leaves in warm, surreal light. A blend of stillness and imagination, it evokes the feeling of wandering through a peaceful twilight dream where earth and sky quietly merge.",
  },
  {
    id: 2,
    title: "Wings And Woods set of 4",
    basePrice: 10000,
    image: kaarigar2,
    wallImage: Img19,
    hoverImage: Img19,
    link: "#",
    handmadeOption: false,
    paintingOption: false,
    resizeOption: false,
    frameOption: true,
    description:"“Wings and Wood” beautifully captures the harmony between nature and freedom. The series portrays silhouettes of trees and birds against bold orange suns, symbolizing the cycle of life and connection between earth and sky. The minimalist composition evokes calmness, balance, and the eternal rhythm of nature’s transitions.",
  },
  {
    id: 3,
    title: "Serenity ",
    basePrice: 7299,
    image: kaarigar3,
    wallImage: Img18,
    hoverImage: Img18,
    link: "#",
    height: 40,
    width: 25,
    description:"A serene landscape unfolds beneath a glowing orange sun, where a crystal-clear stream winds through valleys painted with hues of red, yellow, and blue. The contrast between the warm autumn tones and cool mountain shades evokes balance and peace. Each brushstroke captures the quiet harmony of nature, inviting the viewer into a moment of calm reflection.",
  },

  {
    id: 5,
    title: "Luna Femme ",
    basePrice: 6799,
    image: Img5,
    wallImage: Img15,
    hoverImage: Img15, // <-- hover image for id 5
    link: "#",
    height: 25,
    width: 25,
    description:"“Luna Femme” captures the serene strength of a woman intertwined with the calm rhythm of nature. Flowing lines and soft hues of gold and blue mirror the ocean’s waves and moonlit skies, symbolizing balance, grace, and empowerment. The geometric patterns add a modern elegance, while the floral elements breathe harmony into her celestial aura.",
  },
  {
    id: 6,
    title: "Silvara ",
    basePrice: 7399,
    image: Img6,
    wallImage: Img16,
    hoverImage: Img16,
    link: "#",
    height: 40,
    width: 25,
    description:"“Silvara” is a captivating blend of minimalism and abstraction, portraying a bird formed from smooth, flowing ribbons of color. The elegant curves and retro tones of orange, green, and white create a rhythmic balance of movement and stillness. It symbolizes grace, continuity, and the effortless harmony between nature and design.",
  },
  {
    id: 7,
    title: "Trinity Of Grace ",
    basePrice: 8599,
    image: Img7,
    wallImage: Img17,
    hoverImage: Img17,
    link: "#",
    height: 40,
    width: 25,
    description:"“Trinity of Grace” celebrates the strength, beauty, and unity of womanhood through three elegant silhouettes adorned in vibrant geometric patterns. The artwork harmoniously blends cultural motifs with modern abstraction, symbolizing resilience, pride, and sisterhood. Bold colors of red, gold, and turquoise evoke power and warmth, creating a rhythm of elegance and empowerment.",
  },
  // {
  //   id: 8,
  //   title: "Sojourn",
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
    id: 11,
    title: "Vyom ",
    basePrice: 8599,
    image: Img11,
    link: "#",
    height: 40,
    width: 25,
    description:"“Vyom” portrays the cosmic connection between human consciousness and celestial balance. The deep teal and black tones reflect inner depth, while the vibrant orange bird symbolizes freedom and spiritual awakening. The geometric patterns and moon element above the figure evoke harmony between the earthly and the divine, making it a striking blend of surrealism and symbolism",
  },

  {
    id: 13,
    title: "Beyond The Veil ",
    basePrice: 7499,
    image: Img12,
    link: "#",
    height: 35,
    width: 35,
    description:"This artwork explores the tension between concealment and revelation. The flowing vertical lines resemble draped fabric, symbolizing the layers that separate perception from reality. The deep navy and beige tones evoke mystery and depth, inviting the viewer to look past the surface. It’s a poetic reminder that what lies beyond the visible often holds the truest form of beauty.",
  },
  {
    id: 14,
    title: "The Mood Tangerine ",
    basePrice: 7499,
    wallImage: Img44,
    link: "#",
    height: 35,
    width: 35,
    description:"Bold and vibrant, Mood Tangerine captures a striking balance between confidence and calm. The artwork portrays a poised figure wrapped in oversized shapes of orange and blush, symbolizing warmth, individuality, and playful elegance. With its minimalist lines and rich earthy tones, it evokes a sense of self-assured serenity and artistic charm.",
  },
  {
    id: 15,
    title: "Life's Imbalance ",
    basePrice: 7499,
    image: Img20,
    wallImage: Img21,
    hoverImage: Img21,
    link: "#",
    height: 40,
    width: 30,
    description:"This evocative artwork titled “Life’s Imbalance” portrays the strength and resilience of rural women, balancing heavy metal pots atop their heads with effortless grace. The vibrant colors and textured strokes bring out the contrast between the simplicity of life and the weight of responsibilities they carry daily. It symbolizes endurance, balance, and the quiet power within everyday struggles",
  },
  {
    id: 16,
    title: "Gift Of A New Day ",
    basePrice: 7499,
    image: Img55,
    link: "#",
    height: 35,
    width: 25,
    description:"Gift of a New Day captures the quiet miracle of dawn — two figures reaching across warm, sunrise skies toward a glowing sun. Their gentle gestures suggest hope, connection, and renewal. Soft, flowing forms and serene expressions remind us that each morning arrives with possibility, peace, and grace.",
  },
  {
    id: 17,
    title: "Pop Goes The Orange ",
    basePrice: 7499,
    image: Img22,
    wallImage: Img24,
    link: "#",
    height: 35,
    width: 25,
    escription:"“Pop Goes the Orange” beautifully captures the contrast between stillness and motion. Bright oranges scattered across a cracked black-and-white tiled floor bring vibrancy and life to an otherwise structured setting. The play of light, shadow, and geometry makes this simple moment feel both spontaneous and artistic."
  },
  {
    id: 18,
    title: "Living Life",
    basePrice: 7499,
    image: Img23,
    wallImage: Img25,
    link: "#",
    height: 40,
    width: 40,
    description:"“Living Life” is a captivating painting that beautifully captures the essence of solitude and reflection. It portrays a man seated in quiet contemplation, gazing at a vast mountain under a dramatic sky filled with textured clouds. The striking contrast of the red carpet against the golden landscape adds depth and emotion, symbolizing the harmony between human existence and nature’s grandeur. This artwork invites viewers to pause, breathe, and truly live life in the moment.",
  },
  {
    id: 19,
    title: "Euphoria",
    basePrice: 7499,
    wallImage: Img26,
    link: "#",
    height: 35,
    width: 35,
    description:"Immerse yourself in the vivid energy of Euphoria — a captivating abstract artwork that radiates motion, depth, and emotion. Bursting with rich teal, gold, and crimson hues, it symbolizes the explosion of joy and creative freedom. Perfect for modern interiors, this premium canvas transforms any wall into a statement of elegance and inspiration.",
  },
  {
    id: 20,
    title: "Trilogue(Set of 3 )",
    basePrice: 7499,
    image: Img27,
    wallImage: Img28,
    link: "#",
    paintFixPrice: 6000,
    handmadeFixPrice: 16500,
    resizeOption: false,
    frameOption: false,
    description:"“Trialogue” is a modern abstract triptych that captures the harmony of architecture, culture, and conversation. The earthy tones of terracotta, beige, and navy symbolize warmth, depth, and balance, while geometric stairways and vases evoke stories of connection between spaces and souls. This artwork transforms simplicity into dialogue — where every shape speaks to the other in visual rhythm and unity.",
  },
  {
    id: 21,
    title: "Timeless Peaks (Set of 3)",
    basePrice: 7499,
    wallImage: Img29,
    link: "#",
    paintFixPrice: 6000,
    handmadeFixPrice: 16000,
    resizeOption: false,
    frameOption: false,
    description:"This artwork captures the serene harmony of nature — where rust-toned mountains meet deep pine silhouettes under a tranquil sky. The triptych design evokes the rhythm of time, as the sun and moon dance across changing horizons. With its minimal yet soulful palette, Timeless Peaks celebrates the quiet beauty of mountains standing tall through every dawn and dusk.",
  },
  {
    id: 28,
    title: "Modern Relic",
    image: Img30,
    wallImage: Img31,
    moreImage: Img32,
    basePrice: 16000,
    link: "#",
    resizeOption: false,
    frameOption: false,
        description:"A contemporary sculpture featuring interlocking abstract shapes in earthy tones of brown, beige, and gray. Crafted with smooth matte textures, it adds a sense of balance, depth, and modern artistry to the space.",
  },
  {
    id: 29,
    title: "Eclipsera Pole (Clay)",
    basePrice: 35000,
    image: Img33,
    wallImage: Img34,
    moreImage: Img35,
    link: "#",
    resizeOption: false,
    frameOption: false,
    description:"A striking designer art piece featuring a vertical series of handcrafted ceramic forms gracefully aligned on a slender metal stand. The contrast of monochrome tones and flowing curves creates a sculptural statement of balance, movement, and modern sophistication—perfect for contemporary interiors or gallery-style spaces."
  },
  {
    id: 30,
    title: "A Deep Breath ",
    basePrice: 7499,
    image: Img36,
    link: "#",
    height: 25,
    width: 18,
    description:"“The Deep Breath” portrays an abstract, serene face captured in the moment of inhaling peace. Soft, flowing brushstrokes merge hues of blue, gold, and white — symbolizing calm, clarity, and release. The contours dissolve into airy patterns, evoking a sense of stillness and renewal — as if the entire canvas itself exhales tranquility.",
  },
  {
    id: 31,
    title: "Timeless unity",
    basePrice: 82000,
    image: Img37,
    wallImage: Img38,
    link: "#",
    resizeOption:false,
    frameOption: false,
        description:"Sleek. Minimal. Poetic.These handcrafted wooden sculptures redefine modern elegance — blending raw natural wood with bold black and white textures. Each figure stands tall with graceful symmetry, embodying calm presence and artistic balance. Perfect for contemporary homes that appreciate simplicity with soul.",
  },
  {
    id: 32,
    title: "The Third Seat (1pc) ",
    basePrice: 30000,
    image:Img39,
    wallImage:Img40,
    link: "#",
    resizeOption: false,
    frameOption: false,
    description:"A sculptural blend of geometry and comfort, The Third Seat transforms modern seating into an art form. With its bold triangular frame and soft cushioned core, it brings harmony between structure and serenity. Perfect for contemporary spaces, this chair is a statement of balance — where design meets imagination."
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
    <section className="relative overflow-hidden min-h-screen bg-white py-20 px-6 md:px-16">
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
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-gray-900 tracking-wider"
        >
          <span className="block w-20 h-1  mx-auto mb-6 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-full"></span>
          Kaarigar Luxe
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6  font-[Amita] text-lg md:text-2xl font-light"
        >
          For the love of roaring engines, smokin tires and sheer power.
        </motion.p>
      </div>

      {/* Product Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
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
                className="group block bg-white shadow-lg border border-gray-200 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#38b2ac] transition-all duration-700 p-5"
              >
                <div className="relative overflow-hidden rounded-2xl h-48 md:h-72 flex items-center justify-center">
                  <motion.img
                    src={product?.image || product?.wallImage}
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
          category="kaarigarluxe"
        />
      )}
    </section>
  );
};

export default Gaadi;
