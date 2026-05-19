import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">Exquisite Temporal Journeys</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          History is not a book. <br />
          <span className="gold-text italic">It's a destination.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-dim max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Experience the most significant moments of humanity with absolute safety and unparalleled luxury. The past is waiting for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <a href="#destinations" className="group px-8 py-4 bg-primary text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white transition-all duration-300 flex items-center gap-2">
            Explore Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#quiz" className="px-8 py-4 border border-white/10 hover:border-primary/50 text-white font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300">
            Find Your Era
          </a>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};

export default Hero;
