/* ============ Compare + Specs + Stories + FAQ + CTA + Footer ============ */

function Compare() {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(e => { if (e[0].isIntersecting) setShown(true); }, { threshold: .3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const rows = [
    { k: 'Load capacity', modu: 50, other: 25, u: 'kg' },
    { k: 'Fold time', modu: 1, other: 45, u: 'sec', invert: true },
    { k: 'Cabin height', modu: 58, other: 38, u: 'cm' },
    { k: 'Uses in one', modu: 3, other: 1, u: '' },
  ];

  const Counter = ({ target, shown, suffix }) => {
    const v = useCountUp(target, 1400, shown);
    return <span>{target % 1 === 0 ? Math.round(v) : v.toFixed(1)}{suffix}</span>;
  };

  return (
    <section id="compare" ref={ref} className="section">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap: 60, alignItems:'end', marginBottom: 60}} className="compare-head">
          <div className="reveal">
            <Eyebrow num="06">Modu vs. Typical</Eyebrow>
            <h2 className="h2" style={{marginTop: 20, maxWidth:'16ch'}}>
              <span className="th">ตัวเลขที่สำคัญ </span><br/><span className="italic-accent" style={{color:'var(--clay)'}}><span className="th">ต่างกันแค่ไหน</span></span>
            </h2>
          </div>
          <p className="lede th reveal d1" style={{marginLeft:'auto', fontFamily:'"IBM Plex Sans Thai"'}}>
            เปรียบเทียบกับรถเข็นสัตว์เลี้ยงในตลาด — ตัวเลขจากสเปคเฉลี่ยของรุ่นราคาใกล้เคียง
          </p>
        </div>

        <div style={{border:'1px solid var(--line)', borderRadius: 8, overflow:'hidden'}}>
          {/* Header row */}
          <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', background:'var(--bone-2)', padding:'20px 30px', borderBottom:'1px solid var(--line)'}} className="compare-row-head">
            <div className="mono" style={{fontSize: 11, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--mute)'}}>Metric</div>
            <div className="serif" style={{fontSize: 20, color:'var(--clay)'}}>Pompolarr Modu</div>
            <div className="serif" style={{fontSize: 20, color:'var(--mute)'}}>Typical stroller</div>
          </div>

          {rows.map((r, i) => {
            const better = r.invert ? r.modu < r.other : r.modu > r.other;
            const ratio = r.invert ? (r.other / r.modu) : (r.modu / r.other);
            const fillModu = r.invert ? 100 : (r.modu / Math.max(r.modu, r.other)) * 100;
            const fillOther = r.invert ? (r.modu / r.other) * 100 : (r.other / r.modu) * 100;
            return (
              <div key={r.k} className={`reveal d${(i%3)+1}`} style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', padding:'28px 30px', borderBottom: i === rows.length-1 ? 'none' : '1px solid var(--line)', alignItems:'center'}}>
                <div>
                  <div className="serif" style={{fontSize: 22, letterSpacing:'-.01em'}}>{r.k}</div>
                  {better && <div className="mono" style={{fontSize: 10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--clay)', marginTop: 4}}>↑ {ratio.toFixed(1)}× better</div>}
                </div>
                <div>
                  <div className="serif" style={{fontSize: 36, color:'var(--ink)'}}>
                    <Counter target={r.modu} shown={shown} suffix={r.u ? ` ${r.u}` : ''}/>
                  </div>
                  <div style={{height: 3, background:'var(--line)', marginTop: 8, overflow:'hidden'}}>
                    <div style={{height:'100%', width: shown ? `${fillModu}%` : '0%', background:'var(--clay)', transition:'width 1.4s var(--ease-out)'}}/>
                  </div>
                </div>
                <div>
                  <div className="serif" style={{fontSize: 28, color:'var(--mute)'}}>
                    <Counter target={r.other} shown={shown} suffix={r.u ? ` ${r.u}` : ''}/>
                  </div>
                  <div style={{height: 3, background:'var(--line)', marginTop: 8, overflow:'hidden'}}>
                    <div style={{height:'100%', width: shown ? `${fillOther}%` : '0%', background:'var(--line-2)', transition:'width 1.4s var(--ease-out) .1s'}}/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .compare-head { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Specs ---------- */
function Specs() {
  const groups = [
    { title: 'ขนาด', en: 'Dimensions', rows: [
      ['ขนาดเมื่อกาง (รวมล้อ)', '77 × 64 × 102 ซม.'],
      ['ขนาดเมื่อพับ — มีล้อ', '64 × 44 × 80 ซม.'],
      ['ขนาดเมื่อพับ — ถอดล้อ', '55 × 31 × 67 ซม.'],
      ['ห้องโดยสาร — ภายนอก', '63 × 41 × 68 ซม.'],
      ['ห้องโดยสาร — ภายใน', '60 × 36 × 35–58 ซม.'],
    ]},
    { title: 'น้ำหนัก', en: 'Weight', rows: [
      ['น้ำหนักรวม', '11.6 กก.'],
      ['น้ำหนักเฉพาะ Carrycot', '3.46 กก.'],
      ['รับน้ำหนักสูงสุด', '50 กก.'],
    ]},
    { title: 'วัสดุ', en: 'Materials', rows: [
      ['โครงรถ', 'อะลูมิเนียม + เหล็ก + PP'],
      ['ห้องโดยสาร', 'อะลูมิเนียม + เหล็ก + PA'],
      ['ล้อ', 'PU พรีเมียมเกรดรถเข็นเด็ก'],
      ['ด้ามจับ', 'หุ้มหนังแท้ · ปรับ 2 ระดับ'],
    ]},
  ];
  return (
    <section id="specs" className="section section-dark">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 80, alignItems:'start'}} className="specs-grid">
          <div className="reveal">
            <Eyebrow num="07">Specifications</Eyebrow>
            <h2 className="h2" style={{color:'var(--bone)', marginTop: 20}}>
              <span className="th">สเปค </span><br/><span className="italic-accent" style={{color:'var(--sand)', fontSize: 30}}>size-weight-materials</span>
            </h2>
            <p className="th" style={{color:'rgba(245,240,232,.65)', marginTop: 24, fontSize: 15, lineHeight: 1.7, fontFamily:'"IBM Plex Sans Thai"', maxWidth: '36ch'}}>
              ตัวเลขทั้งหมดมาจากเอกสาร Pompolarr Korea โดยตรง ถ้าต้องการเอกสารเพิ่มเติมสำหรับโรงแรม / คาเฟ่สัตว์เลี้ยง / สั่งจำนวนมาก ทักผมทาง LINE ได้เลย
            </p>
          </div>
          <div>
            {groups.map((g, gi) => (
              <div key={g.title} className={`reveal d${gi+1}`} style={{marginBottom: 50}}>
                <div style={{display:'flex', alignItems:'baseline', gap: 14, marginBottom: 20}}>
                  <div className="mono" style={{fontSize: 11, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--sand)'}}>0{gi+1}</div>
                  <div className="serif th" style={{fontSize: 22}}>{g.title}</div>
                  <div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(245,240,232,.4)'}}>{g.en}</div>
                </div>
                <div style={{borderTop:'1px solid rgba(245,240,232,.14)'}}>
                  {g.rows.map(([k, v], i) => (
                    <div key={k} style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', padding:'14px 0', borderBottom:'1px solid rgba(245,240,232,.14)'}}>
                      <div className="th" style={{color:'rgba(245,240,232,.7)', fontSize: 14, fontFamily:'"IBM Plex Sans Thai"'}}>{k}</div>
                      <div className="serif" style={{fontSize: 16}}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .specs-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Stories / Social proof ---------- */
function Stories() {
  const stories = [
    {
      name: 'คุณเบลล์ & โมจิ',
      role: 'Pomeranian · 4 ปี',
      quote: 'พาโมจิไปคาเฟ่ทุกเสาร์ ก่อนหน้านี้ใช้รถเข็นเด็ก ตอนนี้เปลี่ยนเป็น Modu แล้วเข้าลิฟต์ง่ายขึ้นเยอะ โมจิชอบนอนมองข้างนอกผ่านหน้าต่าง mesh',
      tag: 'Cafe-hopping',
    },
    {
      name: 'คุณโอม & ซูชิ',
      role: 'Scottish Fold · 2 ปี',
      quote: 'ซูชิกลัวรถมาก เคยอ้วกทุกครั้งเวลานั่งรถเข็น พอใช้ Carrycot แบบถอดเป็น Car Seat ได้ ซูชิรู้สึกเหมือนอยู่ในที่นอนของตัวเอง ไม่เครียดเลย',
      tag: 'Long drives',
    },
    {
      name: 'คุณพลอย & ลาเต้ + มอคค่า',
      role: 'Shih Tzu × 2',
      quote: 'เอาไว้ใส่น้องสองตัวก็ยังเหลือที่ให้นอนสบาย ๆ รับ 50 กก. จริง พับเก็บท้ายรถ SUV ได้แบบไม่กินที่',
      tag: 'Multi-pet',
    },
  ];
  return (
    <section id="stories" className="section">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap: 60, alignItems:'end', marginBottom: 60}} className="stories-head">
          <div className="reveal">
            <Eyebrow num="08">Real Families</Eyebrow>
            <h2 className="h2" style={{marginTop: 20, maxWidth:'14ch'}}>
              <span className="th">รีวิวจากลูกค้า</span><br/><span className="italic-accent" style={{color:'var(--clay)'}}><span className="th">ตัวจริง</span></span>
            </h2>
          </div>
          <div className="reveal d1" style={{marginLeft:'auto', display:'flex', gap: 24, fontFamily:'var(--f-serif)'}}>
            <div><div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--mute)'}}>Happy families</div><div style={{fontSize: 36, marginTop: 4, letterSpacing:'-.01em'}}>312</div></div>
            <div><div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--mute)'}}>Avg. rating</div><div style={{fontSize: 36, marginTop: 4, letterSpacing:'-.01em'}}>4.9<span style={{fontSize:18,color:'var(--mute)'}}>/5</span></div></div>
            <div><div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--mute)'}}>Repeat buyers</div><div style={{fontSize: 36, marginTop: 4, letterSpacing:'-.01em'}}>38%</div></div>
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}} className="stories-grid">
          {stories.map((s, i) => (
            <figure key={i} className={`reveal d${i+1}`} style={{margin: 0, padding: 32, background:'var(--bone-2)', borderRadius: 8, display:'flex', flexDirection:'column', minHeight: 340}}>
              <div className="mono" style={{fontSize: 10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--clay)'}}>{s.tag}</div>
              <blockquote className="th serif" style={{margin:'20px 0 0', fontSize: 22, lineHeight: 1.4, letterSpacing:'-.01em', flexGrow: 1, fontFamily:'"Newsreader", "Noto Serif Thai", serif'}}>
                <span style={{color:'var(--clay)'}}>"</span>{s.quote}<span style={{color:'var(--clay)'}}>"</span>
              </blockquote>
              <figcaption style={{marginTop: 28, display:'flex', alignItems:'center', gap: 14}}>
                <div style={{width: 40, height: 40, borderRadius:'50%', background:'linear-gradient(135deg, var(--sand), var(--clay))'}}/>
                <div>
                  <div className="th" style={{fontSize: 14, fontFamily:'"IBM Plex Sans Thai"', fontWeight: 500}}>{s.name}</div>
                  <div className="th" style={{fontSize: 12, color:'var(--mute)', fontFamily:'"IBM Plex Sans Thai"'}}>{s.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .stories-head { grid-template-columns: 1fr !important; }
          .stories-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useState(0);
  const qs = [
    { q: 'น้องตัวใหญ่ใช้ได้ไหม? รับน้ำหนักถึงเท่าไหร่?', a: 'รับน้ำหนักได้ถึง 50 กก. ครอบคลุมตั้งแต่น้องเล็ก (เช่น Pomeranian, Shih Tzu) ไปจนถึงน้องขนาดกลาง (French Bulldog, Corgi) ได้สบาย ห้องโดยสารกว้าง 60×36 ซม. สูง 58 ซม. นอนเหยียดยาวได้' },
    { q: 'พับแล้วใส่ท้ายรถ SUV ได้ไหม?', a: 'ได้แน่นอน ขนาดเมื่อพับแบบมีล้อ 64×44×80 ซม. ถ้าถอดล้อจะเล็กลงเหลือเพียง 55×31×67 ซม. ใส่ท้ายรถ sedan ได้เลย' },
    { q: 'ใช้เป็น Car Seat ได้จริงไหม ปลอดภัยหรือเปล่า?', a: 'Carrycot ถอดออกได้เป็น Car Seat พร้อมสายรัดนิรภัย ISO-ready 2 เส้น ความยาว 32–51 ซม. ปรับได้ตามขนาดเบาะรถ ใช้ได้กับ sedan และ SUV ส่วนใหญ่' },
    { q: 'ประกันและบริการหลังการขายเป็นยังไง?', a: 'ประกันโครงสร้าง 1 ปีเต็ม บริการหลังการขายโดย Pompolarr Pet TH โดยตรง — สั่งอะไหล่แยกได้ ไม่ต้องรอนำเข้า' },
    { q: 'จัดส่งและชำระเงินยังไง?', a: 'จัดส่งทั่วประเทศ 3-5 วันทำการ ชำระผ่านบัญชีธนาคาร / พร้อมเพย์ / บัตรเครดิต (ทาง LINE Shop) ' },
  ];
  return (
    <section id="faq" className="section section-cream">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap: 80, alignItems:'start'}} className="faq-grid">
          <div className="reveal">
            <Eyebrow num="09">FAQ</Eyebrow>
            <h2 className="h2" style={{marginTop: 20}}>
              <span className="th">คำถามที่ </span><br/><span className="italic-accent" style={{color:'var(--clay)'}}><span className="th">พบบ่อย</span></span>
            </h2>
            <p className="th" style={{color:'var(--ink-3)', fontSize: 15, lineHeight: 1.7, marginTop: 24, fontFamily:'"IBM Plex Sans Thai"', maxWidth:'32ch', whiteSpace:'pre-line'}}>
              {'ไม่เจอคำตอบที่ต้องการ? \nทัก LINE มาได้ตลอด เราตอบเองทุกข้อความ'}
            </p>
          </div>
          <div>
            {qs.map((item, i) => (
              <div key={i} className={`reveal d${i%3+1}`} style={{borderTop:'1px solid var(--line)', borderBottom: i === qs.length-1 ? '1px solid var(--line)' : 'none'}}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width:'100%', textAlign:'left',
                  padding:'24px 0', background:'transparent', border:'none', cursor:'pointer',
                  display:'grid', gridTemplateColumns:'auto 1fr auto', gap: 20, alignItems:'center',
                  fontFamily:'inherit',
                }}>
                  <div className="mono" style={{fontSize: 11, letterSpacing:'.18em', color:'var(--clay)'}}>0{i+1}</div>
                  <div className="serif th" style={{fontSize: 19, letterSpacing:'-.005em', fontFamily:'"Newsreader", "Noto Serif Thai"'}}>{item.q}</div>
                  <div style={{width: 20, height: 20, position:'relative'}}>
                    <span style={{position:'absolute', top: '50%', left: 0, right: 0, height: 1, background:'var(--ink)'}}/>
                    <span style={{position:'absolute', top: 0, bottom: 0, left: '50%', width: 1, background:'var(--ink)', transform: open === i ? 'scaleY(0)' : 'scaleY(1)', transition:'transform .3s var(--ease)'}}/>
                  </div>
                </button>
                <div style={{maxHeight: open === i ? 200 : 0, overflow:'hidden', transition:'max-height .4s var(--ease)'}}>
                  <div className="th" style={{padding:'0 0 24px 46px', color:'var(--ink-3)', fontSize: 15, lineHeight: 1.7, maxWidth:'58ch', fontFamily:'"IBM Plex Sans Thai"'}}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="cta" className="section" style={{background:'var(--ink)', color:'var(--bone)', paddingTop: 140, paddingBottom: 140}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 80, alignItems:'center'}} className="cta-grid">
          <div className="reveal">
            <Eyebrow num="10">Let's talk</Eyebrow>
            <h2 className="display" style={{color:'var(--bone)', marginTop: 28, fontSize: 'clamp(40px, 6vw, 88px)'}}>
              <span className="th">พร้อมรับน้อง </span><br/><span className="italic-accent" style={{color:'rgb(87, 76, 54)'}}><span className="th">คันต่อไปกันหรือยัง</span></span>
            </h2>
            <p className="th" style={{color:'rgb(37, 27, 9)', fontSize: 17, lineHeight: 1.7, marginTop: 28, maxWidth:'44ch', fontFamily:'"IBM Plex Sans Thai"', whiteSpace:'pre-line'}}>
              {'ทัก LINE มาคุยก่อนได้เลย — เล่าเรื่องน้อง บอกไลฟ์สไตล์ \nเราช่วยแนะนำว่า Modu เป็นรถที่ใช่สำหรับคุณหรือไม่'}
            </p>
            <div style={{display:'flex', gap: 14, marginTop: 40, flexWrap:'wrap'}}>
              <a className="btn btn-line" href="https://lin.ee/QGQpvyGY" target="_blank" rel="noopener" style={{padding:'16px 26px', fontSize: 15}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.631.627.61.61 0 01-.51-.253l-2.443-3.317v2.94a.627.627 0 01-1.254 0V8.108a.627.627 0 01.625-.627c.162 0 .378.092.495.258l2.466 3.32V8.108a.63.63 0 111.259 0v4.771zm-5.915 0a.627.627 0 01-.627.627.63.63 0 01-.63-.627V8.108a.63.63 0 111.257 0v4.771zm-2.466.627H4.743a.631.631 0 01-.626-.627V8.108a.63.63 0 111.258 0v4.141h1.754a.63.63 0 110 1.257M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                ปรึกษาทาง LINE
              </a>
              <a className="btn btn-ghost" href="https://shop.line.me/@houndabout?utm_source=Seller_feature&utm_medium=storefront_shopend&utm_keyword=23dd1052628bd01a4146b88619ec601e1776592898554" target="_blank" rel="noopener" style={{color:'var(--bone)', borderColor:'rgba(245,240,232,.25)', padding:'16px 26px', fontSize: 15, textDecoration:'none', backgroundColor:'rgb(40, 39, 36)'}}>สั่งซื้อผ่าน LINE Shop →</a>
              <a className="btn btn-ghost" href="https://pompolarr-warranty.netlify.app" target="_blank" rel="noopener" style={{color:'var(--bone)', borderColor:'rgba(245,240,232,.25)', padding:'16px 26px', fontSize: 15, textDecoration:'none', backgroundColor:'transparent', display:'inline-flex', alignItems:'center', gap: 8}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
                ลงทะเบียนรับประกัน
              </a>
            </div>
            <div style={{display:'flex', gap: 40, marginTop: 48, paddingTop: 32, borderTop:'1px solid rgba(245,240,232,.14)'}}>
              <div>
                <div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(245,240,232,.5)'}}>LINE ID</div>
                <div className="serif" style={{fontSize: 20, marginTop: 4, fontFamily:'"IBM Plex Sans Thai"'}}>@houndabout</div>
              </div>
              <div>
                <div className="mono" style={{fontSize: 10, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(245,240,232,.5)'}}>Response</div>
                <div className="serif" style={{fontSize: 20, marginTop: 4, fontFamily:'"IBM Plex Sans Thai"'}}>within 15 min</div>
              </div>
            </div>
          </div>

          <div className="reveal d2" style={{position:'relative', aspectRatio:'1/1'}}>
            <div style={{position:'absolute', inset:0, borderRadius: 8, overflow:'hidden', background:'var(--bone-2)'}}>
              <img
                src="images/cta-closing.jpg"
                alt="Owner and her sheltie nose-to-nose beside the Pompolarr Modu stroller"
                style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'50% 50%', display:'block'}}
              />
              <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 55%, rgba(0,0,0,.5))'}}/>
              <div style={{position:'absolute', left: 30, bottom: 30, color:'rgba(245,240,232,.95)'}}>
                <div className="mono" style={{fontSize: 10, letterSpacing:'.22em', textTransform:'uppercase', opacity:.8}}>Scene 10</div>
                <div className="serif" style={{fontSize: 30, marginTop: 6, fontStyle:'italic', letterSpacing:'-.01em', textShadow:'0 1px 14px rgba(0,0,0,.35)'}}>See you<br/>out there.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer style={{background:'var(--ink)', color:'rgba(245,240,232,.7)', padding:'40px 0', borderTop:'1px solid rgba(245,240,232,.08)'}}>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap: 20}}>
        <div className="mono" style={{fontSize: 11, letterSpacing:'.18em', textTransform:'uppercase'}}>© 2026 Pompolarr Pet Thailand · Official Distributor</div>
        <div className="mono" style={{fontSize: 11, letterSpacing:'.18em', textTransform:'uppercase', opacity:.6}}>Designed in Seoul · Delivered from Bangkok</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Compare, Specs, Stories, FAQ, CTA, Footer });
