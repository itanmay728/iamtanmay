import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Card Image Section */}
      <motion.div
        className="bg-slate-800 rounded-xl overflow-hidden shadow-lg w-full max-w-md border border-green-500"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group h-56 w-full overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src={image}
            alt={title}
          />
          <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-all duration-500 ease-in-out w-full px-4 py-3 group-hover:top-1/2 group-hover:opacity-100 bg-gradient-to-t from-green-500 via-green-400 to-green-300">
            <h4 className="text-xl md:text-2xl font-bold tracking-wide leading-tight dark:text-white">
              {title}
            </h4>
            <p className="italic text-xs mt-1 text-white dark:text-slate-900">
              {description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* GitHub Button OUTSIDE of Card */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white text-sm bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-all duration-300"
      >
        <FaGithub className="w-5 h-5" />
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
