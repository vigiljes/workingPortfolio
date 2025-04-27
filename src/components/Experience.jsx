import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/resumeSOhardTOfindWHYYY.pdf";
import resumeImage from "../assets/resumeSOhardTOfindWHYYY.jpg"; // Preview image

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // Check if user is on mobile
    window.addEventListener("resize", () => setIsMobile(window.innerWidth < 768));
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Resume Header */}
      <h2 className="my-20 text-center text-4xl">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          🔗 Resume
        </a>
      </h2>

      {/* Mobile: Image Above PDF Viewer */}
      {isMobile && (
        <div className="sm:hidden text-center mt-6">
          <img
            src={resumeImage}
            alt="Resume Preview"
            className="w-full max-w-[400px] mx-auto rounded-lg shadow-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      )}

{/* Desktop PDF Viewer - Completely Hidden on Mobile */}
<div className="hidden sm:flex flex-wrap justify-center">
  <div className="w-full max-w-[1000px] lg:w-[80%] h-[85vh] p-4">
    <object 
      data={resumePDF} 
      type="application/pdf" 
      className="w-full h-full rounded-lg shadow-lg"
    >
      <p className="text-center text-neutral-400">
        PDF viewer is not supported.  
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="text-sky-500 underline">Open PDF here.</a>
      </p>
    </object>
  </div>
</div>

      {/* Modal for Mobile */}
      {isModalOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
        >
          <div className="relative bg-neutral-900 p-6 rounded-lg max-w-lg">
            <img src={resumeImage} alt="Focused View" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white text-lg font-bold cursor-pointer"
            >
              ✖
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;