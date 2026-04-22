import React, { useState, useEffect } from 'react';

interface HeaderProps {
  base: string;
  aktuellSti: string;
}

const Header: React.FC<HeaderProps> = ({ base, aktuellSti }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialiser tema frå localStorage eller system-preferanse
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialIsDark = currentTheme === 'dark' || (!currentTheme && prefersDark);
    setIsDark(initialIsDark);
    
    // Lytt på endringar i system-preferanse
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
    
    // Trigger logo-oppdatering viss funksjonen finst (frå gamal skript-logikk)
    if ((window as any).__oppdaterLogoikon) {
      (window as any).__oppdaterLogoikon();
    }
  };

  const isBloggActive = aktuellSti === base || aktuellSti === `${base}/` || 
    (!aktuellSti.startsWith(`${base}/om`) && !aktuellSti.startsWith(`${base}/tag`));

  return (
    <header className="nettstad-header">
      <div className="container--brei">
        <div className="nettstad-header__indre">
          <a href={base} className="nettstad-header__logo">
            <img 
              src={`${base}/favicon-header${isDark ? '-dark' : ''}.png`} 
              alt="" 
              className="nettstad-header__ikon" 
              id="header-ikon" 
              aria-hidden="true" 
            />
            hawk-on
          </a>
          
          <input 
            type="checkbox" 
            id="meny-bryter" 
            className="meny-bryter__input" 
            aria-label="Opne eller lukk meny" 
            aria-controls="hovudnav" 
          />
          <label htmlFor="meny-bryter" className="meny-bryter" aria-hidden="true">
            <span className="meny-bryter__linje"></span>
            <span className="meny-bryter__linje"></span>
            <span className="meny-bryter__linje"></span>
          </label>
          
          <nav id="hovudnav">
            <ul className="nettstad-nav">
              <li>
                <a href={base} className={isBloggActive ? 'aktiv' : ''}>Blogg</a>
              </li>
              <li>
                <a href={`${base}/om`} className={aktuellSti === `${base}/om` ? 'aktiv' : ''}>Om</a>
              </li>
              <li>
                <a href="https://hawk-on.github.io">CV</a>
              </li>
              <li>
                <a href={`${base}/rss.xml`} data-umami-event="nav-rss">RSS</a>
              </li>
              <li>
                <button 
                  type="button" 
                  className="tema-bryter" 
                  onClick={toggleTheme}
                  aria-label="Byt fargetema"
                >
                  <span className="tema-bryter__sol">☀</span>
                  <span className="tema-bryter__mane">☽</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
