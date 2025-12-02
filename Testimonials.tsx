import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    content: "Abdur's ability to seamlessly translate our brand message into Arabic and Bangla while maintaining the visual integrity was impressive. Highly recommended!",
    image: "https://picsum.photos/id/65/100/100"
  },
  {
    id: 2,
    name: "Mohammad Al-Fayed",
    role: "Business Owner",
    content: "Excellent graphic design skills. He understood the assignment immediately and delivered high-quality work ahead of schedule.",
    image: "https://picsum.photos/id/55/100/100"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Project Manager",
    content: "Reliable, creative, and professional. Abdur managed our office documentation workflow efficiently.",
    image: "https://picsum.photos/id/338/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-slate-400">What others say about working with me.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="glass-card p-8 rounded-2xl relative border border-white/5">
              <Quote className="absolute top-6 right-6 text-slate-700 opacity-50" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border-2 border-primary object-cover" />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <span className="text-xs text-secondary uppercase tracking-wider">{item.role}</span>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">"{item.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};