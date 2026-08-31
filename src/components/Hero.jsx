import React, { useState } from 'react';
import { Gamepad2, ArrowDown, Sparkles, Monitor, Code, ChevronRight, Layers, Play, Cpu, Terminal, Compass } from 'lucide-react';
import logoRembg from '../assets/thrigon_interactives-rembg.png';
import { gamesData } from '../data/studioData';

export default function Hero({ onExploreGames, onAboutClick, onOpenModal }) {
  const [selectedGameIdx, setSelectedGameIdx] = useState(0);
  const activeGame = gamesData[selectedGameIdx] || gamesData[0];

  const scrollToNext = () => {
    const el = document.getElementById('games');
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-[#050508] bg-studio-grid overflow-hidden selection:bg-purple-600 selection:text-white"
    >
      {/* Outer Hero Dynamic Game Background Artwork (Vibrant Clean Art) */}
      {(activeGame.altImage || activeGame.image) && (
        <div
          key={activeGame.id}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-50 pointer-events-none filter brightness-90 saturate-110"
          style={{ backgroundImage: `url(${activeGame.altImage || activeGame.image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/70 to-[#050508]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-transparent to-[#050508] pointer-events-none" />
      {/* Background Lighting Shaders */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Telemetry Bar */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-wrap items-center justify-between text-xs font-mono text-purple-300 gap-4">
        <div className="flex items-center space-x-3 bg-[#0d091e]/90 border border-purple-500/30 px-3.5 py-1.5 rounded-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span className="font-bold tracking-widest text-white font-display">THRIGON INTERACTIVES</span>
          <span className="text-purple-600">|</span>
          <span className="text-purple-400">Indie GAME STUDIO</span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5 text-purple-400" /> PLATFORM: PC</span>
          <span className="text-purple-900">•</span>
          <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-purple-400" /> DUOSPIRE VENTURE</span>
        </div>
      </div>

      {/* Main Split Grid (6 cols / 6 cols) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Studio Brand & Headline (6 cols) */}
        <div className="lg:col-span-6 space-y-6 text-left">

          {/* Studio Emblem & Badge */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0f0b1f] border border-purple-500/40 p-2 flex items-center justify-center shadow-xl shadow-purple-950/50">
              <img src={logoRembg} alt="Thrigon Emblem" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 block">
                THRIGON INTERACTIVES
              </span>
              <span className="text-[11px] font-mono text-gray-400">
                Indie GAME DEVELOPMENT
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-none drop-shadow-xl">
            WE BUILD <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-500 filter drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              WORLDS.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
            An Indie game studio focused on original ideas, interactive storytelling, and worlds worth exploring.
          </p>

          {/* Studio Capabilities Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="bg-purple-950/60 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-md">
              ORIGINAL IP
            </span>
            <span className="bg-purple-950/60 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-md">
              CLIENT GAME DEV
            </span>
            <span className="bg-purple-950/60 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-md">
              BUILT FOR PC
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={onExploreGames}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-purple-950/80 border border-purple-400/40 transition-all duration-300 hover:shadow-purple-600/40 hover:scale-[1.02] flex items-center justify-center space-x-3 group cursor-pointer"
            >
              <Gamepad2 className="w-5 h-5 text-purple-200 group-hover:rotate-12 transition-transform" />
              <span>EXPLORE OUR GAMES</span>
            </button>

            <button
              onClick={onAboutClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#120e26]/80 hover:bg-purple-950/60 text-purple-200 hover:text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm cursor-pointer"
            >
              <span>ABOUT STUDIO</span>
            </button>
          </div>

        </div>

        {/* Right Column: High-Tech Interactive Game Console Showcase (6 cols) */}
        <div className="lg:col-span-6">
          <div className="bg-gradient-to-b from-[#120e26] to-[#080512] border border-purple-500/30 rounded-3xl p-6 shadow-2xl shadow-purple-950/60 relative group">

            {/* Console Header Selector Tabs */}
            <div className="flex items-center justify-between mb-4 border-b border-purple-900/40 pb-3">
              <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                STUDIO REEL // 0{selectedGameIdx + 1}
              </span>
              <span className="bg-purple-600 text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded shadow">
                {activeGame.status}
              </span>
            </div>

            {/* Game Showcase Visual Canvas */}
            <div
              onClick={() => onOpenModal && onOpenModal(activeGame.id)}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 cursor-pointer bg-purple-950 group/canvas"
            >
              {activeGame.image ? (
                <img
                  src={activeGame.image}
                  alt={activeGame.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/canvas:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0c0919] via-[#16102e] to-[#07050e] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-studio-grid opacity-30" />
                  <div className="w-32 h-32 rounded-full border border-purple-500/30 animate-pulse flex items-center justify-center">
                    <Cpu className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080512] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono text-purple-300 block uppercase">
                    {activeGame.typeLabel}
                  </span>
                  <h3 className="font-display font-bold text-2xl uppercase">
                    {activeGame.title}
                  </h3>
                </div>
                <div className="p-2.5 rounded-full bg-purple-600 text-white shadow-lg group-hover/canvas:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              </div>
            </div>

            {/* Game Selector Buttons (5 Projects) */}
            <div className="grid grid-cols-5 gap-1.5">
              {gamesData.map((g, idx) => {
                const isSelected = idx === selectedGameIdx;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGameIdx(idx)}
                    className={`p-2 rounded-xl border text-left transition-all duration-200 cursor-pointer ${isSelected
                      ? 'bg-purple-900/60 border-purple-400 text-white shadow-md'
                      : 'bg-[#0a0715]/70 border-purple-900/30 text-gray-400 hover:text-purple-300 hover:border-purple-600/40'
                      }`}
                  >
                    <span className="text-[9px] font-mono text-purple-400 block">0{idx + 1}</span>
                    <span className="font-display font-semibold text-[11px] truncate block">{g?.title?.split(':')[0] || g?.title}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs font-mono text-gray-500">
        <div className="flex items-center space-x-2 text-purple-400/80">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <span>CURRENTLY BUILDING: SHIFT BOUNDS & STRIDE</span>
        </div>

        <button
          onClick={scrollToNext}
          className="flex items-center space-x-1.5 text-purple-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>ENTER STUDIO</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
}
