import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

const defaultLanguage = {
  code: 'en',
  text: 'English',
};

export type Language = typeof defaultLanguage;

export const languages = [
  defaultLanguage,
  {
    code: 'zh',
    text: '中文',
  },
];

export function getLanguage(code: string | unknown): Language {
  console.debug(`>>> getLanguage() : code=${code}`);
  const language = languages.find((value) => value.code === code) || defaultLanguage;
  console.debug(`>>> getLanguage() : language=${JSON.stringify(language)}`)
  return language;
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState(getLanguage(localStorage.getItem('language')));
  const value = { language, setLanguage };
  useEffect(() => { localStorage.setItem('language', language.code); }, [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

const LanguageContext = createContext<{ language: Language, setLanguage: Dispatch<SetStateAction<Language>> } | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
