import React from 'react';
import { Mail, Gamepad2, Sparkles, MessageSquare } from 'lucide-react';
import logoRembg from '../assets/thrigon_interactives-rembg.png';

export default function CTA({ onStartConversation, onExploreGames }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      {/* Background Watermark & Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] opacity-10 pointer-events-none">
        <img src={logoRembg} alt="Watermark" className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(168,85,247,0.5)]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center bg-[#0d091a]/80 border border-purple-500/30 rounded-3xl p-10 sm:p-16 backdrop-blur-md shadow-2xl shadow-purple-950/50">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>STUDIO COLLABORATION</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight mb-6">
          HAVE A WORLD <br />
          <span className="text-purple-400">WORTH BUILDING?</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you have a game project, a collaboration idea or simply want to connect with Thrigon, we'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartConversation}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-purple-950/80 border border-purple-400/40 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <MessageSquare className="w-4 h-4 text-purple-200" />
            <span>START A CONVERSATION</span>
          </button>

          <button
            onClick={onExploreGames}
            className="w-full sm:w-auto px-8 py-4 bg-[#140f28] hover:bg-purple-950/70 text-purple-200 hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Gamepad2 className="w-4 h-4 text-purple-300" />
            <span>EXPLORE OUR GAMES</span>
          </button>
        </div>
      </div>
    </section>
  );
}
