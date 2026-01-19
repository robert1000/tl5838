
import React from 'react';
import { ScentResult } from '../types';

interface ResultProps {
  result: ScentResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const shareToFB = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 animate-fade-in">
      <div className="glass-effect rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 mb-8">
        {/* Header Visual */}
        <div className={`h-56 flex flex-col items-center justify-center relative overflow-hidden ${
          result.coreNeed === 'Restart' ? 'bg-orange-50' : 'bg-blue-50'
        }`}>
          <div className="absolute inset-0 opacity-10">
            <img src={`https://picsum.photos/seed/${result.scentName}/1200/600`} alt="abstract" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative text-center px-4">
            <span className="px-4 py-1 rounded-full border border-gray-400 text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4 inline-block font-bold">
              {result.coreNeed === 'Restart' ? 'The Rebirth' : 'The Serenity'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold serif text-gray-800 drop-shadow-sm">
              {result.archetype}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <section className="mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-gray-900 rounded-full"></span>
              年度心理洞察
            </h3>
            <div className="text-gray-600 leading-relaxed text-lg whitespace-pre-line space-y-4">
              {result.insight}
            </div>
          </section>

          <section className="mb-12 p-8 rounded-[2rem] bg-gray-50/80 border border-gray-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <svg viewBox="0 0 24 24" className="w-24 h-24" fill="currentColor"><path d="M12,2L12,2L12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7z"/></svg>
            </div>
            <div className="relative">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">你的專屬年度氣味</h3>
              <h4 className="text-3xl font-bold serif text-gray-800 mb-6">{result.scentName}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {result.scentNotes.map((note, i) => (
                  <span 
                    key={i} 
                    className="animate-scale-in px-4 py-1.5 bg-white border border-gray-100 rounded-full text-xs text-gray-600 font-medium shadow-sm"
                    style={{ animationDelay: `${i * 150 + 400}ms` }}
                  >
                    {note}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 italic leading-relaxed border-l-2 border-gray-200 pl-4 mb-8">
                「{result.scentDescription}」
              </p>
              
              <div className="pt-6 border-t border-gray-200/50">
                <p className="text-sm text-gray-400 mb-4">建議搭配產品：</p>
                <a 
                  href={result.productUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 font-bold hover:underline group"
                >
                  {result.productRecommendation}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12 animate-reveal-up" style={{ animationDelay: '1000ms' }}>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-400 rounded-full"></span>
              儀式感建議
            </h3>
            <div className="p-6 rounded-2xl bg-orange-50/50 text-gray-700 font-medium leading-relaxed shadow-inner border border-orange-100/50">
              ✨ {result.recommendedActivity}
            </div>
          </section>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 animate-reveal-up" style={{ animationDelay: '1200ms' }}>
              <button
                onClick={shareToFB}
                className="flex-1 py-4 px-6 rounded-full bg-[#1877F2] text-white font-bold hover:bg-[#166fe5] transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                分享測驗結果
              </button>
              <button
                onClick={onRestart}
                className="flex-1 py-4 px-6 rounded-full border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
              >
                重新探索靈魂
              </button>
            </div>
            
            <div className="pt-8 border-t border-gray-100 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1500ms' }}>
              <a 
                href="https://e-seed.com.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors font-medium"
              >
                專屬品牌：AI 策略行銷合作請洽 e-seed
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
