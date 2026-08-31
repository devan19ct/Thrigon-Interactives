import React from 'react';
import { Briefcase, ShieldCheck, ChevronRight, Monitor, Cpu } from 'lucide-react';

export default function ClientProject({ onOpenModal }) {
  return (
    <section id="stride-showcase" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      {/* Subtle Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-300 uppercase bg-indigo-950/60 px-3 py-1.5 rounded border border-indigo-500/40">
            SELECTED CLIENT WORK SHOWCASE
          </span>
        </div>

        {/* Project Card Grid Container */}
        <div className="bg-[#0b0914] border border-indigo-500/20 hover:border-purple-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/30 grid lg:grid-cols-12 gap-0 transition-all duration-300">
          
          {/* Abstract Studio Teaser Visual (7 cols) */}
          <div
            onClick={() => onOpenModal('stride')}
            className="lg:col-span-7 relative min-h-[350px] sm:min-h-[420px] bg-gradient-to-br from-[#0c0919] via-[#150f2c] to-[#07050e] p-8 sm:p-12 flex flex-col justify-between overflow-hidden cursor-pointer group"
          >
            {/* Geometric Technical Grid Overlay */}
            <div className="absolute inset-0 bg-studio-grid opacity-40" />

            {/* Glowing Abstract Geometry Shader simulation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-purple-500/20 group-hover:scale-125 transition-transform duration-700 pointer-events-none">
              <div className="absolute inset-4 rounded-full border border-indigo-500/30 group-hover:rotate-45 transition-transform duration-1000" />
              <div className="absolute inset-12 rounded-full bg-purple-600/10 blur-xl group-hover:bg-purple-500/20 transition-colors" />
            </div>

            {/* Badges */}
            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="bg-indigo-950/90 text-indigo-300 text-xs font-mono font-bold px-3 py-1 rounded border border-indigo-500/30 backdrop-blur-md flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> CLIENT PROJECT
              </span>
              <span className="bg-purple-900/80 text-purple-200 text-xs font-mono font-bold px-3 py-1 rounded shadow-md">
                IN DEVELOPMENT
              </span>
            </div>

            {/* Center Abstract Monogram */}
            <div className="relative z-10 my-auto text-center py-8">
              <div className="inline-block p-6 rounded-2xl bg-[#140e28]/80 border border-purple-500/30 shadow-2xl backdrop-blur-md group-hover:border-purple-400/60 transition-colors">
                <Cpu className="w-16 h-16 text-purple-400 animate-pulse" />
              </div>
              <p className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
                PROJECT CODE: STRIDE
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-purple-300">
                <Monitor className="w-3.5 h-3.5" /> PC GAME DEVELOPMENT
              </span>
              <span className="text-gray-500">CONFIDENTIAL PRODUCTION PIPELINE</span>
            </div>
          </div>

          {/* Project Copy (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#0f0b1e] to-[#07050a]">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>THRIGON INTERACTIVES · CLIENT PROJECT</span>
              </div>

              <h3 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                STRIDE
              </h3>

              <div className="w-16 h-[2px] bg-indigo-500 mb-6" />

              <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mb-6">
                A game development project currently being developed by Thrigon Interactives for a client.
              </p>

              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
                In addition to our internal intellectual property, Thrigon accepts selected client projects where our engineering expertise and interactive design standards deliver real value.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  <span>Full-cycle client game development</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  <span>Interactive gameplay and engine implementation</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  <span>Strict confidentiality and production milestones</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenModal('stride')}
                className="w-full py-4 bg-[#18132e] hover:bg-purple-900/60 text-purple-200 hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
              >
                <span>VIEW PROJECT BRIEF</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-purple-400" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
