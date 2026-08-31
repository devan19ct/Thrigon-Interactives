import React, { useState } from 'react';
import { Gamepad2, Layers, Sparkles, Monitor, ChevronRight } from 'lucide-react';
import shiftBanner from '../assets/WM_ShiftBound.png';
import shiftArt from '../assets/shift.png';

export default function FeaturedGame({ onOpenModal }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="shift-bounds-showcase" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Label Header */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase bg-purple-950/60 px-3 py-1.5 rounded border border-purple-500/40">
            FEATURED IN-HOUSE GAME REVEAL
          </span>
        </div>

        {/* Game Reveal Main Card Container */}
        <div className="bg-[#0f0b1c] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/50 grid lg:grid-cols-12 gap-0 relative group">

          {/* Visual Showcase (7 cols) */}
          <div
            className="lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onOpenModal('shift-bounds')}
          >
            {/* Base Image */}
            <img
              src={shiftBanner}
              alt="Shift Bounds Official Artwork"
              className={`w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
                }`}
            />
            {/* Alternate Concept Art on Hover */}
            <img
              src={shiftArt}
              alt="Shift Bounds Concept Art"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                }`}
            />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-purple-950/20 mix-blend-overlay" />

            {/* Badge Overlay on Image */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className="bg-purple-900/90 text-purple-200 text-xs font-mono font-bold px-3 py-1 rounded border border-purple-400/30 backdrop-blur-md">
                IN-HOUSE IP
              </span>
              <span className="bg-purple-600/90 text-white text-xs font-mono font-bold px-3 py-1 rounded shadow-lg backdrop-blur-md">
                IN DEVELOPMENT
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-purple-300">
              <span className="flex items-center gap-1.5 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800/40">
                <Monitor className="w-3.5 h-3.5" /> PLATFORM: PC
              </span>
              <span className="text-gray-400">HOVER TO REVEAL ART</span>
            </div>
          </div>

          {/* Project Details (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#120e24] to-[#0a0812]">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>THRIGON INTERACTIVES · IN-HOUSE</span>
              </div>

              <h3 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                SHIFT BOUNDS
              </h3>

              <div className="w-16 h-[2px] bg-purple-500 mb-6" />

              <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mb-6">
                Shift Bounds is an original PC game currently being developed by Thrigon Interactives.
              </p>

              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
                Built directly inside our studio, Shift Bounds represents our passion for distinct world design, tight game mechanics, and dedicated PC player experiences.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>Original Thrigon Intellectual Property</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>Engineered specifically for PC hardware</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>In active production by the core Thrigon team</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={() => onOpenModal('shift-bounds')}
                className="w-full py-4 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-purple-950/60 border border-purple-400/30 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
              >
                <Gamepad2 className="w-4 h-4 text-purple-200" />
                <span>DISCOVER SHIFT BOUNDS</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
