import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-50"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Available for freelance work
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Abdur Rahman
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light">
            Multilingual Content Specialist & <br className="hidden md:block"/> Creative Designer
          </p>
          <p className="text-slate-400 max-w-lg leading-relaxed">
            I craft compelling visual narratives and bridge communication gaps with advanced multilingual skills. Dedicated to delivering excellence in design and office management.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary/25">
              Hire Me <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="px-8 py-4 border border-slate-600 hover:border-white text-white rounded-full font-medium transition-all">
              View Portfolio
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
            {/* Placeholder for Profile Photo */}
            <img 
              src="https://picsum.photos/id/64/800/800" 
              alt="Abdur Rahman" 
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-dark shadow-2xl"
            />
            {/* Floating Badges */}
            <div className="absolute top-4 right-0 glass-card p-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-2xl">🎨</span>
            </div>
            <div className="absolute bottom-10 left-0 glass-card p-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <span className="text-2xl">🗣️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};