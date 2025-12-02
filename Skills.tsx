import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Arabic Language', level: 95, category: 'Language' },
  { name: 'Bangla Language', level: 100, category: 'Language' },
  { name: 'English Language', level: 85, category: 'Language' },
  { name: 'Graphic Design', level: 90, category: 'Technical' },
  { name: 'Video Editing', level: 80, category: 'Technical' },
  { name: 'Office Management', level: 85, category: 'Soft' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">My Skills</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and linguistic proficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-end">
                <h3 className="text-white font-medium text-lg">{skill.name}</h3>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};