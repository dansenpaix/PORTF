import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  BookOpen, 
  Layers, 
  Send, 
  Github, 
  Twitter, 
  MessageSquare, 
  Linkedin, 
  Smartphone,
  Menu,
  X,
  Sun,
  Moon,
  Palette,
  Flame,
  Zap
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, currentTheme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { id: 'dark', label: 'Midnight Navy (Dark)', icon: Moon, color: 'bg-[#0a192f] text-[#64ffda]' },
    { id: 'light', label: 'Clean Slate (Light)', icon: Sun, color: 'bg-[#f8fafc] text-[#4f46e5]' },
    { id: 'crimson', label: 'Cyber Crimson (Red)', icon: Flame, color: 'bg-[#12070a] text-[#ff2a5f]' },
    { id: 'emerald', label: 'Matrix Emerald (Green)', icon: Zap, color: 'bg-[#06140e] text-[#10b981]' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/dansenpaix' },
    { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/dansenpaix' },
    { name: 'Discord', icon: MessageSquare, href: 'https://discord.com/users/dansenpaix' },
    { name: 'Telegram', icon: Send, href: 'https://t.me/dan_senpaii' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ariyibi-daniel-850833238/' },
    { name: 'WhatsApp', icon: Smartphone, href: 'https://wa.me/2348133995982' },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'py-3.5 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)] shadow-xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('dev'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent)] transition-all">
              <span className="font-pixel text-xs text-[var(--accent)]">D</span>
            </div>
            <span className="font-pixel text-sm sm:text-base font-bold text-[var(--text-heading)] tracking-wider">
              dansenpaix
            </span>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-md">
            <button
              onClick={() => { setActiveTab('dev'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'dev'
                  ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-bold border border-[var(--accent)]'
                  : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>DEVELOPER HUB</span>
            </button>

            <button
              onClick={() => { setActiveTab('manhwa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'manhwa'
                  ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-bold border border-[var(--accent)]'
                  : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>EDITORIAL LAB</span>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>CONTACT</span>
            </button>
          </nav>

          {/* Right Actions: Theme Selector & Social Icons */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Theme Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center gap-2 text-xs font-mono"
                title="Change Color Theme"
              >
                <Palette className="w-4 h-4 text-[var(--accent)]" />
                <span className="capitalize">{currentTheme}</span>
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl backdrop-blur-xl z-50">
                  <div className="px-3 py-1 text-[10px] font-mono text-[var(--text-muted)] border-b border-[var(--border-color)] mb-1">
                    SELECT THEME PALETTE
                  </div>
                  {themes.map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs font-mono flex items-center gap-2 transition-colors ${
                          currentTheme === t.id
                            ? 'text-[var(--accent)] font-bold bg-[var(--accent)]/10'
                            : 'text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-card-hover)]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-body)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:scale-105 transition-all"
                    title={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu & Theme Toggle Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                const nextTheme = currentTheme === 'dark' ? 'light' : currentTheme === 'light' ? 'crimson' : currentTheme === 'crimson' ? 'emerald' : 'dark';
                setTheme(nextTheme);
              }}
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent)]"
              title="Cycle Theme"
            >
              <Palette className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[var(--bg-card)] border-b border-[var(--border-color)] backdrop-blur-xl space-y-3">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => { setActiveTab('dev'); setMobileMenuOpen(false); }}
              className={`flex items-center gap-3 p-3 rounded-xl text-xs font-mono ${
                activeTab === 'dev'
                  ? 'bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)] font-bold'
                  : 'text-[var(--text-body)]'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>DEVELOPER HUB</span>
            </button>

            <button
              onClick={() => { setActiveTab('manhwa'); setMobileMenuOpen(false); }}
              className={`flex items-center gap-3 p-3 rounded-xl text-xs font-mono ${
                activeTab === 'manhwa'
                  ? 'bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)] font-bold'
                  : 'text-[var(--text-body)]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>EDITORIAL LAB</span>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-3 p-3 rounded-xl text-xs font-mono text-[var(--text-body)]"
            >
              <Layers className="w-4 h-4 text-[var(--accent)]" />
              <span>FEATURED PROJECTS</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 p-3 rounded-xl text-xs font-mono text-[var(--text-body)]"
            >
              <Send className="w-4 h-4 text-[var(--accent)]" />
              <span>CONTACT</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-around">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-body)] hover:text-[var(--accent)]"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
