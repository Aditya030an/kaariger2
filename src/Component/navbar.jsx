import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "./photos/logo.jpeg";
import logo from "./photos/logo_1.png";
import Jua from "./photos/Jua.jpg";
import Madira from "./photos/madira1.png";
import Img20 from "./photos/artifacts23.jpg";
import canvas from "./photos/bg1.jpeg";
import Img4 from "./photos/motor3.png";

// import logotext from "./photos/kaarigarText.png";
import logotext from "./photos/kaarigarText_2.png";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: " Artifacts ", image: Madira, link: "/Artifacts" },
  { name: " Furniture ", image: Img20, link: "/Furniture" },
  { name: "Paintings", image: Jua, link: "/Painting" },
  // { name: "Posters", image: Img4, link: "/Poster" },
];

const Navbar = ({ cart, orderData }) => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* Offer Bar */}
      {/* <div className="w-full bg-slate-300 text-black text-sm font-semibold py-2 overflow-hidden relative z-50">
        <div className="animate-marquee whitespace-nowrap px-6">
          🔥 Flat 20% OFF on all items! Use code: <strong>KAARIGAR20</strong>
        </div>
      </div> */}

      <nav
        className="w-full font-serif text-[#2E2B28] relative z-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${canvas})` }}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 md:h-28 md:w-28 rounded-2xl border p-1 object-cover"
              />
            </Link>
          </div>

          {/* Brand Name */}
          <div className="flex flex-col items-center text-center md:pr-20">
            <img
              src={logotext}
              alt="Kaarigar & Co"
              className="h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48 lg:h-16 lg:w-56 xl:h-20 xl:w-64 bg-transparent object-contain"
            />
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-[Amita] tracking-wider mt-2">
              Timeless . Heartfelt . Kaarigar
            </p>
          </div>

          {/* Icons + Hamburger */}
          <div className="flex items-center gap-4 text-xl">
            <div className="hidden md:flex gap-4">
              {/* Orders Icon - Only show when orders.length > 0 */}
              {orderData?.length > 0 && (
                <button
                  onClick={() => navigate("/order_data")}
                  className="relative cursor-pointer"
                >
                  <FaBox />
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {orderData?.length}
                  </span>
                </button>
              )}
              <button
                onClick={() => navigate("/cart")}
                className="relative cursor-pointer"
              >
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </button>
            </div>

            <div className="md:hidden">
              {mobileMenuOpen ? (
                <FaTimes
                  className="text-2xl"
                  onClick={() => setMobileMenuOpen(false)}
                />
              ) : (
                <FaBars
                  className="text-2xl"
                  onClick={() => setMobileMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center py-4 font-[Amita] border-t border-b text-sm tracking-wider">
          <div className="flex items-center space-x-10">
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setOpen(!open)}
              >
                Categories
              </span>

              {open && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-50">
                  <div className="flex flex-col gap-3">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.link}
                        className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-gray-800 text-sm font-semibold">
                          {category.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/Kaarigarluxe" className="cursor-pointer hover:underline">
              Kaarigar Luxe
            </a>

            {/* <a href="/Journey" className="cursor-pointer hover:underline">
              The Journey
            </a> */}
            <a href="/Contact" className="cursor-pointer hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="flex flex-col px-6 py-4 space-y-4 bg-white font-[Amita] md:hidden">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer hover:underline"
            >
              Home
            </Link>
            <div>
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setOpen(!open)}
              >
                Categories
              </span>
              {open && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.link}
                      className="flex flex-col items-center group"
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-700">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/Kaarigarluxe" className="cursor-pointer hover:underline">
              Kaarigar Luxe
            </a>
            <a href="/Contact" className="cursor-pointer hover:underline">
              Contact
            </a>

            {orderData?.length > 0 && (
              <button
                onClick={() => {
                  navigate("/order_data");
                  setMobileMenuOpen(false);
                }}
                className="relative cursor-pointer flex items-center justify-between"
              >
                <p>Orders</p>
                <FaBox />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {orderData?.length}
                </span>
              </button>
            )}

            <button
              onClick={() => {
                navigate("/cart");
                setMobileMenuOpen(false);
              }}
              className="relative cursor-pointer flex items-center justify-between"
            >
              <p>Cart</p>
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
