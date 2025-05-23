import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 flex justify-center">
      <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 lg:pl-6 md:pl-4 sm:pl-2">

          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jesus Vigil
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-slate-300 via-blue-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              UX Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center rounded-2xl">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src={profilePic}
              alt="Jesus Vigil"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;