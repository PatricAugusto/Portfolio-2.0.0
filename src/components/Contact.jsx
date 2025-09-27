import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-preto text-branco">
      <div className="container mx-auto px-8 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-cinza-escuro mb-8">
          Got a project in mind? Let's chat and bring your ideas to life.
        </p>

        <form 
          action="https://formspree.io/f/xdkwallo" 
          method="POST" 
          className="flex flex-col space-y-4"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="p-4 rounded-lg bg-gray-800 text-branco border-2 border-cinza-escuro focus:outline-none focus:border-cinza-medio transition-colors duration-300"
          />
          <input 
            type="email" 
            name="_replyto" 
            placeholder="Your Email" 
            className="p-4 rounded-lg bg-gray-800 text-branco border-2 border-cinza-escuro focus:outline-none focus:border-cinza-medio transition-colors duration-300"
          />
          <textarea
            name="message" 
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-lg bg-gray-800 text-branco border-2 border-cinza-escuro focus:outline-none focus:border-cinza-medio transition-colors duration-300"
          ></textarea>

          <button 
            type="submit" 
            className="p-4 mt-4 bg-branco text-preto font-bold rounded-lg flex items-center justify-center space-x-2 hover:bg-cinza-claro transition-colors duration-300"
          >
            <span>Let's Chat</span>
            <FaPaperPlane className="text-preto" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;