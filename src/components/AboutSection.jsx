import React from 'react';
import { Twitter, Linkedin, Users, User } from 'lucide-react';
import { studioTeamMembers } from '../data/studioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3.5 py-1.5 rounded border border-purple-800/40">
            THE TEAM BEHIND THE WORLDS
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight mt-4">
            WHO <span className="text-purple-500">WE ARE</span>
          </h2>
          <div className="space-y-3 mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            <p>
              Thrigon Interactives is an Indie PC game studio under Duospire. We create original games while developing selected interactive projects for clients.
            </p>
            <p className="text-purple-300 font-medium">
              We're building a studio where ambitious ideas can move from concept to playable experience.
            </p>
          </div>
        </div>

        {/* Real Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studioTeamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#0f0b1c] border border-purple-500/20 hover:border-purple-400/60 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 group shadow-xl flex flex-col items-center text-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Avatar with purple glow ring */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-5 rounded-full border-2 border-purple-500/40 p-1 bg-purple-950/40 overflow-hidden relative group-hover:border-purple-400 transition-colors shadow-lg flex items-center justify-center">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{ objectPosition: member.avatarPosition || 'center 15%' }}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#181133] to-[#0a0715] flex items-center justify-center">
                      <User className="w-10 h-10 text-purple-400/70" />
                    </div>
                  )}
                </div>

                {/* Name & Alias */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                {member.alias ? (
                  <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-800/40 mt-1 mb-2">
                    "{member.alias}"
                  </span>
                ) : (
                  <div className="h-[25px] mt-1 mb-2" />
                )}
                <p className="text-gray-400 text-[11px] font-mono uppercase tracking-wider mb-4 leading-tight">
                  {member.role}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-4 border-t border-purple-900/30 w-full justify-center">
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-950/50 text-gray-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-950/50 text-gray-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
