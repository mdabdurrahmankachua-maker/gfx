import React from 'react';
import { Palette, Video, Globe, FileText, Megaphone, Monitor } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Graphic Design",
    description: "Creating stunning visuals, logos, and branding materials that leave a lasting impression.",
    icon: "Palette"
  },
  {
    id: 2,
    title: "Video Editing",
    description: "Professional editing for social media, YouTube, and corporate presentations.",
    icon: "Video"
  },
  {
    id: 3,
    title: "Multilingual Content",
    description: "Translation and content creation in Arabic, Bangla, and English with high accuracy.",
    icon: "Globe"
  },
  {
    id: 4,
    title: "Office Support",
    description: "Efficient document management, organization, and administrative support services.",
    icon: "FileText"
  },
  {
    id: 5,
    title: "Social Branding",
    description: "Strategic content planning and visual identity management for social platforms.",
    icon: "Megaphone"
  },
  {
    id: 6,
    title: "Digital Media",
    description: "Comprehensive digital asset management and creative media solutions.",
    icon: "Monitor"
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Palette, Video, Globe, FileText, Megaphone, Monitor
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-lighter/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">What I Do</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div key={service.id} className="glass-card p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 group border-t-2 border-transparent hover:border-primary">
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};