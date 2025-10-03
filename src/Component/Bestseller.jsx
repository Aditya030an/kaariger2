import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Img1 from "./photos/cinema.jpg";
import Img2 from "./photos/artifacts23.jpg";
import Img3 from "./photos/luxe23.jpg";
import Img_3 from "./photos/luxe25.png";
import Img4 from "./photos/madira1.png";
import Img5 from "./photos/artifacts30.png";
import Img6 from "./photos/artifacts46.jpg";
import Img7 from "./photos/artifacts47.png";
import Img8 from "./photos/artifacts48.png";

import ProductCart from "./ProductCard";

const images = [
  {
    id: 1,
    title: "A Deep Breath ",
    category: "handmade",
    basePrice: 7499,
    image: Img1,
    link: "#",
    height: 25,
    width: 18,
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
    height:35,
    width:25,
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
  },
  {
    id: 5,
    title: "Retrovision Table Centre",
    category: "artifacts",
    basePrice: 25000,
    image: Img5,
    link: "#",
  },

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
];

const Bestseller = ({ cart, setCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  // 👁️ Detect visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ⏱️ Auto-slide only when section is visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Add product to cart
  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product?.id);
    if (existing) {
      const updated = cart.map((item) =>
        item === existing ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Scroll to active card
  useEffect(() => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  // Arrows with looping
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-10 px-4 md:px-12 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-sm brightness-75 transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentIndex].image})` }}
      ></div>

      {/* Foreground */}
      <div
        className="relative z-10"
        onClick={() => navigate("/Bestsellerpage")}
      >
        <h2 className="text-3xl md:text-5xl font-[Amita] font-bold text-white text-center mb-2">
          <span className="inline-block w-12 h-[2px] bg-white mr-3 align-middle" />
          ट्रेंडी ,टॉप - Our Bestsellers
          <span className="inline-block w-12 h-[2px] bg-white ml-3 align-middle" />
        </h2>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex items-center gap-3 py-8 px-4 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {images.map((product, idx) => (
            <div
              ref={(el) => (cardRefs.current[idx] = el)}
              key={product.id}
              className="w-[60%] sm:w-[33.33%] lg:w-[25%] flex-shrink-0 bg-white bg-opacity-90 rounded-[8px] md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer"
              onClick={(e) => {
                setSelectedProduct(product);
                e.stopPropagation();
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[200px] md:h-[250px] object-fill"
              />
              <div className="p-2 text-center">
                <h3 className="text-xl md:text-2xl font-[Amita] font-semibold mb-1 text-gray-800">
                  {product.title}
                </h3>
                <div className="text-center mt-1 md:mt-2">
                  <a
                    onClick={(e) => {
                      setSelectedProduct(product);
                      e.stopPropagation();
                    }}
                    href="/#"
                    className="group relative inline-flex items-center justify-center px-4 md:px-6 py-1 md:py-2 font-[Amita] text-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:text-white"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10 flex text-[10px] lg:text-[16px] md:text-[16px] items-center gap-1 md:gap-4">
                      Buy Now <ArrowRight size={16} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-gray-800/80 hover:bg-white/40 text-white p-1 md:p-3 rounded-full z-10 transition"
      >
        <FaChevronLeft className="text-[12px] md:text-[24px]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-gray-800/80 hover:bg-white/40 text-white p-1 md:p-3 rounded-full z-10 transition"
      >
        <FaChevronRight className="text-[12px] md:text-[24px]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 md:w-3 h-1 md:h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={(e) => {
              setCurrentIndex(index);
              e.stopPropagation();
            }}
          />
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="relative z-[100]" onClick={(e) => e.stopPropagation()}>
          <ProductCart
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            category={selectedProduct?.category}
          />
        </div>
      )}
    </section>
  );
};

export default Bestseller;
