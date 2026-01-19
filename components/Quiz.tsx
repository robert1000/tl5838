
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  question: Question | undefined;
  currentIndex: number;
  total: number;
  onAnswer: (value: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ question, currentIndex, total, onAnswer }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Safety check for undefined question
  if (!question) {
    return (
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <div className="animate-spin w-10 h-10 border-4 border-gray-900 border-t-transparent rounded-full mx-auto"></div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / total) * 100;

  const handleSelect = (value: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    onAnswer(value);
    
    // Reset internal processing flag after a short delay to allow transition
    setTimeout(() => {
        setIsProcessing(false);
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-gray-400">Step {currentIndex + 1} of {total}</span>
          <span className="text-2xl serif text-gray-800">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-gray-900 h-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold serif text-gray-800 mb-10 leading-snug">
        {question.text}
      </h2>

      <div className="grid gap-4">
        {question.options && question.options.map((option) => (
          <button
            key={option.id}
            disabled={isProcessing}
            onClick={() => handleSelect(option.value)}
            className={`glass-effect text-left p-6 rounded-2xl hover:bg-white hover:border-gray-400 transition-all group flex items-center justify-between ${isProcessing ? 'opacity-50 cursor-default' : ''}`}
          >
            <span className="text-lg text-gray-700 group-hover:text-gray-900">{option.text}</span>
            <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
              <div className="w-2 h-2 rounded-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
