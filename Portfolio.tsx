import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Islamic Typography Art",
    category: "Graphic Design",
    image: "https://picsum.photos/id/102/600/400",
    description: "Intricate Arabic calligraphy combined with modern minimalist design principles.",
    tools: ["Illustrator", "Photoshop"]
  },
  {
    id: 2,
    title: "Corporate Brand Identity",
    category: "Branding",
    image: "https://picsum.photos/id/445/600/400",
    description: "Complete visual identity package including logo, stationery, and brand guidelines.",
    tools: ["Figma", "Illustrator"]
  },
  {
    id: 3,
    title: "Travel Vlog Editing",
    category: "Video Editing",
    image: "https://picsum.photos/id/164/600/400",
    description: "High-energy travel vlog edit with color grading and motion graphics.",
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    id: 4,
    title: "Multilingual Brochure",
    category: "Translation & Design",
    image: "https://picsum.photos/id/366/600/400",
    description: "A trilingual marketing brochure designed for an international NGO.",
    tools: ["InDesign", "Translation"]
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Content Creation",
    image: "https://picsum.photos/id/250/600/400",
    description: "Series of engaging social media posts for a tech startup launch.",
    tools: ["Canva", "Photoshop"]
  },
  {
    id: 6,
    title: "Documentary Short",
    category: "Video Editing",
    image: "https://picsum.photos/id/435/600/400",
    description: "Narrative-driven short documentary focusing on local craftsmanship.",
    tools: ["Premiere Pro", "DaVinci Resolve"]
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Selected Works</h2>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
            <p className="text-slate-400">A glimpse into my creative journey.</p>
          </div>
          <button className="text-primary font-medium hover:text-white transition-colors">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-slate-800 shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-white/10 text-white px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button className="bg-primary p-2 rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};