import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, Asterisk, Check, Menu, MessageCircle, Plus, X } from 'lucide-react';
import { gsap } from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent as c } from './content'; import './styles.css';
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'power3.out', overwrite: 'auto' });
gsap.config({ force3D: true });
const links = [['Home', 'home'], ['About', 'about'], ['Virtual Office', 'workspaces'], ['Benefits', 'space'], ['Why SpaceStation', 'community']];
const Placeholder = () => null;
function go(id: string) { const target = document.getElementById(id) || (id === 'contact' ? document.getElementById('contact-form') : null); target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }) }
function bookVirtualOffice() { const offering = document.querySelector<HTMLSelectElement>('#offering'); if (offering) offering.value = 'Virtual Office'; go('contact-form'); window.dispatchEvent(new CustomEvent('spacestation:focus-form')) }
function Button({ id, children, light = false }: { id: string, children: React.ReactNode, light?: boolean }) { return <button className={`round-button ${light ? 'light' : ''}`} onClick={() => go(id)}>{children}<ArrowDownRight size={18} /></button> }
function Navigation() { const [open, setOpen] = useState(false); return <><header className="site-header single-nav"><button className="nav-logo" onClick={() => go('home')} aria-label="SpaceStation home"><Asterisk /></button><nav>{links.slice(1).map(([l, id]) => <button key={id} onClick={() => go(id)}>{l}</button>)}</nav><a className="contact-pill" href="tel:+918109214834" aria-label="Call SpaceStation Coworking at +91 8109214834">Call Us</a><button className="menu-pill" onClick={() => setOpen(true)}><Menu size={16} /> Menu</button></header><div className={`menu-panel ${open ? 'open' : ''}`} aria-hidden={!open}><button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button><p>SPACE STATION / NAVIGATION</p>{[...links, ['Call Us', 'tel:+918109214834']].map(([l, id], i) => <button className="menu-link" key={id} onClick={() => { setOpen(false); if (id.startsWith('tel:')) location.href = id; else setTimeout(() => go(id), 300) }}><small>0{i + 1}</small>{l}<ArrowDownRight /></button>)}</div></> }
function Hero() {
  const hero = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const root = hero.current;
    if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const copy = gsap.utils.toArray<HTMLElement>('.landing-copy > *', root);
    if (!copy.length) return;
    const ctx = gsap.context(() => gsap.set(copy, { autoAlpha: 0, y: 24 }), root);
    const frame = requestAnimationFrame(() => {
      gsap.to(copy, { autoAlpha: 1, y: 0, duration: .8, stagger: .08, ease: 'power3.out', clearProps: 'transform,opacity,visibility' });
    });
    return () => { cancelAnimationFrame(frame); ctx.revert() };
  }, []);

  useEffect(() => {
    if (!video.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting ? video.current?.play().catch(() => { }) : video.current?.pause(), { threshold: .15 });
    io.observe(video.current);
    const coverTrigger = ScrollTrigger.create({ trigger: '.hero-reveal', start: 'top top', onEnter: () => video.current?.pause(), onLeaveBack: () => video.current?.play().catch(() => { }) });
    return () => { io.disconnect(); coverTrigger.kill() };
  }, []);

  return <section ref={hero} className="landing-hero" id="home"><div className="hero-media"><video ref={video} autoPlay muted loop playsInline preload="auto" poster={c.hero.poster}>{c.hero.mobileVideo && <source src={c.hero.mobileVideo} media="(max-width:700px)" type="video/mp4" />}{c.hero.desktopVideo && <source src={c.hero.desktopVideo} type="video/mp4" />}</video></div><div className="hero-shade" /><div className="landing-copy">{c.hero.eyebrow ? <p>{c.hero.eyebrow}</p> : null}<h1>Most Trusted Co-Working<br /><em>in Chhattisgarh</em></h1><h2>{c.hero.title}</h2><p>{c.hero.body}</p><div><button className="round-button light" onClick={bookVirtualOffice}>Book a Virtual Office <MessageCircle size={18} /></button></div></div><button className="scroll-cue" onClick={() => go('about')}>SCROLL TO EXPLORE <ArrowDownRight /></button></section>
}
const partners = [
  { name: 'Deepali Designs', style: 'brand-deepali' },
  { name: 'Newmoon Telelinks', style: 'brand-newmoon' },
  { name: 'Cocoblu Retail', style: 'brand-cocoblu' },
  { name: 'Onesto Labs', style: 'brand-onesto' },
  { name: 'Pan India Ventures', style: 'brand-panindia' },
  { name: 'Maccaferri', style: 'brand-maccaferri' },
  { name: 'Three D Integrated', style: 'brand-threed' },
  { name: 'My Money Matters', style: 'brand-mymoney' },
  { name: 'Cannis Lupas', style: 'brand-cannis' },
  { name: 'Eversource Construction', style: 'brand-eversource' },
  { name: 'Nu Skin', style: 'brand-nuskin' },
  { name: 'Third Wave Services', style: 'brand-thirdwave' },
  { name: 'ISN Communications', style: 'brand-isn' },
  { name: 'Vedic Textile', style: 'brand-vedic' },
  { name: 'Astrafin NeoSolutions', style: 'brand-astrafin' },
  { name: 'Mitsumi', style: 'brand-mitsumi' },
  { name: 'Layer Story', style: 'brand-layerstory' },
  { name: 'Sakae Labs', style: 'brand-sakae' },
];

function InfoStrip() {
  const renderList = (prefix: string) => (
    <div className="partners-sequence" key={prefix} aria-hidden={prefix !== 'p1' || undefined}>
      {partners.map(p => (
        <span key={`${prefix}-${p.name}`} className={`partner-logo ${p.style}`}>
          {p.name}
          <span className="partner-sep" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="info-strip partners-strip" aria-label="Client brands">
      <div className="partners-marquee">
        <div className="partners-track">
          {renderList('p1')}
          {renderList('p2')}
        </div>
      </div>
    </div>
  );
}
function Intro() { return <section id="about" className="landing-intro"><div className="intro-copy"><p>WELCOME TO SPACE STATION</p><h2>{c.intro.title}</h2></div><div className="intro-side"><p>{c.intro.body}</p><Button id="workspaces">View the service</Button></div></section> }
function Workspaces() { const [details, setDetails] = useState(false); const item = c.offerings[0]; return <section id="workspaces" className="workspaces-dark"><div className="section-kicker"><span>VIRTUAL OFFICE</span><h2>A professional address.<br /><em>For your business.</em></h2></div><div className="workspace-panel"><div className="wp-copy"><span>{item.label}</span><h3>{item.name}</h3><p>{item.description}</p><strong>{item.price}</strong><div className="wp-actions"><button onClick={() => setDetails(!details)} aria-expanded={details} aria-controls="virtual-office-details">View Details <Plus /></button><button onClick={() => { const el = document.querySelector<HTMLSelectElement>('#offering'); if (el) el.value = item.name; go('contact-form'); window.dispatchEvent(new CustomEvent('spacestation:focus-form')) }}>Enquire <ArrowRight /></button></div><ul id="virtual-office-details" hidden={!details}>{item.features.map(f => <li key={f}><Check /> {f}</li>)}</ul></div><figure><img src={item.image} alt="Professional business address and virtual-office support" loading="lazy" /><Placeholder /></figure></div><div className="onboarding"><p>VIRTUAL OFFICE / HOW IT WORKS</p>{c.onboarding.map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section> }
function SpaceGallery() { const items = c.gallery; const section = useRef<HTMLElement>(null); const sequence = useRef<HTMLDivElement>(null); const [manualPause, setManualPause] = useState(false); const [onscreen, setOnscreen] = useState(true); const [duration, setDuration] = useState(36); useEffect(() => { if (!section.current || !sequence.current) return; const visibility = new IntersectionObserver(([entry]) => setOnscreen(entry.isIntersecting), { threshold: .05 }); visibility.observe(section.current); const measure = () => sequence.current && setDuration(Math.max(24, sequence.current.scrollWidth / 34)); const resize = new ResizeObserver(measure); resize.observe(sequence.current); measure(); return () => { visibility.disconnect(); resize.disconnect() } }, []); const renderSequence = (duplicate = false) => <div className="photo-sequence" ref={duplicate ? undefined : sequence} aria-hidden={duplicate || undefined}>{items.map(([name, src], i) => <figure className={`strip-photo strip-photo-${i + 1}`} key={`${duplicate ? 'copy' : 'main'}-${src}`}><img src={src} alt={duplicate ? '' : `SpaceStation ${name.toLowerCase()}`} loading={i > 1 ? 'lazy' : 'eager'} />{i === 1 && <span className="strip-badge">SPACE<br />TO THINK</span>}</figure>)}</div>; return <section ref={section} id="space" className="space-gallery moving-gallery"><header><div><h2>A closer<br /><em>look around.</em></h2></div><div><p>A glimpse inside SpaceStation.</p><button className="strip-toggle" type="button" aria-pressed={manualPause} onClick={() => setManualPause(v => !v)}>{manualPause ? 'Play photos' : 'Pause photos'}</button></div></header><div className="photo-strip" data-paused={manualPause || !onscreen} style={{ '--strip-duration': `${duration}s` } as React.CSSProperties}><div className="photo-track">{renderSequence()}{renderSequence(true)}</div></div></section> }
function Community() { const reviews = c.reviews; const [active, setActive] = useState(0); const touchStart = useRef<number | null>(null); function show(index: number) { setActive((index + reviews.length) % reviews.length) } return <section id="community" className="community review-community"><div className="community-heading"><p>CLIENT REVIEWS & RATINGS</p><h2>4.9★ Rated<br /><em>in Bhilai.</em></h2><div className="community-rating-pill" aria-label="Rating: 4.9 out of 5 stars based on 45+ online reviews"><span className="stars">★★★★★</span><strong>{c.ratingSummary.score} / 5</strong><small>({c.ratingSummary.count} online reviews)</small></div><p>Rated 4.9/5 based on verified reviews across Google & Justdial for business-address documentation, GST support, and virtual offices in Chhattisgarh.</p></div><div className="review-stage"><div className="review-viewport" onTouchStart={e => { touchStart.current = e.touches[0].clientX }} onTouchEnd={e => { if (touchStart.current === null) return; const diff = touchStart.current - e.changedTouches[0].clientX; if (diff > 45) show(active + 1); else if (diff < -45) show(active - 1); touchStart.current = null }}><div className="review-track" style={{ transform: `translate3d(-${active * 100}%,0,0)` }}>{reviews.map((rev, i) => <article className={`review-card review-card-${(i % 5) + 1} quoted-review`} key={rev.author}><div className="review-top"><span className="review-tag">{rev.stars} · {rev.platform}</span><span className="review-badge">Verified</span></div><strong>{rev.title}</strong><p>“{rev.body}”</p><div className="review-foot"><div className="review-author"><span className="author-name">{rev.author}</span><span className="author-role">{rev.role}</span></div><button className="benefit-link" onClick={() => { go('contact-form'); window.dispatchEvent(new CustomEvent('spacestation:focus-form')) }}>Ask SpaceStation <ArrowRight /></button></div></article>)}</div></div><div className="review-controls"><button onClick={() => show(active - 1)} aria-label="Previous review">←</button><span>{String(active + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span><button onClick={() => show(active + 1)} aria-label="Next review">→</button></div></div></section> }
function Visit() { return <section id="visit" className="visit"><div className="visit-frame"><img src={c.visitImage} alt="Professional business support from SpaceStation" loading="lazy" /><Placeholder /><div className="visit-panel"><p>START REMOTELY</p><h2>Build your<br /><em>business presence.</em></h2><p>Ask the SpaceStation team about eligibility, documents, pricing and the next steps for your virtual office.</p><button className="round-button" onClick={bookVirtualOffice}>Book a Virtual Office <MessageCircle size={18} /></button></div></div></section> }
const enquiryKey = 'spacestation-pending-enquiry';
document.addEventListener('invalid', event => {
  if ((event.target as HTMLElement).closest('.contact-section form')) event.preventDefault();
}, true);
function Contact() { const [open, setOpen] = useState(0); const [status, setStatus] = useState(''); const [pending, setPending] = useState(false); const [confirming, setConfirming] = useState(false); const [success, setSuccess] = useState(false); const formRef = useRef<HTMLFormElement>(null); const messageRef = useRef(''); useEffect(() => { const handleFocusForm = () => { setSuccess(false); setConfirming(false); setTimeout(() => { const offering = formRef.current?.querySelector<HTMLSelectElement>('#offering'); if (offering) offering.value = 'Virtual Office'; const nameInput = formRef.current?.querySelector<HTMLInputElement>('input[name="name"]'); nameInput?.focus({ preventScroll: true }) }, 450) }; window.addEventListener('spacestation:focus-form', handleFocusForm); return () => window.removeEventListener('spacestation:focus-form', handleFocusForm) }, []); useEffect(() => { const raw = sessionStorage.getItem(enquiryKey); if (!raw) return; try { const saved = JSON.parse(raw) as Record<string, string>; messageRef.current = saved.encodedMessage || ''; setPending(true); setConfirming(true); requestAnimationFrame(() => { if (!formRef.current) return; Object.entries(saved).forEach(([key, value]) => { const field = formRef.current?.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null; if (field && key !== 'encodedMessage' && key !== 'openedAt') field.value = value }) }) } catch { sessionStorage.removeItem(enquiryKey) } }, []); useEffect(() => { const returned = () => { if (!pending) return; const raw = sessionStorage.getItem(enquiryKey); if (!raw) return; try { const saved = JSON.parse(raw); if (Date.now() - Number(saved.openedAt || 0) > 1200) setConfirming(true) } catch { } }; addEventListener('focus', returned); const visible = () => document.visibilityState === 'visible' && returned(); document.addEventListener('visibilitychange', visible); addEventListener('pageshow', returned); return () => { removeEventListener('focus', returned); document.removeEventListener('visibilitychange', visible); removeEventListener('pageshow', returned) } }, [pending]); function openWhatsapp(message: string) { window.open(`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer') } function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const form = e.currentTarget; if (!form.checkValidity()) { form.reportValidity(); setStatus('Please complete all required fields.'); return } const d = new FormData(form); const name = String(d.get('name') || '').trim(); const email = String(d.get('email') || '').trim(); const phone = String(d.get('phone') || '').trim(); const offering = String(d.get('offering') || 'Virtual Office').trim(); const userMessage = String(d.get('message') || '').trim(); const lines = [ `Hello SpaceStation Coworking team,`, ``, `I would like to enquire about your ${offering} service at SpaceStation Bhilai.`, ``, `My name is ${name}. You can reach me via phone at ${phone} or by email at ${email}.` ]; if (userMessage) { lines.push( ``, `Here are the details of my enquiry:`, `"${userMessage}"` ); } lines.push( ``, `Could you please share the pricing structure, documentation checklist, and onboarding process?`, ``, `Thank you,`, name ); const msg = lines.join('\n'); const saved = { name, email, phone, offering, message: userMessage, encodedMessage: msg, openedAt: String(Date.now()) }; sessionStorage.setItem(enquiryKey, JSON.stringify(saved)); messageRef.current = msg; setPending(true); setConfirming(false); setStatus(''); openWhatsapp(msg) } function reopen() { const raw = sessionStorage.getItem(enquiryKey); if (raw) { const saved = JSON.parse(raw); saved.openedAt = String(Date.now()); sessionStorage.setItem(enquiryKey, JSON.stringify(saved)) } setConfirming(false); openWhatsapp(messageRef.current) } function confirmSent() { sessionStorage.removeItem(enquiryKey); setPending(false); setConfirming(false); setSuccess(true); setStatus(''); formRef.current?.reset() } function another() { setSuccess(false); formRef.current?.querySelector<HTMLInputElement>('input')?.focus() } return <section id="contact" className="contact-section"><div className="faq-side"><p>QUESTIONS, ANSWERED</p><h2>Before you<br /><em>come by.</em></h2>{c.faqs.map(([q, a], i) => <article key={q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>0{i + 1} {q}</span><Plus /></button>{open === i && <p>{a}</p>}</article>)}</div><div className="form-side" id="contact-form">{success ? <div className="enquiry-panel success-panel" role="status"><Check /><p>ENQUIRY CONFIRMED</p><h2>Thank you—your enquiry is on its way.</h2><p>You’ve confirmed sending your enquiry on WhatsApp. Our team will review your requirements and respond promptly.</p><div><button onClick={() => setSuccess(false)}>Back to website</button><button onClick={another}>Send another enquiry</button></div></div> : confirming ? <div className="enquiry-panel confirm-panel" role="dialog" aria-labelledby="confirm-title"><p>WHATSAPP ENQUIRY</p><h2 id="confirm-title">Did you send your enquiry on WhatsApp?</h2><div><button onClick={confirmSent}>Yes, I sent it</button><button onClick={reopen}>Open WhatsApp again</button><button className="quiet" onClick={() => setConfirming(false)}>Not yet</button></div></div> : <><p>START A CONVERSATION</p><h2>Tell us what<br />you need.</h2><form ref={formRef} onSubmit={submit}><label>Name *<input required name="name" autoComplete="name" /></label><label>Email *<input required name="email" type="email" autoComplete="email" /></label><label>Phone *<input required name="phone" type="tel" autoComplete="tel" /></label><label>Interested offering<select id="offering" name="offering"><option>Mailing Address</option><option>Virtual Office</option><option>Dedicated Virtual Desk</option></select></label><label>Message (Optional)<textarea name="message" rows={3} placeholder="Tell us about your requirements or any questions you have..." /></label><button className="send-button">Send via WhatsApp <ArrowRight /></button>{status && <p className="form-status" role="status">{status}</p>}</form><div className="contact-facts"><a href={`mailto:${c.email}`}>{c.email}</a><a href={c.mapUrl} target="_blank" rel="noreferrer">{c.address}</a></div></>}</div></section> }
function Footer() { return <footer className="landing-footer"><div className="footer-wordmark"><Asterisk /><span>SpaceStation<br /><em>Coworking</em></span></div><div className="footer-nav">{links.map(([l, id]) => <button key={id} onClick={() => go(id)}>{l}</button>)}</div><div><a href="tel:+918109214834">+91 81092 14834</a><a href={`mailto:${c.email}`}>{c.email}</a><p>{c.address}</p></div><p className="copyright">© {new Date().getFullYear()} SpaceStation Coworking</p></footer> }
function App() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = `${c.brand} — Most Trusted Co-Working in Chhattisgarh`;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.editorial-grid figure').forEach(el => gsap.from(el, { y: 44, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
      const cards = gsap.utils.toArray<HTMLElement>('.testimonial');
      if (cards.length > 1) {
        const deck = gsap.timeline({ scrollTrigger: { trigger: '.card-stack', start: 'top 18%', end: `+=${(cards.length - 1) * 230}`, scrub: .35, pin: true, pinSpacing: true, anticipatePin: 1, invalidateOnRefresh: true } });
        cards.slice(0, -1).forEach((card, i) => deck.to(card, { xPercent: i % 2 ? 108 : -108, y: -32, rotation: i % 2 ? 10 : -10, ease: 'none', duration: 1 }, i));
      }
      gsap.from('.visit-panel', { x: 45, opacity: 0, duration: .8, scrollTrigger: { trigger: '.visit-frame', start: 'top 78%', once: true } });
    }, root);
    let active = true;
    const refresh = () => ScrollTrigger.refresh();
    addEventListener('load', refresh);
    document.fonts.ready.then(() => { if (active) refresh() });
    return () => { active = false; removeEventListener('load', refresh); ctx.revert() };
  }, []);
  return <div ref={root}><Navigation /><main><div className="hero-transition"><Hero /><div className="hero-reveal"><InfoStrip /><Intro /></div></div><Workspaces /><SpaceGallery /><Community /><Visit /><Contact /></main><Footer /></div>
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
