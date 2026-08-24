import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import DeveloperHub from './components/DeveloperHub';
import ManhwaHub from './components/ManhwaHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('dev');
  const [theme, setTheme] = useState('dark');
  const [customPalette, setCustomPalette] = useState({
    accent: '#a855f7',
    bg: '#0f0715'
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      case 'custom': return 'theme-custom';
      default: return '';
    }
  };

  const getCustomStyle = () => {
    if (theme !== 'custom') return {};
    
    const accent = customPalette.accent || '#a855f7';
    const bg = customPalette.bg || '#0f0715';
    
    const hexToRgba = (hex, alpha = 1) => {
      let c = hex.replace('#', '');
      if (c.length === 3) c = c.split('').map(x => x + x).join('');
      const num = parseInt(c, 16);
      if (isNaN(num)) return `rgba(168, 85, 247, ${alpha})`;
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const isLightBg = bg.toLowerCase() === '#ffffff' || bg.toLowerCase() === '#f8fafc';

    return {
      '--bg-primary': bg,
      '--bg-card': isLightBg ? 'rgba(255, 255, 255, 0.85)' : hexToRgba(bg, 0.85),
      '--bg-card-hover': isLightBg ? 'rgba(241, 245, 249, 0.95)' : hexToRgba(accent, 0.15),
      '--border-color': hexToRgba(accent, 0.25),
      '--text-heading': isLightBg ? '#0f172a' : '#f8fafc',
      '--text-body': isLightBg ? '#334155' : '#cbd5e1',
      '--text-muted': isLightBg ? '#64748b' : '#94a3b8',
      '--accent': accent,
      '--accent-glow': hexToRgba(accent, 0.35),
      '--nav-bg': isLightBg ? 'rgba(248, 250, 252, 0.9)' : hexToRgba(bg, 0.9),
    };
  };

  return (
    <div 
      className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-body)] relative overflow-x-hidden transition-colors duration-300 ${getThemeClass()}`}
      style={getCustomStyle()}
    >
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-glow), transparent 80%)`
        }}
      />

      {!introComplete && (
        <IntroLoader onComplete={() => setIntroComplete(true)} />
      )}

      {introComplete && (
        <div className="animate-fadeIn">
          <Navbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            currentTheme={theme}
            setTheme={setTheme}
            customPalette={customPalette}
            setCustomPalette={setCustomPalette}
          />

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

            <ContactSection />
          </main>

          <Footer />
        </div>
      )}

    </div>
  );
}
