import React, { useEffect, useRef, useState } from 'react';

const GiscusKommentarar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    addLog('Startar lasting av Giscus...');
    containerRef.current.innerHTML = '';

    // Fang opp globale feil
    const handleError = (e: ErrorEvent) => {
      if (e.message.includes('giscus')) addLog(`JS-feil: ${e.message}`);
    };
    window.addEventListener('error', handleError);

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

    script.onload = () => addLog('Giscus-skript lasta ned.');
    script.onerror = () => addLog('FEIL: Kunne ikkje henta skriptet frå giscus.app.');
    
    containerRef.current.appendChild(script);

    return () => {
      window.removeEventListener('error', handleError);
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <section className="giscus-container" style={{ marginTop: '4rem', borderTop: '1px solid var(--lys-grå)', paddingTop: '2rem' }}>
      <div id="giscus-wrapper" ref={containerRef}></div>
      
      <div style={{ padding: '1rem', background: '#f3f4f6', marginTop: '1rem', borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'var(--skrift-kode)', border: '1px solid #d1d5db' }}>
        <strong style={{ display: 'block', marginBottom: '0.5rem' }}>System-logg (for feilsøking):</strong>
        {logs.length === 0 && <span>Ventar på aktivitet...</span>}
        {logs.map((log, i) => (
          <div key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '2px 0' }}>{log}</div>
        ))}
        <p style={{ marginTop: '0.5rem', fontSize: '0.65rem', color: '#6b7280' }}>
          Tips: Sjekk at "Discussions" er på i GitHub-innstillingane, og at Vivaldi tillèt tredjeparts-cookies.
        </p>
      </div>
    </section>
  );
};

export default GiscusKommentarar;
