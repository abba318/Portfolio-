'use client';

import {
  Code2,
  Terminal,
  Database,
  Cloud,
  CheckCircle2,
  Cpu,
  Layers,
  Globe,
  Lock,
} from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend & UI Engineering',
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      description: 'Building blazing-fast, accessible, and responsive user interfaces with modern toolchains.',
      skills: [
        { name: 'Next.js 15 (App Router, SSR, SSG)', level: 'Advanced', notes: 'Server Components, Edge Runtime' },
        { name: 'React 19 & React Hooks', level: 'Advanced', notes: 'Concurrent features, custom hooks' },
        { name: 'TypeScript', level: 'Advanced', notes: 'Strict type safety, generics, interfaces' },
        { name: 'Tailwind CSS & CSS Architecture', level: 'Advanced', notes: 'Responsive systems, Tailwind v4' },
        { name: 'State Management (Zustand, Context)', level: 'Proficient', notes: 'Clean client store orchestration' },
        { name: 'Web Performance & Core Web Vitals', level: 'Advanced', notes: 'Zero layout shift, fast LCP' },
      ],
    },
    {
      title: 'Backend & System Architecture',
      icon: <Cpu className="w-4 h-4 text-sky-400" />,
      description: 'Architecting robust, rate-limited, and scalable server-side systems and APIs.',
      skills: [
        { name: 'Node.js & Express.js', level: 'Advanced', notes: 'RESTful architectures, middleware' },
        { name: 'Python & FastAPI', level: 'Proficient', notes: 'Asynchronous APIs, background workers' },
        { name: 'WebSocket & Real-Time Sync', level: 'Advanced', notes: 'Bi-directional live event streaming' },
        { name: 'Authentication & Security (JWT, RBAC)', level: 'Advanced', notes: 'Session handling, OAuth flows' },
        { name: 'API Contract & Schema Design', level: 'Advanced', notes: 'OpenAPI, idempotency keys' },
        { name: 'Microservices & Event-Driven Patterns', level: 'Proficient', notes: 'Decoupled services, pub/sub' },
      ],
    },
    {
      title: 'Databases & Persistence',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      description: 'Designing reliable transactional storage, indexes, and fast caching layers.',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', notes: 'Relational design, indexing, ACID transactions' },
        { name: 'Redis', level: 'Advanced', notes: 'In-memory caching, pub/sub, rate limiters' },
        { name: 'MongoDB', level: 'Proficient', notes: 'Document stores, aggregation pipelines' },
        { name: 'ORM & Query Builders (Prisma, Drizzle)', level: 'Advanced', notes: 'Type-safe schema migrations' },
        { name: 'Data Integrity & Concurrency', level: 'Proficient', notes: 'Pessimistic & optimistic locking' },
      ],
    },
    {
      title: 'Cloud, DevOps & Vercel Deployment',
      icon: <Cloud className="w-4 h-4 text-indigo-400" />,
      description: 'Continuous integration, containerized workflows, and global edge deployments.',
      skills: [
        { name: 'Vercel Deployment & Optimization', level: 'Expert', notes: 'Zero-config edge pipelines, headers' },
        { name: 'Linux Server Administration (VPS)', level: 'Advanced', notes: 'Ubuntu/Debian, systemd, SSH' },
        { name: 'Nginx Reverse Proxy & SSL', level: 'Advanced', notes: 'Load routing, Certbot SSL, gzip' },
        { name: 'Docker & Containerization', level: 'Proficient', notes: 'Multi-stage builds, compose files' },
        { name: 'Git & GitHub Actions CI/CD', level: 'Advanced', notes: 'Automated test & deploy pipelines' },
        { name: 'PM2 Process Management', level: 'Advanced', notes: 'Cluster mode, zero-downtime reloads' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Engineering Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A battle-tested repertoire across the full development stack — from low-latency server APIs
            to high-performance interactive client interfaces.
          </p>
        </div>

        {/* 4-Box Technical Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-[#0c1017] border border-slate-800/90 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {cat.description}
              </p>

              {/* Skills List without Pill Enclosures */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-800/60 last:border-0 last:pb-0 gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 pl-3.5 sm:pl-0">
                      <span className="font-mono text-cyan-400/90 text-[11px]">
                        {skill.level}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400 text-[11px]">
                        {skill.notes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0c121d] to-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Engineering Mindset &amp; Standards
            </div>
            <div className="text-sm font-semibold text-white">
              Code Quality, Maintainability &amp; Pragmatism
            </div>
            <p className="text-xs text-slate-400">
              Sulaiman prioritizes clean type safety, self-documenting code, test coverage, and automated deployment pipelines over fragile shortcuts.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-300 shrink-0">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Production Ready
            </span>
            <span className="text-slate-600">/</span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <CheckCircle2 className="w-4 h-4" /> Vercel Optimized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
