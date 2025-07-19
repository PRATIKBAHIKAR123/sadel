"use client"

import { useEffect } from 'react';
import { useLanguage } from '@/lib/languageContext';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Set the lang attribute on the HTML element
    const htmlElement = document.documentElement;
    if (language === 'العربية') {
      htmlElement.setAttribute('lang', 'ar');
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('lang', 'en');
      htmlElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  return <>{children}</>;
};

export default LanguageWrapper; 