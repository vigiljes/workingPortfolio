import { EXPERIENCES2 } from "../constants";
import { motion } from "framer-motion";

const Experience2 = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 flex justify-center">
      {/* Main Wrapper - Ensuring Proper Centering */}
      <div className="max-w-screen-2xl w-full mx-auto mr-3">
        {/* Main Heading */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -102 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-12 text-center text-3xl"
        >
          The Process ⌛
        </motion.h2>

        {/* Header Labels - Fully Balanced */}
        <div className="mb-8 flex flex-row items-start text-left justify-center gap-x-4">
          {["Timeframe", "Role", "Description", "Technologies"].map((label, index) => (
            <motion.div
              key={index}
              viewport={{ once: true }}
              className="w-1/4 text-left flex justify-center"
            >
              <p className="text-md font-medium text-neutral-400">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience List - Properly Centered */}
        <div className="flex flex-col items-start gap-y-4">
          {EXPERIENCES2.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full flex flex-row items-start justify-between gap-x-4"
            >
              {/* Timeframe Section - Centered */}
              <div className="w-1/4 flex justify-center text-left">
                <p className="text-md text-neutral-400">{experience.time}</p>
              </div>

              {/* Role Section - Perfectly Positioned */}
              <div className="w-1/4 flex justify-center text-left">
                <h6 className="font-semibold text-lg">{experience.role}</h6>
              </div>

              {/* Description Section - Fully Aligned */}
              <div className="w-1/4 flex justify-center text-left">
                <p className="text-sm text-neutral-400">{experience.description}</p>
              </div>

              {/* Technologies Section - Wrapped Properly */}
              <div className="w-1/4 flex justify-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      viewport={{ once: true }}
                      className="rounded bg-neutral-900 px-3 py-2 text-md font-medium text-purple-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience2;