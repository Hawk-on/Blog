import { useState, useEffect } from 'react';

export const useHeader = (base: string, aktuellSti: string) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialIsDark = currentTheme === 'dark' || (!currentTheme && prefersDark);
    setIsDark(initialIsDark);
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!html.getAttribute('data-theme')) {
        setIsDark(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setIsDark(!isDark);
    
    if ((window as any).__oppdaterLogoikon) {
      (window as any).__oppdaterLogoikon();
    }
  };

  const isBloggActive = aktuellSti === base || aktuellSti === `${base}/` || 
    (!aktuellSti.startsWith(`${base}/om`) && !aktuellSti.startsWith(`${base}/tag`));

  return {
    isDark,
    toggleTheme,
    isBloggActive
  };
};
