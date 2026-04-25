import React, { useEffect, useRef, useState } from 'react';

const GiscusKommentarar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [debugMsg, setDebugMsg] = useState<string>('');

  useEffect(() => {
    if (!containerRef.current) return;

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

    script.onerror = () => setDebugMsg('Klarte ikkje å lasta giscus.app/client.js. Sjekk adblocker eller nettverk.');
    
    containerRef.current.appendChild(script);

    // Sjekk etter iFrame-feil etter 5 sekund
    const timer = setTimeout(() => {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) {
        setDebugMsg('Giscus-skriptet køyrde, men ingen iframe vart laga. Dette skjer ofte viss tredjeparts-cookies er blokkerte.');
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <section className="giscus-container" style={{ marginTop: '4rem', borderTop: '1px solid var(--lys-grå)', paddingTop: '2rem' }}>
      <div id="giscus-wrapper" ref={containerRef}></div>
      {debugMsg && (
        <div style={{ padding: '1rem', background: '#fee2e2', color: '#b91c1c', marginTop: '1rem', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'var(--skrift-kode)' }}>
          <strong>Debug-info:</strong> {debugMsg}
        </div>
      )}
    </section>
  );
};

export default GiscusKommentarar;
