import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 add this

import Img1 from "./photos/cinema.jpg";
import Img2 from "./photos/artifacts23.jpg";
import Img3 from "./photos/luxe23.jpg";
import Img_3 from "./photos/luxe25.png";
import Img4 from "./photos/madira1.png";
import Img5 from "./photos/artifacts30.png";

import ProductCart from "./ProductCard";

const images = [
  { id: 1, title: "Classic Cinema", basePrice: 7499, image: Img1, link: "#" },
  {
    id: 2,
    title: "Humané Centre Table",
    basePrice: 30000,
    image: Img2,
    link: "#",
  },
  {
    id: 3,
    title: "Pop Goes The Orange",
    basePrice: 7499,
    image: Img3,
    wallImage: Img_3,
    link: "#",
  },
  { id: 4, title: "The Double Pour", basePrice: 7999, image: Img4, link: "#" },
  {
    id: 5,
    title: "Retrovision Table Centre",
    basePrice: 25000,
    image: Img5,
    link: "#",
  },
];

const Bestseller = ({ cart, setCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // 👈 useNavigate hook

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-white py-10 px-4 md:px-12 overflow-hidden"
     
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-sm brightness-75 transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentIndex].image})` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10"  onClick={() => navigate("/Bestsellerpage")}>
        <h2 className="text-3xl md:text-5xl font-[Amita] font-bold text-white text-center mb-2">
          <span className="inline-block w-12 h-[2px] bg-white mr-3 align-middle" />
          ट्रेंडी ,टॉप - Our bestsellers
          <span className="inline-block w-12 h-[2px] bg-white ml-3 align-middle" />
        </h2>

        <p className="text-center text-white font-[Amita] text-sm md:text-base mb-10">
          Get your hands on our bestseller you can’t say no
        </p>

        {/* Card wrapper - whole div clickable */}
        <div className="flex justify-start">
          <div
            className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer"
            onClick={(e) => {
              setSelectedProduct(images[currentIndex]);
              e.stopPropagation(); // 👈 prevent card redirect
            }}
          >
            <img
              src={images[currentIndex].image}
              alt={images[currentIndex].title}
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-2xl"
            />
            <div className="p-2 md:p-5 text-center">
              <h3 className="text-lg font-[Amita] font-semibold mb-1 text-gray-800">
                {images[currentIndex].title}
              </h3>
              <p className="text-sm font-[Amita] text-gray-500 mb-2">
                Canvas Print | By Kaarigar&co
              </p>
              <div className="text-center mt-2">
                <a
                  onClick={(e) => {
                    setSelectedProduct(images[currentIndex]);
                    e.stopPropagation(); // 👈 prevent card redirect
                  }}
                  href="/#"
                  className="group relative inline-flex items-center justify-center px-6 py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-full overflow-hidden transition-all duration-300 hover:text-white"
                >
                  <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10 flex items-center gap-4">
                    Buy Now <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={(e) => {
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );
            e.stopPropagation(); // 👈 stop redirect
          }}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-10 transition"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={(e) => {
            setCurrentIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );
            e.stopPropagation(); // 👈 stop redirect
          }}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-10 transition"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={(e) => {
                setCurrentIndex(index);
                e.stopPropagation(); // 👈 stop redirect
              }}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
         <div
        className="relative z-[100]"
        onClick={(e) => e.stopPropagation()} // 👈 block section redirect
      >
        <ProductCart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          category="bestseller"
        />
      </div>
      )}
    </section>
  );
};

export default Bestseller;
