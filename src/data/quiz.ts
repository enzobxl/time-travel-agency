import type { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What kind of atmosphere do you seek?",
    options: [
      { label: "Sophisticated Elegance", value: "elegance", recommendation: "paris-1889" },
      { label: "Raw Survival", value: "survival", recommendation: "cretaceous" },
      { label: "Intellectual Enlightenment", value: "intellect", recommendation: "florence-1504" }
    ]
  },
  {
    id: 2,
    question: "Preferred historical environment?",
    options: [
      { label: "Urban Boulevards", value: "urban", recommendation: "paris-1889" },
      { label: "Untouched Nature", value: "nature", recommendation: "cretaceous" },
      { label: "Artistic City-States", value: "art", recommendation: "florence-1504" }
    ]
  },
  {
    id: 3,
    question: "What defines your ideal activity?",
    options: [
      { label: "Socializing & Gastronomy", value: "social", recommendation: "paris-1889" },
      { label: "Wildlife Tracking", value: "wildlife", recommendation: "cretaceous" },
      { label: "Studying Masterpieces", value: "study", recommendation: "florence-1504" }
    ]
  },
  {
    id: 4,
    question: "How do you view risk?",
    options: [
      { label: "A minor social faux pas", value: "low", recommendation: "paris-1889" },
      { label: "A battle for dominance", value: "high", recommendation: "cretaceous" },
      { label: "A philosophical challenge", value: "med", recommendation: "florence-1504" }
    ]
  }
];
