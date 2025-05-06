
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12 border-t-2 border-gray-medium">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl font-bold font-pixel mb-6">
              SABARI<span className="text-neon">_K</span>
            </h2>
            <p className="text-gray-light mb-6">
              Creative professional focused on building innovative solutions at the intersection of design, technology, and business.
            </p>
            <div className="h-[1px] dotted-line"></div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-light hover:text-neon transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-light hover:text-neon transition-colors">Projects</a></li>
              <li><a href="#ventures" className="text-gray-light hover:text-neon transition-colors">Ventures</a></li>
              <li><a href="#skills" className="text-gray-light hover:text-neon transition-colors">Skills</a></li>
              <li><a href="#education" className="text-gray-light hover:text-neon transition-colors">Education</a></li>
              <li><a href="#contact" className="text-gray-light hover:text-neon transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Startup Consulting</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-4">CONNECT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-light hover:text-neon transition-colors">GitHub</a></li>
            </ul>
            <div className="mt-6">
              <a 
                href="#contact" 
                className="brutalist-border px-6 py-2 text-light hover:bg-neon hover:text-dark transition-colors inline-block"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-medium flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-light mb-4 md:mb-0">
            &copy; {currentYear} Sabari K. All rights reserved.
          </div>
          
          <div className="font-pixel">
            <span className="text-gray-light">MADE WITH</span> <span className="text-neon">BRUTALISM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
