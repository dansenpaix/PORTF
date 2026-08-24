import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Lock, Sparkles, Terminal } from 'lucide-react';

export default function IntroLoader({ onComplete }) {
  const [step, setStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkTimer = setTimeout(() => {
      setIsChecked(true);
    }, 700);

    const step2Timer = setTimeout(() => {
      setStep(2);
    }, 2000);

    const step3Timer = setTimeout(() => {
      setStep(3);
      if (onComplete) onComplete();
    }, 3200);

    return () => {
      clearTimeout(checkTimer);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
    };
  }, [onComplete]);

  if (step === 3) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-primary)] text-[var(--text-heading)] backdrop-blur-xl"
      >
        {step === 1 && (
          <motion.div
            key="captcha-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm p-6 theme-card rounded-2xl shadow-2xl border border-[var(--border-color)]"
          >
            <div className="my-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  onClick={() => setIsChecked(true)}
                  className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isChecked
                      ? 'bg-[var(--accent)]/20 border-[var(--accent)] text-[var(--accent)] scale-105'
                      : 'border-slate-600 bg-slate-900'
                  }`}
                >
                  {isChecked ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                    </motion.div>
                  ) : (
                    <div className="w-2 h-2 rounded-sm bg-transparent" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--text-heading)]">I am not a robot</span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">Verify human access</span>
                </div>
              </div>

              <Lock className="w-5 h-5 text-slate-500 opacity-60" />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] pt-1">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                {isChecked ? 'Handshake verified' : 'Verifying environment...'}
              </span>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="humor-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.3 }}
            className="text-center px-4 max-w-md space-y-3"
          >
            <div className="inline-flex p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent)] mb-2 shadow-lg">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>

            <h1 className="font-pixel text-xl sm:text-2xl text-[var(--accent)] leading-relaxed">
              Haha just kidding.
            </h1>

            <p className="font-mono text-base text-[var(--text-heading)] tracking-wide">
              Welcome to my world.
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
