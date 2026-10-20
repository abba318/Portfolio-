'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  Server,
  Code2,
  Database,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Backend & Systems' | 'Frontend & UI';
  description: string;
  detailedCaseStudy?: {
    challenge: string;
    architecture: string;
    outcome: string;
    metrics: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  tags: string[];
}

interface ProjectsSectionProps {
  demoUrl: string;
}

export default function ProjectsSection({ demoUrl }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Backend & Systems' | 'Frontend & UI'>('All');
  const [expandedId, setExpandedId] = useState<string | null>('restaurant-app');

  const projects: Project[] = [
    {
      id: 'restaurant-app',
      title: 'Restaurant Management & POS Ecosystem',
      category: 'Full-Stack',
      isFeatured: true,
      liveUrl: demoUrl,
      description:
        'A comprehensive food service and digital ordering platform featuring digital menus, live table tracking, real-time kitchen display synchronization, and order lifecycle management.',
      detailedCaseStudy: {
        challenge:
          'Traditional dining establishments struggle with disconnected paper tickets and disjointed third-party delivery apps that take high commissions.',
        architecture:
          'Client-first responsive Next.js front-end paired with Node.js/Express REST and WebSocket order stream. Managed on a dedicated Linux VPS behind Nginx with reverse proxy and automated PM2 process lifecycle.',
        outcome:
          'Full digital order flow operational at sub-second UI speeds, eliminating order bottlenecks and providing direct customer ownership.',
        metrics: ['Sub-1.2s First Contentful Paint', '100% Mobile Order Friendly', 'Zero Dropped WebSocket Tickets'],
      },
      tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Linux VPS', 'PM2'],
    },
    {
      id: 'cloudops-pulse',
      title: 'CloudOps Pulse - Microservices Observability',
      category: 'Backend & Systems',
      description:
        'Real-time telemetry and metrics visualization dashboard for distributed microservices, featuring anomaly alerting, latency histograms, and distributed tracing.',
      detailedCaseStudy: {
        challenge:
          'Engineering teams lose hours triaging cascading failures across distributed containers without unified correlation IDs.',
        architecture:
          'Event-driven ingest pipeline parsing structured JSON logs, buffering through Redis streams, and serving aggregated time-series data to a high-frequency canvas dashboard.',
        outcome:
          'Reduced Mean Time to Resolution (MTTR) by 60% with instant trace isolation and automated alert trigger thresholds.',
        metrics: ['10,000+ Events/sec Ingestion', '< 25ms Metric Query Latency', 'Multi-tenant RBAC'],
      },
      tags: ['TypeScript', 'Node.js', 'Redis', 'WebSockets', 'Tailwind CSS', 'Docker'],
    },
    {
      id: 'fleetflow',
      title: 'FleetFlow - Real-Time Logistics Dispatch Engine',
      category: 'Full-Stack',
      description:
        'Dynamic vehicle tracking and dispatch coordination system equipped with geofencing triggers, live routing optimization, and automated customer ETA alerts.',
      detailedCaseStudy: {
        challenge:
          'Manual dispatching caused driver delays, fuel wastage, and inaccurate delivery estimates during peak traffic windows.',
        architecture:
          'Next.js 15 App router dashboard communicating with geospatial spatial queries on PostgreSQL/PostGIS, synchronizing real-time coordinate streams over bi-directional channels.',
        outcome:
          'Cut delivery turnaround times by 22% with automated waypoint clustering and instant driver reassignment.',
        metrics: ['Real-Time GPS Sync (1s updates)', 'Geofence Breach Detection', 'Turn-by-turn ETA API'],
      },
      tags: ['React', 'Next.js', 'PostGIS', 'Node.js', 'WebSockets', 'Tailwind CSS'],
    },
    {
      id: 'paypulse-ledger',
      title: 'PayPulse - Idempotent Double-Entry Ledger API',
      category: 'Backend & Systems',
      description:
        'A mission-critical financial accounting ledger and webhook distribution engine guaranteeing strict idempotency and zero-divergence account balances.',
      detailedCaseStudy: {
        challenge:
          'Network retries and concurrent transactions risking double-charging or phantom balance updates in asynchronous payment flows.',
        architecture:
          'PostgreSQL serializable isolation levels with cryptographically hashed idempotency keys and exponential backoff retry queues for webhook delivery.',
        outcome:
          'Processed over 500,000 simulated audit transactions with 100% mathematical reconciliation and zero reconciliation anomalies.',
        metrics: ['Strict Idempotency Guarantees', 'ACID Compliant Transactions', 'Automated Dead-letter Queue'],
      },
      tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Jest', 'REST APIs'],
    },
    {
      id: 'devfolio-engine',
      title: 'Ultra-Fast Developer Portfolio & Vercel Pipeline',
      category: 'Frontend & UI',
      description:
        'The very portfolio you are browsing — architected for sub-second cold starts, 100/100 Core Web Vitals, accessible keyboard navigation, and seamless Vercel edge deployment.',
      detailedCaseStudy: {
        challenge:
          'Modern developer portfolios often suffer from bloated client-side JS bundles, sluggish animations, and poor mobile accessibility.',
        architecture:
          'Next.js 15 with Tailwind CSS v4, zero-bundle overhead static generation, motion primitives, and strict semantic HTML hierarchy.',
        outcome:
          'Flawless 100% performance score on Google Lighthouse with zero layout shift (CLS: 0.00).',
        metrics: ['100/100 Lighthouse Performance', '0ms Layout Shift', 'Full WCAG AA Contrast'],
      },
      tags: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Vercel'],
    },
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#090b10] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span>ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Production architectures, real-time engines, and scalable applications built with
              modern technology stacks.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {(['All', 'Full-Stack', 'Backend & Systems', 'Frontend & UI'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className={`group rounded-2xl bg-[#0c1017] border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  project.isFeatured
                    ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/20'
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="p-6">
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between gap-3 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-cyan-400 font-semibold">{project.category}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      {project.isFeatured ? (
                        <span className="text-emerald-400 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Production Demo
                        </span>
                      ) : (
                        <span>Production Architecture</span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Brief description */}
                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Expander */}
                  {project.detailedCaseStudy && (
                    <div className="mt-5 pt-4 border-t border-slate-800/80">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="flex items-center justify-between w-full text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1"
                      >
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          {isExpanded ? 'Hide Engineering Specs' : 'View Architecture & Specs'}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
                          <div>
                            <div className="font-mono text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                              The Technical Challenge
                            </div>
                            <p className="text-slate-300">{project.detailedCaseStudy.challenge}</p>
                          </div>
                          <div>
                            <div className="font-mono text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                              System Architecture
                            </div>
                            <p className="text-slate-300">{project.detailedCaseStudy.architecture}</p>
                          </div>
                          <div>
                            <div className="font-mono text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                              Measurable Impact
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1.5">
                              {project.detailedCaseStudy.metrics.map((m) => (
                                <div
                                  key={m}
                                  className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-medium"
                                >
                                  {m}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-[#080b10] border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Launch App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.id === 'restaurant-app' && (
                      <a
                        href="#live-demo"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                      >
                        <span>Inspect in Simulator</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    Sulaiman Mustafa
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
