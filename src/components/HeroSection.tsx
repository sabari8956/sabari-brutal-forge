
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    textElement.setAttribute('data-text', textElement.textContent || '');
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="mb-8">
          <div className="h-[2px] w-16 bg-neon mb-4"></div>
          <h4 className="text-xl md:text-2xl font-pixel">the solution to all  problems</h4>
        </div>
        
        <h1 
          ref={textRef}
          className="glitched-text text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          SABARI K<span className="text-neon">.</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-lg font-code mb-8 text-gray-light">
          <span className="text-neon">$</span> creative professional_<br/>
          <span className="text-neon">&gt;</span> entrepreneur_<br/>
          <span className="text-neon">&gt;</span> problem_solver
        </p>
        
        <div className="flex space-x-6">
          <a 
            href="#about" 
            className="brutalist-border px-6 py-3 text-light hover:bg-light hover:text-dark transition-colors"
          >
            EXPLORE
          </a>
          <a 
            href="#contact" 
            className="brutalist-border px-6 py-3 bg-neon text-dark hover:bg-light hover:text-dark transition-colors"
          >
            CONTACT ME
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="h-[1px] flex-grow dotted-line"></div>
            <div className="px-4 text-gray-light">SCROLL</div>
            <div className="h-[1px] flex-grow dotted-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
