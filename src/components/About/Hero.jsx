import React from "react";
import { motion } from "framer-motion";
import TanmayImg from "../../assets/images/imgTanmay.jpg";
import resumeLink from '../../assets/DB/resumeLink'

// icons
import {
  FileText,
  CircleArrowRight,
  SquareDashedMousePointer,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 p-4 md:p-8 lg:p-12 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 rounded-md shadow-md border border-green-600 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6  lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-slate-200 leading-tight text-center">
          Hi, I’m{" "}
          <span className="dark:bg-gradient-to-r dark:from-pink-300 dark:via-blue-300 dark:to-pink-200 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tanmay Kumar
          </span>{" "}
          👋
        </h1>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
          I'm a passionate full-stack developer who enjoys building clean, fast,
          and user-friendly web apps. Whether it’s front-end finesse or back-end
          logic, I love writing code that makes a difference.
        </p>

        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-400">
            What I do
          </h2>
        </div>

        <p className="text-sm sm:text-base text-black dark:text-white">
          I have more than 2 years' of experience working as a software developer
          and building software for clients. Below is a quick overview of my
          main technical skill sets and technologies I use.
        </p>

        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-sm text-center lg:text-start">
            Check out my portfolio, projects, and resume.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-white px-4 py-2 text-sm font-medium bg-green-500 rounded-md hover:bg-green-600 transition"
            >
              <CircleArrowRight className="w-5 h-5" />
              View Portfolio
            </Link>
            <Link
              to="/project"
              className="flex items-center gap-2 text-white px-4 py-2 text-sm font-medium bg-green-500 rounded-md hover:bg-green-600 transition"
            >
              <SquareDashedMousePointer className="w-5 h-5" />
              View Projects
            </Link>
            <a
              href={resumeLink}
              target="_blank"
              className="flex items-center gap-2 text-white px-4 py-2 text-sm font-medium bg-zinc-600 rounded-md hover:bg-zinc-700 transition"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, transition: 0.1}}
        className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg hover:scale-125"
      >
        <img
          src={TanmayImg}
          alt="Tanmay"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
