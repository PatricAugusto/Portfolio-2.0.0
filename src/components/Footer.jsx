import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-preto text-cinza-escuro text-center py-8 border-t border-cinza-medio">
      <div className="container mx-auto">
        <p className="text-sm">
          Developed by <span className="text-branco font-bold">Patric Augusto</span> | © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;