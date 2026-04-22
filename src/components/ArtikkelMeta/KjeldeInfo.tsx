import React, { useState, useEffect } from 'react';

interface KjeldeKategori {
  id: string;
  tittel: string;
  farge: string;
  beskriving: string;
}

const kategoriar: Record<string, KjeldeKategori> = {
  'A': {
    id: 'A',
    tittel: 'Høg etterrettelegheit',
    farge: '#10b981', // Grøn
    beskriving: 'Offisielle dokument frå statlege organ, internasjonale organisasjonar (FN, IMF) eller fagfellevurdert forsking. Svært låg risiko for feilinformasjon.'
  },
  'B': {
    id: 'B',
    tittel: 'God kvalitet',
    farge: '#3b82f6', // Blå
    beskriving: 'Anerkjend journalistikk (Reuters, FT) eller leiande tenketankar (CSIS, Chatham House). Redaksjonelt kontrollert innhald med god kjeldebruk.'
  },
  'C': {
    id: 'C',
    tittel: 'Fagleg OSINT / Spesialistkjelde',
    farge: '#f59e0b', // Gul
    beskriving: 'Tekniske analysar eller domenespesifikke nyheitskjelder. Krever ofte teknisk innsikt for verifisering. Kan ha sterke særinteresser.'
  },
  'D': {
    id: 'D',
    tittel: 'Ustadfesta / Partisisk',
    farge: '#ef4444', // Raud
    beskriving: 'Lekkasjar, uoffisielle kjelder eller medium med tydeleg politisk slagside. Vert brukt for å visa diskurs, men krev store atterhald.'
  }
};

const KjeldeInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('opne-kjeldeinfo', handleOpen);
    return () => window.removeEventListener('opne-kjeldeinfo', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="kjelde-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="kjelde-modal" onClick={e => e.stopPropagation()}>
        <header className="kjelde-modal__header">
          <h2>Metode for kjeldekritikk</h2>
          <button className="kjelde-modal__lukk" onClick={() => setIsOpen(false)}>×</button>
        </header>
        
        <div className="kjelde-modal__innhald">
          <p>Kvar kjelde i denne analysen er vurdert etter ein metodisk skala for å gje eit realistisk bilete av informasjonsverdien og potensielle svakheiter.</p>
          
          <div className="kjelde-skala">
            {Object.values(kategoriar).map(kat => (
              <div key={kat.id} className="kjelde-skala__item">
                <span className="kjelde-badge" style={{ backgroundColor: kat.farge }}>{kat.id}</span>
                <div>
                  <strong>{kat.tittel}</strong>
                  <p>{kat.beskriving}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="kjelde-modal__note">
            <p><em>Merk: Ei kjelde i klasse D kan framleis ha høg forklaringsverdi, men me deklarerer at informasjonen ikkje er uavhengig verifisert.</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KjeldeInfo;
