import React from 'react';
import { Clock, Map, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <span className="text-xl font-serif tracking-widest gold-text uppercase font-bold">TimeTravel</span>
            </div>
            <p className="text-text-dim max-w-sm mb-8 leading-relaxed">
              The world's leading luxury temporal agency. Redefining historical exploration with unmatched sophistication and safety since 2085.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 rounded-sm hover:border-primary/50 text-gray-500 hover:text-primary transition-all">
                <Map className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-sm hover:border-primary/50 text-gray-500 hover:text-primary transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-sm hover:border-primary/50 text-gray-500 hover:text-primary transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white font-bold mb-6">Navigations</h4>
            <ul className="space-y-4">
              <li><a href="#destinations" className="text-sm text-text-dim hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#about" className="text-sm text-text-dim hover:text-primary transition-colors">The Agency</a></li>
              <li><a href="#quiz" className="text-sm text-text-dim hover:text-primary transition-colors">Experience Quiz</a></li>
              <li><a href="#booking" className="text-sm text-text-dim hover:text-primary transition-colors">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-text-dim">Headquarters: New Tokyo, 2085</li>
              <li className="text-sm text-text-dim">contact@timetravel.agency</li>
              <li className="text-sm text-text-dim">+1 (800) PAST-NOW</li>
              <li className="flex items-center gap-2 text-sm text-text-dim">
                <Globe className="w-4 h-4" />
                <span>Global Temporal HQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © 2085 TimeTravel Agency. All rights reserved across all timelines.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-white">Temporal Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
