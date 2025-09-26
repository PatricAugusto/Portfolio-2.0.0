import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-preto text-branco">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
        {/* Lado Esquerdo - Imagem */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-lg overflow-hidden border-2 border-cinza-medio">
            <Image
              src="/images/about-me.jpg" // Você pode usar outra imagem aqui
              alt="About Me"
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        {/* Lado Direito - Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <h3 className="text-xl md:text-2xl font-light text-cinza-medio mb-6">
            Designing Is My Passion
          </h3>
          <p className="text-lg text-cinza-escuro leading-relaxed mb-6">
            Desenvolvedor Full Stack com paixão por transformar ideias complexas em soluções digitais elegantes e eficientes. Com experiência em criar aplicações robustas e escaláveis, meu foco está em entregar código limpo, otimizado e focado na experiência do usuário. Estou sempre buscando aprender e me adaptar às novas tecnologias para construir produtos que realmente fazem a diferença.
          </p>
          <a
            href="#" // Substitua pelo link real do seu CV
            className="px-6 py-3 bg-branco text-preto font-bold rounded-lg hover:bg-cinza-claro transition-colors duration-300 inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;