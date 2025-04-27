import { useParams, Link } from "react-router-dom";
import { PROJECTS, JOBS3, JOBS4, JOBS5 } from "../constants";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find(p => p.id === projectId);

  // Map projects to their respective job details
  const jobDetailsMap = {
    "spotify-mood-creator": JOBS3,
    "portfolio-website": JOBS4,
    "personal-blog": JOBS5,
  };

  const jobDetails = jobDetailsMap[projectId] || [];

  if (!project) {
    return (
      <h2 className="text-center text-3xl mt-20">
        Project Not Found
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      {/* Project Title */}
      <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-6 mb-10 text-center text-3xl font-bold"
>
  {project.title}
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

      {/* Experience Sections - Fixed Paragraph Separation! */}
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
            <h2 className="text-xl font-semibold text-center">{job.title}</h2>

            <div className="space-y-6">
              <div><p className="text-md text-neutral-400 leading-relaxed">{job.desc1}</p></div>
              {job.subtitle && (
                <>
                  <div><h3 className="text-lg font-semibold text-center mt-0 pt-6">{job.subtitle}</h3></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc2}</p></div>
                </>
              )}

              {job.subtitle2 && (
                <>
                  <div><h3 className="text-lg font-semibold text-center mt-0 pt-6">{job.subtitle2}</h3></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc3}</p></div>

                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc01}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc02}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc03}</p></div>
                </>
              )}

              {job.subtitle3 && (
                <>
                  <div><h3 className="text-lg font-semibold text-center mt-0 pt-6">{job.subtitle3}</h3></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc5}</p></div>
                
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc04}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc05}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc06}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc07}</p></div>

                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc08}</p></div>
                </>
              )}

              {job.subtitle4 && (
                <>
                  <div><h3 className="text-lg font-semibold text-center mt-0 pt-6">{job.subtitle4}</h3></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc6}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc09}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc10}</p></div>
                  <div><p className="text-sm text-neutral-400 leading-relaxed">{job.desc11}</p></div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

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
    </div>
  );
};

export default ProjectDetail;