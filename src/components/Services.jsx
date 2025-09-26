import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaCogs } from 'react-icons/fa';

const services = [
  {
    name: 'Web Development',
    description: 'Criação de websites e aplicações web responsivas e de alta performance.',
    icon: <FaLaptopCode />,
  },
  {
    name: 'Mobile Development',
    description: 'Desenvolvimento de aplicações móveis para iOS e Android com frameworks modernos.',
    icon: <FaMobileAlt />,
  },
  {
    name: 'Cloud Services',
    description: 'Configuração e implementação de soluções em nuvem (AWS, Azure) para escalabilidade.',
    icon: <FaCloud />,
  },
  {
    name: 'Database Management',
    description: 'Design e otimização de bancos de dados relacionais e não-relacionais.',
    icon: <FaDatabase />,
  },
  {
    name: 'API Development',
    description: 'Criação de APIs RESTful e GraphQL para comunicação entre sistemas.',
    icon: <FaCogs />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-preto text-branco">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 text-center border-2 border-cinza-escuro rounded-xl hover:border-cinza-medio transition-all duration-300"
            >
              <div className="text-5xl text-cinza-medio mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-cinza-claro">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;