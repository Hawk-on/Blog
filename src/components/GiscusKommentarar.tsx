import React, { useEffect, useState } from 'react';

const GiscusKommentarar: React.FC = () => {
  const [theme, setTheme] = useState('preferred_color_scheme');

  useEffect(() => {
    const oppdaterTema = () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const isDark = currentTheme === 'dark' || (!currentTheme && prefersDark);
      setTheme(isDark ? 'dark' : 'light');
    };

    // Initial sjekk
    oppdaterTema();

    // Lytt på endringar i DOM-attributtar (for tema-brytaren)
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

  return (
    <section className="giscus-container">
      <script
        src="https://giscus.app/client.js"
        data-repo="Hawk-on/Blog"
        data-repo-id="R_kgDOMmE1eA"
        data-category="Announcements"
        data-category-id="DIC_kwDOMmE1eM4CiAsm"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme={theme}
        data-lang="no"
        crossOrigin="anonymous"
        async
      ></script>
    </section>
  );
};

export default GiscusKommentarar;
