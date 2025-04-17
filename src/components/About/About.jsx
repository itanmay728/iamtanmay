import React from "react";
import Hero from "./Hero";
import Education from "./Education";
import Skills from "./Skills";
import FunFact from "./Funfack";

const About = () => {
  return (
    <section className=" text-white min-h-screen px-6 py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <Hero />
        <Skills />
        <Education />
        <FunFact />
      </div>
    </section>
  );
};

export default About;
