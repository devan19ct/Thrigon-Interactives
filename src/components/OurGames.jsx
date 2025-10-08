import React from 'react';

import moksh from '../assets/hero-bg.jpg'; 
import YekshiNights from '../assets/hero-bg.jpg';
import BicycleLife from '../assets/hero-bg.jpg';

// Data structure for the game cards
const gamesData = [
  {
    title: "Moksh: The Last Hope",
    description: "Survive as a lab intern in a zombie-infested land inspired by India, battling hordes, crafting weapons, and racing to save humanity.",
    image: moksh,
    status: "In Development",
    tags: ["Adventure", "Exploration", "Story-Rich", "Survival"],
    statusColor: "bg-purple-600", 
  },
  {
    title: "Yekshi Nights",
    description: "Unravel the dark secrets of a haunted Kerala-inspired tharavadu as a modern priest, confronting ancient rituals, restless spirits, and a vengeful Yakshi bound by a tragic past.",
    image: YekshiNights,
    status: "Coming Soon",
    tags: ["Puzzle", "Horror", "Open-World RPG"],
    statusColor: "bg-pink-600", 
  },
  {
    title: "Bicycle Life: Oru Cycle Kadha",
    description: "Race through misty 90s mornings and lively streets as a witty paperboy in this nostalgic, fast-paced cycling adventure.",
    image: BicycleLife,
    status: "Concept",
    tags: ["Open-World", "Casual", "Arcade", "Slice of Life"],
    statusColor: "bg-red-600", 
  },
];

// Helper component for the individual game card

const GameCard = ({ game }) => (
  <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
    {/* Image Container */}
    <div className="relative h-64">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover"
      />
      {/* Status Badge */}
      <span className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full ${game.statusColor}`}>
        {game.status}
      </span>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-white">
        {game.title}
      </h3>
      <p className="text-gray-400 mb-4 h-12 overflow-hidden">
        {game.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {game.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs font-medium text-purple-500 bg-gray-700/50 px-3 py-1 rounded-full border border-purple-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);


export default function OurGames() {
  return (
    <section className="py-20 bg-gray-950 text-white px-4">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Header */}
        <h2 className="text-5xl font-extrabold mb-4">
          Our <span className="text-purple-500">Games</span>
        </h2>
        <p className="text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
          Explore our collection of immersive gaming experiences, each crafted
          with care and attention to detail.
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gamesData.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}