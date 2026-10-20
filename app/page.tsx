import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveDemoSection from '@/components/LiveDemoSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import ExperienceSection from '@/components/ExperienceSection';
import VercelOptimizationGuide from '@/components/VercelOptimizationGuide';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const DEVELOPER_NAME = 'Sulaiman Mustafa';
  const DEVELOPER_EMAIL = 'sulaimanmustafa718@gmail.com';
  const LIVE_DEMO_URL = 'https://restaurant.163.245.216.163.nip.io';

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar email={DEVELOPER_EMAIL} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero email={DEVELOPER_EMAIL} demoUrl={LIVE_DEMO_URL} />

        {/* Flagship Featured Live Demo Section */}
        <LiveDemoSection demoUrl={LIVE_DEMO_URL} />

        {/* Projects & Engineering Case Studies */}
        <ProjectsSection demoUrl={LIVE_DEMO_URL} />

        {/* Technical Skills & Mastery Matrix */}
        <SkillsSection />

        {/* Interactive Developer Shell / Terminal */}
        <InteractiveTerminal email={DEVELOPER_EMAIL} demoUrl={LIVE_DEMO_URL} />

        {/* Career Experience & Milestones */}
        <ExperienceSection />

        {/* Vercel Deployment Optimization Breakdown */}
        <VercelOptimizationGuide />

        {/* Direct Contact Section */}
        <ContactSection email={DEVELOPER_EMAIL} />
      </main>

      {/* Footer */}
      <Footer email={DEVELOPER_EMAIL} demoUrl={LIVE_DEMO_URL} />
    </div>
  );
}
