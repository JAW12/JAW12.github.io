"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationContent } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("jem_portfolio_lang") as Language;
    if (saved === "id" || saved === "en" || saved === "zh") {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("jem_portfolio_lang", lang);
  };

  const toggleLanguage = () => {
    const order: Language[] = ["en", "id", "zh"];
    const currentIndex = order.indexOf(language);
    const next = order[(currentIndex + 1) % order.length];
    handleSetLanguage(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
