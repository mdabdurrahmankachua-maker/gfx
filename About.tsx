import React from 'react';
import { User, MapPin, Globe, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <img 
                  src="https://picsum.photos/id/91/800/600" 
                  alt="Working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              I am a dedicated and motivated 22-year-old professional with a unique blend of creative and linguistic talents. 
              My passion lies in creating visually stunning designs while ensuring effective communication across cultures through my fluency in Arabic, Bangla, and English.
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              With a background in office management and video editing, I bring a versatile skillset to any team. 
              My mission is to help brands and individuals tell their stories more effectively, whether through pixels or words.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-3 text-slate-300">
                <User className="text-primary" size={20} />
                <span><strong className="text-white">Age:</strong> 22 Years</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-primary" size={20} />
                <span><strong className="text-white">Location:</strong> Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Globe className="text-primary" size={20} />
                <span><strong className="text-white">Languages:</strong> EN, AR, BN</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="text-primary" size={20} />
                <span><strong className="text-white">Experience:</strong> 3+ Years</span>
              </div>
            </div>
            
            <div className="pt-4">
              <blockquote className="border-l-4 border-secondary pl-4 italic text-slate-400">
                "Creativity is the power to connect the seemingly unconnected."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};