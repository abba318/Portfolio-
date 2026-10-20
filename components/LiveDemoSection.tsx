'use client';

import { useState } from 'react';
import {
  ExternalLink,
  RefreshCw,
  Copy,
  Check,
  Laptop,
  Tablet,
  Smartphone,
  ShieldCheck,
  Maximize2,
  UtensilsCrossed,
  ShoppingCart,
  Clock,
  Layers,
  Server,
  Database,
  Cpu,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

interface LiveDemoSectionProps {
  demoUrl: string;
}

export default function LiveDemoSection({ demoUrl }: LiveDemoSectionProps) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(1);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'architecture' | 'api' | 'techstack'>('features');
  const [iframeError, setIframeError] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(demoUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleRefresh = () => {
    setIframeError(false);
    setIframeKey((prev) => prev + 1);
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[400px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <section id="live-demo" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            FLAGSHIP LIVE DEMO · PRODUCTION DEPLOYMENT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Full-Stack Restaurant Management Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A production-grade, end-to-end digital ordering, table reservation, and kitchen dispatch system
            engineered by Sulaiman Mustafa. Test it live in the interactive simulator below or launch directly.
          </p>
        </div>

        {/* Simulator & Interactive Browser Frame */}
        <div className="bg-[#0b0f17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
          {/* Top Browser Chrome Bar */}
          <div className="bg-[#111827]/90 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            {/* Window Controls & Title */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                Restaurant App Simulator
              </span>
            </div>

            {/* Address bar */}
            <div className="flex-1 max-w-xl mx-auto flex items-center bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
              <span className="text-emerald-400 shrink-0">https://</span>
              <span className="truncate text-slate-200">restaurant.163.245.216.163.nip.io</span>

              <div className="ml-auto flex items-center gap-1.5 pl-2">
                <button
                  onClick={handleCopyUrl}
                  title="Copy URL"
                  className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleRefresh}
                  title="Reload Live View"
                  className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Viewport Switcher Controls & Direct Link */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-lg">
                <button
                  onClick={() => setViewport('desktop')}
                  title="Desktop View"
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                    viewport === 'desktop'
                      ? 'bg-slate-800 text-cyan-400 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline text-[11px]">Desktop</span>
                </button>
                <button
                  onClick={() => setViewport('tablet')}
                  title="Tablet View"
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                    viewport === 'tablet'
                      ? 'bg-slate-800 text-cyan-400 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline text-[11px]">Tablet</span>
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  title="Mobile View"
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                    viewport === 'mobile'
                      ? 'bg-slate-800 text-cyan-400 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline text-[11px]">Mobile</span>
                </button>
              </div>

              {/* Direct Open Button */}
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-sm"
              >
                <span>Open Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Device Frame Viewport Container */}
          <div className="bg-[#07090e] p-4 sm:p-6 flex items-center justify-center min-h-[520px] lg:min-h-[640px] overflow-hidden">
            <div
              className={`transition-all duration-300 w-full ${getViewportWidth()} h-[500px] lg:h-[620px] bg-slate-950 rounded-xl border border-slate-800 shadow-xl overflow-hidden relative flex flex-col`}
            >
              {/* Iframe View */}
              <iframe
                key={iframeKey}
                src={demoUrl}
                title="Restaurant Platform Live Demo by Sulaiman Mustafa"
                className="w-full h-full border-0 bg-slate-950"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
                onError={() => setIframeError(true)}
              />

              {/* Bottom Quick Bar inside frame */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-full text-xs text-slate-200 flex items-center gap-3 shadow-lg pointer-events-auto">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Host: 163.245.216.163
                </span>
                <span className="text-slate-600">|</span>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                >
                  Full Screen Tab <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Technical Deep Dive Navigation */}
          <div className="bg-[#0d121c] border-t border-slate-800 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-cyan-400" />
                  Engineering Deep Dive &amp; Architecture
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Designed &amp; programmed by Sulaiman Mustafa with modern full-stack best practices.
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'features'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Core Features
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'api'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  API Design
                </button>
                <button
                  onClick={() => setActiveTab('techstack')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'techstack'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tech Stack
                </button>
              </div>
            </div>

            {/* Tab 1: Core Features */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Interactive Digital Menu</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Dynamic category filtering, allergen filters, detailed nutritional breakdowns, and item customization modifiers (spiciness, extra toppings).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Seamless Checkout &amp; Tables</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Instant client-side cart calculation, tipping selector, dynamic tax calculation, table number assignment for dine-in, and takeout scheduling.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Real-Time Kitchen Status</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Live order progress lifecycle (Submitted → Confirmed → Cooking → Ready → Completed) with automated push notifications.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Architecture */}
            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                      <Layers className="w-4 h-4" /> Client Layer
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      <li>Modern Next.js / React UI</li>
                      <li>Mobile-first responsive layouts</li>
                      <li>Optimistic UI updates for cart &amp; orders</li>
                      <li>Fast sub-second initial hydration</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-2">
                      <Server className="w-4 h-4" /> Application Service
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      <li>Node.js / Express REST API</li>
                      <li>Order state machine validation</li>
                      <li>Rate limiting &amp; input sanitization</li>
                      <li>Role-Based Access (Customer / Chef / Admin)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                      <Cpu className="w-4 h-4" /> Production Infrastructure
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      <li>Dedicated Linux VPS (163.245.216.163)</li>
                      <li>nip.io DNS routing &amp; automated SSL</li>
                      <li>Nginx reverse proxy with gzip compression</li>
                      <li>PM2 process monitor with auto-restart</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: API Design */}
            {activeTab === 'api' && (
              <div className="rounded-xl bg-[#090b10] border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-slate-300 space-y-3">
                <div className="text-slate-500">{`// RESTful API Endpoints Sample Payload`}</div>
                <div className="text-cyan-400">
                  POST <span className="text-slate-300">/api/v1/orders/checkout</span>
                </div>
                <pre className="text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800/80 overflow-x-auto">
{`{
  "customer": {
    "name": "Alex Carter",
    "email": "customer@example.com",
    "table_number": 7
  },
  "items": [
    { "item_id": "entree_01", "name": "Artisan Truffle Burger", "quantity": 2, "price": 18.50 },
    { "item_id": "bev_03", "name": "Cold-Brew Espresso", "quantity": 1, "price": 4.50 }
  ],
  "fulfillment_type": "DINE_IN",
  "status": "QUEUED_FOR_KITCHEN"
}`}
                </pre>
                <div className="flex items-center gap-3 text-slate-400 text-[11px] pt-1">
                  <span className="text-emerald-400 font-semibold">Response: 201 Created</span>
                  <span>·</span>
                  <span>Order ID: #ORD-9824</span>
                  <span>·</span>
                  <span>Estimated Prep: 18 min</span>
                </div>
              </div>
            )}

            {/* Tab 4: Tech Stack */}
            {activeTab === 'techstack' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-mono">FRONTEND</div>
                  <div className="font-semibold text-white mt-1">Next.js &amp; React</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Tailwind CSS · Motion</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-mono">BACKEND RUNTIME</div>
                  <div className="font-semibold text-white mt-1">Node.js &amp; Express</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">REST APIs · WebSockets</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-mono">PERSISTENCE</div>
                  <div className="font-semibold text-white mt-1">PostgreSQL &amp; Redis</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">ACID Transactions · Cache</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-mono">DEPLOYMENT</div>
                  <div className="font-semibold text-white mt-1">Linux VPS &amp; Nginx</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">nip.io · PM2 Service</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
