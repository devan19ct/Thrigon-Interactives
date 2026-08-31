import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

export default function StudioIntro() {
  return (
    <section id="intro" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-8">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>STUDIO INTRODUCTION</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-none mb-8">
          GAMES ARE <br />
          <span className="text-purple-400 underline decoration-purple-600/40 decoration-wavy underline-offset-8">
            EXPERIENCES.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg md:text-xl font-sans leading-relaxed">
          <div className="p-6 rounded-xl bg-[#120f20]/60 border border-purple-500/20 backdrop-blur-sm">
            <p className="text-white font-medium">
              Thrigon Interactives is an Indie game studio focused on creating original games and interactive experiences.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#120f20]/60 border border-purple-500/20 backdrop-blur-sm">
            <p className="text-gray-400">
              We build our own ideas while taking on selected projects that challenge us to create something meaningful.
            </p>
          </div>
        </div>

        {/* Decorative Technical Line */}
        <div className="mt-16 flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-purple-500" />
          <div className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORIGINAL IP & SELECTED CLIENT PROJECTS</span>
          </div>
          <div className="flex-1 h-[1px] bg-purple-900/30" />
        </div>
      </div>
    </section>
  );
}
