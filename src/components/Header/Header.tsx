import React from 'react';
import { useHeader } from './useHeader';
import './Header.css';

interface HeaderProps {
  base: string;
  aktuellSti: string;
}

const Header: React.FC<HeaderProps> = ({ base, aktuellSti }) => {
  const { isDark, toggleTheme, isBloggActive } = useHeader(base, aktuellSti);

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
