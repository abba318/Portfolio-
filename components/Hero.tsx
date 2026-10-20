'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  Server,
  Layers,
  Zap,
  ShieldCheck,
  Play,
} from 'lucide-react';

interface HeroProps {
  email: string;
  demoUrl: string;
}

export default function Hero({ email, demoUrl }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/15 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-cyan-600/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status Kicker & Terminal Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="font-mono text-cyan-400 font-medium">sulaiman@fullstack:~$</span>
            <span className="text-slate-400">ready to build &amp; deploy</span>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400 font-medium">Vercel Ready</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Engineering Scalable{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Full-Stack Web Systems
            </span>{' '}
            with Speed &amp; Precision
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I am <strong className="text-white font-semibold">Sulaiman Mustafa</strong>, a software developer
            specializing in high-performance modern web apps, real-time architectures, scalable APIs, and clean
            production deployments.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Jump to live demo */}
            <a
              href="#live-demo"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explore Live Restaurant Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Direct Open in new tab */}
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-sm sm:text-base transition-all hover:text-white"
            >
              <span>Direct Link</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 text-slate-300 border border-slate-800/80 font-mono text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Metrics / Engineering Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-mono font-medium text-slate-400">
                  Performance
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">Sub-Second</div>
              <p className="text-xs text-slate-400 mt-1">Load times &amp; Core Web Vitals focused</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <Server className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-mono font-medium text-slate-400">
                  Architecture
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">Full-Stack</div>
              <p className="text-xs text-slate-400 mt-1">Next.js, Node, APIs, PostgreSQL &amp; Cloud</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-mono font-medium text-slate-400">
                  Production
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">Live Deployed</div>
              <p className="text-xs text-slate-400 mt-1">Real-time restaurant ecosystem online</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-mono font-medium text-slate-400">
                  Deployment
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">Vercel Ready</div>
              <p className="text-xs text-slate-400 mt-1">Optimized builds, edge runtime &amp; zero bloat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
