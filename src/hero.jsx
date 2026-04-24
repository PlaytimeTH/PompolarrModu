/* ============ Hero: kinetic intro + lifestyle scene ============ */

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const p = Math.min(1, scrollY / 600);
  const heroStyle = {
    position: 'relative',
    minHeight: '100vh',
    padding: '140px 0 60px',
    overflow: 'hidden',
  };

  return (
    <section id="hero" className="section grain" style={heroStyle}>
      {/* background: layered cream with soft vignette */}
      <div style={{
        position:'absolute', inset:0,
        background: 'radial-gradient(120% 70% at 50% 0%, #F5F0E8 0%, #EFE7DA 60%, #E8DFCC 100%)',
        zIndex: 0,
      }}/>

      {/* Marquee strip at top */}
      <div style={{
        position:'absolute', top: 86, left: 0, right: 0,
        fontFamily:'var(--f-mono)', fontSize: 10, letterSpacing:'.28em', textTransform:'uppercase',
        color:'var(--ink-3)', opacity:.6, textAlign:'center', zIndex: 2
      }}>
        <span className="mq">Designed in Seoul</span>
        <span style={{margin:'0 18px'}}>◇</span>
        <span>Limited Stock · Thailand</span>
        <span style={{margin:'0 18px'}}>◇</span>
        <span>Since 2022</span>
      </div>

      <div className="container" style={{position:'relative', zIndex: 3}}>
        {/* Kinetic intro headline — lines stagger in */}
        <div style={{paddingTop: 30}}>
          <Eyebrow num="01">Premium Pet Stroller Wagon</Eyebrow>

          <h1 className="display" style={{marginTop: 28, maxWidth: '14ch'}}>
            <span className={`kline ${mounted ? 'in' : ''}`} style={{transitionDelay: '.05s'}}>
              <span>Modu</span>
            </span>
            <br/>
            <span className={`kline ${mounted ? 'in' : ''}`} style={{transitionDelay: '.25s'}}>
              <span className="italic-accent" style={{color:'var(--clay)'}}>Stroller + Car Seat </span>
            </span>
          </h1>

          <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 80, marginTop: 60, alignItems:'end'}} className="hero-grid">
            <div className="reveal d2">
              <p className="lede th" style={{fontFamily:'"IBM Plex Sans Thai", var(--f-sans)', fontSize: 25}}>
                Pompolarr Modu — รถเข็นสัตว์เลี้ยงไฮบริดจากเกาหลี ที่เป็นทั้งรถเข็น ทั้งถอดเป็น <em style={{fontStyle:'italic', fontFamily:'var(--f-serif)', color:'var(--ink)'}}>Car Seat</em> ทั้งใช้เป็นที่นอน รับน้ำหนักได้ถึง <strong style={{fontFamily:'var(--f-serif)', fontWeight:500}}>50 กก.</strong> ออกแบบให้น้องนั่งสบาย และเข้ากับไลฟ์สไตล์ครอบครัวจริง ๆ
              </p>
              <div style={{display:'flex', gap:14, marginTop: 32, flexWrap:'wrap'}}>
                <a className="btn btn-primary" href="#cta">
                  ปรึกษาทาง LINE
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
                <a className="btn btn-ghost" href="#modes">ดูโหมดการใช้งาน</a>
              </div>

              {/* Price tag — editorial style */}
              <div className="hero-price" style={{display:'flex', alignItems:'baseline', gap: 14, marginTop: 36, paddingTop: 28, borderTop:'1px solid var(--line)'}}>
                <div className="mono" style={{fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--mute)'}}>Retail</div>
                <div style={{display:'flex', alignItems:'baseline', gap: 6}}>
                  <span className="serif" style={{fontSize: 44, fontWeight: 350, letterSpacing:'-.02em', color:'var(--ink)'}}>17,900</span>
                  <span className="mono" style={{fontSize:11, letterSpacing:'.18em', color:'var(--mute)'}}>THB</span>
                </div>
                <div className="hr" style={{flex:1, height:1, background:'var(--line)', alignSelf:'center'}}/>
                <div className="th" style={{fontSize:12, color:'var(--mute)', fontFamily:'"IBM Plex Sans Thai"'}}>ส่งฟรีทั่วประเทศ</div>
              </div>

              {/* Trust row */}
              <div className="hero-trust" style={{display:'flex', gap: 32, marginTop: 24, paddingTop: 24, borderTop:'1px solid var(--line)'}}>
                <div>
                  <div className="mono" style={{fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--mute)'}}>Official Importer</div>
                  <div className="serif" style={{fontSize:16, marginTop:4, fontFamily:'"IBM Plex Sans Thai"'}}>Pompolarr Pet TH</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--mute)'}}>Warranty</div>
                  <div className="serif" style={{fontSize:16, marginTop:4, fontFamily:'"IBM Plex Sans Thai"'}}>1 ปี · บริการหลังการขาย</div>
                </div>
                <div>
                  <div className="mono" style={{fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--mute)'}}>Rating</div>
                  <div className="serif" style={{fontSize:16, marginTop:4, fontFamily:'"IBM Plex Sans Thai"'}}>4.9 <span style={{fontFamily:'var(--f-sans)',fontSize:12,color:'var(--mute)'}}>/ 312 รีวิว</span></div>
                </div>
              </div>
            </div>

            {/* Hero product visual */}
            <div className="reveal d3" style={{position:'relative', aspectRatio:'4/5', minHeight: 520}}>
              <div style={{position:'absolute', inset:0, borderRadius: 8, overflow:'hidden', background:'var(--cocoa)'}}>
                {/* Real hero photo with parallax */}
                <img
                  src="images/hero-morning.jpeg"
                  alt="Pomeranian in teddy hood inside the Pompolarr Modu stroller, parked on a sunlit Seoul park path"
                  style={{
                    position:'absolute', inset:0, width:'100%', height:'100%',
                    objectFit:'cover', objectPosition:'50% 55%',
                    transform: `translateY(${p * -30}px) scale(1.06)`,
                    transition: 'transform .1s linear',
                  }}
                />
                {/* Subtle vignette at bottom for label legibility */}
                <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,.18) 0%, transparent 30%, transparent 60%, rgba(0,0,0,.45) 100%)'}}/>
                {/* Scene caption */}
                <div style={{position:'absolute', left: 24, top: 24, color:'rgba(255,255,255,.95)'}}>
                  <div className="mono" style={{fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', opacity:.75}}>Scene 01</div>
                  <div className="serif" style={{fontSize:22, marginTop:6, fontStyle:'italic', textShadow:'0 1px 12px rgba(0,0,0,.35)'}}>A morning walk<br/>in Seoul.</div>
                </div>
              </div>

              {/* Floating metrics */}
              <div className="hero-metrics">
                <Metric k="รับน้ำหนัก" v="≤ 50" u="kg" style={{position:'absolute', top: 24, right: -18, transform: `translateY(${p * 20}px)`}}/>
                <Metric k="น้ำหนักรวม" v="11.6" u="kg" style={{position:'absolute', bottom: 40, left: -26, transform: `translateY(${p * -20}px)`}}/>
                <Metric k="พับใน" v="1" u="วินาที" style={{position:'absolute', bottom: -24, right: 30}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div style={{
        position:'absolute', bottom: 24, left: '50%', transform:'translateX(-50%)',
        fontFamily:'var(--f-mono)', fontSize: 10, letterSpacing:'.24em', textTransform:'uppercase',
        color:'var(--ink-3)', opacity: 1 - p*2, zIndex: 4,
        display:'flex', alignItems:'center', gap: 10
      }}>
        <span>Scroll</span>
        <span style={{display:'inline-block', width:1, height: 28, background:'currentColor', animation:'scrollBounce 1.6s ease-in-out infinite'}}/>
      </div>

      <style>{`
        .kline { display: inline-block; opacity: 0; transform: translateY(40%); transition: opacity .9s var(--ease-out), transform .9s var(--ease-out); overflow: hidden; }
        .kline.in { opacity: 1; transform: translateY(0); }
        @keyframes scrollBounce {
          0%, 100% { transform: scaleY(1); transform-origin: top; }
          50% { transform: scaleY(.3); transform-origin: top; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero });
