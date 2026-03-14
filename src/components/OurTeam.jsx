import React from 'react';
import { Twitter, Linkedin } from 'lucide-react'; 
import coffin from '../assets/coffin.jpg';
import nixl from '../assets/nixl.jpg';
import amjith from '../assets/amjith.png';
import flyfox from '../assets/flyfox.jpg';
import arjun from '../assets/arjun.png';

// team members
const teamMembers = [
  {
    name: "Devan",
    displayName: "Coffin",
    role: "Developer",
    // bio: "The brain behind code and chaos. From gameplay logic to level flow, Coffin builds the core systems that keep our worlds alive and occasionally breaks them just to make them better.",
    avatar: coffin,
    twitter: "https://x.com/_mr_coffin",
    linkedin: "https://www.linkedin.com/in/-devan-m/",
  },
  {
    name: "Arjun",
    displayName: "WhiteWolf",
    role: "Developer",
    // bio: "The system crafter obsessed with performance and precision. White Wolf makes sure every line of code runs smoothly behind the scenes.",
    avatar: arjun,
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/arjun-shanker-/",
  },
  {
    name: "Amjith",
    displayName: "JohnnyDan",
    role: "3D Artist",
    // bio: "Turns ideas into tangible worlds. From grungy walls to eerie lighting, Johnny crafts the atmosphere that defines every Thrigon experience.",
    avatar: amjith, 
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/amjithkshine/",
  },
  {
    name: "Anand",
    displayName: "FlyFox",
    role: "3D Artist",
    // bio: "Flyfox transforms mood into matter, sculpting the spaces, lights, and tones that define Thrigon’s worlds.",
    avatar: flyfox, 
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/anand-anil-369aa4209/",
  },

];

// card component
const TeamMemberCard = ({ member }) => (
  <div className="group flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-400/20 h-full">
    
    <div className="w-32 h-32 mb-4 rounded-full border-4 border-purple-500/30 overflow-hidden bg-gray-700 flex items-center justify-center">
      <img src={member.avatar} alt={member.displayName} className="w-full h-full object-cover" />
    </div>

    {/* Hover name switch */}
    <div className="relative h-8 mb-1 flex items-center justify-center">
      <h3 className="absolute text-xl font-bold text-white transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1 group-hover:scale-95">
        {member.name}
      </h3>
      <h3 className="absolute text-xl font-bold text-purple-400 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-105">
        {member.displayName}
      </h3>
    </div>

    <p className="text-purple-500 font-semibold mb-3">{member.role}</p>
    <p className="text-gray-400 mb-6 flex-grow">{member.bio}</p>

    <div className="flex space-x-4 mt-auto">
      {member.twitter && (
        <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-purple-500 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-purple-500 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
    </div>
  </div>
);

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-900 text-white px-4 relative">
      {/* Fix background micro-gap illusion */}
      <div className="absolute inset-0 bg-gray-900 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Meet Our <span className="text-purple-500">Team</span>
        </h2>
        <p className="text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
          We are a small, dedicated group of creators united by a passion for stylish, cozy games and compelling storytelling.
        </p>

        {/* Equal height cards fix */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
