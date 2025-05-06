
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="h-[2px] w-16 bg-neon mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">ABOUT<span className="text-neon">_</span>ME</h2>
              <div className="loading-bar w-1/2 mb-12"></div>
            </div>
            
            <div className="brutalist-border p-4 md:p-8 relative mt-8 md:mt-0">
              <span className="absolute -top-3 bg-dark px-4 font-pixel text-neon">PROFILE</span>
              <div className="space-y-4 font-code">
                <div className="flex flex-wrap">
                  <span className="w-24 text-gray-light">NAME:</span>
                  <span className="flex-1">Sabari K</span>
                </div>
                <div className="flex flex-wrap">
                  <span className="w-24 text-gray-light">BASED:</span>
                  <span className="flex-1">India</span>
                </div>
                <div className="flex flex-wrap">
                  <span className="w-24 text-gray-light">ROLE:</span>
                  <span className="flex-1">Creative Professional</span>
                </div>
                <div className="flex flex-wrap">
                  <span className="w-24 text-gray-light">FOCUS:</span>
                  <span className="flex-1">Entrepreneurship & Innovation</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="brutalist-border p-6 md:p-10 h-full flex flex-col">
              <span className="text-neon font-pixel mb-4">&gt; INTRODUCTION.exe</span>
              <div className="space-y-6 text-lg">
                <p>
                  I'm a <span className="text-neon">creative professional</span> with a passion for building innovative solutions and ventures. My work spans across multiple disciplines, combining technical expertise with entrepreneurial vision.
                </p>
                <p>
                  With a background in <span className="text-neon">design and development</span>, I approach problems from multiple angles, creating solutions that are both functional and forward-thinking.
                </p>
                <p>
                  My goal is to <span className="text-neon">build meaningful projects</span> that make a difference, whether through technology, business, or creative endeavors.
                </p>
              </div>
              <div className="mt-auto pt-8">
                <div className="h-[1px] dotted-line mb-4"></div>
                <div className="flex flex-wrap gap-4 font-pixel">
                  <span className="text-gray-light">TAGS:</span>
                  <span className="text-neon">#creative</span>
                  <span className="text-neon">#entrepreneur</span>
                  <span className="text-neon">#innovator</span>
                  <span className="text-neon">#problemsolver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
