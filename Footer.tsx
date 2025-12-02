import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Abdur Rahman. All rights reserved.
        </p>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Made with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>and Ambition</span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};