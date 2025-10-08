import React from 'react';
import { Twitter, Linkedin } from 'lucide-react'; 
import coffin from '../assets/coffin.jpg';
import nixl from '../assets/nixl.jpg';
import amjith from '../assets/amjith.png';

//team members
const teamMembers = [
  {
    name: "Coffin",
    role: "Developer",
    bio: "The brain behind code and chaos. From gameplay logic to level flow, Coffin builds the core systems that keep our worlds alive and occasionally breaks them just to make them better.",
    avatar: coffin,
    twitter: "https://x.com/_mr_coffin",
    linkedin: "https://www.linkedin.com/in/-devan-m/",
  },
  {
    name: "Nixl",
    role: "Developer",
    bio: "The tech wizard obsessed with fluid controls, and player feel. Nixl makes sure every movement, jump, and bug (the good kind) hits just right.",
    avatar: nixl,
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/amnihal/",
  },
  {
    name: "Amjith",
    role: "3D Artist",
    bio: "Turns ideas into tangible worlds. From grungy walls to eerie lighting, Amjith crafts the atmosphere that defines every Thrigon experience.",
    avatar: amjith, 
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/amjithkshine/",
  },
];

// component for the individual team card
const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-400/20 h-full">
    
    {/* Avatar Image (placeholder) */}
    
    <div className="w-32 h-32 mb-4 rounded-full border-4 border-purple-500/30 overflow-hidden bg-gray-700 flex items-center justify-center">
      <img 
        src={member.avatar} 
        alt={member.name} 
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-xl font-bold text-white mb-1">
      {member.name}
    </h3>
    <p className="text-purple-500 font-semibold mb-3">
      {member.role}
    </p>

    <p className="text-gray-400 mb-6 flex-grow">
      {member.bio}
    </p>

    {/* Social Links */}
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
    <section className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Meet Our <span className="text-purple-500">Team</span>
        </h2>
        <p className="text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
          We are a small, dedicated group of creators united by a passion for stylish, cozy games and compelling storytelling.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}