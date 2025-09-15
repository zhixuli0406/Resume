import { createContext, useContext, useState, ReactNode } from 'react';

// Language types
export type Language = 'zh-TW' | 'en';

// Translation interface
export interface Translations {
  // Navigation
  nav: {
    personalInfo: string;
    experience: string;
    skills: string;
    teaching: string;
    contact: string;
  };
  
  // Header
  header: {
    name: string;
    chineseName: string;
    title: string;
    subtitle: string;
    professionalProfile: string;
    profileDescription: string;
    philosophy: string;
    philosophyQuote: string;
    philosophyAuthor: string;
  };
  
  // Experience
  experience: {
    title: string;
    current: string;
    responsibilities: string;
    jobs: {
      backendFlutter: {
        title: string;
        company: string;
        period: string;
        duration: string;
        responsibilities: string[];
      };
      frontend: {
        title: string;
        company: string;
        period: string;
        duration: string;
        responsibilities: string[];
      };
      fullstack: {
        title: string;
        company: string;
        period: string;
        duration: string;
        responsibilities: string[];
      };
      mis: {
        title: string;
        company: string;
        period: string;
        duration: string;
        responsibilities: string[];
      };
    };
  };
  
  // Skills
  skills: {
    title: string;
    continuousLearning: string;
    learningDescription1: string;
    learningDescription2: string;
    categories: {
      networkSecurity: {
        title: string;
        skills: string[];
      };
      frontend: {
        title: string;
        skills: string[];
      };
      backend: {
        title: string;
        skills: string[];
      };
      mobile: {
        title: string;
        skills: string[];
      };
      devops: {
        title: string;
        skills: string[];
      };
      systemAnalysis: {
        title: string;
        skills: string[];
      };
    };
  };
  
  // Teaching
  teaching: {
    title: string;
    guestLecturer: {
      title: string;
      institution: string;
      description: string;
      tags: string[];
    };
    corporateTraining: {
      title: string;
      company: string;
      achievements: string[];
      tags: string[];
    };
    philosophy: {
      title: string;
      description: string;
      quote: string;
    };
  };
  
  // Contact
  contact: {
    title: string;
    phone: string;
    email: string;
    linkedin: string;
  };
}

// Language context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh-TW');
  
  // Import translations based on current language
  const translations: Record<Language, Translations> = {
    'zh-TW': require('./locales/zh-TW.json'),
    'en': require('./locales/en.json'),
  };
  
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
