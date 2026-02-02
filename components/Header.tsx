
import React from 'react';

interface HeaderProps {
  onTitleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTitleClick }) => {
  return (
    <header className="bg-white pt-10 pb-6 px-6 md:px-12 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        <div onClick={onTitleClick} className="cursor-pointer group">
          <h1 className="text-3xl md:text-4xl font-serif font-black text-[#064e3b] tracking-tight leading-none transition-all">
            Ramazan Sofrası
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[2px] w-8 bg-[#d4af37]"></div>
            <p className="text-[10px] md:text-xs text-[#b8860b] font-black uppercase tracking-[0.3em]">Hicri 1447 • 2026</p>
          </div>
        </div>
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center text-2xl md:text-3xl shadow-xl shadow-emerald-900/10 overflow-hidden border border-emerald-100">
          <img src="/logo.webp" alt="Ramazan Sofrası Logo" className="w-full h-full object-contain p-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
