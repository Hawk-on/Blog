import React, { useEffect, useRef } from 'react';

const GiscusKommentarar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const theme = currentTheme === 'dark' ? 'dark' : 'light';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Hawk-on/Blog');
    script.setAttribute('data-repo-id', 'R_kgDOR94FZA');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOR94FZM4C6-7g');
    script.setAttribute('data-mapping', 'title'); // Endra frå pathname til title
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'no');
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <section className="giscus-container" style={{ marginTop: '4rem', borderTop: '1px solid var(--lys-grå)', paddingTop: '2rem', minHeight: '300px' }}>
      <div id="giscus-wrapper" ref={containerRef}></div>
    </section>
  );
};

export default GiscusKommentarar;
