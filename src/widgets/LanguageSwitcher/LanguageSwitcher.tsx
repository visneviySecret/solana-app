import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language === "ru" ? "en" : "ru";
    return (
        <button
            style={{
                background: "#f8f9fa",
                color: "#333",
                border: "1px solid #dee2e6",
                borderRadius: 8,
                padding: "6px 18px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
            }}
            onClick={() => {
                i18n.changeLanguage(lang);
                localStorage.setItem("lang", lang);
            }}
        >
            {lang.toUpperCase()}
        </button>
    );
}; 