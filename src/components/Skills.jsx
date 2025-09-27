import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-preto text-branco">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animation-scroll hover:[animation-play-state:paused] whitespace-nowrap">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 w-36 h-36 mx-4 text-center border-2 border-cinza-medio rounded-xl hover:border-branco transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-2 text-cinza-claro">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold text-cinza-claro">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;