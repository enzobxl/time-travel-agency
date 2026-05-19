import React from 'react';
import { Shield, MapPin, Star, History } from 'lucide-react';

const AgencyInfo: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Temporal Safety",
      description: "Our proprietary displacement technology ensures zero-risk transit and paradox prevention protocols."
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Curated Eras",
      description: "Hand-selected historical moments, optimized for safety, aesthetic impact, and cultural immersion."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Ultra-Luxury",
      description: "Stay in period-accurate luxury accommodations with modern amenities hidden in plain sight."
    },
    {
      icon: <History className="w-6 h-6 text-primary" />,
      title: "Expert Guidance",
      description: "Historical scholars and temporal security officers accompany every group for a seamless experience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-bg-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4">The Gold Standard</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Redefining exploration <br />
              <span className="italic text-gray-400">across the ages.</span>
            </h3>
            <p className="text-text-dim text-lg mb-8 leading-relaxed">
              Founded in 2085, TimeTravel Agency has pioneered the art of temporal tourism. We don't just send you to the past; we immerse you in it with the sophistication you expect from a world-class luxury service.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20">
                    {feature.icon}
                  </div>
                  <h4 className="font-serif text-lg">{feature.title}</h4>
                  <p className="text-sm text-text-dim leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 glass-morphism p-2">
              <img 
                src="https://images.unsplash.com/photo-1732564385366-dfd9ebd2233e?q=80&w=716&auto=format&fit=crop&q=80&w=1000"
                alt="Time Travel Concept" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
              />
            </div>
            {/* Absolute element for depth */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-[60px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyInfo;
