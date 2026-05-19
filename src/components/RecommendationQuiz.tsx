import React, { useState } from 'react';
import { quizQuestions } from '../data/quiz';
import { destinations } from '../data/destinations';
import type { Destination } from '../types';
import { CheckCircle, RefreshCw, Sparkles, MapPin } from 'lucide-react';

const RecommendationQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Destination | null>(null);

  const handleAnswer = (recommendation: string) => {
    const newAnswers = [...answers, recommendation];
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts: Record<string, number> = {};
    finalAnswers.forEach(id => {
      counts[id] = (counts[id] || 0) + 1;
    });

    const recommendedId = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    const recommendedDest = destinations.find(d => d.id === recommendedId) || destinations[0];
    setResult(recommendedDest);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-24 bg-bg-card/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        {!result ? (
          <div className="text-center">
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4">Personalized Matching</h2>
            <h3 className="text-4xl font-serif mb-12">Find Your <span className="italic text-gray-400">Perfect Era</span></h3>
            
            <div className="relative glass-morphism p-8 md:p-12 rounded-sm border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              <div className="mb-8">
                <span className="text-xs text-primary font-bold uppercase tracking-widest mb-2 block">Question {currentStep + 1} of {quizQuestions.length}</span>
                <h4 className="text-2xl font-serif">{quizQuestions[currentStep].question}</h4>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {quizQuestions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.recommendation)}
                    className="w-full p-4 text-left border border-white/10 rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group flex items-center justify-between"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">{option.label}</span>
                    <Sparkles className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center animate-in fade-in zoom-in-95 duration-700">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-4xl font-serif mb-2 uppercase tracking-tight">Your Destiny is Ready</h3>
            <p className="text-text-dim mb-12">Based on your preferences, we recommend:</p>

            <div className="glass-morphism rounded-sm overflow-hidden border border-white/10 flex flex-col md:flex-row mb-12">
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto">
                <img src={result.imageUrl} alt={result.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-8 text-left flex flex-col justify-center">
                <div className="text-xs tracking-widest text-primary font-bold uppercase mb-2">{result.period}</div>
                <h4 className="text-3xl font-serif mb-4">{result.title}</h4>
                <p className="text-sm text-text-dim mb-8 leading-relaxed">
                  {result.description} This period perfectly aligns with your desire for {answers[0].replace('-', ' ')} and your interest in {answers[1]}.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#booking" className="px-6 py-3 bg-primary text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white transition-all flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Set Coordinates
                  </a>
                  <button onClick={resetQuiz} className="px-6 py-3 border border-white/10 hover:border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-sm transition-all flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Restart Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendationQuiz;
