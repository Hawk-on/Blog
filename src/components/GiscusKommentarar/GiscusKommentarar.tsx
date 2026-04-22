import React from 'react';
import { useGiscus } from './useGiscus';

const GiscusKommentarar: React.FC = () => {
  const { theme } = useGiscus();

  return (
    <section className="giscus-container">
      <script
        src="https://giscus.app/client.js"
        data-repo="Hawk-on/Blog"
        data-repo-id="R_kgDOMmE1eA"
        data-category="Announcements"
        data-category-id="DIC_kwDOMmE1eM4CiAsm"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme={theme}
        data-lang="no"
        crossOrigin="anonymous"
        async
      ></script>
    </section>
  );
};

export default GiscusKommentarar;
