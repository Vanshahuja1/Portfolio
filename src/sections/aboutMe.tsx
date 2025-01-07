"use client";
import { motion } from "framer-motion";
import React from 'react';

export const AboutMe = () => {
  return (
    <div className="flex items-center justify-center h-[50vh] bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-left p-8 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-5xl sm:max-w-6xl lg:max-w-7xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">⚡ About Me</h1>
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
          Hey there! I&apos;m <span className="text-green-400 font-semibold">Vansh Ahuja</span>, a passionate software engineer focused on crafting impactful solutions with cutting-edge technologies like <span className="text-green-400 font-semibold">Next.js</span>,{" "}
          <span className="text-green-400 font-semibold">MERN Stack</span>, and{" "}
          <span className="text-green-400 font-semibold">Machine Learning</span>.
        </p>
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
          I am driven by a deep passion for creating user-centric applications that solve real-world challenges. My expertise lies in developing intuitive and scalable web applications that not only meet user expectations but exceed them. When I&apos;m not coding, I enjoy exploring my other passions like fitness, eSports, and travel planning to fuel my creativity and stay inspired.
        </p>
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
          I believe in the power of collaboration and continuous learning, and I&apos;m always looking for new opportunities to connect, innovate, and build something amazing together. Whether it&apos;s through sharing knowledge or working on cutting-edge projects, I aim to make a lasting impact in the tech world.
        </p>
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
          If you&apos;re looking for a passionate and dedicated developer to bring your ideas to life, let&apos;s connect and create something incredible!
        </p>
      </motion.div>
    </div>
  );
};
