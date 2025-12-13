import React from 'react';
import { TrendingUp, Target, Building, ShieldCheck } from 'lucide-react';
import { SectionProps } from '../types';

export const CompetencySection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 flex items-center gap-2 md:gap-3">
          핵심 역량
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg border border-amber-500/30">
            <TrendingUp size={24} className="md:w-8 md:h-8 text-amber-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-3 md:mb-4 flex items-center gap-2">
            신사업 구축
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            '맨땅'에서 신규 카테고리(매트리스)를 런칭하여 <span className="text-amber-400 font-bold">5배 성장(860억)</span>을 견인하고, 전용 물류/설치 인프라까지 셋업하는 A to Z 실행력 보유.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg border border-blue-500/30">
            <Target size={24} className="md:w-8 md:h-8 text-blue-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-3 md:mb-4 flex items-center gap-2">
            영업 효율화
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            MBO(목표관리) 도입, 수수료 및 등록비 제도 개편을 통해 '무분별한 판매'를 지양하고 <span className="text-blue-400 font-bold">'우량 계정'</span> 중심의 수익 구조 정착.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg border border-cyan-500/30">
            <Building size={24} className="md:w-8 md:h-8 text-cyan-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-cyan-300 mb-3 md:mb-4 flex items-center gap-2">
            채널 다각화
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            전통적 방문판매를 넘어 법인(B2B/B2G), 호텔, 금융권 등 특판 채널을 개척하여 총 매출 <span className="text-cyan-400 font-bold">1,000억 원</span>의 새로운 Cash Cow 창출.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/10">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg border border-purple-500/30">
            <ShieldCheck size={24} className="md:w-8 md:h-8 text-purple-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-3 md:mb-4 flex items-center gap-2">
            위기 관리
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            실패 사례(오프라인 매장)를 냉철하게 분석하여 ROI 관점에서 사업을 재편하고, 이를 조직의 타산지석으로 삼아 더 단단한 전략을 수립.
          </p>
        </div>
      </div>
    </section>
  );
};