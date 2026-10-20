'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';

interface TerminalProps {
  email: string;
  demoUrl: string;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({ email, demoUrl }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Sulaiman Mustafa OS [Version 2.4.0-release]
          </p>
          <p className="text-slate-400">
            Interactive developer session initialized. Type <span className="text-amber-400 font-semibold">help</span> or click suggestions below to inspect developer profile, live demos, and skills.
          </p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 text-xs">
              <div><span className="text-amber-300 font-bold">about</span> : Developer summary &amp; background</div>
              <div><span className="text-amber-300 font-bold">demo</span> : Inspect &amp; launch restaurant live app</div>
              <div><span className="text-amber-300 font-bold">skills</span> : Summary of tech stack &amp; tooling</div>
              <div><span className="text-amber-300 font-bold">projects</span> : List featured production projects</div>
              <div><span className="text-amber-300 font-bold">contact</span> : Get Sulaiman&apos;s direct email</div>
              <div><span className="text-amber-300 font-bold">vercel</span> : Vercel deployment architecture</div>
              <div><span className="text-amber-300 font-bold">clear</span> : Clear terminal history</div>
              <div><span className="text-amber-300 font-bold">sudo hire</span> : Send offer / schedule interview</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <p className="text-cyan-300 font-bold">Developer: Sulaiman Mustafa</p>
            <p className="text-slate-300">
              Passionate Software Developer with deep experience across modern web technologies, real-time architectures, distributed systems, and cloud deployments.
            </p>
            <p className="text-slate-400">
              Known for writing clean, performant, and self-documenting code with a relentless focus on reliability, low latency, and intuitive user experiences.
            </p>
          </div>
        );
        break;

      case 'demo':
      case 'restaurant':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-emerald-400 font-semibold">
              Live Production Restaurant Platform:
            </p>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">URL:</span>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline font-mono break-all"
                >
                  {demoUrl}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Stack:</span>
                <span className="text-slate-200">Next.js, Node.js, Express, PostgreSQL, Linux VPS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400 font-bold">200 OK · Active Server</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs">
              Scroll to the <a href="#live-demo" className="text-cyan-400 underline">Live Demo section</a> to test directly inside the device simulator!
            </p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-bold">Primary Engineering Toolset:</p>
            <p className="text-slate-300">
              <strong className="text-white">Frontend:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS v4, Motion
            </p>
            <p className="text-slate-300">
              <strong className="text-white">Backend:</strong> Node.js, Express, Python/FastAPI, WebSockets, REST APIs, Microservices
            </p>
            <p className="text-slate-300">
              <strong className="text-white">Databases:</strong> PostgreSQL, Redis, MongoDB, Prisma, Drizzle ORM
            </p>
            <p className="text-slate-300">
              <strong className="text-white">DevOps &amp; Cloud:</strong> Vercel, Linux VPS, Nginx, Docker, Git, PM2
            </p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-cyan-400 font-bold">Production Projects:</p>
            <p className="text-slate-200">1. <strong className="text-emerald-400">Restaurant Management POS</strong> - Live at {demoUrl}</p>
            <p className="text-slate-200">2. <strong className="text-white">CloudOps Pulse</strong> - Microservices Observability Dashboard</p>
            <p className="text-slate-200">3. <strong className="text-white">FleetFlow</strong> - Real-Time Logistics &amp; Dispatch Engine</p>
            <p className="text-slate-200">4. <strong className="text-white">PayPulse</strong> - Idempotent Double-Entry Ledger API</p>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-slate-300">
              Direct Contact Email: <span className="text-cyan-400 font-mono font-bold">{email}</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded text-xs hover:bg-cyan-500/30"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email Address'}</span>
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-200 rounded text-xs hover:bg-slate-700"
              >
                Open Mail App
              </a>
            </div>
          </div>
        );
        break;

      case 'vercel':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-bold">Vercel Deployment Architecture:</p>
            <p className="text-slate-300">
              Configured with Next.js 15 App router, standalone and serverless edge builds, zero-cold-start client hydration, and clean routing in vercel.json.
            </p>
            <p className="text-slate-400">
              Run <code className="text-amber-300">vercel deploy</code> to push to production instantaneously.
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo hire':
      case 'hire':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-sm bg-cyan-950/40 p-3 rounded-lg border border-cyan-800/50">
            <p className="text-emerald-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Permission Granted! Let&apos;s build together.
            </p>
            <p className="text-slate-300">
              Sulaiman Mustafa is actively considering full-time software engineering roles, high-impact contract projects, and architecture consultations.
            </p>
            <a
              href={`mailto:${email}?subject=Software%20Engineer%20Opportunity%20-%20Sulaiman%20Mustafa`}
              className="inline-block mt-1 font-bold text-cyan-400 underline"
            >
              Click here to compose email to {email} &rarr;
            </a>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-rose-400">
            command not found: {trimmed}. Type <span className="text-amber-400 font-semibold underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> to view all commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    }
  };

  const suggestionChips = [
    'help',
    'about',
    'demo',
    'skills',
    'projects',
    'contact',
    'sudo hire',
    'clear',
  ];

  return (
    <section id="terminal" className="py-20 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <TerminalIcon className="w-4 h-4" />
            <span>INTERACTIVE DEVELOPER SHELL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Developer Terminal
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Type commands directly or tap quick actions below to inspect Sulaiman&apos;s background and code architecture.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div className="bg-[#090c12] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Titlebar */}
          <div className="bg-[#0e131d] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-slate-400">bash: sulaiman@portfolio:~</span>
            </div>
            <span className="text-[11px] text-slate-500 hidden sm:inline">UTF-8 · Interactive CLI</span>
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="bg-[#0a0e16] px-4 py-2 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-slate-500 mr-1">Quick Run:</span>
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                onClick={() => executeCommand(chip)}
                className="text-[11px] px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800/90 hover:border-cyan-500/30 transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 min-h-[280px] max-h-[420px] overflow-y-auto space-y-4 cursor-text"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="text-cyan-400 font-bold">sulaiman@dev:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-slate-800/80">{item.output}</div>
              </div>
            ))}

            {/* Prompt input row */}
            <div className="flex items-center gap-2 text-xs sm:text-sm pt-2">
              <span className="text-cyan-400 font-bold shrink-0">sulaiman@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. demo, skills, help)..."
                className="flex-1 bg-transparent border-0 focus:outline-none text-white font-mono placeholder:text-slate-600 caret-cyan-400"
              />
              <button
                onClick={() => {
                  executeCommand(input);
                  setInput('');
                }}
                className="p-1 text-slate-400 hover:text-white"
                title="Send Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
