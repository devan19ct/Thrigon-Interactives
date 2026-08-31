import React from 'react';
import { devProcessStages } from '../data/studioData';

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3.5 py-1.5 rounded border border-purple-800/40">
            PRODUCTION PIPELINE
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight mt-4">
            FROM CONCEPT <br />
            <span className="text-purple-500">TO PLAYABLE.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Our disciplined five-stage development methodology for building PC games.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-purple-900/20 via-purple-500/60 to-purple-900/20 -translate-y-1/2 z-0" />

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-8 w-[2px] bg-gradient-to-b from-purple-900/20 via-purple-500/60 to-purple-900/20 z-0" />

          <div className="grid lg:grid-cols-5 gap-6 relative z-10">
            {devProcessStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="bg-[#0f0b1c] border border-purple-500/20 hover:border-purple-400/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 group shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-black text-3xl text-purple-400 group-hover:text-purple-300 transition-colors">
                      {stage.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white uppercase mb-1 tracking-wider group-hover:text-purple-300 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-purple-400 font-mono text-xs font-semibold mb-3">
                    {stage.action}
                  </p>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-purple-900/30 text-[10px] font-mono text-purple-500/70 uppercase">
                  STAGE 0{idx + 1} // PIPELINE
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
