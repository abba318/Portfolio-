'use client';

import { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  email: string;
}

export default function ContactSection({ email }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    fromEmail: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.fromEmail || !formState.message) return;

    // Compose mailto link
    const mailtoSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name} via Portfolio`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.fromEmail}\n\nMessage:\n${formState.message}`
    );

    // Open mail client
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#090b10] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Have a project in mind, want to hire a dedicated full-stack engineer, or discuss real-time systems?
            Reach out directly to Sulaiman Mustafa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0c1017] border border-cyan-500/30 shadow-lg shadow-cyan-950/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Direct Email
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="text-base sm:text-lg font-mono font-bold text-white break-all">
                {email}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-950" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail App</span>
                </a>
              </div>
            </div>

            {/* Availability details */}
            <div className="p-6 rounded-2xl bg-[#0c1017] border border-slate-800/90 space-y-3.5 text-xs">
              <div className="flex items-start gap-3 text-slate-300">
                <Briefcase className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Engagement Types</div>
                  <div className="text-slate-400 mt-0.5">
                    Full-time Software Engineer, Contract Developer, Technical Architecture &amp; System Optimization.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Turnaround Time</div>
                  <div className="text-slate-400 mt-0.5">
                    Emails are replied to within 24 hours. Available across global time zones for remote work.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300 pt-2 border-t border-slate-800/80">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Production Vetting</div>
                  <div className="text-slate-400 mt-0.5">
                    Live production systems running 24/7 (e.g. restaurant ordering platform).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1017] border border-slate-800/90 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below and hit submit to initiate communication.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your email client should have opened with your draft addressed to{' '}
                    <strong className="text-cyan-300">{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', fromEmail: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-cyan-400 hover:underline pt-2 inline-block"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.fromEmail}
                        onChange={(e) => setFormState({ ...formState, fromEmail: e.target.value })}
                        placeholder="sconnor@company.com"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Software Developer Role / Project Consultation"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Sulaiman, we loved your restaurant platform demo and want to talk about building..."
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all hover:shadow-cyan-500/35"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sulaiman Mustafa</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
