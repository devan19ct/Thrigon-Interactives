import React, { useEffect } from 'react';
import { X, Gamepad2, Layers, Briefcase, Monitor, CheckCircle2, ShieldCheck } from 'lucide-react';
import { gamesData, clientProjectsData } from '../data/studioData';
import shiftBanner from '../assets/WM_ShiftBound.png';

export default function GameDetailModal({ projectId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const all = [...gamesData, ...clientProjectsData];
  const project = all.find((p) => p.id === projectId) || gamesData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card Container */}
      <div className="bg-[#0f0b1c] border border-purple-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-950/80 relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Banner Image or Teaser */}
        <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#120a28] to-[#080512] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-studio-grid flex items-center justify-center relative">
              <div className="w-48 h-48 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />
              <Briefcase className="w-20 h-20 text-purple-400/60 animate-pulse" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-[#0f0b1c]/40 to-transparent" />

          {/* Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 items-center">
            <span className="bg-purple-950/90 text-purple-200 text-xs font-mono font-bold px-3 py-1 rounded border border-purple-400/30 backdrop-blur-md">
              {project.typeLabel}
            </span>
            <span className="bg-purple-600 text-white text-xs font-mono font-bold px-3 py-1 rounded shadow-md">
              {project.status}
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-8 sm:p-10 space-y-8">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="text-purple-300 font-mono text-xs flex items-center gap-1.5 uppercase">
              <Monitor className="w-4 h-4" /> TARGET PLATFORM: {project.platform}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider text-purple-400">
              PROJECT OVERVIEW
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-purple-900/30">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider text-purple-400">
              CONFIRMED PRODUCTION PILLARS
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(project?.details || []).map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-900/30 text-xs font-mono text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Status Disclaimer */}
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30 text-xs text-gray-400 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <span>
              This project is actively being developed by Thrigon Interactives. Detailed gameplay, media releases, and milestones will be published through official studio announcements.
            </span>
          </div>

          {/* Footer Close Action */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
