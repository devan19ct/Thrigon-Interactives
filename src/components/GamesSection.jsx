import React, { useState } from 'react';
import { Gamepad2, Sparkles, ChevronRight, Monitor, Layers, Eye, ShieldAlert, Cpu } from 'lucide-react';
import { gamesData } from '../data/studioData';

export default function GamesSection({ onOpenModal }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAltArt, setShowAltArt] = useState(false);

  const activeGame = gamesData[selectedIndex] || gamesData[0];

  return (
    <section id="games" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      {/* Background Lighting Shaders */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-purple-950/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/60 px-3.5 py-1.5 rounded border border-purple-800/40">
            IN-HOUSE INTELLECTUAL PROPERTY
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight mt-4">
            OUR <span className="text-purple-500">GAMES</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Select a world to explore our active in-house PC game titles and conceptual designs.
          </p>
        </div>

        {/* Interactive Studio Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {gamesData.map((game, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={game.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setShowAltArt(false);
                }}
                className={`px-4 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-3 shrink-0 cursor-pointer border ${
                  isSelected
                    ? 'bg-purple-900/60 text-white border-purple-500 shadow-lg shadow-purple-950/80 scale-[1.02]'
                    : 'bg-[#0f0b1c]/80 text-gray-400 border-purple-900/40 hover:text-purple-300 hover:border-purple-600/40'
                }`}
              >
                <span className={`text-[10px] ${isSelected ? 'text-purple-300' : 'text-purple-500/70'}`}>
                  0{idx + 1}
                </span>
                <span className="font-display font-semibold">{game.title.split(':')[0]}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-purple-400 animate-pulse' : 'bg-purple-950'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Main Stage Active Game Showcase Display */}
        <div className="bg-gradient-to-br from-[#0e0b1c] via-[#140e28] to-[#080512] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/60 grid lg:grid-cols-12 gap-0 mb-16 relative">
          
          {/* Left: Cinematic Game Art Stage (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-purple-950/40 overflow-hidden flex flex-col justify-between p-6">
            
            {/* Display Active Image */}
            <img
              src={showAltArt && activeGame.altImage ? activeGame.altImage : activeGame.image}
              alt={activeGame.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />

            {/* Dark Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1c] via-transparent to-black/40 pointer-events-none" />

            {/* Top Badge Row */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-purple-950/90 text-purple-200 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 backdrop-blur-md">
                {activeGame.typeLabel}
              </span>

              <span
                className={`text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-md ${
                  activeGame.status === 'IN DEVELOPMENT'
                    ? 'bg-purple-600'
                    : activeGame.status === 'COMING SOON'
                    ? 'bg-indigo-600'
                    : 'bg-pink-600'
                }`}
              >
                {activeGame.status}
              </span>
            </div>

            {/* Bottom Controls on Visual Stage */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-300">
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-purple-500/30 backdrop-blur-md">
                <Monitor className="w-3.5 h-3.5 text-purple-400" /> PLATFORM: PC
              </span>

              {activeGame.altImage && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAltArt(!showAltArt);
                  }}
                  className="flex items-center gap-2 bg-purple-950/80 hover:bg-purple-900 text-purple-200 px-3 py-1.5 rounded-lg border border-purple-500/40 transition-colors backdrop-blur-md cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>{showAltArt ? 'SHOW KEY ART' : 'SHOW ENVIRONMENT'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right: Detailed Content Showcase (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#120d26] to-[#090614]">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span>WORLD STAGE // 0{selectedIndex + 1}</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                {activeGame.title}
              </h3>

              <div className="w-16 h-[2px] bg-purple-500 mb-6" />

              <p className="text-gray-200 font-sans text-base sm:text-lg leading-relaxed mb-6">
                {activeGame.description}
              </p>

              {/* Tags */}
              {activeGame.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeGame.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-purple-900/30">
              <button
                onClick={() => onOpenModal(activeGame.id)}
                className="w-full py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-purple-950/80 border border-purple-400/40 transition-all duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>EXPLORE {activeGame.title.split(':')[0]} BRIEF</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Projects Quick-Access Reel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {gamesData.map((game, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <div
                key={game.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setShowAltArt(false);
                }}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-[#150f2b] border-purple-400 shadow-xl shadow-purple-950/60 -translate-y-1'
                    : 'bg-[#0b0816] border-purple-900/30 hover:border-purple-500/50 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="relative h-32 rounded-xl overflow-hidden mb-3 bg-purple-950">
                    {game.image ? (
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0c0919] via-[#16102e] to-[#07050e] flex items-center justify-center">
                        <Cpu className="w-8 h-8 text-purple-400/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0816] via-transparent to-transparent opacity-80" />

                    <span
                      className={`absolute top-2 right-2 text-[9px] font-mono font-bold px-2 py-0.5 rounded text-white ${
                        game.isClient
                          ? 'bg-indigo-900 border border-indigo-500/40'
                          : game.status === 'IN DEVELOPMENT'
                          ? 'bg-purple-600'
                          : game.status === 'COMING SOON'
                          ? 'bg-indigo-600'
                          : 'bg-pink-600'
                      }`}
                    >
                      {game.isClient ? 'CLIENT' : game.status}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-purple-400 block mb-1">
                    0{idx + 1} // {game.isClient ? 'CLIENT' : 'IN-HOUSE'}
                  </span>
                  <h4 className="font-display font-bold text-base text-white uppercase line-clamp-1 mb-1 group-hover:text-purple-300 transition-colors">
                    {game.title.split(':')[0]}
                  </h4>
                  <p className="text-gray-400 text-[11px] line-clamp-2 leading-tight mb-3">
                    {game.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-[11px] font-mono text-purple-400">
                  <span>{isSelected ? 'ACTIVE' : 'SELECT'}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
