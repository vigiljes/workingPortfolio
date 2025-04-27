import { WIREFRAMES } from "../constants";
import { motion } from "framer-motion";

const WireframeGrid = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="grid grid-cols-3 gap-4 max-w-screen-md mx-auto">
        {WIREFRAMES.map((wf, index) => (
          <motion.img
            key={index}
            src={wf.image}
            alt={`Wireframe ${index + 1}`}
            initial={{ opacity: 0, scale: 0.5, y: 100, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.15 }}
            className="w-28 sm:w-32 md:w-36 object-cover mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default WireframeGrid;