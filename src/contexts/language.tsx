import { createContext } from 'react';

const defaultLanguageOption = {
  code: 'en',
  text: 'English',
};

export const languageOptions = [
  defaultLanguageOption,
  {
    code: 'zh',
    text: '中文',
  },
];

const LanguageContext = createContext<string | undefined>(undefined);
