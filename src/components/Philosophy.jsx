import React from 'react';
import { studioPrinciples } from '../data/studioData';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3 py-1 rounded border border-purple-800/30">
            OUR MANIFESTO
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-4">
            STUDIO <span className="text-purple-500">PHILOSOPHY</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Three guiding principles behind every project we undertake at Thrigon.
          </p>
        </div>

        {/* Principles Grid with Connection Line */}
        <div className="relative grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Desktop Animated Violet Connecting Line behind cards */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-900/10 via-purple-500/50 to-purple-900/10 -translate-y-1/2 z-0" />

          {studioPrinciples.map((principle, index) => (
            <div
              key={principle.number}
              className="relative z-10 bg-[#0e0b1c]/80 border border-purple-500/20 hover:border-purple-400/60 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 group shadow-xl shadow-purple-950/30 flex flex-col justify-between"
            >
              {/* Corner Tech Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-xl">
                <div className="w-16 h-16 bg-purple-600/10 rotate-45 transform translate-x-8 -translate-y-8 group-hover:bg-purple-600/30 transition-colors" />
              </div>

              <div>
                {/* Principle Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono font-black text-4xl sm:text-5xl text-purple-500/80 group-hover:text-purple-300 transition-colors">
                    {principle.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-purple-400/60 uppercase bg-purple-950/60 px-2 py-1 rounded border border-purple-800/30">
                    {principle.subtitle}
                  </span>
                </div>

                {/* Principle Title */}
                <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-wider group-hover:text-purple-300 transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Bottom Card Marker */}
              <div className="mt-8 pt-4 border-t border-purple-900/30 flex items-center justify-between text-[11px] font-mono text-purple-500/70">
                <span>PHASE // {principle.number}</span>
                <div className="w-2 h-2 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
