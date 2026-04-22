import React, { useEffect } from 'react';

const Sok: React.FC = () => {
  useEffect(() => {
    // Last Pagefind Component UI dynamisk
    const loadPagefind = async () => {
      if (typeof window !== 'undefined') {
        // Legg til CSS
        if (!document.querySelector('link[href*="pagefind-ui.css"]')) {
          const link = document.createElement('link');
          link.href = '/Blog/pagefind/pagefind-ui.css';
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }

        // Last scriptet viss det ikkje finst
        if (!(window as any).PagefindUI) {
          const script = document.createElement('script');
          script.src = '/Blog/pagefind/pagefind-ui.js';
          script.onload = () => {
            new (window as any).PagefindUI({
              element: "#search",
              showSubResults: true,
              translations: {
                placeholder: "Søk i analysar...",
                clear_search: "Tøm",
                load_more: "Sjå fleire",
                search_label: "Søk",
                filters_label: "Filter",
                zero_results: "Fann ingen ting for [SEARCH_TERM]",
                many_results: "Fann [COUNT] treff for [SEARCH_TERM]",
                one_result: "Fann 1 treff for [SEARCH_TERM]",
                alt_search: "Ingen treff for [SEARCH_TERM]. Viser treff for [DIFFERENT_TERM] i staden",
                search_suggestion: "Prøv å søkja etter [SUGGESTION] i staden",
                searching: "Søkjer..."
              }
            });
          };
          document.head.appendChild(script);
        }
      }
    };

    loadPagefind();
  }, []);

  return (
    <div id="search" className="pagefind-container">
      {/* Pagefind vert injisert her */}
    </div>
  );
};

export default Sok;
