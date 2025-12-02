import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark-lighter/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Get In Touch</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
              <p className="text-slate-400 text-lg">
                Have a project in mind or want to discuss a collaboration? <br />
                I am always open to new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Me</h4>
                  <a href="mailto:hello@abdurrahman.com" className="text-slate-400 hover:text-white transition-colors">hello@abdurrahman.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Call Me</h4>
                  <a href="tel:+880123456789" className="text-slate-400 hover:text-white transition-colors">+880 123 456 789</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-pink-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Location</h4>
                  <p className="text-slate-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="glass-card p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Your Name</label>
                <input type="text" className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Your Email</label>
                <input type="email" className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Subject</label>
              <input type="text" className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Project Discussion" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Message</label>
              <textarea rows={5} className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex justify-center items-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};