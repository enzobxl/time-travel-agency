import React, { useState } from 'react';
import { X, Info, ShieldCheck, Ticket } from 'lucide-react';
import { destinations } from '../data/destinations';
import type { Destination } from '../types';

const DestinationModal: React.FC<{ destination: Destination; onClose: () => void }> = ({ destination, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-morphism rounded-sm border border-white/10 flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
          <img 
            src={destination.imageUrl} 
            alt={destination.title} 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 space-y-8">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary font-bold mb-2">{destination.period}</div>
            <h2 className="text-4xl font-serif mb-4">{destination.title}</h2>
            <p className="text-text-dim leading-relaxed">{destination.longDescription}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Atmosphere</h4>
              <p className="text-sm text-gray-300">{destination.atmosphere}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Ideal For</h4>
              <p className="text-sm text-gray-300">{destination.recommendedProfile}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Highlights</h4>
            <ul className="grid grid-cols-1 gap-2">
              {destination.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Fictional Package</div>
              <div className="text-2xl font-serif gold-text">{destination.price}</div>
            </div>
            <a href="#booking" onClick={onClose} className="px-6 py-3 bg-primary text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white transition-all flex items-center gap-2">
              <Ticket className="w-4 h-4" />
              Secure Passage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DestinationCard: React.FC<{ destination: Destination; onSelect: (d: Destination) => void }> = ({ destination, onSelect }) => {
  return (
    <div 
      className="group relative h-[500px] overflow-hidden rounded-sm border border-white/10 cursor-pointer"
      onClick={() => onSelect(destination)}
    >
      <div className="absolute inset-0">
        <img 
          src={destination.imageUrl} 
          alt={destination.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-xs tracking-[0.3em] uppercase text-primary font-bold mb-2 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {destination.period}
        </div>
        <h3 className="text-3xl font-serif mb-3 leading-tight">{destination.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2 mb-6 group-hover:line-clamp-none transition-all duration-500">
          {destination.description}
        </p>
        
        <div className="flex items-center gap-4 pt-4 border-t border-white/20 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary">
            <Info className="w-4 h-4" />
            Discover Details
          </button>
          <div className="h-4 w-px bg-white/20"></div>
          <span className="text-xs font-serif text-gray-400 italic">From {destination.price.split('-')[0]}</span>
        </div>
      </div>
    </div>
  );
};

const DestinationGallery: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-24 px-4 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4 italic">Exclusive Catalog</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">
              Select your era of <br />
              <span className="italic text-gray-400">absolute immersion.</span>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-text-dim text-sm italic">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>All travel fully insured for temporal stability.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard 
              key={dest.id} 
              destination={dest} 
              onSelect={setSelectedDestination} 
            />
          ))}
        </div>
      </div>

      {selectedDestination && (
        <DestinationModal 
          destination={selectedDestination} 
          onClose={() => setSelectedDestination(null)} 
        />
      )}
    </section>
  );
};

export default DestinationGallery;
