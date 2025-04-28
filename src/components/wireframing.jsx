import { WIREFRAMES } from "../constants";
import { motion } from "framer-motion";

const cornerFirstOrder = [0, 2, 6, 8, 1, 3, 5, 7, 4]; // Corner first, then edges, then center

const WireframeGrid = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="grid grid-cols-3 gap-4 max-w-screen-md mx-auto">
        {cornerFirstOrder.map((index) => (
          <motion.img
            key={index}
            src={WIREFRAMES[index].image}
            alt={`Wireframe ${index + 1}`}
            initial={{ opacity: 0, scale: 0.5, x: index % 3 === 0 ? -100 : 100, y: index < 3 ? -100 : 100, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.15 }}
            className="w-28 sm:w-32 md:w-36 object-cover mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default WireframeGrid;