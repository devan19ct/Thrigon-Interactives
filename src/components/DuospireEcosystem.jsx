import React from 'react';
import { ArrowUpRight, Network } from 'lucide-react';
import { studioSocials } from '../data/studioData';

export default function DuospireEcosystem() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-b border-purple-950/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-900/30 text-purple-400 text-[11px] font-mono tracking-widest uppercase mb-4">
          <Network className="w-3.5 h-3.5" />
          <span>VENTURE ECOSYSTEM</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider mb-4">
          PART OF <span className="text-purple-400">SOMETHING BIGGER.</span>
        </h3>

        {/* Diagram DUOSPIRE -> THRIGON */}
        <div className="my-6 inline-flex items-center space-x-3 bg-[#0d0a18] border border-purple-500/20 px-6 py-3 rounded-xl text-xs font-mono">
          <span className="text-gray-300 font-bold tracking-widest">DUOSPIRE</span>
          <span className="text-purple-500">→</span>
          <span className="text-purple-300 font-bold tracking-widest">THRIGON INTERACTIVES</span>
        </div>

        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed mb-6">
          Thrigon Interactives is part of the Duospire ecosystem alongside ventures focused on technology, software and other forms of interactive entertainment.
        </p>

        <a
          href={studioSocials.duospireUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-widest text-purple-400 hover:text-purple-200 transition-colors group"
        >
          <span>EXPLORE DUOSPIRE</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>
    </section>
  );
}
