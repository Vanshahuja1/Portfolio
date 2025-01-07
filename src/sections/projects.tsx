"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const projects = [
  {
    title: "Secure Storage Application",
    description:
      "Developed a secure file storage platform enabling users to upload, share, and manage files (photos, videos, and documents). Implemented OTP-based secure login/signup, improving authentication success rates by 20%. Enhanced file accessibility with responsive dashboards and advanced filtering options, increasing user satisfaction by 25%. Designed a flexible storage plan system with adjustable pricing, achieving a 15% boost in user retention.",
    technologies: ["Next.js", "Appwrite", "Tailwind CSS"],
    video: "/images/video2.mp4",
    link: "#",
  },
  
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Engineered a real-time multi-user platform supporting document co-editing, improving team productivity by 30%. Implemented live editing visualization, enabling real-time changes, reducing workflow delays by 25%. Designed role-based access control (read, write, and admin roles) with Clerk, cutting unauthorized access by 40%.",
    technologies: ["Next.js", "Clerk", "Liveblocks", "Tailwind CSS"],
    image: "/images/image.png",
    link: "#",
  },
  {
    title: "SaaS Landing Page",
    description:
      "A landing page built with Next.js and Tailwind CSS featuring pricing sections and other essential components for a professional SaaS platform, providing clear navigation and a clean, modern design to effectively showcase the service’s value proposition.",
    technologies: ["Next.js", "Tailwind CSS"],
    video: "/images/video1.mp4",
    link: "#",
  },
  {
    title: "Personalized Learning Platform",
    description:
      "Created an AI-powered learning platform delivering customized learning paths based on user inputs using the Gemini API. Integrated JWT-based authentication to enhance platform security, reducing unauthorized access by 30%. Designed a user-centric, responsive dashboard for seamless navigation and progress tracking, improving user engagement by 40%.",
    technologies: ["MERN Stack", "Gemini API", "JWT Authentication"],
    image: "/images/Home.png",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">All Creative Works.</h2>
        <p className="text-lg mb-16">
          Here&apos;s some of my projects that I&apos;ve worked on.{" "}
          <span className="text-green-400 cursor-pointer">Explore more →</span>
        </p>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-lg"
                />
              ) : (
                <video
                  src={project.video}
                  
                  width="300"
                  height="300"
                  className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-lg"
                  autoPlay
                  controls
                />
              )}
              <div className="text-center md:text-left md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-200 py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
