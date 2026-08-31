import React from 'react';
import { Sparkles, Globe, Rocket, Terminal } from 'lucide-react';

export default function FutureVision() {
  const steps = [
    { label: 'IMAGINE', desc: 'Identify ideas worth building' },
    { label: 'BUILD', desc: 'Craft mechanics & world design' },
    { label: 'PLAY', desc: 'Deliver engaging PC experiences' },
    { label: 'EVOLVE', desc: 'Grow original studio IP' },
  ];

  const futurePlaceholders = [
    { title: 'NEXT PROJECT', code: 'PROTOTYPE // 02', tag: 'IN PROTOTYPING' },
    { title: 'NEXT WORLD', code: 'CONCEPT // 03', tag: 'CREATIVE EXPLORATION' },
    { title: 'NEXT EXPERIENCE', code: 'PIPELINE // 04', tag: 'LONG-TERM VISION' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Vision Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3.5 py-1.5 rounded border border-purple-800/40">
            STUDIO AMBITION
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none mt-4 mb-6">
            THE NEXT WORLD <br />
            <span className="text-purple-400">IS ALREADY BEGINNING.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Thrigon is being built with the ambition to create original games, establish lasting intellectual property and grow into an Indie studio capable of exploring many different ideas.
          </p>
        </div>

        {/* 4 Pillars: IMAGINE -> BUILD -> PLAY -> EVOLVE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {steps.map((item, idx) => (
            <div
              key={item.label}
              className="p-6 rounded-xl bg-[#0f0b1c] border border-purple-500/20 text-center hover:border-purple-400/50 transition-colors group"
            >
              <span className="text-[10px] font-mono text-purple-500 block mb-2">
                0{idx + 1} // CYCLE
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mb-1 group-hover:text-purple-300 transition-colors">
                {item.label}
              </h3>
              <p className="text-gray-400 text-xs font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Future Abstract Placeholders Section */}
        <div className="pt-12 border-t border-purple-900/30">
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-8">
            <Terminal className="w-4 h-4" />
            <span>FUTURE PIPELINE PLACEHOLDERS</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {futurePlaceholders.map((ph) => (
              <div
                key={ph.title}
                className="p-6 rounded-xl bg-[#06040a] border border-dashed border-purple-900/40 hover:border-purple-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-purple-500 mb-4">
                    <span>{ph.code}</span>
                    <span className="w-2 h-2 rounded-full bg-purple-500/50" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white uppercase mb-2">
                    {ph.title}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    Abstract studio placeholder. Further details will be announced upon official reveal.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-purple-950/60 text-[10px] font-mono text-purple-400/60 uppercase">
                  {ph.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
