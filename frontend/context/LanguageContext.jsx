import React, { createContext, useContext, useState } from 'react';
import { translations } from '../lib/translations';

// 1. Crear el Contexto
const LanguageContext = createContext();

// 2. Crear el Provider (Componente envoltorio)
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es'); // Idioma por defecto

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  // Valor que se comparte a toda la app
  const value = {
    lang,
    t: translations[lang], // Devolvemos directamente el objeto de textos traducido
    toggleLang
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Crear el Hook personalizado (Para usarlo fácil)
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}