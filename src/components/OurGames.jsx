import React from 'react';

import moksh from '../assets/mokshlogo.png'; 
import YekshiNights from '../assets/Yekshi.png';
import BicycleLife from '../assets/bycle.png';
import BicycleLifeHover from '../assets/BycleHover.png';
import mokshHover from '../assets/mokshenv.png';
import YekshiHover from '../assets/Yekshihover.png'; 

// Data structure for the game cards
const gamesData = [
  {
    title: "Moksh: The Last Hope",
    description: "Survive as a lab intern in a zombie-infested land inspired by India...",
    image: moksh,
    hoverImage: mokshHover,
    status: "In Development",
    tags: ["Adventure", "Exploration", "Story-Rich", "Survival"],
    statusColor: "bg-purple-600", 
  },
  {
    title: "Yakshi Nights",
    description: "Unravel the dark secrets of a haunted Kerala-inspired tharavadu as a modern priest...",
    image: YekshiNights,
    hoverImage: YekshiHover,
    status: "Coming Soon",
    tags: ["Puzzle", "Horror", "Open-World RPG"],
    statusColor: "bg-pink-600", 
  },
  {
    title: "Bicycle Life: Oru Cycle Kadha",
    description: "Race through misty 90s mornings and lively streets as a witty paperboy...",
    image: BicycleLife,
    hoverImage: BicycleLifeHover,
    status: "Concept",
    tags: ["Open-World", "Casual", "Arcade", "Slice of Life"],
    statusColor: "bg-red-600", 
  },
];

// Helper component for the individual game card

const GameCard = ({ game }) => (
  <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-300">

    {/* Image Container */}
    <div className="relative h-64 group">

      {/* Default Image */}
      <img
        src={game.image}
        alt={game.title}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          game.hoverImage ? "group-hover:opacity-0" : ""
        }`}
      />

      {/* Hover Image (only if available) */}
      {game.hoverImage && (
        <img
          src={game.hoverImage}
          alt={`${game.title} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}

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