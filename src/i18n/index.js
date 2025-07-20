import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import EN from './EN.json';
import AR from './AR.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind react-i18next to the instance
  .init({
    resources: {
      EN: { translation: EN },
      AR: { translation: AR }
    },
    fallbackLng: 'EN', // Fallback language
    debug: false, // Set to true for development
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;