/* ============ Anatomy (hotspot) + Gallery (before/after fold) ============ */

function Anatomy() {
  const [active, setActive] = useState(0);
  const spots = [
    { x: 34, y: 36, title: 'Canopy · 3 Modes', th: 'หน้าต่าง 3 โหมด', body: 'เปิดโล่ง / Mesh กันแมลง / ปิดสนิทกันฝน เลือกได้ทั้งฝั่งหน้าและฝั่งหลัง' },
    { x: 45, y: 55, title: 'Carrycot · 60×36', th: 'ห้องโดยสารกว้าง', body: 'สูง 58 ซม. นอนเหยียดยาวได้ พื้นแข็งรองรับกระดูกสันหลัง ผ้าถอดซักได้' },
    { x: 73, y: 16, title: 'Auto-Lock Handle', th: 'ด้ามจับปรับ 2 ระดับ', body: 'หุ้มหนังแท้ ปรับสูง-ต่ำได้ 2 ระดับ กดปุ่มเดียวพับได้ทั้งคัน' },
    { x: 56, y: 30, title: 'One-Touch Fold', th: 'พับด้วยปุ่มเดียว', body: 'ระบบ Auto-Lock พับเป็นทรงตั้งกะทัดรัดใน 1 วินาที ไม่ต้องถอดเบาะก่อน' },
    { x: 22, y: 82, title: 'PU Wheels', th: 'ล้อ PU 4 ล้อ ถอดได้', body: 'นุ่ม เงียบ ไม่ระเบิด ถอดออกแยกเก็บได้เพื่อความกะทัดรัดสูงสุด' },
    { x: 62, y: 62, title: 'Safety Harness', th: 'สายรัดนิรภัย', body: 'ISO-ready 2 เส้น ความยาว 32–51 ซม. ใช้เป็น Car Seat ได้ทันที' },
  ];

  return (
    <section id="anatomy" className="section section-cream">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap: 60, alignItems:'end', marginBottom: 60}} className="anatomy-head">
          <div className="reveal">
            <Eyebrow num="04">Anatomy of Modu</Eyebrow>
            <h2 className="h2" style={{marginTop: 20, maxWidth:'14ch'}}>
              <span className="th">ทุกดีไซน์ </span><span className="italic-accent" style={{color:'var(--clay)'}}><span className="th">มีเหตุผล</span></span>
            </h2>
          </div>
          <p className="lede th reveal d1" style={{marginLeft:'auto', fontFamily:'"IBM Plex Sans Thai"'}}>
            กดจุดบนรูปเพื่อสำรวจรายละเอียดแต่ละส่วน — แต่ละ detail ผ่านการปรับจนกว่า<br/>จะรู้สึกว่า "น้องชอบ" จริงๆ
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 60, alignItems:'start'}} className="anatomy-grid">
          {/* Hotspot canvas */}
          <div className="reveal" style={{position:'relative', aspectRatio:'1/1', background:'var(--bone)', border:'1px solid var(--line)', borderRadius: 8, overflow:'hidden'}}>
            <img src="images/anatomy-side.jpg" alt="Pompolarr Modu side profile" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
            {/* Grid overlay */}
            <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(30,27,22,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,27,22,.04) 1px, transparent 1px)', backgroundSize:'40px 40px', pointerEvents:'none'}}/>
            <div className="photo-label photo-label-ink" style={{top:20, left: 20, bottom:'auto', fontSize: 12}}>Interactive · Click hotspots</div>

            {spots.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                position:'absolute', left: `${s.x}%`, top: `${s.y}%`,
                transform:'translate(-50%, -50%)',
                width: 42, height: 42, borderRadius: '50%',
                border:'none',
                background: active === i ? 'var(--clay)' : 'rgba(255,255,255,.9)',
                color: active === i ? '#fff' : 'var(--ink)',
                cursor:'pointer',
                display:'grid', placeItems:'center',
                fontFamily:'var(--f-mono)', fontSize: 14, fontWeight: 500,
                boxShadow: active === i ? '0 0 0 6px rgba(184,117,91,.2)' : '0 4px 14px rgba(30,27,22,.12)',
                transition: 'all .25s var(--ease)',
              }}>
                {String(i+1).padStart(2,'0')}
                {active === i && <span style={{position:'absolute', inset:-8, borderRadius:'50%', border:'1px solid var(--clay)', animation:'pulse 1.4s ease-out infinite'}}/>}
              </button>
            ))}
          </div>

          {/* Spot detail list */}
          <div className="reveal d1">
            <div style={{display:'flex', flexDirection:'column'}}>
              {spots.map((s, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  textAlign:'left',
                  padding:'20px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === spots.length-1 ? '1px solid var(--line)' : 'none',
                  background:'transparent', border: 'none', borderTop:'1px solid var(--line)',
                  cursor:'pointer',
                  display:'grid', gridTemplateColumns:'auto 1fr auto', gap: 20, alignItems:'center',
                  opacity: active === i ? 1 : .55,
                  transition:'opacity .25s var(--ease)',
                  fontFamily:'inherit',
                }}>
                  <div className="mono" style={{fontSize: 14, letterSpacing:'.18em', color:'var(--clay)'}}>{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <div className="serif" style={{fontSize: 24, letterSpacing:'-.01em'}}>{s.title}</div>
                    <div className="th" style={{fontSize: 15, color:'var(--mute)', marginTop: 4, fontFamily:'"IBM Plex Sans Thai"'}}>{s.th}</div>
                    {active === i && (
                      <div className="th" style={{fontSize: 17, color:'var(--ink-3)', marginTop: 12, lineHeight: 1.6, maxWidth:'44ch', fontFamily:'"IBM Plex Sans Thai"', animation:'fadeSlide .4s var(--ease-out)'}}>{s.body}</div>
                    )}
                  </div>
                  <div style={{width: 28, height: 1, background: active === i ? 'var(--clay)' : 'var(--line-2)', transition:'all .25s var(--ease)'}}/>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 960px) {
          .anatomy-head { grid-template-columns: 1fr !important; }
          .anatomy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Gallery with Before/After fold ---------- */
function Gallery() {
  const [foldT, setFoldT] = useState(0); // 0 = open, 1 = folded
  const folding = useRef(null);

  useEffect(() => {
    const el = folding.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0→1 as element scrolls through viewport
      const start = vh * 0.85;
      const end = vh * 0.15;
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      setFoldT(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'Folding without carrycot', span: 2, variant: 'moss', cap: 'Folding without carrycot', img: 'images/gallery-fold-no-detach.gif', imgPos: '50% 50%' },
    { label: 'Carrycot detach', span: 1, variant: 'default', cap: 'Detach as Car Seat', img: 'images/gallery-carrycot-detach.gif', imgPos: '50% 50%', fit: 'contain' },
    { label: 'Brake & Release', span: 1, variant: 'default', cap: 'Brake & Release · Tap-Tap', img: 'images/gallery-brake.gif', imgPos: '50% 100%' },
    { label: 'Shake test · vs. typical pet stroller', span: 2, variant: 'default', cap: 'Low-centered frame · Rock-steady', img: 'images/gallery-shake-test.gif', imgPos: '50% 50%' },
    { label: 'Water-resistant shell', span: 1, variant: 'default', cap: 'Waterproof fabric · Wipe-clean', img: 'images/gallery-waterproof-cover.gif', imgPos: '50% 85%', imgScale: 1.15 },
    { label: 'Inner liner · Zips out', span: 1, variant: 'default', cap: 'Liner zips out · Shake clean', img: 'images/gallery-inner-liner.gif', imgPos: '50% 50%', imgScale: 1.25 },
    { label: 'Two Bichons · Ready to roll', span: 2, variant: 'default', cap: 'Two riders · One push', img: 'images/gallery-two-bichons.jpg', imgPos: '50% 50%' },
    { label: 'Carrycot & Safe Space for your Furbaby', span: 2, variant: 'dark', cap: 'Carrycot & Safe Space for your Furbaby', img: 'images/gallery-carrycot-grass.jpeg', imgPos: '30% 50%' },
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap: 60, alignItems:'end', marginBottom: 50}} className="gallery-head">
          <div className="reveal">
            <Eyebrow num="05">Gallery · Fold Demo</Eyebrow>
            <h2 className="h2" style={{marginTop: 20, maxWidth:'16ch'}}>
              <span className="th">Demo </span><span className="italic-accent" style={{color:'var(--clay)'}}><span className="th">การใช้งาน</span></span>
            </h2>
          </div>
          <p className="lede th reveal d1" style={{marginLeft:'auto', fontFamily:'"IBM Plex Sans Thai"'}}>
            วิธีพับแบบไม่ถอดตระกร้าออก
          </p>
        </div>

        {/* Scroll-driven fold demo */}
        <div ref={folding} className="reveal" style={{position:'relative', aspectRatio:'16/8', background:'var(--cocoa)', borderRadius: 8, overflow:'hidden', marginBottom: 30, color:'var(--bone)'}}>
          {/* Scene */}
          <div style={{position:'absolute', inset:0, background:'radial-gradient(120% 80% at 50% 100%, rgba(184,117,91,.25) 0%, transparent 60%)'}}/>

          {/* Real fold GIF — always visible, scale subtly as progress advances */}
          <div style={{position:'absolute', inset:0, display:'grid', placeItems:'center'}}>
            <img
              src="images/fold-demo.gif"
              alt="Pompolarr Modu folding in one touch — side profile"
              style={{
                width: '66%',
                maxWidth: 720,
                transform: `scale(${0.96 + foldT * 0.06})`,
                transition: 'transform .2s linear',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.35))',
              }}
            />
          </div>

          {/* Labels */}
          <div style={{position:'absolute', left: 24, top: 24, fontFamily:'var(--f-mono)', fontSize: 10, letterSpacing:'.22em', textTransform:'uppercase', opacity:.7}}>
            Fold Progress · {Math.round(foldT*100)}%
          </div>
          <div style={{position:'absolute', left: 24, bottom: 24, fontFamily:'var(--f-serif)', fontSize: 28, fontStyle:'italic', letterSpacing:'-.01em'}}>
            {foldT < .5 ? <>Open <span style={{opacity:.4}}>· Ready for a walk</span></> : <>Folded <span style={{opacity:.4}}>· 64 × 44 × 80 cm</span></>}
          </div>

          {/* Progress track */}
          <div style={{position:'absolute', right: 24, top: 24, bottom: 24, width: 2, background:'rgba(245,240,232,.15)'}}>
            <div style={{position:'absolute', top: 0, left: -1, width: 4, height: `${foldT*100}%`, background:'var(--clay)', transition:'height .1s linear'}}/>
          </div>
        </div>

        {/* Gallery grid */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16}} className="gallery-grid">
          {items.map((it, i) => (
            <div key={i} className={`reveal d${i%4+1}`} style={{gridColumn: `span ${it.span}`}}>
              {it.img ? (
                <div style={{aspectRatio: it.span === 2 ? '16/9' : '4/5', borderRadius: 4, overflow:'hidden', background:'var(--bone-2)', position:'relative'}}>
                  <img src={it.img} alt={it.label} style={{width:'100%', height:'100%', objectFit: it.fit || 'cover', objectPosition: it.imgPos || '50% 50%', display:'block', transform: it.imgScale ? `scale(${it.imgScale})` : undefined, transformOrigin: it.imgPos || '50% 50%'}}/>
                  <div className="photo-label" style={{bottom:12, left:12}}>{it.label}</div>
                </div>
              ) : (
                <Photo variant={it.variant} label={it.label} style={{aspectRatio: it.span === 2 ? '16/9' : '4/5', borderRadius: 4}}>
                  <div className="stroller-mark">
                    <StrollerGlyph mode={i%2===0 ? 'stroller' : 'carrycot'} style={{color: it.variant === 'default' ? 'rgba(30,27,22,.2)' : 'rgba(255,255,255,.22)', width: '52%'}}/>
                  </div>
                </Photo>
              )}
              <div style={{display:'flex', justifyContent:'space-between', marginTop: 12, fontFamily:'var(--f-mono)', fontSize: 10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--mute)'}}>
                <span>{it.cap}</span>
                <span>0{i+1} / 0{items.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .gallery-head { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Anatomy, Gallery });
