import React, { useEffect, useState } from 'react';

const GiscusKommentarar: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const oppdaterGiscusTema = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = currentTheme === 'dark' || (!currentTheme && prefersDark) ? 'dark' : 'light';
      
      const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
      if (!iframe) return;

      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: theme } } },
        'https://giscus.app'
      );
    };

    // Lytt på tema-endringar
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === 'data-theme') oppdaterGiscusTema();
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <section className="giscus-container" style={{ marginTop: '4rem', borderTop: '1px solid var(--lys-grå)', paddingTop: '2rem' }}>
      <div id="giscus-wrapper">
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
          data-theme="preferred_color_scheme"
          data-lang="no"
          data-loading="lazy"
          crossOrigin="anonymous"
          async
        ></script>
      </div>
    </section>
  );
};

export default GiscusKommentarar;
