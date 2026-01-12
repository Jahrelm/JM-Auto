
import React, { useState } from 'react';
import { getCarSuggestions } from '../geminiService';
import { MOCK_CARS } from '../constants';

interface AICarAssistantProps {
  onSuggest: (indices: number[]) => void;
}

const AICarAssistant: React.FC<AICarAssistantProps> = ({ onSuggest }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAISearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setFeedback(null);
    try {
      const result = await getCarSuggestions(query, MOCK_CARS);
      onSuggest(result.filteredIndices);
      setFeedback(result.explanation);
    } catch (err) {
      setFeedback("Something went wrong with the AI. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden -mt-20 z-10 mx-4 lg:mx-0">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-oswald font-bold text-white mb-2">AI PERSONAL ASSISTANT</h2>
            <p className="text-slate-400">Describe your lifestyle and needs, and let our AI find your perfect match.</p>
          </div>
          <div className="flex items-center gap-2">
             <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-500 text-sm font-bold tracking-widest uppercase">Live Intelligence</span>
          </div>
        </div>

        <form onSubmit={handleAISearch} className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'I want a fast electric sedan for city commuting with high tech features'"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all text-lg"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="absolute right-3 top-3 bottom-3 bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white px-8 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            )}
            {isLoading ? 'Thinking...' : 'Search'}
          </button>
        </form>

        {feedback && (
          <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl text-slate-300 animate-fadeIn">
            <p className="flex gap-2">
                <span className="text-red-500 font-bold">AI:</span>
                {feedback}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="text-slate-500 text-sm font-medium mr-2 self-center">Try:</span>
          {['Family SUV', 'Electric Sports', 'Weekend Camping', 'Luxury Sedan'].map(tag => (
            <button 
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-slate-400 hover:text-white transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICarAssistant;
