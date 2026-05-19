export interface Destination {
  id: string;
  title: string;
  period: string;
  location: string;
  description: string;
  longDescription: string;
  highlights: string[];
  price: string;
  atmosphere: string;
  recommendedProfile: string;
  activities: string[];
  risks: string[];
  imageUrl: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  label: string;
  value: string;
  recommendation: string; // Destination ID
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
