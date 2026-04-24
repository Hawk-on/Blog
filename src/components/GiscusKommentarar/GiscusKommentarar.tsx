import React, { useEffect, useRef } from 'react';

const GiscusKommentarar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Rydd opp før ny rendering
    containerRef.current.innerHTML = '';

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = currentTheme === 'dark' || (!currentTheme && prefersDark) ? 'dark' : 'light';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Hawk-on/Blog');
    script.setAttribute('data-repo-id', 'R_kgDOMmE1eA');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOMmE1eM4CiAsm');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'no');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <section className="giscus-container" style={{ marginTop: '4rem', borderTop: '1px solid var(--lys-grå)', paddingTop: '2rem' }}>
      <div id="giscus-wrapper" ref={containerRef}></div>
    </section>
  );
};

export default GiscusKommentarar;
