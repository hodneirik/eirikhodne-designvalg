/* global React */
// Rutenettside — Undervisningsopplegg grid + detail view. Pixel-close to source.
const { useState } = React;

const DEMO = [
  { id: 'tekstskaping', tittel: 'Tekstskaping', fag: 'Norsk', undertekst: 'Elevene utforsker stemmen sin gjennom småtekster og delte utkast.', tags: ['fremhevet'] },
  { id: 'funksjoner', tittel: 'Funksjoner i hverdagen', fag: 'Matematikk', undertekst: 'Kobler lineære funksjoner til dagligdagse situasjoner elevene kjenner.', tags: ['fremhevet'] },
  { id: 'kildekritikk', tittel: 'Kildekritikk på nett', fag: 'Samfunn', undertekst: 'En praktisk økt om å lese, sjekke og sammenligne kilder.', tags: [] },
  { id: 'geometri', tittel: 'Geometri i rommet', fag: 'Matematikk', undertekst: 'Tredimensjonal tenkning med papp, lim og enkle modeller.', tags: ['fremhevet'] },
  { id: 'lesestrategier', tittel: 'Lesestrategier', fag: 'Norsk', undertekst: 'Før, under og etter-lesing — en verktøykasse elevene kan eie.', tags: [] },
  { id: 'algoritmer', tittel: 'Algoritmisk tenkning', fag: 'Matematikk', undertekst: 'Uten datamaskin. Bare oppgaver, flytdiagrammer og dialog.', tags: [] }
];

const DETAIL_MD = {
  tekstskaping: `# Tekstskaping\n\nEt opplegg om å finne stemmen sin gjennom korte tekster og delte utkast.\n\n## Læringsmål\n\n- Produsere korte tekster i ulike sjangre\n- Gi og ta imot respons i par\n- Revidere egen tekst basert på tilbakemelding\n\n## Gjennomføring\n\nStart med en lav terskel — to minutter fri skriving. Del i par. Les høyt. Still ett spørsmål hver.\n\n> Det er ikke teksten som skal bli perfekt. Det er eleven som skal bli trygg.\n\nRepeter med ny sjanger neste økt.`,
  funksjoner: `# Funksjoner i hverdagen\n\nEt kort opplegg som kobler lineære funksjoner til situasjoner elevene allerede kjenner — mobilabonnement, bussbilletter, turpriser.\n\n## Aktiviteter\n\n1. Samle tre prisstrukturer fra nett\n2. Modeller hver som y = ax + b\n3. Sammenlign grafisk i GeoGebra`,
  kildekritikk: `# Kildekritikk på nett\n\nEn økt der elevene lærer å spørre: *hvem står bak, når ble det skrevet, hvorfor ble det skrevet, og hvem vil tjene på det?*`,
  geometri: `# Geometri i rommet\n\nTredimensjonal tenkning uten høyteknologi. Papp, lim, saks.`,
  lesestrategier: `# Lesestrategier\n\nFør, under og etter-lesing. En verktøykasse elevene kan eie selv.`,
  algoritmer: `# Algoritmisk tenkning\n\nUten datamaskin. Bare oppgaver, flytdiagrammer og dialog.`
};

function FilterBar({ tags, active, onChange }) {
  return (
    <div className="eh-filter">
      {tags.map(t => (
        <button key={t.key} onClick={() => onChange(t.key)}
                className={'eh-filter__btn' + (active === t.key ? ' is-active' : '')}>{t.label}</button>
      ))}
    </div>
  );
}

function Tile({ opplegg, onOpen }) {
  const erFremhevet = (opplegg.tags || []).includes('fremhevet');
  return (
    <div className="eh-tile" onClick={() => onOpen(opplegg)}>
      {erFremhevet && <span className="eh-tile__badge">Fremhevet</span>}
      {opplegg.fag && <span className="eh-tile__fag">{opplegg.fag}</span>}
      <h4 className="eh-tile__title">{opplegg.tittel}</h4>
      <div className="eh-tile__img" aria-hidden="true" />
      <p className="eh-tile__text">{opplegg.undertekst}</p>
      <button className="eh-tile__btn" onClick={e => { e.stopPropagation(); onOpen(opplegg); }}>Les opplegget</button>
    </div>
  );
}

function tinyMd(src) {
  // Extremely small markdown renderer — enough for the demo.
  return src.split(/\n\n+/).map((blk, i) => {
    if (blk.startsWith('# ')) return <h1 key={i}>{blk.slice(2)}</h1>;
    if (blk.startsWith('## ')) return <h2 key={i}>{blk.slice(3)}</h2>;
    if (blk.startsWith('> ')) return <blockquote key={i}>{blk.slice(2)}</blockquote>;
    if (/^[-*] /m.test(blk)) return <ul key={i}>{blk.split('\n').map((l, j) => <li key={j}>{l.replace(/^[-*] /, '')}</li>)}</ul>;
    if (/^\d+\. /m.test(blk)) return <ol key={i}>{blk.split('\n').map((l, j) => <li key={j}>{l.replace(/^\d+\. /, '')}</li>)}</ol>;
    return <p key={i}>{blk}</p>;
  });
}

function Detail({ opplegg, onBack }) {
  return (
    <div className="eh-detail">
      <button className="eh-detail__back" onClick={onBack}>← Tilbake til oversikten</button>
      <div className="eh-detail__inner">{tinyMd(DETAIL_MD[opplegg.id] || '# ' + opplegg.tittel)}</div>
      <button className="eh-detail__pdf" onClick={() => window.print()}>↓ Last ned som PDF</button>
    </div>
  );
}

function Rutenettside({ onGoHome }) {
  const [active, setActive] = useState('fremhevet');
  const [detail, setDetail] = useState(null);

  const fag = [...new Set(DEMO.map(d => d.fag).filter(Boolean))].sort();
  const tags = [
    { key: 'fremhevet', label: 'Fremhevet' },
    { key: 'alle', label: 'Alle' },
    ...fag.map(f => ({ key: f.toLowerCase(), label: f }))
  ];
  const filtered = active === 'alle' ? DEMO
    : active === 'fremhevet' ? DEMO.filter(d => (d.tags || []).includes('fremhevet'))
    : DEMO.filter(d => (d.fag || '').toLowerCase() === active);

  if (detail) {
    return (
      <div className="eh-page">
        <Detail opplegg={detail} onBack={() => setDetail(null)} />
      </div>
    );
  }

  return (
    <div className="eh-page">
      <header className="eh-header">
        <div className="eh-header__text">
          <h1 className="eh-header__title">Undervisningsopplegg (under arbeid)</h1>
          <p className="eh-header__sub">Noen av mine favorittopplegg. Tekstene er basert på KI-intervju med meg. Mer ressurser og bilder kommer etterhvert.</p>
        </div>
        <a href="#" className="eh-header__home" onClick={e => { e.preventDefault(); onGoHome && onGoHome(); }}>← eirikhodne.no</a>
      </header>
      <FilterBar tags={tags} active={active} onChange={setActive} />
      <div className="eh-grid-wrap">
        <div className="eh-grid">
          {filtered.map(o => <Tile key={o.id} opplegg={o} onOpen={setDetail} />)}
        </div>
      </div>
    </div>
  );
}

window.Rutenettside = Rutenettside;
