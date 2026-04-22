import React from 'react';

const Footer: React.FC = () => {
  const aar = new Date().getFullYear();

  return (
    <footer className="nettstad-footer">
      <div className="container--brei">
        <div className="nettstad-footer__indre">
          <span>© {aar} hawk-on</span>
          <span>Skrive på nynorsk · Bygd med <a href="https://astro.build">Astro</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
