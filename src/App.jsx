import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import Bestseller from './Component/Bestseller.jsx';
import Preload from './Component/preload';
import Refresh from './Component/Refresh';
import About from './Component/About';
import USPSection from './Component/USP.jsx';
import Footer from "./Component/Footer.jsx"
import Landing from './Component/Landing.jsx';
import Original from './Component/Original.jsx';
import Bestsellerpage from "./Component/Bestellerpage.jsx";
import CartPage from "./Component/CartPage.jsx"
import Gaadi from "./Component/Gaadi.jsx"
import Cursor from './Component/Cursor.jsx';
import Thepokerparlour from "./Component/Thepokerparlour.jsx"
import Madira from './Component/Madira.jsx';
import Aestheticspremi from "./Component/Aestheticspremi.jsx"
// import Journey from "./Component/Journey.jsx"
import Slide from "./Component/Slide.jsx"
import Contact from './Component/Contact.jsx';
import Cinemapremi from "./Component/Cinemapremi.jsx"
import Pencilpremi from "./Component/Pencilpremi.jsx"
import Kaarigarluxe from './Component/Kaarigarluxe.jsx';
import Painting from './Component/Painting.jsx';
import Poster from './Component/Poster.jsx';
import Artifacts from './Component/Artifacts.jsx';
import Furniture from './Component/Furniture.jsx';
import ScrollToTopButton from "./Component/ScrollToTopButton.jsx"; 
import WhatsAppButton from "./Component/WhatsAppButton"; 
import TermsConditions from './Component/TermsAndConditions.jsx';
import PrivacyPolicy from './Component/PrivacyPolicy .jsx';
import RefundAndShippingPolicy from './Component/RefundAndShippingPolicy.jsx';
import CheckoutPage from './Component/CheckoutPage.jsx';
import PaymentStatus from './Component/PaymentStatus.jsx';
import PaymentFailed from './Component/PaymentFailed.jsx';
import PaymentSuccess from './Component/PaymentSuccess.jsx';
import OrdersPage from './Component/OrdersPage.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [orderData, setOrderData] = useState(() => {
    const savedOrderData = localStorage.getItem("orderData");
    return savedOrderData ? JSON.parse(savedOrderData) : [];
  });
  useEffect(() => {
    localStorage.setItem("orderData", JSON.stringify(orderData));
  }, [orderData]);
  
  // Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Preload isVisible={isLoading} />
      {!isLoading && (
        <Router>
          <Navbar cart={cart} orderData={orderData}/>
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/Bestseller" element={<Bestseller />} /> 
            <Route path="/Refresh" element={<Refresh cart={cart} setCart={setCart} />} />
            <Route path="/About" element={<About />} />
            <Route path="/USPSection" element={<USPSection />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/Cursor" element={<Cursor />} />
            <Route path="/Slide" element={<Slide />} />
            <Route path="/Contact" element={<Contact />} />
            
            <Route path="/Bestsellerpage" element={<Bestsellerpage cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} orderData={orderData} setOrderData={setOrderData}/>} />
            <Route path="/payment-status" element={<PaymentStatus cart={cart} setCart={setCart} orderData={orderData} setOrderData={setOrderData}/>} />
            <Route path="/failed" element={<PaymentFailed />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/order_data" element={<OrdersPage orderData={orderData} />} />




            <Route path="/Original" element={<Original cart={cart} setCart={setCart} />} />
            <Route path="/Gaadi" element={<Gaadi cart={cart} setCart={setCart} />} />
            <Route path="/Thepokerparlour" element={<Thepokerparlour cart={cart} setCart={setCart}/>} />
            <Route path="/Juapremi" element={<Thepokerparlour cart={cart} setCart={setCart}/>} />
            <Route path="/Madira" element={<Madira cart={cart} setCart={setCart}/>} />
            <Route path="/Aestheticspremi" element={<Aestheticspremi cart={cart} setCart={setCart}/>} />
            <Route path="/Pencilpremi" element={<Pencilpremi cart={cart} setCart={setCart}/>} />
            {/* <Route path="/Cinemapremi" element={<Cinemapremi cart={cart} setCart={setCart}/>} /> */}
            <Route path="/Kaarigarluxe" element={<Kaarigarluxe cart={cart} setCart={setCart}/>} />

            <Route path="/Painting" element={<Painting cart={cart} setCart={setCart} />} />
            {/* <Route path="/Poster" element={<Poster cart={cart} setCart={setCart}/>} /> */}
            <Route path="/Artifacts" element={<Artifacts cart={cart} setCart={setCart}/>} />
            <Route path="/Furniture" element={<Furniture cart={cart} setCart={setCart}/>} />
            <Route path="/terms-and-conditions" element={<TermsConditions/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/refund-shipping-policy" element={<RefundAndShippingPolicy/>} />
          </Routes>
          <Footer />
          <WhatsAppButton/>
           <ScrollToTopButton />
        </Router>
      )}
    </div>
  );
};

export default App;
