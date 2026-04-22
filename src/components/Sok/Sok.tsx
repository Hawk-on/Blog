import React, { useEffect } from 'react';

const Sok: React.FC = () => {
  useEffect(() => {
    // Initialiser Pagefind UI
    const initPagefind = async () => {
      if (typeof window !== 'undefined' && (window as any).PagefindUI) {
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
      }
    };

    initPagefind();
  }, []);

  return (
    <div id="search" className="pagefind-container">
      <link href="/Blog/pagefind/pagefind-ui.css" rel="stylesheet" />
      <script src="/Blog/pagefind/pagefind-ui.js" is:inline></script>
    </div>
  );
};

export default Sok;
