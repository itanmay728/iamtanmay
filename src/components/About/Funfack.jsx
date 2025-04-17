import React from "react";
import { FaCode, FaSmile, FaMugHot, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const funFacts = [
  {
    icon: <FaCode className="text-green-400 text-3xl" />,
    title: "10,000+ Lines of Code",
    description: "Written and counting!",
  },
  {
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    title: "50+ Projects Completed",
    description: "Across frontend, backend, and full-stack.",
  },
  {
    icon: <FaSmile className="text-yellow-300 text-3xl" />,
    title: "100+ DSA Question Solved",
    description: "❤️Love to code",
  },
  {
    icon: <FaMugHot className="text-orange-300 text-3xl" />,
    title: "500+ Cups of Coffee",
    description: "Fuel behind every great feature ☕",
  },
  
];

export default function FunFactsSection() {
  return (
    <section className="py-12 px-4 sm:px-8  dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-inner border border-green-500">
      <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-10">🎉 Fun Facts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {funFacts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, transition : 0.1}}
            className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-500"
          >
            <div className="mb-4">{fact.icon}</div>
            <h3 className="text-zinc-600 dark:text-white text-xl font-semibold mb-1">{fact.title}</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm">{fact.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
