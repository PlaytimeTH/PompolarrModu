/* ============ Tweaks Panel ============ */

function Tweaks({ state, setState }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setVisible(true);
      if (e.data.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    window.parent.postMessage({type: '__edit_mode_set_keys', edits: patch}, '*');
  };

  // Apply to DOM
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--clay', state.accent);
    r.style.setProperty('--bone', state.bone);
    r.style.setProperty('--bone-2', shade(state.bone, -3));
    r.style.setProperty('--cocoa', state.dark);
  }, [state]);

  if (!visible) return null;

  const accents = [
    ['#B8755B', 'Clay'],
    ['#8E6B4A', 'Walnut'],
    ['#6B7556', 'Moss'],
    ['#3E5266', 'Slate'],
    ['#9C4F4F', 'Brick'],
  ];
  const bones = [
    ['#F5F0E8', 'Bone'],
    ['#EFE9DD', 'Linen'],
    ['#F2EDE3', 'Paper'],
    ['#E8E4D9', 'Oat'],
  ];
  const darks = [
    ['#3B2F22', 'Cocoa'],
    ['#1E1B16', 'Ink'],
    ['#2B2F26', 'Forest'],
    ['#2D2530', 'Plum'],
  ];

  return (
    <div style={{
      position:'fixed', bottom: 20, right: 20,
      width: 280,
      background:'rgba(245,240,232,.96)',
      backdropFilter:'blur(20px)',
      border:'1px solid var(--line-2)',
      borderRadius: 14,
      padding: 18,
      zIndex: 200,
      boxShadow:'0 30px 80px -20px rgba(30,27,22,.4)',
      fontFamily:'var(--f-sans)',
    }}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 14}}>
        <div className="serif" style={{fontSize: 18, letterSpacing:'-.01em'}}>Tweaks</div>
        <div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--mute)'}}>Live</div>
      </div>

      <TweakGroup label="Accent">
        <Swatches options={accents} value={state.accent} onChange={v => update({accent: v})}/>
      </TweakGroup>

      <TweakGroup label="Base">
        <Swatches options={bones} value={state.bone} onChange={v => update({bone: v})}/>
      </TweakGroup>

      <TweakGroup label="Dark tone">
        <Swatches options={darks} value={state.dark} onChange={v => update({dark: v})}/>
      </TweakGroup>

      <TweakGroup label="Heading font">
        <SegBtn options={[['newsreader','Newsreader'],['fraunces','Fraunces'],['ibm-plex','Plex Serif']]} value={state.serif} onChange={v => update({serif: v})}/>
      </TweakGroup>

      <TweakGroup label="Hero scene">
        <SegBtn options={[['moss','Outdoor'],['cocoa','Editorial'],['peach','Warm']]} value={state.hero} onChange={v => update({hero: v})}/>
      </TweakGroup>
    </div>
  );
}

function TweakGroup({ label, children }) {
  return (
    <div style={{marginBottom: 14}}>
      <div className="mono" style={{fontSize: 9, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--mute)', marginBottom: 8}}>{label}</div>
      {children}
    </div>
  );
}

function Swatches({ options, value, onChange }) {
  return (
    <div style={{display:'flex', gap: 6}}>
      {options.map(([c, name]) => (
        <button key={c} onClick={() => onChange(c)} title={name} style={{
          width: 28, height: 28, borderRadius: 8,
          background: c,
          border: value === c ? '2px solid var(--ink)' : '1px solid var(--line-2)',
          cursor:'pointer',
          padding: 0,
          transition:'transform .15s var(--ease)',
        }}/>
      ))}
    </div>
  );
}

function SegBtn({ options, value, onChange }) {
  return (
    <div style={{display:'flex', gap: 4, padding: 3, background:'rgba(30,27,22,.06)', borderRadius: 8}}>
      {options.map(([k, label]) => (
        <button key={k} onClick={() => onChange(k)} style={{
          flex: 1, padding:'7px 8px',
          background: value === k ? 'var(--bone)' : 'transparent',
          border: 'none', borderRadius: 5,
          fontSize: 11, fontFamily:'inherit',
          color: value === k ? 'var(--ink)' : 'var(--ink-3)',
          cursor:'pointer',
          transition:'background .15s var(--ease)',
        }}>{label}</button>
      ))}
    </div>
  );
}

function shade(hex, pct) {
  // simple lighten/darken
  const h = hex.replace('#','');
  const n = parseInt(h, 16);
  let r = (n >> 16) + pct;
  let g = ((n >> 8) & 0xff) + pct;
  let b = (n & 0xff) + pct;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((r<<16) | (g<<8) | b).toString(16).padStart(6,'0');
}

Object.assign(window, { Tweaks });
