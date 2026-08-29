'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label="Language / Idioma">
      <button
        type="button"
        className={`lang-flag ${lang === 'pt' ? 'active' : ''}`}
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
        title="Português"
      >
        <span aria-hidden="true">🇧🇷</span>
        <span className="lang-sr-only">Português</span>
      </button>
      <button
        type="button"
        className={`lang-flag ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        title="English"
      >
        <span aria-hidden="true">🇺🇸</span>
        <span className="lang-sr-only">English</span>
      </button>
    </div>
  );
}
