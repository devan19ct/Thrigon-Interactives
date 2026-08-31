import React from 'react';
import { Monitor, Cpu, Terminal, Zap } from 'lucide-react';

export default function PCGaming() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      {/* Background Lighting Shader */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-8">
          <Monitor className="w-3.5 h-3.5 text-purple-400" />
          <span>PLATFORM FOCUS</span>
        </div>

        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase text-white tracking-tight leading-none mb-8">
          BUILT FOR <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-500">PC.</span>
        </h2>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 font-sans leading-relaxed mb-12">
          PC gives us room to experiment, explore and build experiences without limiting the scale of the ideas we want to pursue.
        </p>

        {/* Technical Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-6 rounded-xl bg-[#0f0b1c]/80 border border-purple-500/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2 uppercase">UNCONSTRAINED SCALE</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Developing for PC allows us to target depth in world mechanics and player interaction models.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f0b1c]/80 border border-purple-500/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2 uppercase">CREATIVE FREEDOM</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Iterating quickly without restrictive hardware boundaries or delayed deployment loops.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f0b1c]/80 border border-purple-500/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2 uppercase">PLAYER PRECISION</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Designing refined controls and responsive gameplay built natively for mouse, keyboard & controller input.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
