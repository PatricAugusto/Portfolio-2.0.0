import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Sistema de Autenticação',
    description: 'Este projeto é um sistema de autenticação robusto, desenvolvido com React, Vite e Styled Components. Ele inclui funcionalidades de registro e login, com validação de formulários, navegação entre as telas e proteção de rotas simuladas.',
    technologies: ['React', 'Vite', 'Styled Components', 'React Router DOM'],
    image: '/SistemaDeAutenticacao.png',
    githubLink: 'https://github.com/PatricAugusto/Sistema-de-autenticacao/tree/main',
    liveLink: 'https://sistema-de-autenticacao-wine.vercel.app/',
  },
  {
    title: 'Dashboard de Análise',
    description: 'Um dashboard projetado para visualizar dados demográficos fictícios do Brasil, como população total, distribuição regional e por faixa etária. O objetivo é criar uma ferramenta clara, dinâmica e responsiva para a exploração de dados.',
    technologies: ['React', 'Styled Components', 'Chart.js', 'React Chart.js 2', 'Font Awesome', 'API localStorage'],
    image: '/dashboard.png',
    githubLink: 'https://github.com/PatricAugusto/Dashboard-Interativo-com-Graficos/tree/main',
    liveLink: 'https://dashboard-interativo-com-graficos.vercel.app/',
  },
  {
    title: 'Gerenciador de Tarefas e Foco Temporal',
    description: 'O ChronoSynth é um gerenciador de tarefas minimalista e futurista, projetado para ajudá-lo a manter o foco em suas atividades. Inspirado na estética cyberpunk , ele oferece um ambiente imersivo para gerenciar suas tarefas diárias',
    technologies: ['React', 'Zustand', 'CSS'],
    image: '/Gerenciador.png',
    githubLink: 'https://github.com/PatricAugusto/ChronoSynth-Gerenciador-de-Tarefas-e-Foco-Temporal/tree/main',
    liveLink: 'https://chrono-synth-gerenciador-de-tarefas.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-preto text-branco">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-0 border-2 border-cinza-medio rounded-xl overflow-hidden hover:border-branco hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-cinza-claro mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cinza-escuro text-cinza-claro px-3 py-1 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-6 space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border-2 border-cinza-medio text-branco rounded-lg hover:bg-cinza-medio transition-colors duration-300"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-branco text-preto font-bold rounded-lg hover:bg-cinza-claro transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;