import React, { useState } from 'react';
import { Gamepad2, Layers, Sparkles, Monitor, ChevronRight, Briefcase, ShieldCheck, Cpu, ArrowLeft, ArrowRight } from 'lucide-react';
import shiftBanner from '../assets/WM_ShiftBound.png';
import shiftArt from '../assets/shift.png';

export default function ShowcaseSlider({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('shift-bounds'); // 'shift-bounds' | 'stride'
  const [shiftHovered, setShiftHovered] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-purple-900/30">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase bg-purple-950/60 px-3 py-1 rounded border border-purple-500/40">
                STUDIO PRODUCTION SHOWCASE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              FEATURED <span className="text-purple-500">DEVELOPMENT</span>
            </h2>
          </div>

          {/* Interactive Slide Toggle Tabs & Arrows */}
          <div className="flex items-center gap-3">
            <div className="flex bg-[#07050e] border border-purple-900/50 rounded-xl p-1.5 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('shift-bounds')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'shift-bounds'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/80 scale-[1.02]'
                    : 'text-gray-400 hover:text-purple-300 hover:bg-purple-950/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                <span>01 IN-HOUSE IP: SHIFT BOUNDS</span>
              </button>

              <button
                onClick={() => setActiveTab('stride')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'stride'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/80 scale-[1.02]'
                    : 'text-gray-400 hover:text-indigo-300 hover:bg-purple-950/40'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-indigo-200" />
                <span>02 CLIENT WORK: STRIDE</span>
              </button>
            </div>

            {/* Slider Next/Prev Toggle Buttons */}
            <div className="hidden sm:flex items-center space-x-1.5 bg-[#07050e] border border-purple-900/50 p-1.5 rounded-xl">
              <button
                onClick={() => setActiveTab(activeTab === 'shift-bounds' ? 'stride' : 'shift-bounds')}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-900/50 transition-colors cursor-pointer"
                title="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab(activeTab === 'shift-bounds' ? 'stride' : 'shift-bounds')}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-900/50 transition-colors cursor-pointer"
                title="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Slide Stage */}
        {activeTab === 'shift-bounds' ? (
          /* SLIDE 1: SHIFT BOUNDS (IN-HOUSE IP) */
          <div className="bg-[#0f0b1c] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/50 grid lg:grid-cols-12 gap-0 relative group animate-fadeIn">
            
            {/* Visual Showcase (7 cols) */}
            <div
              className="lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] overflow-hidden cursor-pointer"
              onMouseEnter={() => setShiftHovered(true)}
              onMouseLeave={() => setShiftHovered(false)}
              onClick={() => onOpenModal('shift-bounds')}
            >
              {/* Base Image */}
              <img
                src={shiftBanner}
                alt="Shift Bounds Official Artwork"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  shiftHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
                }`}
              />
              {/* Alternate Concept Art on Hover */}
              <img
                src={shiftArt}
                alt="Shift Bounds Concept Art"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  shiftHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                }`}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-purple-950/20 mix-blend-overlay" />

              {/* Badge Overlay on Image */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="bg-purple-900/90 text-purple-200 text-xs font-mono font-bold px-3 py-1 rounded border border-purple-400/30 backdrop-blur-md">
                  IN-HOUSE IP
                </span>
                <span className="bg-purple-600/90 text-white text-xs font-mono font-bold px-3 py-1 rounded shadow-lg backdrop-blur-md">
                  IN DEVELOPMENT
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1.5 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800/40">
                  <Monitor className="w-3.5 h-3.5" /> PLATFORM: PC
                </span>
                <span className="text-gray-400">HOVER TO REVEAL CONCEPT ART</span>
              </div>
            </div>

            {/* Project Details (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#120e24] to-[#0a0812]">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>THRIGON INTERACTIVES · IN-HOUSE</span>
                </div>

                <h3 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                  SHIFT BOUNDS
                </h3>

                <div className="w-16 h-[2px] bg-purple-500 mb-6" />

                <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mb-6">
                  Shift Bounds is an original PC game currently being developed by Thrigon Interactives.
                </p>

                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
                  Built directly inside our studio, Shift Bounds represents our passion for distinct world design, tight game mechanics, and dedicated PC player experiences.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Original Thrigon Intellectual Property</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>Engineered specifically for PC hardware</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-mono text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>In active production by the core Thrigon team</span>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div>
                <button
                  onClick={() => onOpenModal('shift-bounds')}
                  className="w-full py-4 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-purple-950/60 border border-purple-400/30 transition-all duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer"
                >
                  <Gamepad2 className="w-4 h-4 text-purple-200" />
                  <span>DISCOVER SHIFT BOUNDS</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* SLIDE 2: STRIDE (CLIENT PROJECT) */
          <div className="bg-[#0b0914] border border-indigo-500/30 hover:border-purple-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/30 grid lg:grid-cols-12 gap-0 transition-all duration-300 animate-fadeIn">
            
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
                  className="w-full py-4 bg-[#18132e] hover:bg-purple-900/60 text-purple-200 hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer"
                >
                  <span>VIEW PROJECT BRIEF</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-purple-400" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
