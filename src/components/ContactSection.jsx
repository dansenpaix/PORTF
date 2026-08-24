import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  Twitter, 
  Github, 
  Linkedin, 
  Smartphone, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import { toast } from 'sonner';


export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactList = [
    {
      id: 'email',
      name: 'Email',
      value: 'novaspire77@gmail.com',
      copyValue: 'novaspire77@gmail.com',
      link: 'mailto:novaspire77@gmail.com',
      icon: Mail,
    },
    {
      id: 'discord',
      name: 'Discord',
      value: '@dansenpaix',
      copyValue: 'dansenpaix',
      link: 'https://discord.com/users/dansenpaix',
      icon: MessageSquare,
    },
    {
      id: 'telegram',
      name: 'Telegram',
      value: '@dan_senpaii',
      copyValue: '@dan_senpaii',
      link: 'https://t.me/dan_senpaii',
      icon: Send,
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      value: '@',
      copyValue: 'https://x.com/',
      link: 'https://x.com',
      icon: Twitter,
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      value: '+2348133995982',
      copyValue: '+2348133995982',
      link: 'https://wa.me/2348133995982',
      icon: Smartphone,
    },
    {
      id: 'github',
      name: 'GitHub',
      value: 'dansenpaix',
      copyValue: 'https://github.com/dansenpaix',
      link: 'https://github.com/dansenpaix',
      icon: Github,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'Ariyibi Daniel',
      copyValue: 'https://www.linkedin.com/in/ariyibi-daniel-850833238/',
      link: 'https://www.linkedin.com/in/ariyibi-daniel-850833238/',
      icon: Linkedin,
    }
  ];

  const handleCopy = (value, id) => {
    navigator.clipboard.writeText(value);
    setCopiedItem(id);
    toast.success(`Copied ${id} to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success("Transmission sent! Daniel will check his priority inbox.");
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)]">
          <Send className="w-3.5 h-3.5" />
          <span>DIRECT COMMUNICATIONS CHANNEL</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-3xl text-[var(--text-heading)] tracking-wide">
          GET IN TOUCH WITH DANIEL
        </h2>
        <p className="text-sm text-[var(--text-body)] max-w-xl mx-auto font-mono">
          Ready for full-stack engineering contracts, Web3 Solana initiatives, or Webtoon localization QA assignments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Cards */}
        <div className="lg:col-span-7 space-y-3">
          <h3 className="font-mono text-xs font-bold text-[var(--text-muted)] tracking-wider uppercase mb-2">
            DIRECT CONTACT & SOCIAL DIRECTORY:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactList.map((contact) => {
              const Icon = contact.icon;
              return (
                <div
                  key={contact.id}
                  className="theme-card p-4 rounded-xl flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--accent)]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] block">{contact.name}</span>
                      <span className="text-xs font-mono font-semibold text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                        {contact.value}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-body)] hover:text-[var(--accent)] border border-[var(--border-color)]"
                      title={`Open ${contact.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopy(contact.copyValue, contact.id)}
                      className="p-1.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-body)] hover:text-[var(--accent)] border border-[var(--border-color)]"
                      title="Copy value"
                    >
                      {copiedItem === contact.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Quick Interactive Message Form */}
        <div className="lg:col-span-5">
          <div className="theme-card p-6 sm:p-8 rounded-2xl">
            <h3 className="font-pixel text-sm sm:text-base text-[var(--text-heading)] mb-1">
              SEND DIRECT TRANSMISSION
            </h3>
            <p className="text-xs font-mono text-[var(--text-body)] mb-6">
              Instant ping directly to my priority inbox.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-mono text-sm font-bold text-emerald-300">TRANSMISSION RECEIVED!</h4>
                <p className="text-xs text-[var(--text-body)] font-mono">
                  Thank you for reaching out. Daniel will respond shortly via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[var(--text-muted)] mb-1">YOUR NAME / ORGANIZATION</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex (Solana Founder / Publisher)"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-heading)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-[var(--text-muted)] mb-1">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-heading)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-[var(--text-muted)] mb-1">PROJECT DETAILS / MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your engineering build or manhwa editorial scope..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-heading)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[var(--accent)] text-slate-950 font-bold font-mono text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
