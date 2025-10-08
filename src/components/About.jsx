import React from 'react';
import { Heart, Users, Zap } from 'lucide-react'; 

// Define the data for the feature cards
const features = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'Every game we create comes from a place of genuine love for the craft and our players.',
  },
  {
    icon: Users,
    title: 'Community-Focused',
    description: 'We build games that bring people together and create lasting memories.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing boundaries while maintaining the cozy, inviting feel players love.',
  },
];

export default function About() {
  return (

        <section
          className="py-20 text-white px-4"
          style={{
            backgroundColor: "rgb(17,21,29)",
          }}
        >
      <div className="container mx-auto max-w-6xl text-center">
        {/* Title and Description */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-purple-500">Thrigon Interactive</span>
        </h2>
        <p className="text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
          We're a small but passionate team dedicated to creating games that feel like 
          home. Our mission is to craft experiences that are both innovative and 
          comforting, challenging yet accessible, and always memorable.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-700/50 bg-gray-800/50 shadow-lg text-left transition duration-300 hover:border-purple-400/50"
            >
              {/* Icon Container */}
              <div className="mb-4">
                <div className="p-3 inline-flex rounded-lg bg-purple-400/10 border border-purple-400/20 text-purple-400">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}