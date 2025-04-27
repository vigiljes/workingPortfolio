import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <motion.div 
      whileInView={{ opacity: 1 }} 
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="border-b border-neutral-900 pb-2"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image Section - Route Adjusted */}
            <motion.div className="w-full lg:w-1/4">
              <Link to={project.id === "record-bingo" ? "/RecordBingo" : `/projects/${project.id}`}>
                <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
                  src={project.image}
                  width={222}
                  height={222}
                  alt={project.title}
                  className="mb-6 rounded cursor-pointer"
                />
              </Link>
            </motion.div>

            {/* Description Section */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;