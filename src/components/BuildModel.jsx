import React from 'react';
import { Sparkles, Briefcase, CheckCircle2, Layers } from 'lucide-react';

export default function BuildModel() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3 py-1 rounded border border-purple-800/30">
            STUDIO DUAL MODEL
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-4">
            OUR WORLDS. <br />
            <span className="text-purple-500">YOUR VISION.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Thrigon operates with two core capabilities: nurturing in-house intellectual property and engineering selected game projects for clients.
          </p>
        </div>

        {/* Split Model Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: OUR IP */}
          <div className="bg-[#0f0b1c] border border-purple-500/30 hover:border-purple-400/60 rounded-2xl p-8 sm:p-10 transition-all duration-300 relative group shadow-xl shadow-purple-950/40 flex flex-col justify-between">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600/10 rounded-br-full blur-2xl group-hover:bg-purple-600/20 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-300">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded border border-purple-800/30">
                  IN-HOUSE CAPABILITY
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl text-white uppercase tracking-wider mb-4">
                OUR IP
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Creating original PC game titles from initial creative spark to final production, establishing lasting original intellectual property.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Original games crafted in-house',
                  'Original ideas and unconstrained mechanics',
                  'Rich original worlds and narrative identity',
                  'Long-term intellectual property growth'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-purple-900/30 flex items-center justify-between text-xs font-mono text-purple-400/80">
              <span>FEATURED TITLE: SHIFT BOUNDS</span>
              <span className="text-purple-300 font-bold">IN DEVELOPMENT</span>
            </div>
          </div>

          {/* RIGHT: CLIENT DEVELOPMENT */}
          <div className="bg-[#0c0919] border border-indigo-500/30 hover:border-indigo-400/60 rounded-2xl p-8 sm:p-10 transition-all duration-300 relative group shadow-xl shadow-indigo-950/40 flex flex-col justify-between">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-bl-full blur-2xl group-hover:bg-indigo-600/20 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                  <Briefcase className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded border border-indigo-800/30">
                  CLIENT COLLABORATION
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl text-white uppercase tracking-wider mb-4">
                CLIENT DEVELOPMENT
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Collaborating with selected external clients to engineer ambitious PC game projects and interactive digital experiences.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Full-scale PC game development execution',
                  'Custom interactive experiences and systems',
                  'High-performance technical implementation',
                  'Selected strategic project collaborations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-indigo-900/30 flex items-center justify-between text-xs font-mono text-indigo-400/80">
              <span>FEATURED PROJECT: STRIDE</span>
              <span className="text-indigo-300 font-bold">CLIENT PRODUCTION</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
