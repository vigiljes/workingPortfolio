import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS, JOBS3, JOBS4, JOBS5, JOBS6 } from "../constants";
import { motion } from "framer-motion";

import prototypeVideo from "../assets/prototype.mp4";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find((p) => p.id === projectId);

  // Map projects to their respective job details
  const jobDetailsMap = {
    "interactive-learning": JOBS6,
    "spotify-mood-creator": JOBS3,
    "portfolio-website": JOBS4,
    "personal-blog": JOBS5,
  };

  const jobDetails = jobDetailsMap[projectId] || [];
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle case where project doesn't exist
  if (!project) {
    return (
      <h2 className="text-center text-3xl mt-20">
        Project Not Found
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      {/* Project Title with Dynamic External Link */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 mb-10 text-center text-3xl font-bold"
      >
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            {project.title} 🔗
          </a>
        ) : (
          project.title
        )}
      </motion.h1>

      {/* Scaled Down Project Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src={project.image}
        alt={project.title}
        className="mx-auto rounded-lg shadow-md w-3/4 max-w-sm"
      />

      {/* Experience Sections - Every Paragraph Wider! */}
      <div className="mt-8 space-y-6">
        {jobDetails.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border-b border-neutral-800 pb-4"
          >
            {/* Main Section */}
            <h2 className="text-xl font-semibold text-center pb-6">
              {job.title}
            </h2>
            <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc1}
                  </p>

            <div className="space-y-6">
              {job.subtitle && (
                <>
                  <h3 className="text-lg font-semibold text-center pt-6">
                    {job.subtitle}
                  </h3>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc2}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc99}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc98}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc97}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc96}
                  </p>

                  {/* Image Grid for Subtitle */}
                  <div className={`grid ${projectId === "interactive-learning" ? "grid-cols-3 md:grid-cols-4" : "grid-cols-4"} gap-4 mt-2`}>
                    {job.images1?.map((image, i) => (
                      <motion.img
                        key={i}
                        src={image}
                        alt={`Section Image ${i + 1}`}
                        className="w-full h-auto max-h-96 rounded-lg shadow-md cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </>
              )}

              {job.subtitle2 && (
                <>
                  <h3 className="text-lg font-semibold text-center pt-6">
                    {job.subtitle2}
                  </h3>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc3}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc01}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc02}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc03}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc95}
                  </p>

                  {/* Image Grid for Subtitle2 */}
                  <div className={`grid ${projectId === "interactive-learning" ? "grid-cols-3 md:grid-cols-4" : "grid-cols-4"} gap-4 mt-2`}>
                    {job.images2?.map((image, i) => (
                      <motion.img
                        key={i}
                        src={image}
                        alt={`Section Image ${i + 1}`}
                        className="w-full h-auto max-h-96 rounded-lg shadow-md cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </>
              )}

              {job.subtitle3 && (
                <>
                  <h3 className="text-lg font-semibold text-center pt-6">
                    {job.subtitle3}
                  </h3>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc5}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc04}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc05}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc06}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc07}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc08}
                  </p>

                  {/* Image Grid for Subtitle3 */}
                  <div className={`grid ${projectId === "interactive-learning" ? "grid-cols-3 md:grid-cols-4" : "grid-cols-4"} gap-4 mt-2`}>
                    {job.images3?.map((image, i) => (
                      <motion.img
                        key={i}
                        src={image}
                        alt={`Section Image ${i + 1}`}
                        className="w-full h-auto max-h-96 rounded-lg shadow-md cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </>
              )}

              {job.subtitle4 && (
                <>
                  <h3 className="text-lg font-semibold text-center pt-6">
                    {job.subtitle4}
                  </h3>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc6}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc09}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc10}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc11}
                  </p>
                  <p className="text-md text-neutral-400 leading-relaxed w-full">
                    {job.desc12}
                  </p>

                  {/* Image Grid for Subtitle4 */}
                  <div className={`grid ${projectId === "interactive-learning" ? "grid-cols-3 md:grid-cols-4" : "grid-cols-4"} gap-4 mt-2`}>
                    {job.images4?.map((image, i) => (
                      <motion.img
                        key={i}
                        src={image}
                        alt={`Section Image ${i + 1}`}
                        className="w-full h-auto max-h-96 rounded-lg shadow-md cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {projectId === "interactive-learning" && (
  <div className="mt-8">
    <video controls className="w-full rounded-lg shadow-md">
      <source src={prototypeVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)}

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-medium text-purple-600 border border-purple-600 rounded-md transition hover:bg-purple-600 hover:text-white"
        >
          Back to Home
        </Link>
      </motion.div>

{/* Fullscreen Modal for Images */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center pt-[144px] overflow-auto"
    onClick={() => setSelectedImage(null)}
  >
    <motion.img
      src={selectedImage}
      alt="Fullscreen Image"
      className="max-w-screen max-h-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  </div>
)}
    </div>
  );
};

export default ProjectDetail;