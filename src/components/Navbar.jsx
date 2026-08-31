import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, ChevronRight } from 'lucide-react';
import logoRembg from '../assets/thrigon_interactives-rembg.png';
import { studioNavLinks } from '../data/studioData';

export default function Navbar({ onOpenGameModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = studioNavLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-lg shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-purple-950/50 border border-purple-500/30 group-hover:border-purple-400 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-purple-600/30 transition-colors" />
            <img
              src={logoRembg}
              alt="Thrigon Logo"
              className="w-8 h-8 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-purple-300 transition-colors">
              THRIGON
            </span>
            <span className="text-[10px] tracking-widest font-mono text-gray-400 uppercase">
              Interactives
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0d0a18]/70 border border-purple-500/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {studioNavLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-purple-600/40 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'text-gray-300 hover:text-purple-300 hover:bg-purple-950/30'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              if (onOpenGameModal) {
                onOpenGameModal('shift-bounds');
              } else {
                const el = document.getElementById('games');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-lg shadow-purple-950/50 border border-purple-400/30 transition-all duration-300 hover:shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Gamepad2 className="w-4 h-4 text-purple-200" />
            <span>EXPLORE OUR GAMES</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0812]/95 border-b border-purple-500/30 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {studioNavLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-purple-900/40 text-purple-300 border border-purple-500/40'
                      : 'text-gray-300 hover:bg-purple-950/40 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenGameModal) onOpenGameModal('shift-bounds');
              }}
              className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-lg border border-purple-400/40"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>EXPLORE OUR GAMES</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
