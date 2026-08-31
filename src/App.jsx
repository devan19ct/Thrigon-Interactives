import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StudioIntro from './components/StudioIntro.jsx';
import Philosophy from './components/Philosophy.jsx';
import ShowcaseSlider from './components/ShowcaseSlider.jsx';
import BuildModel from './components/BuildModel.jsx';
import GamesSection from './components/GamesSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import PCGaming from './components/PCGaming.jsx';
import DevelopmentProcess from './components/DevelopmentProcess.jsx';
import StudioIdentity from './components/StudioIdentity.jsx';
import AboutSection from './components/AboutSection.jsx';
import DuospireEcosystem from './components/DuospireEcosystem.jsx';
import FutureVision from './components/FutureVision.jsx';
import CTA from './components/CTA.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import GameDetailModal from './components/GameDetailModal.jsx';

export default function App() {
  const [activeModalId, setActiveModalId] = useState(null);

  const handleOpenModal = (id) => {
    setActiveModalId(id);
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-purple-600 selection:text-white antialiased overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar onOpenGameModal={handleOpenModal} />

      {/* Main Studio Sections trajectory */}
      <main>
        {/* 1. Cinematic Hero */}
        <Hero
          onExploreGames={() => handleScrollTo('games')}
          onAboutClick={() => handleScrollTo('about')}
          onOpenModal={handleOpenModal}
        />

        {/* 2. Studio Introduction (Hidden as requested) */}
        {/* <StudioIntro /> */}

        {/* 3. Studio Philosophy */}
        <Philosophy />

        {/* 4. Studio Production Showcase Slider (SHIFT BOUNDS & STRIDE) */}
        <ShowcaseSlider onOpenModal={handleOpenModal} />

        {/* 6. Dual Capabilities Model (OUR IP vs CLIENT DEVELOPMENT) */}
        <BuildModel />

        {/* 7. Dedicated Games Section */}
        <GamesSection onOpenModal={handleOpenModal} />

        {/* 8. Selected Projects Comparison Grid (Hidden as requested) */}
        {/* <ProjectsSection onOpenModal={handleOpenModal} /> */}

        {/* 9. PC Gaming Platform Focus (Hidden as requested) */}
        {/* <PCGaming /> */}

        {/* 10. Five-Stage Development Process */}
        <DevelopmentProcess />

        {/* 11. Indie Studio Identity (Hidden as requested) */}
        {/* <StudioIdentity /> */}

        {/* 12. About Thrigon & Real Team Showcase */}
        <AboutSection />

        {/* 13. Duospire Ecosystem Connection */}
        <DuospireEcosystem />

        {/* 14. Future Vision & Abstract Growth Placeholders (Hidden as requested) */}
        {/* <FutureVision /> */}

        {/* 15. Final Call to Action / Studio Collaboration (Hidden as requested) */}
        {/* <CTA
          onStartConversation={() => handleScrollTo('contact')}
          onExploreGames={() => handleScrollTo('games')}
        /> */}

        {/* 16. Professional Contact Form */}
        <ContactSection />
      </main>

      {/* Studio Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Detail Modal Drawer */}
      {activeModalId && (
        <GameDetailModal projectId={activeModalId} onClose={handleCloseModal} />
      )}
    </div>
  );
}