
import React from 'react';

const technicalSkills = [
  { name: "UI/UX Design", level: 90 },
  { name: "Web Development", level: 85 },
  { name: "Mobile Development", level: 75 },
  { name: "Data Visualization", level: 80 },
  { name: "AR/VR Development", level: 65 },
];

const businessSkills = [
  { name: "Strategic Planning", level: 85 },
  { name: "Business Development", level: 90 },
  { name: "Project Management", level: 80 },
  { name: "Marketing", level: 75 },
  { name: "Financial Analysis", level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="h-[2px] w-16 bg-neon mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">SKILLS<span className="text-neon">_</span></h2>
          <p className="max-w-xl text-gray-light font-code">Technical and business capabilities developed through projects and ventures.</p>
          <div className="loading-bar w-1/5 mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-neon font-pixel mr-3">&gt;</span> TECHNICAL SKILLS
            </h3>
            
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-code">{skill.name}</span>
                    <span className="font-pixel text-neon">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-gray-dark relative">
                    <div 
                      className="h-full bg-neon absolute top-0 left-0" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-neon font-pixel mr-3">&gt;</span> BUSINESS SKILLS
            </h3>
            
            <div className="space-y-8">
              {businessSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-code">{skill.name}</span>
                    <span className="font-pixel text-neon">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-gray-dark relative">
                    <div 
                      className="h-full bg-neon absolute top-0 left-0" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-neon font-pixel mr-3">&gt;</span> TOOLS & TECHNOLOGIES
          </h3>
          
          <div className="brutalist-border p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {["React", "Node.js", "Python", "Figma", "Adobe XD", "TensorFlow", "AWS", "Docker", "GraphQL", "MongoDB", "Git", "Jira"].map((tool, index) => (
                <div 
                  key={index}
                  className="border border-gray-medium p-4 flex items-center justify-center text-center hover:border-neon hover:text-neon transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
