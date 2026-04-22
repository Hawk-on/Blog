import { useState, useEffect } from 'react';

export const useGiscus = () => {
  const [theme, setTheme] = useState('preferred_color_scheme');

  useEffect(() => {
    const oppdaterTema = () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const isDark = currentTheme === 'dark' || (!currentTheme && prefersDark);
      setTheme(isDark ? 'dark' : 'light');
    };

    oppdaterTema();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          oppdaterTema();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return { theme };
};
