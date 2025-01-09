"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase , FaHtml5} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiTensorflow, SiFramer } from "react-icons/si";
import { MdOutlineEmojiPeople } from "react-icons/md"; // Icon for soft skills

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Data Analytics", icon: <FaDatabase className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
];

const softSkills = [
  { name: "Problem-Solving", icon: <MdOutlineEmojiPeople className="text-yellow-300" /> },
  { name: "Team Player", icon: <MdOutlineEmojiPeople className="text-green-300" /> },
  { name: "Critical Thinking", icon: <MdOutlineEmojiPeople className="text-blue-300" /> },
  { name : "Time Managmnet" , icon : <MdOutlineEmojiPeople className="text-red-300"/>},
  { name : "Adaptability" , icon : <MdOutlineEmojiPeople className="text-red-300"/>},
  { name : "Collaboration" , icon : <MdOutlineEmojiPeople className="text-red-300"/>},
];
export const Skills = () => {
  return (
    <div id = "Skills" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <p className="text-center text-lg text-gray-400 mb-12">
          A showcase of my technical expertise and tools I work with.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-center mb-8">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {softSkills.map((softSkill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="text-4xl">{softSkill.icon}</div>
              <p className="text-lg font-medium">{softSkill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
