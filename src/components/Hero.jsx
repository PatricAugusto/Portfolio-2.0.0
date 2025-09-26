import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center min-h-screen pt-16 bg-preto text-branco">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
        {/* Lado Esquerdo - Texto */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hello, <br /> I'm <span className="text-cinza-medio">Patric Augusto</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-cinza-escuro max-w-md mx-auto md:mx-0">
            Passionate about building beautiful and functional web applications.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="#" className="px-6 py-3 bg-branco text-preto font-bold rounded-lg hover:bg-cinza-claro transition-colors duration-300">
              Download CV
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-branco text-branco font-bold rounded-lg hover:bg-cinza-escuro transition-colors duration-300">
              Let's Chat
            </a>
          </div>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-cinza-escuro">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;