"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Top 8 Finalist, Fuel the Future Challenge',
      description: '(Internshala, PepsiCo), selected from 10,000+ participants.',
    },
    {
      title: '5th Position, CoDevClub Hackathon',
      description: 'Selected from 300+ participants for an inventive solution to real-world problems.',
    },
    {
      title: '2nd Position, CodeRush Competition',
      description: 'Demonstrating data structures, algorithms, and problem-solving expertise.',
    },
    {
      title: 'Solved 400+ DSA Problems',
      description: 'Demonstrating problem-solving abilities in Data Structures and Algorithms.',
    },
  ];

  const extraCurricularActivities = [
    {
      title: 'Co-founder & Organizer, Utopia Club, GEU',
      description: 'Led and co-founded the Utopia Club, organizing 4+ successful events with participation of over 1500 students.',
    },
    {
      title: 'Virtual Internships - J.P. Morgan & Accenture via Forage',
      description: 'Gained hands-on experience in CI/CD pipelines, automation, real-time data visualizations, and Spring Boot, enhancing cloud computing and DevOps expertise.',
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="Achievements" className="py-16 bg-black text-white h-screen" >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Achievements</h2>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-4 bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <h2 className="text-4xl font-bold mt-16 mb-8 text-center">Extra-curricular Activities</h2>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {extraCurricularActivities.map((activity, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-4 bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-gray-400">{activity.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};