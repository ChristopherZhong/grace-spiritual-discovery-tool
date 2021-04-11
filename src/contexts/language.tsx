import { createContext } from 'react';

const defaultLanguage = {
  code: 'en',
  text: 'English',
};

export const languages = [
  defaultLanguage,
  {
    code: 'zh',
    text: '中文',
  },
];

const LanguageContext = createContext<string | undefined>(undefined);
