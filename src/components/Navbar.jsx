import React, { useState, useEffect } from "react";
import logo from "/logo.svg";
import tanmay_photo from "../assets/images/Tanmay_photo.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";
import resumeLink from "../assets/DB/resumeLink";

// lucide-icons
import {
  House,
  NotebookText,
  FolderGit2,
  FileSearch,
  Menu,
  Mail,
} from "lucide-react";

const Navbar = () => {
  let [menu, setMenu] = useState("portfolio");

  // ! ================= Theme handled =================

  const savedTheme = localStorage.getItem('theme') || 'light';
  console.log(savedTheme);
  let [themeMode, setThemeMode] = useState(savedTheme);
  let handleThemeChange = (e) => {
    let darkModeStatusIs = e.currentTarget.checked;
    const newTheme = darkModeStatusIs ? 'dark' : 'light';
    setThemeMode(newTheme);
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);

    // Save the theme to localStorage
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  //   Mobile isOpen
  let [isOpen, setIsOpen] = useState(false);

  //   css variables
  let trangleShape =
    "translate-x-4 w-0 h-0 border-t-[9px] border-b-[9px] border-r-[8px] border-t-transparent border-b-transparent dark:border-r-slate-500 border-r-white";
  let li =
    "flex items-center gap-5 p-2 hover:bg-gradient-to-r from-slate-200 rounded-md w-full dark:hover:bg-gradient-to-r dark:from-slate-600";

  let navLink = ({ isActive }) => {
    return `flex justify-center items-center w-full ${
      isActive
        ? `bg-gradient-to-r from-slate-200 rounded-md dark:from-slate-600`
        : ""
    }`;
  };

  let iconCSS =
    "h-7 w-7 text-gray-600 cursor-pointer hover:text-white dark:text-gray-500 dark:hover:text-white";

  let typing = (
    <TypeAnimation
      sequence={[
        "Back-End Developer",
        1000, // Show for 1 sec
        "Front-End Developer",
        1000,
        "Full-Stack Developer",
        1000,
        "Software Engineer",
        1000,
        "",
        500, // Erase text
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );

  return (
    <div className="p-4 flex flex-col justify-evenly xl:fixed bg-gradient-to-l from-gray-300 via-slate-300 to-slate-400 dark:from-gray-800 dark:via-slate-800 dark:to-slate-950 h-full max-xl:min-w-full xl:w-96 xl:min-h-screen  dark:text-white ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <img src={logo} alt="" />
          {/* <span className="text-pink-800">anmay</span> */}
        </div>

        <div className="h-9 w-9 cursor-pointer">
          {/* Dark-light mode */}

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleThemeChange}
              checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div>
        <div className="overflow-hidden rounded-full w-40 h-40 mx-auto">
          <img
            className="object-cover max-w-full max-h-full"
            src={tanmay_photo}
            alt=""
          />
        </div>

        <div className="">
          <h1 className="text-center text-3xl font-medium">Tanmay kumar</h1>
          <p className="text-lg max-xl:text-center xl:ml-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {typing}
          </p>
        </div>
      </div>

      <hr className="mt-3" />

      <div className="hidden xl:flex flex-col">
        <div className="flex flex-col mt-3">
          <ul className="flex flex-col gap-1 text-lg">
            {/* PORTFOLIO */}
            <NavLink
              onClick={() => setMenu("portfolio")}
              // className="flex justify-center items-center"
              className={navLink}
              to="/"
            >
              <li className={`${li} `}>
                <House /> <span>Portfolio</span>
              </li>
              {menu === "portfolio" && (
                <div className={`${trangleShape} `}></div>
              )}
            </NavLink>

            {/* ABOUT */}

            <NavLink
              onClick={() => setMenu("about")}
              className={navLink}
              to="/about"
            >
              <li className={li}>
                <NotebookText /> <span>About</span>
              </li>
              {menu === "about" && <div className={trangleShape}></div>}
            </NavLink>

            {/* PROJECT */}

            <NavLink
              onClick={() => setMenu("project")}
              className={navLink}
              to="/project"
            >
              <li className={li}>
                <FolderGit2 /> <span>Projects</span>
              </li>
              {menu === "project" && <div className={trangleShape}></div>}
            </NavLink>

            {/* RESUME */}

            <a
              onClick={() => setMenu("resume")}
              className={navLink}
              href= {resumeLink}
              target="_blank"
            >
              <li className={`${li} text-indigo-600`}>
                <FileSearch /> <span>Resume</span>
              </li>
            </a>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-gray-500 dark:text-gray-400 font-semibold">
            Get in Touch
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="m-7">
          <ul className="flex justify-center items-center gap-7">
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/myselftanmay/" // LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className={iconCSS} />
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/itanmay728" // GitHub
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={iconCSS} />
              </a>
            </li>

            {/* LeetCode */}
            <li>
              <a
                href="https://leetcode.com/u/Tanmay728/" // LeetCode profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className={iconCSS} />
              </a>
            </li>

            {/* Email */}
            <li>
              <a href="mailto:ktanmay1130@gmail.com">
                <Mail className={iconCSS} />
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="m-7">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2025 Tanmay Kumar. All rights reserved.
          </p>
        </div>
      </div>

      {/* ------- Mobile ------- */}
      <div
        className={` hidden max-xl:flex justify-between items-center mt-3 mb-3`}
      >
        {/* get in touch icon */}
        <div className="w-32 ">
          <ul className="flex justify-evenly">
            <li>
              <a
                href="https://www.linkedin.com/in/myselftanmay/" // LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-5 w-5 text-gray-700 cursor-pointer dark:text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/itanmay728" // GitHub
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5 text-gray-700 cursor-pointer dark:text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/Tanmay728/" // LeetCode profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="h-5 w-5 text-gray-700 cursor-pointer dark:text-gray-400" />
              </a>
            </li>
            <li>
              <a href="mailto:ktanmay1130@gmail.com">
                <Mail className="h-5 w-5 text-gray-700 cursor-pointer dark:text-gray-400" />
              </a>
            </li>
          </ul>
        </div>

        <div onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-5 w-5 text-gray-700 cursor-pointer dark:text-gray-400" />
        </div>
      </div>

      {isOpen && (
        <div>
          <hr />
          <div className="mt-3">
            <ul className="flex flex-col items-end gap-3 text-lg">
              <NavLink
                onClick={() => (setMenu("portfolio"), setIsOpen(!isOpen))}
                className={navLink}
                to="/"
              >
                <li className={`${li} justify-end`}>
                  <span>Portfolio</span> <House />
                </li>
              </NavLink>

              <NavLink
                onClick={() => (setMenu("portfolio"), setIsOpen(!isOpen))}
                className={navLink}
                to="/about"
              >
                <li className={`${li} justify-end`}>
                  <span>About</span> <NotebookText />
                </li>
              </NavLink>

              <NavLink
                onClick={() => (setMenu("portfolio"), setIsOpen(!isOpen))}
                className={navLink}
                to="/project"
              >
                <li className={`${li} justify-end`}>
                  <span>Projects</span> <FolderGit2 />
                </li>
              </NavLink>

              <a href={resumeLink} target="_blank" className="w-full">
                <li className={`${li} justify-end text-indigo-600`}>
                  <span>Resume</span> <FileSearch />
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
