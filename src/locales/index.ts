import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import geoVersion from "../locales/Geo/common.json";
import engVersion from "../locales/Eng/common.json";

const detectionOptions = {
  order: ["path"],
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  htmlTag: document.documentElement,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    resources: {
      ka: {
        translation: geoVersion,
      },
      en: {
        translation: engVersion,
      },
    },
    // lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
