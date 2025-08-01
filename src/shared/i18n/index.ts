import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './ru.json';
import en from './en.json';

const resources = {
    ru: { translation: ru },
    en: { translation: en },
};

const savedLang = localStorage.getItem('lang') || 'ru';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n; 