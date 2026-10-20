'use client';

import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      period: '2023 — Present',
      role: 'Full-Stack Software Engineer',
      organization: 'Independent Engineering & Client Platforms',
      location: 'Remote / Global',
      summary:
        'Architecting and deploying end-to-end web applications, e-commerce ordering systems, and high-performance APIs. Engineered the production restaurant platform running live at restaurant.163.245.216.163.nip.io.',
      highlights: [
        'Built full-stack POS and kitchen dispatch engine handling table management and real-time ordering.',
        'Configured automated deployment pipelines using Next.js on Vercel and production Linux VPS with Nginx and PM2.',
        'Engineered responsive mobile-first interfaces with sub-second First Contentful Paint (FCP).',
        'Implemented strict data validation, JWT authentication, and secure transactional databases.',
      ],
    },
    {
      period: '2021 — 2023',
      role: 'Software Developer',
      organization: 'Web Systems & Application Development',
      location: 'Remote',
      summary:
        'Designed scalable backends, RESTful APIs, and responsive front-end applications with modern JavaScript/TypeScript ecosystems.',
      highlights: [
        'Developed modular React and Next.js applications with Tailwind CSS and state stores.',
        'Designed relational database schemas with PostgreSQL and optimized indexing for sub-20ms queries.',
        'Collaborated on cross-functional teams to integrate third-party payment gateways and webhooks.',
        'Reduced client bundle sizes by 40% through code splitting and asset optimization.',
      ],
    },
    {
      period: '2020 — 2021',
      role: 'Frontend & Web Developer',
      organization: 'Freelance & Open Source Projects',
      location: 'Remote',
      summary:
        'Created custom websites, interactive client portals, and performance-tuned web interfaces.',
      highlights: [
        'Built 15+ bespoke client websites with 100/100 Lighthouse performance and SEO scores.',
        'Mastered responsive layouts, cross-browser compatibility, and WCAG AA accessibility standards.',
        'Wrote custom bash deployment scripts and configured Nginx virtual hosts.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#090b10] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>CAREER &amp; TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Impact
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A consistent record of delivering reliable software systems, performant web applications,
            and production deployments.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/40 before:via-slate-800 before:to-transparent">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.role + exp.period}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline center node dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-md shadow-cyan-500/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="p-6 rounded-2xl bg-[#0c1017] border border-slate-800/90 hover:border-slate-700 transition-colors shadow-lg">
                    {/* Period & Location header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2">
                      <span className="font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-300 mt-0.5 mb-3">
                      {exp.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
