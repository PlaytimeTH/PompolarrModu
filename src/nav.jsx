/* ============ Nav + Side Rail ============ */

function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="glyph">P</div>
          <span>Pompolarr<span style={{opacity:.5,margin:'0 8px'}}>·</span><span style={{fontFamily:'var(--f-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase'}}>Pet TH</span></span>
        </div>
        <nav className="nav-links">
          <a href="#why">Why Modu</a>
          <a href="#modes">Modes</a>
          <a href="#anatomy">Anatomy</a>
          <a href="#gallery">Gallery</a>
          <a href="#specs">Specs</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-line" href="https://lin.ee/QGQpvyGY" target="_blank" rel="noopener" style={{padding:'10px 16px'}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.631.627.61.61 0 01-.51-.253l-2.443-3.317v2.94a.627.627 0 01-1.254 0V8.108a.627.627 0 01.625-.627c.162 0 .378.092.495.258l2.466 3.32V8.108a.63.63 0 111.259 0v4.771zm-5.915 0a.627.627 0 01-.627.627.63.63 0 01-.63-.627V8.108a.63.63 0 111.257 0v4.771zm-2.466.627H4.743a.631.631 0 01-.626-.627V8.108a.63.63 0 111.258 0v4.141h1.754a.63.63 0 110 1.257M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
          ปรึกษาทาง LINE
        </a>
      </div>
    </div>
  );
}

function SideRail() {
  const ids = ['hero','why','modes','anatomy','gallery','compare','specs','stories','faq','cta'];
  const labels = {
    hero: 'Intro', why: 'Why Modu', modes: 'Modes', anatomy: 'Anatomy',
    gallery: 'Gallery', compare: 'Compare', specs: 'Specs', stories: 'Stories', faq: 'FAQ', cta: 'Contact'
  };
  const active = useActiveSection(ids);
  return (
    <div className="rail">
      {ids.map((id, i) => (
        <a key={id} href={`#${id}`} className={`r-dot ${active === id ? 'active' : ''}`}>
          <span className="label">{String(i+1).padStart(2,'0')} · {labels[id]}</span>
          <span className="b"/>
        </a>
      ))}
    </div>
  );
}

Object.assign(window, { Nav, SideRail });
