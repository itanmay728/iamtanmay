import React from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiSpring,
  SiOracle 
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
  { name: "MySQL", icon: <GrMysql className="text-cyan-600" /> },
  { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
  { name: "Next", icon: <TbBrandNextjs className="text-zinc-800 dark:text-zinc-300" /> },
];

export default function Skills() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 border border-green-600 rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white ">
        🛠 Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          whileHover={{ scale: 1.05, transition: 0.1}}
          viewport={{ once: false }}
          className="group transform transition duration-300 hover:scale-110 hover:shadow-xl hover:border-green-400 bg-zinc-100 dark:bg-zinc-900 border border-green-600 p-4 rounded-xl shadow-md flex flex-col items-center justify-center "
        >
          <div className="text-4xl mb-2 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
            {skill.icon}
          </div>
          <span className="text-zinc-900 dark:text-white text-sm font-medium transition-colors duration-300 group-hover:text-green-500">
            {skill.name}
          </span>
        </motion.div>
        
        ))}
      </div>
    </section>
  );
}
