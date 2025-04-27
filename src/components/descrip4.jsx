import { JOBS2 } from "../constants";
import { motion } from "framer-motion";

const JobDescriptions4 = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 flex justify-center">
      {/* Wrapper - Fully Centered Frame */}
      <div className="max-w-lg md:max-w-screen-md w-full mx-auto px-4 sm:px-6">
        {/* Main Heading */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -102 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-12 text-center text-3xl sm:text-4xl font-semibold"
        >
          Background 📃
        </motion.h2>

        {/* Stacked & Left-Aligned Job Entries */}
        <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
          {JOBS2.map((job, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-start text-left gap-y-2"
            >
              {/* Job Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{job.title}</h2>

              {/* First Description - Smaller for Text Density */}
              <p className="text-md sm:text-lg md:text-xl text-neutral-300">{job.desc1}</p>

              {/* Subtitle - Slightly Smaller Than Title */}
              <h3 className="text-md sm:text-lg md:text-xl font-medium text-neutral-400 pt-5">{job.subtitle}</h3>

              {/* Second Description - Adjusted for Compact Readability */}
              <p className="text-sm sm:text-md md:text-lg text-neutral-400">{job.desc2}</p>
              <p className="text-sm sm:text-md md:text-lg text-neutral-400">{job.desc3}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescriptions4;