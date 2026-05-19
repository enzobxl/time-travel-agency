import React from 'react';
import { Menu, X, Clock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 glass-morphism border-b border-white/5 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Clock className="w-8 h-8 text-primary" />
            <span className="text-xl font-serif tracking-widest gold-text uppercase font-bold">TimeTravel</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#destinations" className="text-gray-300 hover:text-primary transition-colors uppercase text-xs tracking-widest font-medium">Destinations</a>
              <a href="#about" className="text-gray-300 hover:text-primary transition-colors uppercase text-xs tracking-widest font-medium">The Agency</a>
              <a href="#quiz" className="text-gray-300 hover:text-primary transition-colors uppercase text-xs tracking-widest font-medium">Experience Quiz</a>
              <a href="#booking" className="px-6 py-2 bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold rounded-sm">Book Journey</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-morphism animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#destinations" className="block px-3 py-4 text-gray-300 hover:text-primary uppercase text-xs tracking-widest font-medium border-b border-white/5">Destinations</a>
            <a href="#about" className="block px-3 py-4 text-gray-300 hover:text-primary uppercase text-xs tracking-widest font-medium border-b border-white/5">The Agency</a>
            <a href="#quiz" className="block px-3 py-4 text-gray-300 hover:text-primary uppercase text-xs tracking-widest font-medium border-b border-white/5">Experience Quiz</a>
            <a href="#booking" className="block px-3 py-4 text-primary uppercase text-xs tracking-widest font-bold">Book Journey</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
