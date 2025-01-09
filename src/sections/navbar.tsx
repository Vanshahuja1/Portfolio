"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Bg from '../assets/BG.jpg';
import Logo from '../assets/Logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white min-h-screen flex flex-col relative">
      {/* Background Image with Gradual Opacity Fade */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div 
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Navbar */}
      <nav className="w-full bg-black py-4 px-6 flex justify-between items-center border-b border-gray-700 z-10 relative">
        {/* Logo */}
        <Image src={Logo} alt="Logo" height={60} width={60} />

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
          } absolute top-16 right-0 w-full bg-black border-t border-gray-700 md:static md:flex md:items-center md:space-x-9 md:border-none md:w-auto z-20`}
        >
          {["About", "Projects", "Skills", "Achievements", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              className="py-2 md:py-0 md:inline-block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={`#${item}`}
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
        className="text-left flex-grow flex flex-col justify-center items-start px-10 md:px-20 lg:px-32 z-10 relative"
      >
        <h1 className="text-green-400 lg:text-4xl sm:text-2xl md:text-2xl font-semibold mb-6">
          Hey there! I&apos;m-
        </h1>
        <h2 className="text-white lg:text-5xl sm:text-3xl md:text-3xl font-bold">
          Vansh Ahuja
        </h2>
        <p className="text-gray-200 mt-6 lg:text-3xl sm:text-1xl md:text-2xl leading-relaxed">
          A passionate software developer with a love for creating intuitive and powerful web applications.
          With  deep interest in Computer Science, I constantly exploring new technologies to push the boundaries of development. Currently, I specialize in Full Stack and Machine Learning and enjoy solving complex challenges with clean and  maintainable code.
        </p>
        <div className="mt-8">
          <span className="text-pink-400 text-lg sm:text-xl md:text-2xl block">
            🚀 Exploring Three.js , Framer
          </span>
          <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl block mt-4">
            ⚡ Proficient in MERN STACK
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
