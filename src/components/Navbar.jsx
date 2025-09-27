import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-preto text-branco p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nome */}
        <div className="text-xl font-bold">
          <Link href="/">
            Meu Portfólio
          </Link>
        </div>

        {/* Links de navegação */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-cinza-medio transition-colors duration-300">
            About
          </Link>
          <Link href="#skills" className="hover:text-cinza-medio transition-colors duration-300">
            Skills
          </Link>
          <Link href="#services" className="hover:text-cinza-medio transition-colors duration-300">
            Services
          </Link>
          <Link href="#contact" className="hover:text-cinza-medio transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/PatricAugusto" target="_blank" rel="noopener noreferrer" className="hover:text-cinza-medio transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/patric-augusto-bab47b240/" target="_blank" rel="noopener noreferrer" className="hover:text-cinza-medio transition-colors duration-300">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;