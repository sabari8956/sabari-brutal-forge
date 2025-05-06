
import React from 'react';

const ventures = [
  {
    id: 1,
    title: "TechVision Labs",
    role: "FOUNDER & CEO",
    description: "A technology studio specializing in emerging tech solutions for enterprise clients.",
    year: "2020 - Present"
  },
  {
    id: 2,
    title: "CreativeBlock",
    role: "CO-FOUNDER",
    description: "Digital agency focused on branding, UI/UX design, and creative direction for startups.",
    year: "2018 - 2022"
  },
  {
    id: 3,
    title: "InnovateFund",
    role: "VENTURE PARTNER",
    description: "Early-stage venture fund investing in technology startups across various sectors.",
    year: "2021 - Present"
  }
];

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-32 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="h-[2px] w-16 bg-neon mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">VENTURES<span className="text-neon">_</span></h2>
          <p className="max-w-xl text-gray-light font-code">Entrepreneurial endeavors I've founded, co-founded, or been significantly involved with.</p>
          <div className="loading-bar w-1/4 mt-6"></div>
        </div>
        
        <div className="space-y-8">
          {ventures.map((venture) => (
            <div 
              key={venture.id}
              className="brutalist-border p-6 md:p-8 transition-colors hover:border-neon group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="aspect-square border-2 border-gray-light flex items-center justify-center">
                    <span className="text-neon font-pixel text-4xl">{venture.id}</span>
                  </div>
                </div>
                
                <div className="md:col-span-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-neon transition-colors">
                      {venture.title}
                    </h3>
                    <span className="text-gray-light mt-2 md:mt-0">{venture.year}</span>
                  </div>
                  
                  <div className="inline-block px-3 py-1 border border-gray-medium text-gray-light mb-4">
                    {venture.role}
                  </div>
                  
                  <p className="text-gray-light mb-6">{venture.description}</p>
                  
                  <div className="flex items-center group-hover:text-neon transition-colors">
                    <span className="mr-2">LEARN MORE</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
