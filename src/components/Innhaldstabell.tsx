import React, { useState, useEffect, useRef } from 'react';

interface Heading {
  id: string;
  text: string;
  tagName: string;
}

const Innhaldstabell: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Finn alle h2 og h3 i artikkelkroppen
    const kropp = document.getElementById('artikkel-kropp');
    if (!kropp) return;

    const headingElements = Array.from(kropp.querySelectorAll('h2, h3'));
    
    const mappedHeadings = headingElements.map((el, i) => {
      if (!el.id) el.id = `seksjon-${i}`;
      return {
        id: el.id,
        text: el.textContent || '',
        tagName: el.tagName
      };
    });

    setHeadings(mappedHeadings);

    // Lukk som default på mobil
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsOpen(false);
    }

    // IntersectionObserver for å markere aktiv seksjon
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: [0, 0.5, 1] }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  if (headings.length < 2) return null;

  return (
    <details className="innhaldstabell" open={isOpen} onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}>
      <summary className="innhaldstabell__tittel">
        <span>Innhald</span>
        <span className="innhaldstabell__pil" aria-hidden="true">▾</span>
      </summary>
      <ol className="innhaldstabell__liste">
        {headings.map((h) => (
          <li key={h.id} className={h.tagName === 'H3' ? 'innhaldstabell__element--h3' : ''}>
            <a 
              href={`#${h.id}`} 
              className={activeId === h.id ? 'is-aktiv' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(h.id);
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
};

export default Innhaldstabell;
