import React from 'react';
import { ShieldCheck, Compass, Code2 } from 'lucide-react';

export default function StudioIdentity() {
  return (
    <section id="studio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Banner Card */}
        <div className="bg-gradient-to-r from-[#0f0b1c] via-[#150f28] to-[#0c0918] border border-purple-500/30 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl shadow-purple-950/40">

          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-6">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span>CORE IDENTITY</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none mb-6">
              Indie <br />
              <span className="text-purple-400">BY DESIGN.</span>
            </h2>

            <p className="text-gray-200 text-lg sm:text-xl font-sans leading-relaxed mb-8">
              "Being Indie gives us the freedom to explore ideas, experiment with different approaches and build the games we believe are worth making."
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-purple-900/40 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>Focus on long-term studio growth and IP longevity.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Code2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>Hands-on technical engineering by game creators.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
