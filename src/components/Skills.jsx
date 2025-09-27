import React from 'react';
import { FaReact, FaJs, FaRobot, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiDotnet, SiTypescript, SiPostgresql } from 'react-icons/si';

const skills = [
  { name: 'AI', icon: <FaRobot /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'SQL', icon: <SiPostgresql /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-preto text-branco">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-down">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center border-2 border-cinza-medio rounded-xl hover:border-branco transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-2 text-cinza-claro">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-cinza-claro">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;