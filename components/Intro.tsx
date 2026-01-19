
import React from 'react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center animate-fade-in">
      <div className="mb-8 relative">
        <div className="absolute -inset-4 bg-orange-100/50 rounded-full blur-2xl -z-10"></div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold serif text-gray-800 leading-tight">
          你是想重新開始，<br />還是只想喘口氣？
        </h1>
      </div>
      
      <p className="text-lg text-gray-600 max-w-md mb-12 leading-relaxed">
        2025 年初，透過氣味與心靈的共鳴，<br />
        探尋你潛意識裡最真實的需求。
      </p>

      <button
        onClick={onStart}
        className="px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
      >
        開始氣味之旅
      </button>

      <div className="mt-20 flex gap-4 text-xs text-gray-400 uppercase tracking-widest">
        <span>Psychology</span>
        <span>•</span>
        <span>Scent Profile</span>
        <span>•</span>
        <span>AI Analysis</span>
      </div>
    </div>
  );
};

export default Intro;
