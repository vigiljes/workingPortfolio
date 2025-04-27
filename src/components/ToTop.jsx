import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight); // Show when scrolled past one full screen
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }} // Start outside screen
      animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} // Slide in/out
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-5 right-5 bg-[#4a267d] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#530306] transition"
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑ Back to Top
      </button>
    </motion.div>
  );
};

export default BackToTop;