'use client';

import { useState, useEffect } from 'react';
import {
  Code2,
  ExternalLink,
  Mail,
  Copy,
  Check,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  email: string;
}

export default function Navbar({ email }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const navLinks = [
    { name: 'Live Demo', href: '#live-demo', highlight: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Vercel Ready', href: '#vercel-optimization' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Developer Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 p-[1.5px] transition-transform group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0d1117] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Sulaiman Mustafa
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono tracking-wide">
                Full-Stack Software Engineer
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* 1-Click Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              title="Click to copy email"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all hover:border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{email}</span>
                </>
              )}
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1117] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-slate-300 flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  link.highlight
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={`mailto:${email}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Sulaiman</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
