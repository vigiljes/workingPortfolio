import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ActualExper = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-10">
      {/* Projects Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        In the beginning...
      </motion.h2>

      {/* Experience List */}
      <div className="flex flex-col items-center gap-y-14 max-w-5xl mx-auto">
        {EXPERIENCES.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 1 }}
            className={`flex flex-col lg:flex-row items-center justify-between gap-x-16 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section - Clickable for Focused View */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
              className="w-full lg:w-auto flex justify-center"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              />
            </motion.div>

            {/* Project Details - Corrected Alignment */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className={`w-full max-w-xl lg:w-[55%] text-center lg:${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h6 className="mb-2 font-semibold text-xl">{project.task}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Focused Image View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative bg-neutral-900 p-6 rounded-lg max-w-lg">
            <img src={selectedImage} alt="Focused View" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white text-lg font-bold cursor-pointer"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualExper;