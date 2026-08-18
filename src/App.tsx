import React, { useState } from 'react';
import WelcomeIntro from './components/common/WelcomeIntro';
import FloatingChat from './components/common/FloatingChat';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-color)] transition-colors relative">
        {!showContent && <WelcomeIntro onComplete={() => setShowContent(true)} />}

        {/* El Navbar solo se muestra cuando la intro termina */}
        {showContent && <Navbar />}

        <main className={showContent ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Contact />
          <Footer />
          <FloatingChat />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;