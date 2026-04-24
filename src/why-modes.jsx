/* ============ Why Modu (3 pillars) + Modes Configurator ============ */

function WhyModu() {
  const pillars = [
    {
      n: '01',
      title: 'Low-Centered',
      thai: 'โครงต่ำพิเศษ · มั่นคงเป็นพิเศษ',
      body: 'จุดศูนย์ถ่วงต่ำกว่ารถเข็นทั่วไป ทำให้รถไม่โคลงเคลงแม้เข็นบนทางขรุขระ น้องนั่งสบายและเห็นโลกในระดับสายตาของตัวเอง และไม่ต้องกังวลว่าน้องจะพลัดตกจากที่สูง',
      photo: 'Wheel · low-angle detail',
      img: 'images/pillar-low-centered.webp',
      imgPos: '50% 62%',
      tone: 'default',
    },
    {
      n: '02',
      title: 'Hybrid by Design',
      thai: 'เปลี่ยนร่างได้ 5 วินาที',
      body: 'ระบบ One-Touch Auto-Lock พับโครงพร้อมเบาะรวมเป็นทรงตั้ง กะทัดรัด ใส่ท้ายรถ SUV ได้สบาย หากถอดล้อออกจะเล็กลงอีก',
      photo: 'Fold detail · side profile',
      img: 'images/pillar-fold.gif',
      imgPos: '50% 50%',
      imgScale: 1.45,
      tone: 'dark',
    },
    {
      n: '03',
      title: '3-in-1',
      thai: 'หนึ่งคัน ใช้ได้สามแบบ',
      body: 'เบาะ Carrycot ถอดออกใช้เป็น Car Seat พร้อมสายรัดนิรภัย หรือยกเข้าบ้านใช้เป็นที่นอนของน้องได้ทันที — คุ้มกว่าซื้อแยกหลายชิ้น',
      photo: 'Carrycot detached · indoor',
      img: 'images/pillar-carrycot.jpg',
      imgPos: '50% 50%',
      tone: 'moss',
    },
  ];

  return (
    <section id="why" className="section" style={{paddingTop: 180}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap: 80, alignItems:'end', marginBottom: 80}} className="why-head">
          <div className="reveal">
            <Eyebrow num="02">Why Modu</Eyebrow>
            <h2 className="h2" style={{marginTop: 20, maxWidth: '14ch'}}>
              <span className="th">ไม่ใช่แค่รถเข็น</span><br/>
              <span className="italic-accent" style={{color:'var(--clay)', fontSize: 40}}><span className="th">แต่เป็นพื้นที่ปลอดภัยของน้อง</span></span>
            </h2>
          </div>
          <p className="lede th reveal d1" style={{marginLeft:'auto', fontFamily:'"IBM Plex Sans Thai", var(--f-sans)'}}>
            {'\n'}
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 2, background:'var(--line)'}} className="pillars">
          {pillars.map((p, i) => (
            <div key={p.n} className={`pillar reveal d${i+1}`} style={{
              background: 'var(--bone)',
              padding: '48px 36px 40px',
              display:'flex', flexDirection:'column', gap: 24,
              minHeight: 560,
            }}>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
                <div className="serif" style={{fontSize: 48, color:'var(--clay)', lineHeight:1}}>{p.n}</div>
                <div className="mono" style={{fontSize: 13, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--mute)'}}>Pillar · {p.n}</div>
              </div>
              {p.img ? (
                <div style={{aspectRatio: '4/3', borderRadius: 4, overflow:'hidden', background:'var(--bone-2)', position:'relative'}}>
                  <img src={p.img} alt={p.photo} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: p.imgPos || '50% 50%', display:'block', transform: p.imgScale ? `scale(${p.imgScale})` : 'none', transformOrigin: 'center'}}/>
                  <div className="photo-label photo-label-ink" style={{bottom:12, left:12, top:'auto', fontSize:10}}>{p.photo}</div>
                </div>
              ) : (
                <Photo variant={p.tone} label={p.photo} style={{aspectRatio: '4/3', borderRadius: 4}}>
                  <div className="stroller-mark">
                    <StrollerGlyph mode={i===0?'stroller':i===1?'stroller':'carrycot'} style={{color: p.tone==='default'?'rgba(30,27,22,.22)':'rgba(255,255,255,.22)'}}/>
                  </div>
                </Photo>
              )}
              <div>
                <h3 className="h3" style={{fontSize: 16}}>{p.title}</h3>
                <div className="th" style={{color:'var(--clay)', fontSize: 14, marginTop: 6, fontFamily:'"IBM Plex Sans Thai"'}}>{p.thai}</div>
              </div>
              <p className="th" style={{color:'var(--ink-3)', fontSize: 15, lineHeight: 1.65, fontFamily:'"IBM Plex Sans Thai"', marginTop: 'auto'}}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .why-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Modes Configurator ---------- */
function Modes() {
  const [mode, setMode] = useState('stroller');
  const modes = {
    stroller: {
      label: 'Stroller',
      th: 'โหมดรถเข็น',
      desc: 'พื้นที่ 60×36 ซม. สูง 58 ซม. นอนเหยียดยาวได้สบาย หน้าต่าง 3 โหมด: เปิดโล่ง / Mesh กันแมลง / ปิดสนิทกันฝน',
      specs: [ ['W × L', '60 × 36 cm'], ['H', '58 cm'], ['Load', '≤ 50 kg'], ['Weight', '11.6 kg'] ],
      img: 'images/mode-stroller.webp',
      imgPos: '50% 50%',
    },
    carseat: {
      label: 'Car Seat',
      th: 'โหมดคาร์ซีท',
      desc: 'ยกเบาะ Carrycot ออกใส่เบาะหลังรถได้เลย พร้อมสายรัดนิรภัยคุณภาพ ISO 2 เส้น (ความยาว 32–51 ซม.) ปลอดภัยทุกการเดินทาง',
      specs: [ ['Straps', '2 × ISOFIX-ready'], ['Length', '32–51 cm'], ['Cot weight', '3.46 kg'], ['Fit', 'Most sedan / SUV'] ],
      img: 'images/mode-carseat.jpg',
      imgPos: '50% 70%',
    },
    carrycot: {
      label: 'Carrycot',
      th: 'โหมดตะกร้า',
      desc: 'ใช้เป็นตะกร้าหิ้วน้องไปหาคุณหมอ ขึ้นลงรถ เข้าออกจากบ้าน หรือเป็น safe space ให้น้องรู้สึกปลอดภัยเวลาออกไปข้างนอก',
      specs: [ ['Interior', '60 × 36 cm'], ['Mattress', 'Washable · Cotton'], ['Weight', '3.46 kg'], ['Use', 'Indoor / Travel'] ],
      img: 'images/mode-carrycot.jpg',
      imgPos: '50% 50%',
    },
  };
  const cur = modes[mode];

  return (
    <section id="modes" className="section section-dark" style={{paddingTop: 140, paddingBottom: 140}}>
      <div className="container">
        <div style={{display:'flex', alignItems:'end', justifyContent:'space-between', flexWrap:'wrap', gap: 30, marginBottom: 60}}>
          <div className="reveal">
            <Eyebrow num="03">Configurator · 3 Modes</Eyebrow>
            <h2 className="h2" style={{color:'var(--bone)', marginTop: 20, maxWidth: '16ch'}}>
              <span className="th">หนึ่งคัน </span><span className="italic-accent" style={{color:'var(--sand)'}}>สาม modes</span>
            </h2>
          </div>
          <p className="lede th reveal d1" style={{color:'rgba(245,240,232,.7)', maxWidth: '42ch', fontFamily:'"IBM Plex Sans Thai"', fontSize: 22}}>
            กดเปลี่ยนโหมดด้านล่าง เพื่อดูรูปทรงของ Modu ในแต่ละแบบ
          </p>
        </div>

        {/* Mode switcher — segmented toggle, left-aligned above the visual */}
        <div style={{position:'relative', display:'inline-flex', padding: 4, background:'rgba(255,255,255,.04)', border:'1px solid rgba(245,240,232,.18)', borderRadius: 12, marginBottom: 28}} className="reveal d2 mode-switch">
          {/* Sliding thumb */}
          <div style={{
            position:'absolute',
            top: 4, bottom: 4,
            left: `calc(4px + ${Object.keys(modes).indexOf(mode)} * (100% - 8px) / 3)`,
            width: 'calc((100% - 8px) / 3)',
            background: 'var(--clay)',
            borderRadius: 8,
            transition: 'left .42s cubic-bezier(.7,.05,.2,1)',
            boxShadow: '0 4px 14px rgba(184,117,91,.35), inset 0 1px 0 rgba(255,255,255,.14)',
          }}/>
          {Object.entries(modes).map(([k, m]) => {
            const active = mode === k;
            return (
              <button key={k} onClick={() => setMode(k)} aria-pressed={active} style={{
                position:'relative', zIndex: 1,
                padding:'14px 28px',
                borderRadius: 8,
                border:'none',
                background: 'transparent',
                color: active ? '#fff' : 'rgba(245,240,232,.65)',
                fontFamily:'inherit',
                cursor:'pointer',
                transition: 'color .3s var(--ease)',
                display:'flex', flexDirection:'column', alignItems:'center', gap: 3, minWidth: 160,
              }}>
                <span style={{fontWeight: 500, fontSize: 18, letterSpacing:'.005em'}}>{m.label}</span>
                <span style={{fontSize: 13, opacity: .82, fontFamily:'"IBM Plex Sans Thai"', fontWeight: active ? 500 : 400}}>{m.th}</span>
              </button>
            );
          })}
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1.15fr 1fr', gap: 80, alignItems:'center'}} className="modes-grid">
          {/* Visual */}
          <div style={{position:'relative', aspectRatio:'4/3', border:'1px solid rgba(245,240,232,.14)', borderRadius: 8, overflow:'hidden', background:'radial-gradient(120% 90% at 50% 100%, rgba(184,117,91,.2) 0%, transparent 60%)'}}>
            {cur.img ? (
              <img key={mode} src={cur.img} alt={`Mode · ${cur.label}`} style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition: cur.imgPos || '50% 50%', animation:'fadeSlide .5s var(--ease-out)'}}/>
            ) : (
              <div style={{position:'absolute', inset:0, display:'grid', placeItems:'center'}}>
                <div key={mode} style={{animation:'fadeSlide .5s var(--ease-out)', color:'var(--sand)'}}>
                  <StrollerGlyph mode={mode} style={{width: 420, color:'rgba(245,240,232,.85)', strokeWidth: 1.2}}/>
                </div>
              </div>
            )}
            <div className="photo-label" style={{left: 24, bottom: 24}}>Mode · {cur.label}</div>
            <div style={{position:'absolute', top: 24, right: 24, display:'flex', gap: 4}}>
              {Object.keys(modes).map(k => (
                <div key={k} style={{width: 20, height: 2, background: mode === k ? 'var(--clay)' : 'rgba(245,240,232,.25)'}}/>
              ))}
            </div>
          </div>

          {/* Details */}
          <div key={mode} style={{animation:'fadeSlide .5s var(--ease-out)'}}>
            <div className="mono" style={{fontSize: 11, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--sand)'}}>0{Object.keys(modes).indexOf(mode)+1} · {cur.label}</div>
            <h3 className="serif" style={{fontSize: 44, fontWeight: 350, marginTop: 16, letterSpacing: '-.015em'}}>
              <span className="th" style={{fontSize: 15}}>{cur.th}</span>
            </h3>
            <p className="th" style={{color:'rgba(245,240,232,.72)', fontSize: 16, lineHeight: 1.7, marginTop: 20, maxWidth:'42ch', fontFamily:'"IBM Plex Sans Thai"'}}>{cur.desc}</p>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 0, marginTop: 40, borderTop:'1px solid rgba(245,240,232,.14)'}}>
              {cur.specs.map(([k, v], i) => (
                <div key={k} style={{padding:'20px 0', borderBottom:'1px solid rgba(245,240,232,.14)', borderRight: i%2===0 ? '1px solid rgba(245,240,232,.14)' : 'none', paddingLeft: i%2===1 ? 24 : 0, paddingRight: i%2===0 ? 24 : 0}}>
                  <div className="mono" style={{fontSize: 15, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(245,240,232,.5)'}}>{k}</div>
                  <div className="serif" style={{fontSize: 22, marginTop: 6}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 960px) {
          .modes-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { WhyModu, Modes });
