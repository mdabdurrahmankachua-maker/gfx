import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem } from '../types';

const experiences: TimelineItem[] = [
  {
    id: 1,
    roleOrDegree: "Senior Graphic Designer",
    organization: "Creative Solutions Agency",
    period: "2023 - Present",
    description: "Leading visual design projects and mentoring junior designers."
  },
  {
    id: 2,
    roleOrDegree: "Content Coordinator",
    organization: "Global Tech Ltd",
    period: "2021 - 2023",
    description: "Managed multilingual content distribution and office administration."
  }
];

const education: TimelineItem[] = [
  {
    id: 1,
    roleOrDegree: "Bachelor of Arts (Ongoing)",
    organization: "National University",
    period: "2021 - Present"
  },
  {
    id: 2,
    roleOrDegree: "Professional Diploma in Graphic Design",
    organization: "Creative IT Institute",
    period: "2022"
  },
  {
    id: 3,
    roleOrDegree: "Advanced Arabic Language Course",
    organization: "Modern Language Center",
    period: "2020"
  }
];

const TimelineCard: React.FC<{ item: TimelineItem; icon: React.FC<any> }> = ({ item, icon: Icon }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 z-10">
        <Icon size={18} className="text-primary" />
      </div>
      <div className="w-0.5 h-full bg-slate-800 -mt-2"></div>
    </div>
    <div className="pb-10">
      <span className="text-sm text-secondary font-medium block mb-1">{item.period}</span>
      <h3 className="text-xl font-bold text-white">{item.roleOrDegree}</h3>
      <p className="text-slate-400 mb-2">{item.organization}</p>
      {item.description && <p className="text-slate-500 text-sm">{item.description}</p>}
    </div>
  </div>
);

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-3xl font-display font-bold text-white">Experience</h2>
            </div>
            <div className="space-y-2">
              {experiences.map(item => <TimelineCard key={item.id} item={item} icon={Briefcase} />)}
              <div className="flex gap-4">
                 <div className="w-10 flex justify-center"><div className="w-3 h-3 bg-slate-800 rounded-full"></div></div>
                 <p className="text-slate-600 italic">More history...</p>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="text-secondary" size={32} />
              <h2 className="text-3xl font-display font-bold text-white">Education</h2>
            </div>
            <div className="space-y-2">
              {education.map(item => <TimelineCard key={item.id} item={item} icon={GraduationCap} />)}
              <div className="flex gap-4">
                 <div className="w-10 flex justify-center"><div className="w-3 h-3 bg-slate-800 rounded-full"></div></div>
                 <p className="text-slate-600 italic">Continuous learning...</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};