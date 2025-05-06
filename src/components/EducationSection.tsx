
import React from 'react';

const educationItems = [
  {
    degree: "Master of Business Administration",
    institution: "XYZ Business School",
    year: "2016 - 2018",
    description: "Specialized in Entrepreneurship and Innovation Management"
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "ABC Institute of Technology",
    year: "2012 - 2016",
    description: "Focus on Human-Computer Interaction and Software Development"
  }
];

const certifications = [
  {
    name: "Advanced UX Research & Design",
    issuer: "Design Institute",
    year: "2020"
  },
  {
    name: "Data Science for Business",
    issuer: "Tech Academy",
    year: "2019"
  },
  {
    name: "Product Management Certification",
    issuer: "Product School",
    year: "2021"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-32 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="h-[2px] w-16 bg-neon mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">EDUCATION<span className="text-neon">_</span></h2>
          <p className="max-w-xl text-gray-light font-code">Academic background and professional development.</p>
          <div className="loading-bar w-2/5 mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-neon font-pixel mr-3">&gt;</span> FORMAL EDUCATION
            </h3>
            
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div key={index} className="relative pl-8 brutalist-border p-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neon"></div>
                  <div className="absolute top-6 -left-2 w-4 h-4 bg-dark border-2 border-neon"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{item.degree}</h4>
                    <span className="text-neon font-pixel">{item.year}</span>
                  </div>
                  
                  <div className="mb-4 text-gray-light">{item.institution}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-neon font-pixel mr-3">&gt;</span> CERTIFICATIONS
            </h3>
            
            <div className="brutalist-border p-6">
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="pb-6 border-b border-gray-dark last:border-0">
                    <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-light">{cert.issuer}</span>
                      <span className="text-neon">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="text-neon font-pixel mr-3">&gt;</span> LANGUAGES
              </h3>
              
              <div className="brutalist-border p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>English</span>
                      <span className="font-pixel text-neon">Fluent</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-dark relative">
                      <div className="h-full bg-neon absolute top-0 left-0 w-[95%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Hindi</span>
                      <span className="font-pixel text-neon">Native</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-dark relative">
                      <div className="h-full bg-neon absolute top-0 left-0 w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Tamil</span>
                      <span className="font-pixel text-neon">Native</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-dark relative">
                      <div className="h-full bg-neon absolute top-0 left-0 w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>French</span>
                      <span className="font-pixel text-neon">Basic</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-dark relative">
                      <div className="h-full bg-neon absolute top-0 left-0 w-[40%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
