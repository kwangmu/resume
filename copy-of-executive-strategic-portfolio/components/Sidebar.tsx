import React from 'react';
import { 
  User, Briefcase, Award, Target, Users, Crown, Sparkles 
} from 'lucide-react';
import { NavItemProps, SectionId } from '../types';

interface SidebarProps {
  activeSection: string;
  isMobileMenuOpen: boolean;
  onNavigate: (id: SectionId) => void;
  onClose?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, icon: Icon, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-300 border-l-4 text-left group
      ${isActive 
        ? 'bg-gradient-to-r from-amber-500/20 to-transparent border-amber-400 text-white font-bold' 
        : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-amber-200'
      }`}
  >
    <Icon size={20} className={`transition-transform duration-300 ${isActive ? 'scale-110 text-amber-400' : 'group-hover:scale-110'}`} />
    <span className="text-sm tracking-wide">{label}</span>
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, isMobileMenuOpen, onNavigate, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={onClose}
        />
      )}
      <aside className={`
        fixed md:sticky top-0 h-screen w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white z-40 transition-transform duration-300 shadow-2xl flex flex-col justify-between border-r border-amber-500/10
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
      <div>
        <div className="p-6 md:p-8 border-b border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <Crown className="text-amber-400" size={24} />
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">RESUME</h1>
          </div>
          <p className="text-amber-300/80 text-xs mt-2 uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={12} />
            Strategic Executive
          </p>
        </div>
        <nav className="mt-6">
          <NavItem 
            id="profile" 
            label="PROFILE & INTRO" 
            icon={User} 
            isActive={activeSection === 'profile'} 
            onClick={(id) => onNavigate(id as SectionId)} 
          />
          <NavItem 
            id="summary" 
            label="EXECUTIVE SUMMARY" 
            icon={Target} 
            isActive={activeSection === 'summary'} 
            onClick={(id) => onNavigate(id as SectionId)} 
          />
          <NavItem 
            id="competency" 
            label="CORE COMPETENCIES" 
            icon={Award} 
            isActive={activeSection === 'competency'} 
            onClick={(id) => onNavigate(id as SectionId)} 
          />
          <NavItem 
            id="experience" 
            label="CAREER HISTORY" 
            icon={Briefcase} 
            isActive={activeSection === 'experience'} 
            onClick={(id) => onNavigate(id as SectionId)} 
          />
          <NavItem 
            id="philosophy" 
            label="LEADERSHIP" 
            icon={Users} 
            isActive={activeSection === 'philosophy'} 
            onClick={(id) => onNavigate(id as SectionId)} 
          />
        </nav>
      </div>
    </aside>
    </>
  );
};