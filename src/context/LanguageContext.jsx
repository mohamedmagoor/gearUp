import React, { createContext, useState, useEffect } from "react";
import i18n from "../i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "EN"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);

    // Handle RTL for Arabic
    if (language === "AR") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
