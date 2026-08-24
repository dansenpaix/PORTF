import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Zap, 
  Globe, 
  Sparkles, 
  Database, 
  Layers, 
  Boxes,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Server,
  Network,
  Blocks,
  Shield,
  Palette,
  FileCode,
  Atom,
  Rocket,
  Wind
} from 'lucide-react';

import blinkImg from '../image/blink.png';
import chaincrafterImg from '../image/chaincrafter.png';
import estateryImg from '../image/estatery.png';
import fostrumImg from '../image/fostrum.png';
import jollyshaifsImg from '../image/jollyshaifs.png';
import mavelTechImg from '../image/mavel tech.png';
import pumptrollImg from '../image/pumptroll.png';
import rozerrImg from '../image/rozerr.png';
import ukranianBrideImg from '../image/ukranianbride.png';

export default function DeveloperHub({ onSwitchToManhwa }) {
  const [copiedLink, setCopiedLink] = useState(null);

  const projects = [
    {
      id: 'fostrum',
      title: 'Fostrum',
      tagline: 'Collaborative Project Platform',
      description: 'Co-engineered digital platform bringing together streamlined product presentation, interactive showcase, and high-performance design.',
      tags: ['Collaborative', 'React', 'Tailwind CSS', 'Next-Gen UX'],
      url: 'https://www.fostrum.xyz/#about',
      image: fostrumImg,
      category: 'Co-Built Platform',
      featured: true,
    },
    {
      id: 'jolly-shaifs',
      title: 'Jolly Shaifs',
      tagline: 'Interactive Modern Web App',
      description: 'Dynamic web solution with expressive UI, seamless user interaction, responsive layouts, and modern frontend architecture.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Web Design'],
      url: 'https://jolly-shaifs.netlify.app/',
      image: jollyshaifsImg,
      category: 'Web App',
      featured: false,
    },
    {
      id: 'mavel-tech',
      title: 'Mavel Tech',
      tagline: 'Tech Architecture & Developer Platform',
      description: 'Sleek, high-efficiency web platform built for high responsiveness, structured navigation, and clean technical presentation.',
      tags: ['React', 'Tailwind CSS', 'Web Development', 'Tech Suite'],
      url: 'https://mavel-tech.netlify.app',
      image: mavelTechImg,
      category: 'Tech Platform',
      featured: false,
    },
    {
      id: 'rozerr',
      title: 'Rozerr',
      tagline: 'Modern Web Application Platform',
      description: 'Dynamic web solution crafted with high-performance responsive UI, modular architecture, and sleek design system.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Web Architecture'],
      url: 'https://rozerr.netlify.app',
      image: rozerrImg,
      category: 'Web App',
      featured: false,
    },
    {
      id: 'blinkstore',
      title: 'BlinkStore',
      tagline: 'Solana Actions & Blinks Merchant Store',
      description: 'Revolutionary Web3 e-commerce hub powered by Solana Blinks/Actions. Enables instant on-chain transactions directly from social feeds & URLs.',
      tags: ['Solana Web3', 'Blinks / Actions', 'React', 'Tailwind CSS', 'Rust Integration'],
      url: 'https://blink-store.netlify.app',
      image: blinkImg,
      category: 'Web3 / Solana',
      featured: false,
    },
    {
      id: 'pumptroll',
      title: 'PumpTroll',
      tagline: 'Interactive Meme & Web3 Trading Suite',
      description: 'Engaging crypto-themed application with real-time analytics, dynamic visual components, and seamless Web3 wallet state tracking.',
      tags: ['JavaScript', 'Tailwind CSS', 'Web3 UI', 'REST APIs'],
      url: 'https://pumptrolll.netlify.app',
      image: pumptrollImg,
      category: 'Web3 App',
      featured: false,
    },
    {
      id: 'chaincrafter',
      title: 'ChainCrafter',
      tagline: 'Web3 Smart Contract & DApp Tool',
      description: 'Comprehensive utility suite for building, testing, and visualizing smart contract interactions with intuitive developer interface.',
      tags: ['Web3.js', 'Solana', 'TypeScript', 'Tailwind CSS', 'Ecosystem Tools'],
      url: 'https://chaincrafter.netlify.app',
      image: chaincrafterImg,
      category: 'Dev Tool',
      featured: false,
    },
    {
      id: 'verified-hearts',
      title: 'Verified Hearts',
      tagline: 'Social Impact & Humanitarian Web Platform',
      description: 'Clean, empathetic web app built for transparent advocacy, real-time updates, and community verification workflows.',
      tags: ['React', 'CSS3', 'Node.js', 'Responsive Design'],
      url: 'https://ukranian-hk.vercel.app',
      image: ukranianBrideImg,
      category: 'Web Platform',
      featured: false,
    },
    {
      id: 'estattery',
      title: 'Estattery Real Estate Portal',
      tagline: 'Full-Featured Property Management & Search',
      description: 'High-performance property discovery portal with custom filters, interactive spatial views, and full mobile optimization.',
      tags: ['React', 'Tailwind CSS', 'REST API', 'JavaScript', 'MERN Stack'],
      url: 'https://slem-propereti-5t50dz3fs-ddanny16s-projects.vercel.app',
      mirrorUrl: 'https://slem-propereti-fe-five.vercel.app',
      image: estateryImg,
      category: 'Full-Stack Web',
      featured: false,
    }
  ];

  const techStack = [
    {
      category: 'Core Frontend',
      items: [
        { name: 'HTML5', icon: Globe },
        { name: 'CSS3 / SASS', icon: Palette },
        { name: 'JavaScript (ES6+)', icon: Zap },
        { name: 'TypeScript', icon: FileCode },
        { name: 'React', icon: Atom },
        { name: 'Vite', icon: Rocket },
        { name: 'Tailwind CSS', icon: Wind },
        { name: 'Bootstrap', icon: Layers },
      ]
    },
    {
      category: 'Backend & Logic',
      items: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Cpu },
        { name: 'REST APIs', icon: Network },
        { name: 'MERN Architecture', icon: Blocks },
      ]
    },
    {
      category: 'Systems & Web3 Blockchain',
      items: [
        { name: 'Rust', icon: Shield },
        { name: 'Solana Web3', icon: Boxes },
        { name: 'Blinks / Actions', icon: Zap },
      ]
    }
  ];

  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="space-y-24 pt-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        
        {/* Glow ambient background graphics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Live Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)] shadow-lg mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
          <span className="text-[var(--text-muted)]">STATUS:</span>
          <span className="font-semibold text-[var(--accent)]">AVAILABLE FOR HIGH-IMPACT ROLES & BUILD CONTRACTS</span>
        </motion.div>

        {/* Big Name Banner - Brittany Chiang Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl tracking-tight text-[var(--text-heading)]">
            DANIEL <span className="text-[var(--accent)] font-mono text-2xl sm:text-4xl font-normal block sm:inline mt-2 sm:mt-0">(dansenpaix)</span>
          </h1>

          <p className="font-sans text-lg sm:text-2xl font-light text-[var(--text-heading)] max-w-3xl mx-auto leading-relaxed pt-2">
            <span className="font-semibold text-[var(--accent)]">
              Full-Stack Web & Web3 Engineer
            </span>
            {' '}|{' '}
            <span className="font-mono text-[var(--text-body)]">Sol-Native Builder</span>
          </p>

          <p className="text-sm sm:text-base text-[var(--text-body)] max-w-2xl mx-auto font-mono leading-relaxed pt-2">
            Turning ideas into responsive, scalable digital experiences. Specialized in MERN, Solana Blinks/Actions, Rust, and high-precision frontend architecture.
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold bg-[var(--accent)] text-slate-950 hover:opacity-90 shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" />
            <span>[ EXPLORE PROJECTS ]</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onSwitchToManhwa}
            className="group px-7 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold bg-[var(--bg-card)] text-[var(--text-heading)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)] group-hover:rotate-12 transition-transform" />
            <span>[ VIEW EDITORIAL LAB ]</span>
          </button>
        </motion.div>

        {/* Sub-hero tech highlights with proper icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl w-full">
          {[
            { label: 'Solana Web3', sub: 'Native Blinks / Actions', icon: Boxes },
            { label: 'Full-Stack MERN', sub: 'Node • Express • React', icon: Server },
            { label: 'Systems Logic', sub: 'Rust & Smart Utilities', icon: Shield },
            { label: 'Editorial QA', sub: 'Script & Pacing Adaptation', icon: Sparkles },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-xl theme-card text-left flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-xs text-[var(--text-heading)] font-bold">{item.label}</h4>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* TECH STACK SECTION */}
      <section id="techstack" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)]">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING & ARCHITECTURE</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-3xl text-[var(--text-heading)] tracking-wide">
            TECH STACK & CAPABILITIES
          </h2>
          <p className="text-sm text-[var(--text-body)] max-w-xl mx-auto font-mono">
            Modular tools, modern frameworks, and blockchain protocols I utilize to craft performant digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((group, gIdx) => (
            <div 
              key={gIdx} 
              className="theme-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
                  <h3 className="font-mono font-bold text-sm sm:text-base text-[var(--accent)]">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    {group.items.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((tech, tIdx) => {
                    const Icon = tech.icon;
                    return (
                      <div 
                        key={tIdx} 
                        className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-200 group flex items-center gap-2.5"
                      >
                        <Icon className="w-4 h-4 text-[var(--accent)] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono font-semibold text-[var(--text-heading)]">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION WITH IMAGE PREVIEWS */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border-color)] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)] mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>LIVE DEPLOYMENTS ({projects.length})</span>
            </div>
            <h2 className="font-pixel text-xl sm:text-3xl text-[var(--text-heading)] tracking-wide">
              FEATURED PROJECTS & PRODUCTS
            </h2>
            <p className="text-sm text-[var(--text-body)] font-mono mt-1">
              Click any project to explore live demos, mirrors, and technical architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL LINKED SITES ARE LIVE</span>
          </div>
        </div>

        {/* Projects Cards Grid with Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="theme-card rounded-2xl overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Project Screenshot Preview Image */}
                <div className="h-48 relative overflow-hidden bg-slate-900 border-b border-[var(--border-color)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80" />

                  {/* Top Bar inside image card */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-[var(--accent)] border border-[var(--border-color)] backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                        ★ FEATURED
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-pixel text-lg text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)] mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--text-body)] leading-relaxed font-sans min-h-[3rem]">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[var(--border-color)] mt-4 flex items-center justify-between gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[var(--accent)]/15 hover:bg-[var(--accent)] text-[var(--accent)] hover:text-slate-950 border border-[var(--accent)] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {project.mirrorUrl && (
                  <a
                    href={project.mirrorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[var(--bg-primary)] text-[var(--text-body)] hover:text-[var(--text-heading)] border border-[var(--border-color)] text-[11px] font-mono font-semibold flex items-center gap-1 transition-all duration-200"
                    title="Mirror Link"
                  >
                    <span>MIRROR</span>
                    <Globe className="w-3 h-3" />
                  </a>
                )}

                <button
                  onClick={() => handleCopyLink(project.url, project.id)}
                  className="p-2.5 rounded-xl bg-[var(--bg-primary)] text-[var(--text-body)] hover:text-[var(--accent)] border border-[var(--border-color)] transition-all duration-200"
                  title="Copy URL"
                >
                  {copiedLink === project.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
