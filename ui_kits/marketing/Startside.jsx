/* global React */
// Startside — landing/nav page. Dark block slides in, name + pill buttons fade up.
const { useState, useEffect } = React;

function Startside({ onNavigate }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 20); return () => clearTimeout(t); }, []);

  return (
    <div className="eh-startside" data-mounted={mounted}>
      <div className="eh-startside__block" />
      <div className="eh-startside__ui">
        <p className="eh-startside__name">Eirik<br/>Hodne</p>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate('kode'); }}
           className="eh-startside__btn" style={{ animationDelay: '0.4s' }}>Kodeeksempler</a>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate('svg'); }}
           className="eh-startside__btn" style={{ animationDelay: '0.65s' }}>Vektorverkstedet</a>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate('undervisning'); }}
           className="eh-startside__btn" style={{ animationDelay: '0.95s' }}>Undervisningsopplegg</a>
      </div>
    </div>
  );
}

window.Startside = Startside;
