import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import type { ChatMessage } from '../types';
import { cn } from '../utils/cn';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Greetings. I am Chronos, your temporal concierge. How may I assist you in selecting your next journey through time today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('price') || q.includes('cost') || q.includes('how much')) {
      return "Our journeys range from €12,500 for the Belle Époque experience to €80,000 for the Cretaceous expedition. Each package includes full insurance, luxury transit, and temporal stabilization.";
    }
    if (q.includes('paris') || q.includes('1889')) {
      return "Paris 1889 is a client favorite. It offers an exquisite blend of art and innovation. You can witness the grand opening of the Eiffel Tower and dine with the era's greatest minds.";
    }
    if (q.includes('dinosaur') || q.includes('cretaceous') || q.includes('past')) {
      return "The Cretaceous Period is our most extreme destination. It is a raw survival adventure where you can observe dinosaurs in their natural habitat from the safety of our stealth-pods.";
    }
    if (q.includes('florence') || q.includes('renaissance') || q.includes('1504')) {
      return "Florence in 1504 is the pinnacle of intellectual travel. You will walk among Michelangelo and Da Vinci as they create the masterpieces that defined humanity.";
    }
    if (q.includes('safety') || q.includes('safe') || q.includes('danger')) {
      return "Safety is our absolute priority. Our proprietary stabilization fields prevent any physical harm or temporal paradoxes. You are in expert hands.";
    }
    if (q.includes('book') || q.includes('reservation')) {
      return "You can initiate your booking directly on this page using the 'Book Journey' form. A temporal consultant will then contact you for a private screening.";
    }
    
    return "That is an intriguing inquiry. As your temporal concierge, I recommend exploring our curated destinations or taking our experience quiz to find the era that best resonates with your soul.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <MessageSquare className="w-8 h-8" />
        </button>
      ) : (
        <div className="w-80 sm:w-96 h-[500px] glass-morphism rounded-sm border border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-primary/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary">Chronos</div>
                <div className="text-[10px] text-gray-400">Temporal Concierge</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", msg.role === 'user' ? "bg-white/10" : "bg-primary/20")}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-primary" />}
                </div>
                <div className={cn("max-w-[80%] p-3 rounded-sm text-sm leading-relaxed", msg.role === 'user' ? "bg-white/5 border border-white/10 text-white" : "bg-primary/5 border border-primary/20 text-gray-200")}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-primary/5 border border-primary/20 p-3 rounded-sm">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your next journey..."
                className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors p-1"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
