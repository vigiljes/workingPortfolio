import about2Img from "../assets/protos.png";
import { ABOUT2_TEXT } from "../constants";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div className="container mx-auto px-4 max-w-screen-lg">
      <h1 className="my-12 text-center text-4xl">
        Record Collector's <span className="text-neutral-500">BINGO</span>
      </h1>

      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left space-y-10 lg:space-y-0 lg:space-x-12">
        
        {/* Image Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-[400px] lg:max-w-[500px]"
        >
          <img className="w-full max-w-[600px] mx-auto rounded-2xl" src={about2Img} />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-xl px-4"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Concept <span className="text-neutral-500">Statement</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            {ABOUT2_TEXT}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About2;