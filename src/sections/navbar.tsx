"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-black py-4 px-6 flex justify-between items-center border-b border-gray-700">
        {/* Logo */}
        <div className="text-green-400 text-4xl font-bold">V</div>

        {/* Hamburger Menu for Small Devices */}
        <button
          className="block md:hidden text-gray-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              className="text-3xl"
            >
              ✖
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-3xl"
            >
              ☰
            </motion.div>
          )}
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-full bg-black border-t border-gray-700 md:static md:flex md:items-center md:space-x-9 md:border-none md:w-auto`}
        >
          {["About", "Projects", "Skills", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              className="py-2 md:py-0 md:inline-block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-center text-3xl hover:text-green-400 md:text-base"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-left flex-grow flex flex-col justify-center items-start px-10 md:px-20 lg:px-32 bg-black"
      >
        <h1 className="text-green-400 text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
          Hey there!, I&apos;m-
        </h1>
        <h2 className="text-white text-6xl sm:text-7xl md:text-8xl font-bold">
          Vansh Ahuja
        </h2>
        <p className="text-gray-400 mt-6 text-xl sm:text-2xl md:text-3xl">
          I am a passionate software engineer with a love for creating intuitive and powerful web applications. I&apos;m a self-taught developer with a deep interest in Computer Science, constantly exploring new technologies to push the boundaries of frontend development. Currently, I specialize in React and Next.js, and I enjoy solving complex challenges with clean, maintainable code.
        </p>
        <div className="mt-8">
          <span className="text-pink-400 text-lg sm:text-xl md:text-2xl block">
            🚀 Currently specializing in Frontend (React / Next.js)
          </span>
          <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl block mt-4">
            ⚡ Frontend Engineer at GGL
          </span>
        </div>
        <div className="flex space-x-6 mt-8">
          <a
            href="https://github.com/Vanshahuja1"
            className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-full text-lg transition duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vanshahuja01/"
            className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg transition duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Vanshahuja/"
            className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-full text-lg transition duration-200"
          >
            LeetCode
          </a>
        </div>
      </motion.div>
    </header>
  );
};
