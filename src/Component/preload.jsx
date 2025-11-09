import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import logo from './photos/logo.jpeg';
import logo from "./photos/logo_1.png";
// import logotext from "./photos/kaarigarText_2.png";
import logotext from "./photos/kaarigerText_load.png";

const title = "KAARIGAR & CO.";

const letterVariants = {
  initial: { y: 60, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.8 + i * 0.05,
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1],
    },
  }),
};

const Preload = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center flex-col"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
        >
          {/* Left and Right Panels */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-black z-20"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ delay: 2.6, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2 bg-black z-20"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ delay: 2.6, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          />

          {/* Cinematic Logo Reveal */}
          <motion.div
            className="z-30 mb-6"
            initial={{ scale: 1.2, opacity: 0, y: 40 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.2,
                duration: 1.3,
                ease: [0.645, 0.045, 0.355, 1],
              },
            }}
          >
            <img
              src={logo}
              alt="Kaarigar & Co. Logo"
              className="w-44 h-44 object-contain"
            />
            
          </motion.div>

          {/* Animated Title */}
          <motion.div 
            initial={{ scale: 1.2, opacity: 0, y: 40 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.2,
                duration: 1.3,
                ease: [0.645, 0.045, 0.355, 1],
              },
            }} className="flex gap-1 z-30  font-[Amita] text-white text-xl tracking-widest font-bold uppercase">
            {/* {[...title].map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial="initial" animate="animate">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))} */}
            <img
              src={logotext}
              alt="Kaarigar & Co"
              className="h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48 lg:h-16 lg:w-56 xl:h-20 xl:w-64 bg-transparent object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preload;
