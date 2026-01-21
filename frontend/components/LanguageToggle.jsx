import React from 'react';
import useCyberSound from '../hooks/useCyberSound';
import { useLanguage } from '../context/LanguageContext'; // <--- IMPORTANTE

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage(); // <--- Usamos el contexto
  const { playClick } = useCyberSound();

  const handleClick = () => {
    playClick();
    toggleLang();
  };

  return (
    <button 
        onClick={handleClick}
        className="fixed top-6 right-6 z-[100] flex items-center gap-3 bg-black/60 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full hover:border-cyan-500 transition-all duration-300 group cursor-pointer shadow-lg"
    >
        <span className={`text-xs font-mono font-bold transition-colors ${lang === 'es' ? 'text-cyan-400 shadow-[0_0_10px_currentColor]' : 'text-slate-600'}`}>ES</span>
        <div className="w-8 h-4 bg-slate-800 rounded-full relative p-0.5 border border-slate-600">
            <div className={`w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_8px_currentColor] transition-all duration-300 absolute top-0.5 ${lang === 'en' ? 'left-[18px]' : 'left-[2px]'}`}></div>
        </div>
        <span className={`text-xs font-mono font-bold transition-colors ${lang === 'en' ? 'text-cyan-400 shadow-[0_0_10px_currentColor]' : 'text-slate-600'}`}>EN</span>
    </button>
  );
}