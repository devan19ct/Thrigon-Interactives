import React from 'react';
import { Twitter, Instagram, Youtube, MessageSquare, ArrowUpRight } from 'lucide-react';
import logoRembg from '../assets/thrigon_interactives-rembg.png';
import { studioSocials, studioNavLinks } from '../data/studioData';

export default function Footer({ onOpenModal }) {
  const currentYear = 2026;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#050508] border-t border-purple-900/30 text-gray-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 p-1.5 flex items-center justify-center">
                <img src={logoRembg} alt="Thrigon Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider group-hover:text-purple-300 transition-colors">
                THRIGON INTERACTIVES
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Indie game studio creating original experiences and interactive projects under Duospire.
            </p>
            <div className="pt-2 text-xs font-mono text-purple-400/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>BUILT FOR PC</span>
            </div>
          </div>

          {/* Column 1: EXPLORE */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest text-purple-300">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {studioNavLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: PROJECTS */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest text-purple-300">
              PROJECTS
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button
                  onClick={() => onOpenModal('shift-bounds')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Shift Bounds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('bicycle-life')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Bicycle Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('moksh')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Moksh: The Last Hope
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('yakshi-nights')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Yakshi Nights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('stride')}
                  className="hover:text-purple-300 transition-colors text-left text-indigo-400"
                >
                  Stride (Client Project)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: ECOSYSTEM & CONNECT */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest text-purple-300">
              ECOSYSTEM & CONNECT
            </h4>
            <ul className="space-y-2 text-xs font-mono mb-4">
              <li>
                <a
                  href={studioSocials.duospireUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                >
                  Duospire <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="flex space-x-3 pt-2">
              <a
                href={studioSocials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/30 text-purple-400 hover:text-white hover:bg-purple-900 transition-colors"
                aria-label="X Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={studioSocials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/30 text-purple-400 hover:text-white hover:bg-purple-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={studioSocials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/30 text-purple-400 hover:text-white hover:bg-purple-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={studioSocials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/30 text-purple-400 hover:text-white hover:bg-purple-900 transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© {currentYear} Thrigon Interactives. All rights reserved.</p>
          <div className="flex items-center space-x-2 text-purple-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span>A Duospire Venture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}