import React from 'react';
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
   return (
    <section 
      className="relative h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 text-center"
      style={{
        backgroundImage: "url('" + heroBg + "')", 
        backgroundSize: "cover",        
        backgroundPosition: "center",   
      }}
    >
      {/* Gradient overlay*/}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(17,21,29, 0.8), rgb(17,21,29, 1)), url('${heroBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
<span className="inline-block bg-teal-500/20 text-teal-400 px-6 py-2 rounded-full mb-6 text-base md:text-lg font-display tracking-wide ">
  Welcome to Thrigon Interactive
</span>


        <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Crafting Immersive Gaming Experiences
        </h1>

        <p className="text-gray-300 mb-8 text-lg md:text-xl font-sans">
          We are a dedicated team of game creators, 
          who are passionate about our projects, 
          and excited about sharing our games and experiences with the world!
        </p>

        <div className="flex gap-4 justify-center">
          <button onClick={() => window.open("#", "#")} className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-cyan-500 transition">
            Explore Our Games →
          </button>
          <button onClick={() => window.open("https://discord.gg/jZNjJ5mBYM", "discord")} className="border border-purple-500 to-pink-500 px-6 py-3 rounded-md font-semibold hover:bg-purple-500/20 transition">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce text-purple-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
