
import React, { useState, useCallback } from 'react';
import { AppStatus, ScentResult } from './types';
import { QUESTIONS } from './constants';
import { analyzePsychology } from './services/geminiService';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.INTRO);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<ScentResult | null>(null);

  const startQuiz = () => {
    setStatus(AppStatus.QUIZ);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const performAnalysis = async (finalAnswers: Record<number, string>) => {
    setStatus(AppStatus.ANALYZING);
    try {
      const analysis = await analyzePsychology(finalAnswers);
      setResult(analysis);
      setStatus(AppStatus.RESULT);
    } catch (error) {
      console.error("Critical error during analysis:", error);
      setStatus(AppStatus.INTRO);
    }
  };

  const handleAnswer = useCallback((value: string) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    if (!currentQuestion) return;

    const nextAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(nextAnswers);

    // 延遲轉換以提供視覺回饋，最後一題後直接進入分析
    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        performAnalysis(nextAnswers);
      }
    }, 400);
  }, [answers, currentQuestionIndex]);

  const restart = () => {
    setResult(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setStatus(AppStatus.INTRO);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
      <header className="p-6 flex justify-between items-center glass-effect sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-[10px] font-bold">SN</div>
          <span className="font-bold serif tracking-tighter text-xl uppercase text-gray-800">Scent Mood</span>
        </div>
        <div className="text-[10px] tracking-widest text-gray-400 uppercase hidden sm:block font-bold">
          2025 Scent Psychology Experience
        </div>
      </header>

      <main className="flex-grow">
        {status === AppStatus.INTRO && (
          <Intro onStart={startQuiz} />
        )}

        {status === AppStatus.QUIZ && (
          <Quiz
            question={QUESTIONS[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            total={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {status === AppStatus.ANALYZING && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] animate-pulse px-6 text-center">
            <div className="w-20 h-20 border-t-4 border-gray-900 rounded-full animate-spin mb-10"></div>
            <h2 className="text-2xl serif text-gray-800 font-bold mb-4">正在調製您的專屬年度香氛...</h2>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              分析您的潛意識抉擇與心靈共鳴，這可能需要幾秒鐘的時間。
            </p>
          </div>
        )}

        {status === AppStatus.RESULT && result && (
          <Result result={result} onRestart={restart} />
        )}
      </main>

      <footer className="p-8 text-center text-xs text-gray-400 border-t border-gray-50 mt-12">
        <div className="mb-2 font-bold tracking-widest uppercase">Psychological Scent Profile</div>
        <p>© 2025 Scent Mood x e-seed AI Strategic Marketing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
