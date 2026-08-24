import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import DeveloperHub from './components/DeveloperHub';
import ManhwaHub from './components/ManhwaHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('dev'); // 'dev' | 'manhwa'
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light' | 'crimson' | 'emerald'
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle Mouse Spotlight Effect (Brittany Chiang style)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getThemeClass = () => {
    switch (theme) {
      case 'light': return 'theme-light';
      case 'crimson': return 'theme-crimson';
      case 'emerald': return 'theme-emerald';
      default: return '';
    }
  };

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-body)] relative overflow-x-hidden transition-colors duration-300 ${getThemeClass()}`}>
      
      {/* Brittany Chiang Mouse Spotlight Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-glow), transparent 80%)`
        }}
      />

      {/* Humorous Intro Splash Loader */}
      {!introComplete && (
        <IntroLoader onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main Portfolio Content */}
      {introComplete && (
        <div className="animate-fadeIn">
          {/* Navigation Bar */}
          <Navbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            currentTheme={theme}
            setTheme={setTheme}
          />

          {/* Main View Container */}
          <main>
            {activeTab === 'dev' ? (
              <DeveloperHub 
                onSwitchToManhwa={() => {
                  setActiveTab('manhwa');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            ) : (
              <ManhwaHub />
            )}

            {/* Global Contact Section */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}

    </div>
  );
}
