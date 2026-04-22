import React from 'react';

interface ArtikkelMetaProps {
  datoFormatert: string;
  lesetid?: number;
  tags: string[];
  base: string;
}

const ArtikkelMeta: React.FC<ArtikkelMetaProps> = ({ datoFormatert, lesetid, tags, base }) => {
  return (
    <div className="artikkel-header__meta">
      <span>{datoFormatert}</span>
      <span data-lesetid-auto>{lesetid ? `~${lesetid} min lesing` : ''}</span>
      {tags.map(tag => (
        <a 
          key={tag} 
          href={`${base}/tag/${tag}`} 
          className="tag" 
          data-umami-event="tagg-klikk" 
          data-umami-event-tag={tag}
        >
          {tag}
        </a>
      ))}
    </div>
  );
};

export default ArtikkelMeta;
