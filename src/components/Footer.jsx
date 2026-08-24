import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-12 text-xs font-mono text-[var(--text-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-pixel text-[var(--accent)] text-[10px]">
            D
          </div>
          <div>
            <span className="font-pixel text-[var(--text-heading)] text-xs tracking-wider">dansenpaix</span>
            <span className="block text-[10px] text-[var(--text-muted)] mt-0.5">
              © {new Date().getFullYear()} Daniel. All rights reserved.
            </span>
          </div>
        </div>

        {/* Center: Quote */}
        <p className="text-[11px] text-[var(--text-body)] text-center max-w-md">
          "Building scalable systems with code & refining stories with editorial precision."
        </p>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-body)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center gap-2"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
