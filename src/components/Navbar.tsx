
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark border-b-2 border-gray-medium">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold font-pixel text-light hover:text-neon transition-colors">
          SABARI_<span className="text-neon">K</span>
        </Link>
        
        {/* Mobile toggle */}
        <button 
          className="block md:hidden text-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl font-pixel">X</span>
          ) : (
            <span className="text-2xl font-pixel">≡</span>
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/#about" className="text-light hover:text-neon transition-colors">ABOUT</Link>
          <Link to="/#projects" className="text-light hover:text-neon transition-colors">PROJECTS</Link>
          <Link to="/#ventures" className="text-light hover:text-neon transition-colors">VENTURES</Link>
          <Link to="/#skills" className="text-light hover:text-neon transition-colors">SKILLS</Link>
          <Link to="/#education" className="text-light hover:text-neon transition-colors">EDUCATION</Link>
          <Link to="/#contact" className="text-light bg-neon px-4 py-1 text-dark font-bold hover:bg-light hover:text-dark transition-colors">CONTACT</Link>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t-2 border-gray-medium">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Link to="/#about" className="py-3 border-b border-gray-medium text-light hover:text-neon transition-colors" onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link to="/#projects" className="py-3 border-b border-gray-medium text-light hover:text-neon transition-colors" onClick={() => setIsOpen(false)}>PROJECTS</Link>
            <Link to="/#ventures" className="py-3 border-b border-gray-medium text-light hover:text-neon transition-colors" onClick={() => setIsOpen(false)}>VENTURES</Link>
            <Link to="/#skills" className="py-3 border-b border-gray-medium text-light hover:text-neon transition-colors" onClick={() => setIsOpen(false)}>SKILLS</Link>
            <Link to="/#education" className="py-3 border-b border-gray-medium text-light hover:text-neon transition-colors" onClick={() => setIsOpen(false)}>EDUCATION</Link>
            <Link to="/#contact" className="py-3 text-light hover:text-neon transition-colors" onClick={() => setIsOpen(false)}>CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
