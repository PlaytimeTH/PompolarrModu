/* ============ Primitives used across sections ============ */

const { useState, useEffect, useRef, useMemo } = React;

// Inline stroller glyph — stylized, geometric, NOT a literal product render
function StrollerGlyph({ mode = "stroller", style }) {
  // three simple line silhouettes for the configurator
  if (mode === "carseat") {
    return (
      <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.4" style={style}>
        <path d="M40 110 L40 55 Q40 30 65 30 L135 30 Q160 30 160 55 L160 110" />
        <path d="M55 110 L55 70 Q55 55 70 55 L130 55 Q145 55 145 70 L145 110" />
        <path d="M40 110 L160 110" strokeWidth="1.8"/>
        <path d="M75 30 L75 18 M125 30 L125 18" />
        <path d="M75 18 Q100 10 125 18" />
      </svg>
    );
  }
  if (mode === "carrycot") {
    return (
      <svg viewBox="0 0 220 140" fill="none" stroke="currentColor" strokeWidth="1.4" style={style}>
        <path d="M25 95 Q25 70 55 70 L165 70 Q195 70 195 95 L195 110 L25 110 Z" />
        <path d="M55 70 Q55 45 110 45 Q165 45 165 70" />
        <path d="M25 95 L195 95" />
        <path d="M95 45 Q110 35 125 45" strokeWidth="1.2"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" strokeWidth="1.4" style={style}>
      {/* canopy */}
      <path d="M55 70 Q55 35 110 35 Q165 35 165 70" />
      {/* cabin */}
      <path d="M45 70 L45 110 Q45 122 57 122 L163 122 Q175 122 175 110 L175 70 Z" />
      {/* mesh window */}
      <path d="M70 80 L150 80 M70 92 L150 92 M70 104 L150 104" strokeWidth=".7" opacity=".7"/>
      {/* frame */}
      <path d="M35 122 L55 150 M185 122 L165 150" strokeWidth="1.8"/>
      {/* wheels */}
      <circle cx="52" cy="150" r="10" />
      <circle cx="168" cy="150" r="10" />
      {/* handle */}
      <path d="M45 70 Q25 55 30 30 L45 30" />
      <path d="M30 30 L55 30" strokeWidth="1.8"/>
    </svg>
  );
}

function Eyebrow({ num, children }) {
  return (
    <div className="eyebrow" style={{display:'flex',alignItems:'center',gap:12}}>
      {num && <span style={{color:'var(--clay)'}}>{num}</span>}
      <span style={{height:1,width:28,background:'currentColor',opacity:.5}}/>
      <span>{children}</span>
    </div>
  );
}

function Photo({ label, variant = "default", children, style, className = "" }) {
  const cls = variant === "dark" ? "photo photo-dark" : variant === "moss" ? "photo photo-moss" : "photo";
  return (
    <div className={`${cls} ${className}`} style={style}>
      {children}
      {label && <div className={`photo-label ${variant === 'default' ? 'photo-label-ink' : ''}`}>{label}</div>}
    </div>
  );
}

function Metric({ k, v, u, style }) {
  return (
    <div className="metric" style={style}>
      <div className="k">{k}</div>
      <div style={{display:'flex',alignItems:'baseline',gap:6,marginTop:4}}>
        <div className="v">{v}</div>
        {u && <div className="u">{u}</div>}
      </div>
    </div>
  );
}

// Observe and reveal when element enters viewport
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Track which section is active for side rail
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join(',')]);
  return active;
}

// Animated counter on reveal
function useCountUp(target, ms = 1400, trigger = true) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    let raf;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, ms]);
  return v;
}

Object.assign(window, { StrollerGlyph, Eyebrow, Photo, Metric, useReveal, useActiveSection, useCountUp });
