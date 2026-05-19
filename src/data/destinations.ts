import type { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    period: 'Belle Époque',
    location: 'Paris, France',
    description: 'Experience the height of the Belle Époque and the grand opening of the Eiffel Tower.',
    longDescription: 'Step into the golden age of Paris. Witness the Exposition Universelle, walk the bustling boulevards in their original glory, and see the Eiffel Tower as a controversial new addition to the skyline. A world of art, innovation, and unparalleled elegance awaits.',
    highlights: [
      'Grand opening of the Eiffel Tower',
      'Exposition Universelle visit',
      'Gourmet dinner at Le Procope',
      'Artistic tour of Montmartre'
    ],
    price: '€12,500 - €25,000',
    atmosphere: 'Sophisticated, artistic, and vibrant.',
    recommendedProfile: 'Art lovers, history enthusiasts, and romantic couples.',
    activities: [
      'Street photography with vintage cameras',
      'Attending a Cabaret show',
      'Conversations with Belle Époque intellectuals',
      'Historical fashion tailoring'
    ],
    risks: [
      'Minor historical displacement dizziness',
      'Social etiquette complexity',
      'Strict dress code requirements'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cretaceous',
    title: 'Cretaceous Adventure',
    period: 'Late Cretaceous (65M BC)',
    location: 'Western Interior Seaway (North America)',
    description: 'A raw survival adventure in the age of dinosaurs and prehistoric wonders.',
    longDescription: 'Journey to a time before man. Observe the majestic Tyrannosaurus Rex and Triceratops in their natural habitat. This is not just a tour; it is a primal experience in a world governed by the laws of nature. Luxury meets ultimate survival.',
    highlights: [
      'T-Rex observation from safe stealth-pods',
      'Pterosaur flight path viewing',
      'Bioluminescent prehistoric forest tour',
      'Geological formation witnessing'
    ],
    price: '€45,000 - €80,000',
    atmosphere: 'Primal, awe-inspiring, and high-adrenaline.',
    recommendedProfile: 'Adventure seekers, wildlife photographers, and explorers.',
    activities: [
      'Stealth wildlife tracking',
      'Night-time flora observation',
      'Geological sampling',
      'Survival skills workshop'
    ],
    risks: [
      'High predator density',
      'Extreme climatic shifts',
      'Pathogen exposure (managed via bio-suits)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1639524415104-3be5a1702457?q=80&w=687&auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'florence-1504',
    title: 'Renaissance Florence',
    period: 'Italian Renaissance',
    location: 'Florence, Republic of Florence',
    description: 'Witness the birth of modern art and philosophy in the heart of the Renaissance.',
    longDescription: 'Walk the streets of Florence alongside Michelangelo and Leonardo da Vinci. Witness the unveiling of the David, discuss philosophy in the Medici gardens, and experience the cultural explosion that redefined humanity. A journey for the soul and the mind.',
    highlights: [
      'Michelangelo\'s studio private visit',
      'Unveiling of the David',
      'Medici gala attendance',
      'Philosophical symposium in the gardens'
    ],
    price: '€18,000 - €35,000',
    atmosphere: 'Intellectual, aesthetic, and transformative.',
    recommendedProfile: 'Philosophers, art students, and cultural connoisseurs.',
    activities: [
      'Fresco painting workshop',
      'Archival research in the Medici library',
      'Architectural drafting of the Duomo',
      'Culinary Renaissance tasting'
    ],
    risks: [
      'Political intrigue involvement (avoided)',
      'Religious sensitivity awareness',
      'Historical paradox prevention protocols'
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661951753908-81f20d311009?q=80&w=735&auto=format&fit=crop&q=80&w=1000'
  }
];
