'use client';

import { ArrowUp, Code2, ExternalLink, Heart, Mail } from 'lucide-react';

interface FooterProps {
  email: string;
  demoUrl: string;
}

export default function Footer({ email, demoUrl }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#07090e] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Sulaiman Mustafa</div>
              <div className="text-[11px] text-slate-400">Full-Stack Software Developer</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#live-demo" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Live Restaurant Demo
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills Matrix
            </a>
            <a href="#terminal" className="hover:text-white transition-colors">
              CLI Shell
            </a>
            <a href="#vercel-optimization" className="hover:text-white transition-colors">
              Vercel Deployment
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sulaiman Mustafa. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Optimized for Vercel Edge</span>
            <span>·</span>
            <span>Next.js 15 &amp; React 19</span>
            <span>·</span>
            <a
              href={`mailto:${email}`}
              className="text-cyan-400/90 hover:text-cyan-300 transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
