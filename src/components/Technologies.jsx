import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiAdobecreativecloud } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { FaUnity } from "react-icons/fa"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [15, -15],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
  <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobecreativecloud className="text-7xl text-white-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaUnity className="text-7xl text-white-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-7xl text-purple-400" />
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies
