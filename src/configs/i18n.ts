import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'br',
        backend: {
            loadPath: `/locales/{{lng}}.json`
        },
        fallbackLng: 'br',
        debug: false,
        keySeparator: false,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        }
    })
