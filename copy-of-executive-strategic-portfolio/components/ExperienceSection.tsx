import React from 'react';
import { Briefcase, Users, ChevronRight, Building } from 'lucide-react';
import { SectionProps } from '../types';

export const ExperienceSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 flex items-center gap-2 md:gap-3">
          경력 상세
        </h2>
      </div>
      
      {/* Timeline Container with Gold Line */}
      <div className="space-y-6 md:space-y-12 relative md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-amber-500/20 md:before:via-amber-500/50 md:before:to-amber-500/20">
        
        {/* Card 1 */}
        <div className="relative flex flex-col md:flex-row md:items-center group">
          <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 md:p-8 rounded-xl md:rounded-2xl border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-1 duration-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
              <h3 className="text-lg md:text-2xl font-bold text-amber-300 flex items-center gap-2">
                법인사업실 / 실장 (상무)
              </h3>
              <span className="text-xs md:text-sm font-bold text-amber-950 bg-amber-400 px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg shadow-amber-500/20 mt-2 md:mt-0 w-fit">
                2021.07 – 2025.12
              </span>
            </div>
            <p className="text-amber-100/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 border-b border-amber-500/20 pb-3 md:pb-4">
              <Users size={14} className="md:w-4 md:h-4 text-amber-400" />
              B2B/B2G 영업 총괄, 2,300명 조직 운영
            </p>
            <ul className="space-y-2 md:space-y-3 text-slate-300">
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">💰 일시불 매출 1,007억 달성:</strong> 대형 납품, 통합 관리 수주 전환으로 폭발적 성장</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">🏨 신시장 개척:</strong> 5성급 호텔(메리어트/힐튼) 1만 객실 독점, 서울시 교육청 5만 대 수주</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">🤝 조직 통합:</strong> 이원화된 법인 지국과 본사 B2B 조직 통합(2,300명)하여 시너지 창출</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col md:flex-row md:items-center md:flex-row-reverse group">
          <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 md:p-8 rounded-xl md:rounded-2xl border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-1 duration-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
              <h3 className="text-lg md:text-2xl font-bold text-amber-300 flex items-center gap-2">
                2사업부문 / 사업부문장
              </h3>
              <span className="text-xs md:text-sm font-bold text-amber-400 bg-amber-900/40 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-amber-500/30 mt-2 md:mt-0 w-fit">
                2018.01 – 2021.06
              </span>
            </div>
            <p className="text-amber-100/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 border-b border-amber-500/20 pb-3 md:pb-4">
              <Briefcase size={14} className="md:w-4 md:h-4 text-amber-400" />
              수도권 핵심 권역 현장 총괄, 연 4,000억 포트폴리오 관리
            </p>
            <ul className="space-y-2 md:space-y-3 text-slate-300">
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">📈 거대 매출 규모 관리:</strong> 연평균 3,950억 원 규모 운용, 연 4% 초과 성장 달성</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">🔍 데이터 경영:</strong> P&L 분석을 통한 저효율 지국 통폐합 및 인센티브 전략 실행</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col md:flex-row md:items-center group">
          <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 md:p-8 rounded-xl md:rounded-2xl border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-1 duration-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
              <h3 className="text-lg md:text-2xl font-bold text-amber-300 flex items-center gap-2">
                홈케어사업실 / 사업부문장
              </h3>
              <span className="text-xs md:text-sm font-bold text-amber-400 bg-amber-900/40 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-amber-500/30 mt-2 md:mt-0 w-fit">
                2015.05 – 2017.12
              </span>
            </div>
            <p className="text-amber-100/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 border-b border-amber-500/20 pb-3 md:pb-4">
              <Building size={14} className="md:w-4 md:h-4 text-amber-400" />
              매트리스 신사업 런칭 및 운영 총괄
            </p>
            <ul className="space-y-2 md:space-y-3 text-slate-300">
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">🚀 사업 규모 5배 Scale-up:</strong> 매출 170억 → 860억 (505% 성장)</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">🏗️ 인프라 혁신:</strong> '매트리스 전용 물류 센터' 및 '2인 1조 설치 프로세스' 업계 최초 구축</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative flex flex-col md:flex-row md:items-center md:flex-row-reverse group">
          <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 md:p-8 rounded-xl md:rounded-2xl border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 group-hover:-translate-y-1 duration-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
              <h3 className="text-lg md:text-2xl font-bold text-amber-300 flex items-center gap-2">
                W영업조직 & CL영업조직
              </h3>
              <span className="text-xs md:text-sm font-bold text-amber-400 bg-amber-900/40 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-amber-500/30 mt-2 md:mt-0 w-fit">
                2011.01 – 2015.04
              </span>
            </div>
            <p className="text-amber-100/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 border-b border-amber-500/20 pb-3 md:pb-4">
              <Users size={14} className="md:w-4 md:h-4 text-amber-400" />
              영업 제도 기획, 판매 채널 전략 수립 (팀장)
            </p>
            <ul className="space-y-2 md:space-y-3 text-slate-300">
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">✨ 영업 제도 혁신:</strong> MBO(목표관리) 도입 및 등록비 제도 신설로 계정 질적 향상</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <ChevronRight size={16} className="md:w-5 md:h-5 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm"><strong className="text-amber-300">🛡️ 위기 관리:</strong> '렌탈 하우스' 시범 운영의 낮은 ROI 분석 후 과감한 철수 및 채널 재편 제안</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};