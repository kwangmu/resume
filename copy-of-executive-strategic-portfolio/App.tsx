import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ProfileSection } from './components/ProfileSection';
import { CompetencySection } from './components/CompetencySection';
import { ExperienceSection } from './components/ExperienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SectionId } from './types';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['profile', 'summary', 'competency', 'experience', 'philosophy'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-slate-100">
      
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative flex flex-col md:flex-row z-10">
        {/* Mobile Header */}
        <div className="md:hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-2xl border-b border-amber-500/20 backdrop-blur-lg">
          <div className="flex items-center gap-2">
            <Crown className="text-amber-400" size={24} />
            <span className="font-bold text-lg">Executive Resume</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hover:text-amber-400 transition-colors">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Luxury Sidebar Navigation */}
        <Sidebar 
          activeSection={activeSection} 
          isMobileMenuOpen={isMobileMenuOpen} 
          onNavigate={scrollToSection}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-12 space-y-16 md:space-y-32">
          <ProfileSection id="profile" />
          <CompetencySection id="competency" />
          <ExperienceSection id="experience" />
          <PhilosophySection id="philosophy" />
        </main>
      </div>
    </div>
  );
};

export default App;