import { useState, useEffect } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import carsoul from "./photos/slide.png";
import carsoul1 from "./photos/slide6.png";
// import carsoul2 from "./photos/slide2.png";
// import carsoul2 from "./photos/slide2.jpg";
// import carsoul2 from "./photos/slide_2.png";
import carsoul3 from "./photos/slide4.png";
import carsoul4 from "./photos/slide3.jpeg";
import carsoul5 from "./photos/slide7.png";
import carsoul6 from "./photos/slide8.png";
import carsoul8 from "./photos/slidenew1.png";
// import carsoul7 from "./photos/slide9.png";
import carsoul7 from "./photos/slide_9.png";
// import carsoul7 from "./photos/slide_10.jpg";

import madira1 from "./photos/madira2.png";
// import jua from "./photos/jua2.png";
import Img9 from "./photos/poker.jpeg";
import Img24 from "./photos/cinema21.jpg";
import pencil from "./photos/pencil2.jpeg";
import cinema from "./photos/cinema.jpg";
// import baklol from "./photos/baklol.png";
// import bgImg from "./photos/madira2.png";
import brush from "./photos/paint.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Bestseller from "./Bestseller";
import Refresh from "./Refresh";
import About from "./About";
import USP from "./USP";
// import lux from "./photos/luxe7.png";
import Cinema from "./photos/Cinema5.jpeg";
import Artifacts from "./photos/Artifacts11.jpg";
import Furniture from "./photos/artifacts23.jpg";
import Img12 from "./photos/motor11.jpeg";
const items = [
  {
    title:"Furniture",
    image:Furniture,
    link:"/Furniture"
  },
  {
    title: "Artifacts",
    image: Artifacts,
    link: "/Artifacts", 
  },
  {
    title: "Handmade Paintings",
    image: cinema,
    link: "/Painting", 
  },
  {
    title: "Posters",
    image: Cinema,
    link: "/Poster", 
  },
];
const images = [
  carsoul8,
  carsoul7,
  carsoul,
  carsoul1,
  // carsoul2,
  carsoul6,
  carsoul4,
  carsoul5,
  carsoul3,
];

const Home = ({cart , setCart}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const collections = [
    { title: "Madira Premi", image: madira1, link: "/Madira" },
    { title: "The Poker Parlour", image: Img9, link: "/Juapremi" },
    { title: "Aesthetic Corner", image: cinema, link: "/Aestheticspremi" },
    { title: "Pencil Poetry", image: pencil, link: "/Pencilpremi" },
    { title: "Cinema Solace",
      // title: "Baklol Premi",
      
      image: Img24, link: "/Cinemapremi" },
    { title: "Burnout Boulevard", image:Img12, link: "/Gaadi" },
  ];

  return (
    <div className="relative cursor-none">
      {/* Brush Cursor - hidden on small screens */}
      <img
        src={brush}
        alt="brush"
        className="fixed w-10 h-10 z-[9999] pointer-events-none transition-transform duration-75 ease-linear hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative w-full sm:h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full sm:h-[60vh] md:h-[80vh] flex-none flex items-center justify-center"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full sm:h-[60vh] md:h-[80vh] object-fill sm:object-fill md:object-fill transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 md:p-3 rounded-full z-10 transition"
        >
          <FaChevronLeft className="text-[12px] md:text-[24px]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 md:p-3 rounded-full z-10 transition"
        >
          <FaChevronRight className="text-[12px] md:text-[24px]" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-3 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1 md:w-3 h-1 md:h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-5 sm:py-20 bg-[#f9f4ec]">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8 sm:mb-16 tracking-tight">
          <span className="text-gray-700 font-[Amita]">
            {" "}
            –Watchu Looking For?–
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-lg md:rounded-2xl bg-white/70  shadow-xl backdrop-blur-md overflow-hidden group hover:shadow-2xl duration-300"
            >
              <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain bg-gray-100 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-3 lg:p-6">
                <h3 className="text-[18px] lg:text-[24px] font-semibold font-serif text-gray-900 leading-snug whitespace-nowrap">
                  {item.title}
                </h3>
                <Link to={item.link}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    // className="mt-2 inline-flex items-center gap-2 text-white bg-gray-800 px-2 md:px-5 py-2 text-[8px] md:text-[12px] font-semibold rounded-lg shadow hover:bg-black transition-colors"
                    className="mt-2 inline-flex items-center justify-center w-full gap-2 text-black hover:text-white bg-white border-2 border-solid border-gray-800 px-2 md:px-5 py-2 text-[10px] lg:text-[12px] font-semibold rounded-lg shadow hover:bg-gray-800 transition-colors"
                  >
                    Explore <ArrowRight size={12} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <Bestseller cart={cart} setCart={setCart}/>
      <Refresh cart={cart} setCart={setCart} />

      <About />

      {/* Art Gallery Section */}
      <div className="bg-[#fefefe] py-12 px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Amita] font-bold text-gray-800 mb-2">
            <span className="inline-block w-10 h-[1px] bg-black mr-3 align-middle" />
            Kaarigar Art Gallery
            <span className="inline-block w-10 h-[1px] bg-black ml-3 align-middle" />
          </h2>
          <p className="text-gray-600 font-[Amita] text-sm md:text-base">
            Explore Curated Intricate Art Styles
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {collections.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              className="bg-white rounded-[8px] md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden border border-gray-200 shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 sm:h-72 md:h-80 lg:h-96 object-contain"
                />
              </div>
              <h3 className="text-center font-[Amita] py-2  text-[18px] sm:text-lg md:text-xl lg:text-2xl font-medium  tracking-wide text-gray-800">
                {item.title}
              </h3>
              <div className="text-center pb-2 hidden 2xl:block">
                <a href={item?.link} className="inline-block">
                  <button className="group relative inline-flex items-center justify-center text-[10px] lg:text-[12px] md:text-[16px] px-4 md:px-5 py-1 md:py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:text-white">
                    <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10  ">EXPLORE</span>
                  </button>
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>

      <USP />

      {/* WhatsApp Floating Button */}
      {/* <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={32} className="animate-wavy" />
      </a> */}
    </div>
  );
};

export default Home;
