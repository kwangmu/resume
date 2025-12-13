import React from 'react';
import { Users, Sparkles } from 'lucide-react';
import { SectionProps } from '../types';

export const PhilosophySection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-24 pb-16 md:pb-32">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 flex items-center gap-2 md:gap-3">
          경영 철학
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        
        <div className="bg-gradient-to-br from-amber-900/50 via-amber-800/50 to-amber-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden border border-amber-500/30 shadow-2xl">
          <div className="absolute top-0 right-0 p-2 md:p-4 opacity-10">
            <Users size={80} className="md:w-32 md:h-32" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b border-amber-400/30 pb-2 md:pb-3 inline-block relative z-10 flex items-center gap-2">
            <Sparkles size={20} />
            Industry Insight
          </h3>
          <div className="space-y-4 md:space-y-6 relative z-10">
            <div className="bg-black/20 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/20">
              <h4 className="font-bold text-amber-200 mb-2 flex items-center gap-2 text-sm md:text-base">
                <span className="text-lg md:text-xl">✨</span> From Product to Experience
              </h4>
              <p className="text-xs md:text-sm text-amber-100 leading-relaxed">환경가전 시장은 단순 '기기 렌탈'을 넘어 공간의 위생과 삶의 질을 책임지는 '구독형 토탈 케어 솔루션'으로 진화해야 합니다.</p>
            </div>
            <div className="bg-black/20 p-3 md:p-4 rounded-lg md:rounded-xl border border-amber-500/20">
              <h4 className="font-bold text-amber-200 mb-2 flex items-center gap-2 text-sm md:text-base">
                <span className="text-lg md:text-xl">🌐</span> Omni-Channel
              </h4>
              <p className="text-xs md:text-sm text-amber-100 leading-relaxed">전통적 방문판매(High-Touch)의 신뢰와 디지털의 효율성을 결합하여 고객 접점을 입체적으로 장악해야 합니다.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-3 md:space-y-4">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-amber-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all group">
            <h4 className="text-lg md:text-xl font-bold text-amber-300 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-xl md:text-2xl">💪</span> 실패를 자산으로 만드는 회복탄력성
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              '보여주기식 확장'보다 '철저한 손익(ROI) 검증'이 중요함을 과거 경험을 통해 체득했습니다. 실패를 숨기지 않고 타산지석 삼아 같은 실수를 반복하지 않는 리스크 관리 시스템을 만듭니다.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-blue-400 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
            <h4 className="text-lg md:text-xl font-bold text-blue-300 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-xl md:text-2xl">⚡</span> 시스템에 기반한 성과주의
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              리더의 '감'이 아닌 MBO와 명확한 보상 체계(System)를 통해 구성원들이 스스로 뛸 수 있는 운동장을 만들어줍니다.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-cyan-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group">
            <h4 className="text-lg md:text-xl font-bold text-cyan-300 mb-2 md:mb-3 flex items-center gap-2">
              <span className="text-xl md:text-2xl">📊</span> 현장 중심, 데이터 경영
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              문제 발생 시 책상 위가 아닌 현장으로 달려갑니다. 현장의 목소리를 듣되, 최종 의사결정은 냉철한 데이터에 기반하여 내립니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};