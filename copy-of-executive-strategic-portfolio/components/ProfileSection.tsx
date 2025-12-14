import React, { useState } from 'react';
import { Mail, Phone, Sparkles, Crown, Zap, User } from 'lucide-react';
import { SectionProps } from '../types';

export const ProfileSection: React.FC<SectionProps> = ({ id }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id={id} className="min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center scroll-mt-20">
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl overflow-visible md:overflow-hidden border border-amber-500/20 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-blue-600/20 h-40 md:h-32 lg:h-56 pb-20 md:pb-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="absolute bottom-2 md:-bottom-[31.2px] left-1/2 md:left-8 lg:left-12 -translate-x-1/2 md:translate-x-0 flex flex-col md:flex-row items-center gap-4 md:gap-4">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-slate-800 rounded-full border-4 border-amber-500/30 shadow-2xl flex items-center justify-center overflow-hidden relative group shrink-0">
              {!imageError ? (
                <img 
                  src="/profile.jpg" 
                  alt="Executive Profile" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                <User size={60} className="md:w-20 md:h-20 lg:w-24 lg:h-24 text-amber-400/50 relative z-10" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"></div>
            </div>
            {/* Name box below profile picture on mobile, next to on desktop */}
            <div className="bg-slate-900 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-amber-500/20 shadow-lg text-center md:text-left">
              <h2 className="flex items-center justify-center md:justify-start gap-1 md:gap-2 text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500">
                <span>박</span>
                <span>준</span>
                <span>현</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 mt-1">
                Park Joon-hyun
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative pt-8 md:pt-24 px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 md:mb-8 gap-4 md:gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <Sparkles className="text-amber-400" size={20} />
                <span className="text-amber-400 text-xs md:text-sm font-semibold tracking-wider">EXECUTIVE PROFILE</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 leading-tight mb-2 md:mb-3">
                Strategic Sales & <br/>Operations Executive
              </h1>
              <p className="text-amber-400 font-bold mt-2 md:mt-3 text-base md:text-xl flex items-center gap-2">
                <Crown size={18} />
                CSO / CBO / COO Candidate
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 text-amber-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  🏆 Environmental Appliances
                </span>
                <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  💎 Subscription Economy
                </span>
                <span className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  🚀 New Business Builder
                </span>
              </div>
            </div>
            <div className="w-full lg:w-auto flex flex-col gap-2 md:gap-3 bg-slate-800/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-amber-500/20 backdrop-blur-sm mt-4 lg:mt-0">
              <div className="flex items-center gap-2 md:gap-3 text-slate-300 hover:text-amber-400 cursor-pointer transition-colors group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors shrink-0">
                  <Mail size={16} />
                </div>
                <span className="text-xs md:text-sm break-all">pjh7839@naver.com</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-slate-300 hover:text-amber-400 cursor-pointer transition-colors group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors shrink-0">
                  <Phone size={16} />
                </div>
                <span className="text-xs md:text-sm">010-3761-9153</span>
              </div>
            </div>
          </div>
          
          <div id="summary" className="scroll-mt-32 mt-8 md:mt-12 border-t border-amber-500/20 pt-6 md:pt-10 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl md:rounded-2xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-4 md:mb-6 flex items-center gap-2">
              <Zap className="text-amber-400" size={20} />
              핵심 전략 요약
            </h3>
            <blockquote className="border-l-4 border-amber-500 pl-4 md:pl-8 italic text-slate-200 text-base md:text-xl leading-relaxed bg-gradient-to-r from-amber-500/10 to-transparent p-4 md:p-6 rounded-r-xl md:rounded-r-2xl">
              "시스템 혁신과 데이터 통찰로 지속 가능한 성장을 설계하는 <span className="text-amber-400 font-bold not-italic">✨ Business Architect</span>"
            </blockquote>
            <p className="mt-4 md:mt-6 text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg">
              지난 <span className="text-amber-400 font-bold">26년간</span> 국내 Top-tier 환경가전 기업에서 <strong className="text-amber-300">'기존 사업의 수익성 방어'</strong>와 <strong className="text-amber-300">'신사업의 폭발적 성장'</strong>을 동시에 달성한 검증된 리더입니다. 
              단순한 매출 증대를 넘어 MBO 및 영업 제도 혁신을 통해 조직의 체질을 개선하고, 실패 사례를 철저히 분석하여 리스크 관리 시스템으로 승화시키는 위기관리 능력을 갖췄습니다.
              정체된 조직에는 <span className="text-amber-400">'활력'</span>을, 비효율적 프로세스에는 <span className="text-amber-400">'시스템'</span>을 입혀 귀사의 Top-line(외형)과 Bottom-line(이익)을 동시에 견인하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};