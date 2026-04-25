import React, { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'giscus-widget': any;
    }
  }
}

const GiscusKommentarar: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return currentTheme === 'dark' || (!currentTheme && prefersDark) ? 'dark' : 'light';
    };

    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="giscus-container" style={{ marginTop: '4rem', borderTop: '1px solid var(--lys-grå)', paddingTop: '2rem', minHeight: '300px' }}>
      <giscus-widget
        id="comments"
        repo="Hawk-on/Blog"
        repo-id="R_kgDOR94FZA"
        category="Announcements"
        category-id="DIC_kwDOR94FZM4C6-7g"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="bottom"
        theme={theme}
        lang="no"
        loading="lazy"
      ></giscus-widget>
    </section>
  );
};

export default GiscusKommentarar;
