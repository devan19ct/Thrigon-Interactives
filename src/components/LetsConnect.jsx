import React from 'react';
import { Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react'; 
export default function LetsConnect() {
  return (
    <section className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto max-w-5xl text-center">

        <div className="flex justify-center mb-6 gap-10">
          <a href="https://x.com/ThrigonInter" target="_blank" rel="noopener noreferrer">
            <div className="p-4 inline-flex rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Twitter className="w-8 h-8" />
            </div>
          </a>

          <a href="https://www.instagram.com/thrigon_interactives/" target="_blank" rel="noopener noreferrer">
            <div className="p-4 inline-flex rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Instagram className="w-8 h-8" />
            </div>
          </a>

          <a href="https://youtube.com/@thrigoninteractives" target="_blank" rel="noopener noreferrer">
            <div className="p-4 inline-flex rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Youtube className="w-8 h-8" />
            </div>
          </a>

          <a href="https://discord.gg/jZNjJ5mBYM" target="_blank" rel="noopener noreferrer">
            <div className="p-4 inline-flex rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240" className="w-8 h-8 fill-current">
               <path d="M104.4 115.5c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.3-5 10.2-11.1s-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path d="M189.5 20h-134c-20 0-36 16-36 36v128c0 20 16 36 36 36h114l-5.3-18.5 12.9 11.9 12.1 11.2 21.4 19.9V56c0-20-16-36-36-36zm-40.7 140s-3.8-4.5-7-8.4c14.1-4 19.5-12.5 19.5-12.5-4.4 2.9-8.6 5-12.4 6.4-5.4 2.2-10.6 3.7-15.7 4.5-10.9 1.9-20.9 1.4-29.2-0.1-6.4-1.1-12-2.5-16.6-4.5-2.1-0.8-4.4-1.8-6.7-3.1-0.3-0.2-0.6-0.3-0.9-0.4-0.2-0.1-0.3-0.2-0.4-0.3-0.3-0.2-0.4-0.3-0.4-0.3s5.1 8.2 18.6 12.3c-3.2 3.8-7.1 8.4-7.1 8.4-23.4-0.7-32.3-16.1-32.3-16.1 0-34.1 15.3-61.7 15.3-61.7 15.3-11.5 29.8-11.2 29.8-11.2l1.1 1.3c-19.2 5.5-28 13.9-28 13.9s2.3-1.3 6.2-3.2c11.3-5.2 20.3-6.7 24-7.1 0.6-0.1 1.1-0.1 1.7-0.1 6.1-0.8 13-1.1 20.1-0.1 12.8 1.8 26.5 6.5 40.5 16.6 0 0-8.5-8-26-13.3l1.4-1.6s14.5-0.3 29.8 11.2c0 0 15.3 27.6 15.3 61.7 0 0-8.9 15.4-32.3 16.1z"/>
            </svg>
          </div>
          </a>

        </div>

        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ready to <span className="text-purple-500">Connect?</span>
        </h2>
        
        {/* Subtitle / Description */}
        <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg md:text-xl">
          Whether you have a press inquiry or a brilliant idea for collaboration, we'd love to hear from you.
        </p>

        {/* Call to Action Button */}
        <a 
          href="mailto:thrigoninteractives@gmail.com" 
          className="inline-flex items-center space-x-2 
                     bg-purple-400 text-gray-900 
                     px-10 py-4 rounded-lg 
                     font-bold text-lg 
                     transition duration-300 
                     shadow-xl hover:bg-purple-500 hover:shadow-purple-400/50"
        >
          <span>Send Us an Email</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Alternative Contact Info (Optional) */}
        {/* <div className="mt-8">
            <p className="text-gray-500 text-sm">
                Prefer a direct route? Email us at: 
                <a href="mailto:contact@thrigoninteractive.com" className="text-cyan-400 ml-2 hover:text-cyan-500">
                    contact@thrigoninteractive.com
                </a>
            </p>
        </div> */}
      </div>
    </section>
  );
}