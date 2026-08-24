import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Sparkles, 
  Swords, 
  ShieldCheck, 
  FileText, 
  Flame, 
  Award,
  Zap,
  Eye,
  RefreshCw,
  Heart,
  Bookmark,
  CheckCircle2
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/Accordion';

export default function ManhwaHub() {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = [
    { id: 'all', label: 'All Genres' },
    { id: 'murim', label: 'Murim / Martial Arts' },
    { id: 'system', label: 'Regression / Systems' },
    { id: 'action', label: 'Action / High-Fantasy' },
    { id: 'school', label: 'Delinquent / Superpower' },
    { id: 'romance', label: 'Romance / Drama' },
  ];

  const genreCards = [
    {
      id: 'murim',
      genre: 'Murim / Martial Arts',
      titles: ['Return of the Mount Hua Sect', 'Legend of the Northern Blade', 'Nano Machine'],
      keyElements: 'Faction hierarchies, Sect honorifics (Senior Brother, Elder, Sect Leader), Qi/Dantian terminology, combat clarity.',
      editorialFocus: 'Adapting ancient martial lore without alienating Western readers. Balancing authentic terminology with punchy, high-momentum action dialogue.',
      icon: Swords,
    },
    {
      id: 'system',
      genre: 'Regression / Reincarnation / Systems',
      titles: ['The Greatest Estate Developer', 'SSS-Class Suicide Hunter', "Omniscient Reader's Viewpoint"],
      keyElements: 'System notifications, quest windows, timeline logic, asymmetric info, satirical comedic timing.',
      editorialFocus: 'Strict UI consistency across windows, distinct tone for system prompts vs. main protagonist inner monologues.',
      icon: RefreshCw,
    },
    {
      id: 'action',
      genre: 'Action / High-Fantasy',
      titles: ['Solo Leveling', 'Eleceed', 'The Beginning After the End'],
      keyElements: 'Ability naming, rank classifications (S-Rank, Monarch), threat escalation, dynamic sfx positioning.',
      editorialFocus: 'Maximizing impact in high-intensity battle scenes. Ensuring spell/ability names sound epic and memorable.',
      icon: Flame,
    },
    {
      id: 'school',
      genre: 'High School / Delinquent / Superpower',
      titles: ['Lookism', 'The God of High School', 'Weak Hero'],
      keyElements: 'Modern slang, crew hierarchy status cues, fast-paced dialogue, martial technique references.',
      editorialFocus: 'Natural youth speech register without sounding outdated. Crafting sharp trash-talk and punchy banter.',
      icon: Zap,
    },
    {
      id: 'romance',
      genre: 'Romance / Drama',
      titles: ['Positively Yours', 'A Business Proposal', 'See You in My 19th Life'],
      keyElements: 'Subtle emotional subtext, workplace dynamics, honorific nuance, romantic pacing.',
      editorialFocus: 'Refining dialogue to capture intimacy, hesitation, and humor without awkward literal phrasing.',
      icon: Heart,
    }
  ];

  const filteredCards = selectedGenre === 'all' 
    ? genreCards 
    : genreCards.filter(c => c.id === selectedGenre);

  const scriptDemo = {
    panelContext: "Legend of the Mount Hua Sect - Chapter 48 (Combat & Internal Energy Resolution)",
    rawLiteral: `Raw Literal Text:\n"If I gather the Qi inside my Dantian to 100%, then the sword technique of Mount Hua Sect will reach the Realm of Plum Blossoms. Look at this, junior!"`,
    localizedText: `Dansenpaix Localized Adaptation:\n"Once the Qi inside my Dantian reaches full resonance, Mount Hua's legendary sword art blooms. Watch closely, kid—this is how a true master strikes!"`,
    qaNotes: [
      { topic: 'Speech Register Adaptation', note: 'Changed "junior" to "kid" to match the arrogant, experienced veteran tone of the protagonist in combat.' },
      { topic: 'Pacing & Panel Fit', note: 'Replaced clumsy literal phrasing "reach the Realm of Plum Blossoms" with "Mount Hua\'s legendary sword art blooms" for fluid bubble fitting.' },
      { topic: 'Terminology Rules', note: 'Retained "Qi" and "Dantian" (standard genre terms) instead of over-translating to generic "magic energy" or "lower stomach".' }
    ]
  };

  const productionRoles = [
    { title: 'Script Adapter', desc: 'Crafting fluid, high-octane English dialogue while preserving original intent & comedic beat.', icon: FileText },
    { title: 'Quality Checker (QA)', desc: 'Cross-chapter term audit, name consistency, panel text balancing, and bubble alignment.', icon: ShieldCheck },
    { title: 'Proofreader', desc: 'Eliminating typos, punctuation errors, grammatical flow, and awkward sentence structures.', icon: Bookmark },
    { title: 'Typesetter Reviewer', desc: 'Ensuring typography matches character emotions, font hierarchy, and SFX integration.', icon: Eye },
    { title: 'Content Reviewer', desc: 'Verifying genre-specific lore compliance, rank titles, and cultural nuance accuracy.', icon: Award }
  ];

  return (
    <div className="space-y-20 pt-24 pb-16">
      
      {/* EDITORIAL HEADER SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="theme-card p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
          
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Professional Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-[var(--bg-primary)] border-2 border-[var(--accent)] p-6 flex flex-col items-center justify-center text-center shadow-xl">
                  <BookOpen className="w-14 h-14 text-[var(--accent)] mb-3" />
                  <span className="font-pixel text-xs text-[var(--accent)] tracking-wider">EDITORIAL LAB</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] mt-1">SCRIPT & QA ADAPTATION</span>
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--accent)] text-[10px] font-mono text-[var(--accent)] font-bold whitespace-nowrap shadow-md">
                  EDITORIAL LAB LEAD
                </div>
              </div>
            </div>

            {/* Right: Info & Philosophy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>WEBTOON & MANHWA EDITORIAL LAB</span>
              </div>

              <h1 className="font-pixel text-2xl sm:text-4xl text-[var(--text-heading)] leading-tight">
                EDITORIAL QA & SCRIPT ADAPTATION
              </h1>

              <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
                <span className="text-xs font-mono text-[var(--accent)] font-bold tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> CORE PHILOSOPHY
                </span>
                <p className="font-sans text-base sm:text-lg italic text-[var(--text-heading)] leading-relaxed">
                  "Reading for both meaning and momentum — how every line functions inside the panel, scene, and character arc."
                </p>
              </div>

              <p className="text-xs sm:text-sm font-mono text-[var(--text-body)] leading-relaxed">
                Bridging original webtoon scripts into sharp, high-impact English. Ensuring balloon text balance, panel flow rhythm, character tone fidelity, and strict terminology consistency across 100+ chapter runs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-pixel text-xl sm:text-2xl text-[var(--text-heading)]">
            EDITORIAL SPECIALTIES & COMPETENCIES
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[var(--text-body)]">
            Three pillars powering flawless comic localization and reader engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Editorial QA & Continuity',
              desc: 'Pacing analysis, balloon text balancing, panel rhythm, setup/payoff tracking, and cross-chapter terminology consistency.',
              icon: ShieldCheck,
            },
            {
              title: 'Script Localization & Proofreading',
              desc: 'Natural English adaptation preserving comedic timing, intensity, and distinct character registers while avoiding exposition overload.',
              icon: FileText,
            },
            {
              title: 'Cultural & Genre Literacy',
              desc: 'Deep fluency in Murim/Martial Arts hierarchies, Qi/Internal energy lore, Regression/System rules, Delinquent status dynamics, and High Fantasy.',
              icon: Swords,
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="theme-card p-6 rounded-2xl space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base font-bold text-[var(--text-heading)]">{item.title}</h3>
                <p className="font-sans text-xs text-[var(--text-body)] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* GENRE MASTERY INDEX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border-color)] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)] mb-2">
              <Flame className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>DEEP DOMAIN EXPERTISE</span>
            </div>
            <h2 className="font-pixel text-xl sm:text-3xl text-[var(--text-heading)]">
              GENRE MASTERY INDEX
            </h2>
          </div>

          {/* Genre Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGenre(g.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  selectedGenre === g.id
                    ? 'bg-[var(--accent)] text-slate-950 font-bold'
                    : 'bg-[var(--bg-card)] text-[var(--text-body)] hover:text-[var(--text-heading)] border border-[var(--border-color)]'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Genre Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="theme-card p-6 rounded-2xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    GENRE SPECIALTY
                  </span>
                </div>

                <div>
                  <h3 className="font-mono text-base font-bold text-[var(--text-heading)]">{card.genre}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {card.titles.map((title, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-heading)] border border-[var(--border-color)]"
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[var(--border-color)] text-xs">
                  <div>
                    <span className="font-mono font-semibold text-[var(--text-muted)] block text-[11px]">KEY ELEMENTS:</span>
                    <p className="text-[var(--text-body)] font-sans mt-0.5">{card.keyElements}</p>
                  </div>
                  <div>
                    <span className="font-mono font-semibold text-[var(--accent)] block text-[11px]">EDITORIAL FOCUS:</span>
                    <p className="text-[var(--text-body)] font-sans mt-0.5">{card.editorialFocus}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE SCRIPT QA INSPECTOR DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="theme-card p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl">
          
          <Tabs defaultValue="localized" className="w-full space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
              <div>
                <span className="text-[11px] font-mono text-[var(--accent)] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4" /> INTERACTIVE WORKFLOW DEMO
                </span>
                <h3 className="font-pixel text-lg sm:text-xl text-[var(--text-heading)] mt-1">
                  SCRIPT ADAPTATION & QA INSPECTOR
                </h3>
                <p className="text-xs font-mono text-[var(--text-body)]">{scriptDemo.panelContext}</p>
              </div>

              {/* Tabs Switch */}
              <TabsList>
                <TabsTrigger value="raw">RAW LITERAL</TabsTrigger>
                <TabsTrigger value="localized">DANSENPAIX LOCALIZED</TabsTrigger>
              </TabsList>
            </div>

            {/* Content Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Script Panel text display */}
              <div className="lg:col-span-6 space-y-3">
                <TabsContent value="raw" className="mt-0">
                  <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono text-[var(--text-muted)]">
                      <span>PANEL DIALOGUE SPEECH BUBBLE</span>
                      <span className="text-amber-400">⚠️ UNEDITED</span>
                    </div>
                    <pre className="font-mono text-sm sm:text-base text-[var(--text-heading)] whitespace-pre-wrap leading-relaxed p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                      {scriptDemo.rawLiteral}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="localized" className="mt-0">
                  <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono text-[var(--text-muted)]">
                      <span>PANEL DIALOGUE SPEECH BUBBLE</span>
                      <span className="text-[var(--accent)]">✓ POLISHED</span>
                    </div>
                    <pre className="font-mono text-sm sm:text-base text-[var(--text-heading)] whitespace-pre-wrap leading-relaxed p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                      {scriptDemo.localizedText}
                    </pre>
                  </div>
                </TabsContent>
              </div>

              {/* Right: QA Editorial Accordion Breakdown */}
              <div className="lg:col-span-6 space-y-3">
                <h4 className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                  EDITORIAL QA BREAKDOWN & DECISION LOG:
                </h4>

                <Accordion type="single" collapsible className="w-full space-y-2">
                  {scriptDemo.qaNotes.map((note, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`item-${idx}`} 
                      className="border border-[var(--border-color)] bg-[var(--bg-primary)] rounded-xl px-4 overflow-hidden"
                    >
                      <AccordionTrigger className="text-xs hover:no-underline font-mono py-3">
                        [{idx + 1}] {note.topic}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-xs text-[var(--text-body)] pt-1 pb-3">
                        {note.note}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </div>
          </Tabs>

        </div>
      </section>

      {/* PRODUCTION ROLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-pixel text-lg sm:text-2xl text-[var(--text-heading)]">
            READY-TO-DEPLOY PRODUCTION ROLES
          </h2>
          <p className="text-xs font-mono text-[var(--text-body)]">
            Available for editorial teams, scanlation groups, and official Webtoon publishing houses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {productionRoles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <div 
                key={idx} 
                className="theme-card p-4 rounded-xl text-center space-y-2"
              >
                <Icon className="w-6 h-6 mx-auto text-[var(--accent)]" />
                <h4 className="font-mono text-xs font-bold text-[var(--text-heading)]">{role.title}</h4>
                <p className="text-[10px] text-[var(--text-body)] font-sans line-clamp-3">{role.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
