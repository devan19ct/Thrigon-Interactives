import React from 'react';
import { Sparkles, Briefcase, ChevronRight, Layers, Cpu } from 'lucide-react';
import { gamesData, clientProjectsData } from '../data/studioData';

export default function ProjectsSection({ onOpenModal }) {
  const allProjects = [
    { ...gamesData[0], badge: 'OUR IP', badgeColor: 'bg-purple-600 text-white' },
    { ...clientProjectsData[0], badge: 'CLIENT WORK', badgeColor: 'bg-indigo-900 text-indigo-200 border border-indigo-500/40' }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3.5 py-1.5 rounded border border-purple-800/40">
            STUDIO PORTFOLIO & PRODUCTION
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight mt-4">
            SELECTED <span className="text-purple-500">PROJECTS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            A clear view of our active in-house games alongside selected client engineering projects.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {allProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenModal(project.id)}
              className="bg-[#0e0b1c] border border-purple-500/20 hover:border-purple-400/60 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group cursor-pointer shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header row with distinct badges */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded shadow-md ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-800/30">
                    {project.status}
                  </span>
                </div>

                {/* Visual Icon Header */}
                <div className="mb-6 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    {project.isClient ? <Briefcase className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-gray-400 uppercase">
                      {project.typeLabel}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-8">
                  {project.details.slice(0, 3).map((detail, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-purple-900/30 flex items-center justify-between text-xs font-mono text-purple-400">
                <span>VIEW COMPLETE BRIEF</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
