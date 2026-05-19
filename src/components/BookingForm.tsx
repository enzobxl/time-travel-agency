import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { destinations } from '../data/destinations';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-bg-dark">
        <div className="max-w-xl mx-auto px-4 text-center glass-morphism p-12 rounded-sm border border-primary/20">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-3xl font-serif mb-4">Transmission Received</h3>
          <p className="text-text-dim mb-8">
            Your inquiry has been successfully sent to our temporal consultants. We will contact you shortly to arrange your screening.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-primary text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white transition-all"
          >
            New Inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4 italic">Secure Passage</h2>
          <h3 className="text-4xl font-serif mb-4">Initiate Your <span className="italic text-gray-400">Journey</span></h3>
          <p className="text-text-dim">Our consultants are available 24/7 across multiple timelines.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 glass-morphism p-8 md:p-12 rounded-sm border border-white/10">
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Full Name</label>
              <input
                required
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Julian Thorne"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Email Address</label>
              <input
                required
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="julian@future.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Selected Destination</label>
              <select
                required
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                value={formData.destination}
                onChange={e => setFormData({...formData, destination: e.target.value})}
              >
                <option value="" className="bg-bg-dark text-white">Select a timeline...</option>
                {destinations.map(d => (
                  <option key={d.id} value={d.id} className="bg-bg-dark text-white">{d.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Preferred Era Date</label>
              <input
                required
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Late Autumn, 1889"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Special Requirements</label>
            <textarea
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="e.g. Dietary restrictions for Renaissance cuisine or bio-hazard sensitivities..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full py-4 bg-primary text-black font-bold uppercase text-xs tracking-[0.3em] rounded-sm hover:bg-white transition-all flex items-center justify-center gap-3 group"
            >
              Request Temporal Transit
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-[10px] text-center text-gray-500 mt-6 uppercase tracking-widest font-medium">
              By clicking, you agree to our Temporal Paradox Indemnity Agreement.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
