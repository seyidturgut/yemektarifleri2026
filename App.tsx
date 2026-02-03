import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate, matchPath, Navigate } from 'react-router-dom';
import { AppView, DayMenu, Recipe } from './types';
import { MENU_DATA, RAMADAN_2026_START_DATE } from './constants';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import loaderGif from './loader.gif';

// Helper to calculate Ramadan Day
const getCurrentRamadanDay = () => {
  const now = new Date();
  const start = new Date(RAMADAN_2026_START_DATE);
  now.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const diffTime = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  if (diffDays < 1) return 1;
  return diffDays;
};
// Helper to preload an image
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => resolve(); // Resolve even on error to prevent getting stuck
  });
};

// --- COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const CalendarView: React.FC<{
  currentRamadanDay: number;
  onDaySelect: (day: DayMenu) => void;
}> = ({ currentRamadanDay, onDaySelect }) => (
  <div className="px-6 md:px-12 pb-20 page-transition max-w-4xl mx-auto w-full no-print">
    <div className="py-12 md:py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-black text-[#064e3b] leading-tight transition-all">İftar Takvimi</h2>
      <p className="text-sm md:text-base text-[#b8860b] mt-4 font-bold uppercase tracking-[0.2em] opacity-80">29 Günlük Bereket Rehberi</p>
    </div>

    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 md:gap-6">
      {MENU_DATA.map((day) => (
        <button
          key={day.day}
          onClick={() => onDaySelect(day)}
          className={`aspect-square rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center transition-all border-2 relative overflow-hidden group ${day.day === currentRamadanDay
            ? 'emerald-gradient text-white border-[#064e3b] shadow-2xl scale-105 z-10'
            : 'bg-white text-[#064e3b] border-gray-100 shadow-sm hover:border-[#d4af37] hover:scale-105'
            }`}
        >
          <span className="text-2xl md:text-3xl font-black">{day.day}</span>
          <span className="text-[9px] md:text-[10px] font-black uppercase opacity-60 tracking-widest mt-1">GÜN</span>
          {day.day === currentRamadanDay && <div className="absolute top-2 right-2 w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>}
        </button>
      ))}
    </div>
  </div>
);

const DayDetailView: React.FC<{
  activeCategory: string;

  currentRecipe: Recipe | undefined;
  selectedDay: DayMenu | undefined;
}> = ({ activeCategory, currentRecipe, selectedDay }) => {
  const navigate = useNavigate();

  return (
    <div className="page-transition min-h-screen bg-white max-w-4xl mx-auto w-full">
      {/* Top Bar - No Print */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-50 px-6 py-4 md:py-6 flex items-center justify-between no-print">
        <button
          onClick={() => navigate('/')}
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#064e3b] hover:bg-emerald-50 transition-all shadow-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-7 md:h-7" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-serif font-black text-gray-900 leading-none uppercase">GÜN {selectedDay?.day}</h3>
          <p className="text-[10px] md:text-xs text-[#b8860b] font-black uppercase tracking-[0.2em] mt-1.5">{selectedDay?.date}</p>
        </div>


      </div>

      {/* Printable Area */}
      <div id="recipe-printable-area" className="print:block print:m-0 print:p-0">
        <div className="pb-40 print:pb-4 print:pt-2">
          {/* PDF Header */}
          <div className="hidden print:block text-center py-4 border-b border-gray-100 mb-4 force-no-break">
            <h1 className="text-2xl font-serif font-black text-[#064e3b]">Ramazan Sofrası 2026</h1>
            <p className="text-sm text-[#b8860b] font-bold uppercase mt-0.5">GÜN {selectedDay?.day} • {selectedDay?.date}</p>
          </div>

          {/* Main Hero Image */}
          <div className="p-6 md:p-8 print:p-0 print:mb-4 force-no-break">
            <div className="relative h-72 md:h-80 print:h-48 rounded-[2.5rem] print:rounded-[15px] overflow-hidden shadow-xl border border-gray-50">
              <img
                src={currentRecipe?.imageUrl}
                alt={currentRecipe?.name}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="gold-gradient text-[9px] md:text-[10px] text-[#064e3b] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg mb-2 inline-block print:bg-yellow-500">
                  {currentRecipe?.category}
                </span>
                <h2 className="text-3xl md:text-4xl print:text-xl font-serif font-black text-white leading-tight italic drop-shadow-lg">
                  {currentRecipe?.name}
                </h2>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto print:px-4">
            {/* Stats */}
            <div className="flex gap-4 px-6 md:px-0 mb-6 print:mb-4 avoid-break-inside force-no-break">
              <div className="flex-1 bg-gray-50/60 rounded-[2rem] p-5 print:p-2 border border-gray-100 flex flex-col items-center print:bg-white print:rounded-lg">
                <span className="text-[9px] md:text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Porsiyon</span>
                <span className="text-lg md:text-xl print:text-base font-black text-[#064e3b]">{currentRecipe?.calories} kcal</span>
              </div>
              <div className="flex-1 bg-gray-50/60 rounded-[2rem] p-5 print:p-2 border border-gray-100 flex flex-col items-center print:bg-white print:rounded-lg">
                <span className="text-[9px] md:text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Hazırlık</span>
                <span className="text-lg md:text-xl print:text-base font-black text-[#064e3b]">{currentRecipe?.prepTime}</span>
              </div>
            </div>

            {/* Ingredients & Instructions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-0 mb-6 print:grid-cols-2 print:gap-6 print:mb-4">
              <div className="avoid-break-inside">
                <div className="flex items-center gap-4 mb-6 print:mb-2">
                  <h4 className="text-lg md:text-xl print:text-xs font-serif font-black text-gray-950 uppercase tracking-widest">MALZEMELER</h4>
                  <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>

                <div className="space-y-2.5 print:space-y-1">
                  {currentRecipe?.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-50 shadow-sm print:border-none print:p-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-sm"></div>
                      <span className="text-base md:text-lg print:text-[11px] font-bold text-gray-700">{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="avoid-break-inside print:mt-0">
                <div className="flex items-center gap-4 mb-6 print:mb-2">
                  <h4 className="text-lg md:text-xl print:text-xs font-serif font-black text-gray-950 uppercase tracking-widest">HAZIRLANIŞ</h4>
                  <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>

                <div className="space-y-8 print:space-y-2">
                  {currentRecipe?.instructions.map((step, i) => (
                    <div key={i} className="flex gap-5 print:gap-2 items-start group">
                      <span className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 emerald-gradient text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md print:bg-emerald-900 print:text-white print:w-4 print:h-4 print:text-[8px] print:rounded-sm">
                        {i + 1}
                      </span>
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold pt-1 italic transition-colors hover:text-gray-900 print:text-[11px] print:pt-0">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PDF Footer with Logo and Copyright */}
            <div className={`mt-8 pt-6 border-t border-gray-100 pb-4 avoid-break-inside flex flex-col items-center hidden print:flex`}>
              <img
                src="/logo.webp"
                alt="Logo"
                className="h-10 mb-2 opacity-90 object-contain"
                crossOrigin="anonymous"
              />
              <div className="text-center">
                <p className="text-[#064e3b] text-[10px] print:text-[9px] font-black uppercase tracking-[0.2em]">
                  Ramazan Sofrası 2026
                </p>
                <p className="text-gray-400 text-[8px] print:text-[7px] font-bold uppercase tracking-widest mt-1">
                  Tüm Hakları Saklıdır © 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN WRAPPER ---

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Fix: useParams only works inside <Route>, so we use matchPath for the parent
  const match = matchPath('/gun/:id', location.pathname);
  const id = match?.params.id;

  // State
  const [activeCategory, setActiveCategory] = useState<string>('Çorba');

  const [isLoading, setIsLoading] = useState(false);

  const currentRamadanDay = getCurrentRamadanDay();

  // Initial load simulation removed


  // Derived State from URL
  const isCalendarView = location.pathname === '/';
  const currentDayId = id ? parseInt(id, 10) : null;
  const selectedDay = currentDayId ? MENU_DATA.find(d => d.day === currentDayId) : null;

  // Reset Category when day changes
  useEffect(() => {
    if (selectedDay) {
      setActiveCategory('Çorba');
    }
  }, [selectedDay?.day]);

  const handleDaySelect = async (day: DayMenu) => {
    setIsLoading(true);

    // Find the image to preload (defaulting to the first recipe or specific Category if logic needed)
    // Here we'll preload the first recipe's image which is usually the main dish shown in hero
    const heroRecipe = day.recipes.find(r => r.category === 'Çorba') || day.recipes[0];

    if (heroRecipe?.imageUrl) {
      await preloadImage(heroRecipe.imageUrl);
    }

    navigate(`/gun/${day.day}`);
    setIsLoading(false);
  };


  const currentRecipe = selectedDay?.recipes.find(r => r.category === activeCategory) || selectedDay?.recipes[0];


  const renderLoader = () => (
    <div className={`fixed inset-0 z-[1000] bg-white flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center">
        <img src={loaderGif} alt="Loading..." className="w-64 h-64 object-contain" />
        <p className="mt-4 text-[#064e3b] font-serif font-bold text-lg animate-pulse">Hazırlanıyor...</p>
      </div>
    </div>
  );



  return (
    <div className="app-container shadow-2xl overflow-x-hidden">
      {renderLoader()}
      {isCalendarView && <Header onTitleClick={() => { }} />} {/* Header logic simplified since we are home */}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<CalendarView currentRamadanDay={currentRamadanDay} onDaySelect={handleDaySelect} />} />
          <Route
            path="/gun/:id"
            element={
              selectedDay ? (
                <DayDetailView
                  activeCategory={activeCategory}

                  currentRecipe={currentRecipe}
                  selectedDay={selectedDay}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>



      <div className="no-print">
        <BottomNav
          currentView={isCalendarView ? AppView.CALENDAR : AppView.DAY_DETAIL}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => setActiveCategory(cat)}
          onBackToCalendar={() => navigate('/')}
        />
      </div>
    </div>
  );
};

// --- APP ROOT ---
const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
};

export default App;
