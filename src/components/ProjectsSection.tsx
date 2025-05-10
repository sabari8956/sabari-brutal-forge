
import React from 'react';

const projects = [
  {
    id: 1,
    title: "SportsHunt",
    category: "Entrepreneurship",
    description: "A comprehensive digital branding platform for emerging businesses with analytics and marketing tools.",
    year: "2023"
  },
  {
    id: 2,
    title: "Story MeeMaw",
    category: "Entrepreneurship",
    description: "Augmented reality application for visualizing products in real-world environments before purchase.",
    year: "2025"
  },
  {
    id: 3,
    title: "RAG CHATBOT",
    category: "AI",
    description: "Interactive dashboard for visualizing complex financial data and market trends with predictive insights.",
    year: "2025"
  },
  {
    id: 4,
    title: "Outlook Reacher",
    category: "Automation",
    description: "Integrated system for managing home devices with AI-powered optimization and energy-saving features.",
    year: "2025"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="h-[2px] w-16 bg-neon mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">PROJECTS<span className="text-neon">_</span></h2>
          <p className="max-w-xl text-gray-light font-code">Selected works showcasing my approach to design and problem-solving across various domains.</p>
          <div className="loading-bar w-1/3 mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="brutalist-border p-6 transition-colors hover:border-neon group cursor-pointer"
            >
              <div className="mb-4 flex justify-between items-start">
                <span className="font-pixel text-neon">PROJECT_{project.id}</span>
                <span className="text-gray-light">{project.year}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-neon transition-colors">{project.title}</h3>
              <div className="inline-block px-3 py-1 border border-gray-medium text-gray-light mb-4">
                {project.category}
              </div>
              <p className="text-gray-light mb-6">
                {project.description}
              </p>
              <div className="flex items-center group-hover:text-neon transition-colors">
                <span className="mr-2">VIEW DETAILS</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 text-center">
          <a 
            href="#" 
            className="brutalist-border inline-block px-8 py-4 hover:bg-neon hover:text-dark transition-colors"
          >
            VIEW ALL PROJECTS
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
