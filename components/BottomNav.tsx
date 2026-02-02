
import React from 'react';
import { AppView } from '../types';

interface BottomNavProps {
  currentView: AppView;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  onBackToCalendar: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ 
  currentView, 
  activeCategory, 
  onCategoryChange,
  onBackToCalendar 
}) => {
  if (currentView === AppView.CALENDAR) return null;

  const categories = [
    { 
      id: 'Çorba', 
      label: 'Çorba',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 1-9-9c0-1.5.5-3 1.5-4.5C5 7 5.5 6.5 6 6h12c.5.5 1 1 1.5 1.5 1 1.5 1.5 3 1.5 4.5a9 9 0 0 1-9 9z"/>
          <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/>
        </svg>
      )
    },
    { 
      id: 'Ana Yemek', 
      label: 'Ana',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 1-9-9h18a9 9 0 0 1-9 9z"/>
          <path d="M12 12V3"/>
          <circle cx="12" cy="5" r="2"/>
        </svg>
      )
    },
    { 
      id: 'Yardımcı Yemek', 
      label: 'Yan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    { 
      id: 'Tatlı', 
      label: 'Tatlı',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 19c0 1 1 2 2 2h8c1 0 2-1 2-2V7H6v12z"/>
          <path d="M12 3c-3 0-6 2-6 4h12c0-2-3-4-6-4z"/>
        </svg>
      )
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-[1.5rem]">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4 md:px-8 py-2 pb-6">
        <div className="flex-1 flex justify-around">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => onCategoryChange?.(cat.id)}
              className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all duration-200 ${
                activeCategory === cat.id 
                ? 'text-emerald-800 scale-105' 
                : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`transition-all ${activeCategory === cat.id ? 'bg-emerald-50 p-2 rounded-lg text-emerald-800' : 'p-2'}`}>
                {cat.icon}
              </div>
              <span className={`text-[10px] md:text-xs font-black uppercase tracking-tight ${activeCategory === cat.id ? 'opacity-100' : 'opacity-60'}`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
        
        <div className="w-[1px] h-8 bg-gray-100 mx-3"></div>
        
        <button 
          onClick={onBackToCalendar}
          className="flex flex-col items-center gap-1 px-4 py-1.5 text-emerald-950/40 hover:text-emerald-900 transition-colors"
        >
          <div className="p-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-tight">Takvim</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
