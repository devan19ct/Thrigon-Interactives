import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Top border 
    <footer className="bg-gray-900 border-t border-gray-800 text-white px-4 py-8">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Left Section: Logo/Brand Name and Tagline */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-extrabold mb-1 
                         // Gradient text matching the Hero section's style
                         bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Thrigon Interactives
          </h3>
          <p className="text-gray-400">
            Crafting immersive gaming experiences
          </p>
        </div>

        {/* Right Section: Copyright and Motto */}
        <div className="text-center md:text-right text-gray-400">
          <p className="mb-1">
            &copy; {currentYear} Thrigon Interactives. All rights reserved.
          </p>
          <p>
            Made with passion and creativity
          </p>
        </div>
      </div>
    </footer>
  );
}