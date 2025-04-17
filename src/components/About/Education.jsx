import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science Engineering",
      institution: "Maharshi Dayanand University",
      year: "2019 - 2023",
    },
    {
      degree: "Intermediate (XI-XII)",
      branch: "Science Stream",
      institution: "Nav Jeewan Academy Sr. Sec. School",
      year: "2017 - 2019",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 border border-green-600 rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
        🎓 Education
      </h2>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto ">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 border-l-4 border-green-500  rounded-md shadow hover:scale-[1.01] transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 border border-green-600 rounded-full">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="flex flex-col ">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{edu.degree}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{edu.branch}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
