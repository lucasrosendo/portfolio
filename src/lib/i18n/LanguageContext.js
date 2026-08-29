'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(undefined);

const STORAGE_KEY = 'site-lang';
const DEFAULT_LANG = 'pt';

// Static export has no server to read an Accept-Language header or a
// locale-prefixed route at, so language is a pure client preference:
// default 'pt' on first paint (matches the server-rendered HTML, avoiding
// a hydration mismatch), then swap to whatever was stored on a previous
// visit.
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') {
        // Deliberately post-mount, not a lazy useState initializer: the
        // initial render must match the server-rendered ('pt') HTML, or
        // hydration mismatches. This one-time sync from localStorage right
        // after mount is the standard, safe way to apply a stored
        // preference without corrupting hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(stored);
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — stay on default.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — worst case the choice doesn't persist across reloads.
    }
  }, []);

  const value = { lang, setLang, t: translations[lang] };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
