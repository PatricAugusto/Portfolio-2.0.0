import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJs />, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
  { name: 'Python', icon: <FaPython />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Database' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-preto text-branco">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 w-32 h-32 text-center border-2 border-cinza-medio rounded-xl hover:border-branco hover:scale-105 transition-all duration-300"
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