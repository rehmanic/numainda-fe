'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import numaindaIcon from '@/src/assets/numainda_new_icon.svg';
import numaindaLogo from '@/src/assets/numainda_new_logo.svg';
import { Phone, Building2, ShoppingCart, Headphones, Landmark } from 'lucide-react';
import './page.css';

export default function Home() {
  const [playing, setPlaying] = useState(true);
  const [heroSecs, setHeroSecs] = useState(42);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', industry: '', phone: '' });

  /* ── Scroll Reveal ──────────────────────────────────────── */
  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (RM) {
      document.querySelectorAll('.rv, .hv').forEach(el => el.classList.add('in', 'on'));
      return;
    }

    ['sb1', 'sb2', 'sb3', 'sb4', 'sb5'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.classList.add('on'), 150 + i * 140);
    });

    const pending = new Set(document.querySelectorAll('.rv'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          e.target.classList.add('in');
          pending.delete(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });

    Array.from(pending).forEach((el: any, i) => {
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });

    const sweep = () => {
      Array.from(pending).forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
          el.classList.add('in');
          pending.delete(el);
          io.unobserve(el);
        }
      });
    };

    window.addEventListener('scroll', sweep, { passive: true });
    sweep();
    return () => { window.removeEventListener('scroll', sweep); io.disconnect(); };
  }, []);

  /* ── Waveform Canvas ────────────────────────────────────── */
  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cv = canvasRef.current;
    if (!cv) return;
    const g = cv.getContext('2d');
    if (!g) return;

    let W = 0, H = 0, raf = 0, t = 0, secs = 42, vis = true;
    const BARS = 64;
    let seed = 991;
    const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
    const base = Array.from({ length: BARS }, () => 0.18 + rnd() * 0.82);

    const size = () => { const r = cv.getBoundingClientRect(); W = cv.width = Math.max(2, Math.round(r.width)); H = cv.height = Math.max(2, Math.round(r.height)); };
    const draw = () => {
      g.clearRect(0, 0, W, H);
      const bw = W / BARS;
      for (let i = 0; i < BARS; i++) {
        const live = playing ? (0.35 + 0.65 * Math.abs(Math.sin(t * 2.2 + i * 0.34))) : 0.16;
        const h = Math.max(2, base[i] * live * H);
        g.fillStyle = i / BARS < 0.42 ? 'rgba(244,245,246,.92)' : 'rgba(244,245,246,.34)';
        g.fillRect(i * bw, (H - h) / 2, Math.max(1, bw - 2), h);
      }
    };
    const frame = () => { raf = 0; if (!vis || document.hidden) return; if (playing) { t += 0.016; secs += 0.016; setHeroSecs(secs); } draw(); go(); };
    const go = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const onResize = () => { size(); draw(); };
    window.addEventListener('resize', onResize);
    const observer = new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis && !RM) go(); });
    observer.observe(cv);
    size();
    if (RM) draw(); else go();
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf); observer.disconnect(); };
  }, [playing]);

  /* ── Progress Bar ───────────────────────────────────────── */
  useEffect(() => {
    const bar = document.getElementById('sp-prog');
    if (!bar) return;
    const onScroll = () => { const h = document.documentElement.scrollHeight - window.innerHeight; bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Helpers ────────────────────────────────────────────── */
  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  /* ── Data ───────────────────────────────────────────────── */
  const heroFeatures = [
    { title: 'Multilingual AI Agent', desc: 'Communicates natively in 7+ regional languages including Sindhi, Balochi, Punjabi, Pashto, and Siraiki.', details: ['Native language understanding — not translation', 'Automatic language detection from first utterance', 'Cultural context awareness per region', 'Seamless language switching mid-conversation'] },
    { title: 'Real-time API Integration', desc: 'Hooks directly into your databases, CRM, and billing systems for instant query resolution.', details: ['Direct database and CRM connectivity', 'Real-time account lookup and transaction processing', 'Zero human routing for data-dependent queries', 'Secure, encrypted data handling'] },
    { title: 'Automated Call Analytics', desc: '100% automated call transcription with sentiment analysis, demographics, and trend detection.', details: ['Every call transcribed and indexed automatically', 'Real-time sentiment scoring per interaction', 'Demographic and geographic trend dashboards', 'Exportable reports and API access to analytics'] },
  ];

  const compactFeatures = ['Fatigue-free, consistent quality', 'Instant knowledge base updates', 'Automated outbound routines', 'Natural voice synthesis', 'Peak hour auto-scaling', 'Sentiment detection'];

  const processSteps = [
    { title: 'Call Received', sub: 'Instant pickup', detail: 'Customer calls your support line. Numainda answers instantly — no IVR menus, no hold queues. The AI agent greets the caller naturally and begins listening.' },
    { title: 'Language Detection', sub: 'Auto-identify', detail: 'Within the first few words, Numainda identifies the caller\'s language — whether it\'s Sindhi, Punjabi, Pashto, Balochi, Siraiki, Urdu, or English — and switches seamlessly.' },
    { title: 'Intent Parsing', sub: 'NLP engine', detail: 'The AI engine parses the customer\'s query using advanced NLP, extracting intent, sentiment, and context. It understands not just what they\'re saying, but what they need.' },
    { title: 'Data Lookup', sub: 'API fetch', detail: 'For queries that require account-specific information — billing, order status, plan details — Numainda fetches data in real-time from your connected systems via API.' },
    { title: 'Resolution', sub: 'Natural response', detail: 'The AI delivers a natural, conversational response in the customer\'s language. Complex issues are resolved on the spot; edge cases are escalated with full context attached.' },
    { title: 'Analytics', sub: 'Auto-logged', detail: 'Every interaction is transcribed, scored for sentiment, and pushed to your analytics dashboard. Patterns emerge. Insights surface. No manual call listening required.' },
  ];

  const industries = [
    { Icon: Phone, title: 'Telecommunications', desc: 'Handle millions of subscriber queries across carriers.', example: 'Balance inquiries · Plan changes · Complaints' },
    { Icon: Building2, title: 'Banking & Fintech', desc: 'Secure, compliant support for financial services.', example: 'Account queries · Disputes · Loan info' },
    { Icon: ShoppingCart, title: 'E-commerce', desc: 'Order tracking, returns, and product queries at scale.', example: 'Delivery status · Refunds · Recommendations' },
    { Icon: Headphones, title: 'BPOs & Call Centers', desc: 'Augment human agents and cut operational costs.', example: 'First-line handling · Agent assist · Overflow' },
    { Icon: Landmark, title: 'Government & Agri-tech', desc: 'Reach rural communities in their native language.', example: 'Registration · Info delivery · Complaints' },
  ];

  const tiers = [
    { name: 'Small Business', desc: 'For startups and small teams getting started with AI support.', features: ['Up to 1,000 calls/month', '3 languages supported', 'Basic call analytics', 'Email support', 'Standard knowledge base'] },
    { name: 'Medium', desc: 'For growing businesses that need comprehensive AI coverage.', features: ['Up to 10,000 calls/month', 'All 7 languages supported', 'Advanced analytics & dashboards', 'API integration (up to 3 systems)', 'Priority support', 'Custom voice & tone settings', 'Automated outbound routines'], highlighted: true },
    { name: 'Enterprise', desc: 'For large organizations with custom requirements and high volume.', features: ['Unlimited calls', 'All languages + custom training', 'Full analytics suite with API', 'Unlimited API integrations', 'Dedicated account manager', 'Custom SLA', 'On-premise deployment option', 'White-label capability', 'Advanced security & compliance'] },
  ];

  const faqs = [
    { q: 'What languages does Numainda support?', a: 'Numainda currently supports Sindhi, Balochi, Punjabi, Pashto, Siraiki, Urdu, and English. We continuously add support for more regional languages based on customer demand.' },
    { q: 'How does Numainda integrate with our existing systems?', a: 'Numainda connects via RESTful APIs to your existing CRM, billing, and database systems. Our team handles the integration process, and most setups are completed within 2–4 weeks.' },
    { q: 'How long does the setup process take?', a: 'A typical deployment takes 2–4 weeks from kickoff to live. This includes system integration, knowledge base configuration, voice customization, and testing.' },
    { q: 'Can Numainda handle multiple calls simultaneously?', a: 'Yes. Unlike human agents, Numainda scales instantly. Whether you receive 10 or 10,000 simultaneous calls, every customer gets the same immediate, high-quality response.' },
    { q: 'How is pricing structured?', a: 'We offer three tiers based on call volume and feature requirements: Small Business, Medium, and Enterprise. All plans are custom-quoted. Contact us for a detailed proposal.' },
    { q: 'Is there a trial or pilot program?', a: 'Yes. We offer a 30-day pilot program where you can test Numainda with a subset of your call volume before committing to a full deployment.' },
    { q: 'What kind of support do you provide?', a: 'All plans include email support. Medium and Enterprise plans include priority support with guaranteed response times. Enterprise plans come with a dedicated account manager.' },
    { q: 'Is our data secure?', a: 'Absolutely. All data is encrypted in transit and at rest. We are SOC 2 compliant and offer on-premise deployment options for organizations with strict data residency requirements.' },
  ];

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <>
      <i id="sp-prog" />

      {/* ═══ Nav ═══ */}
      <nav className="sp-nav">
        <div className="sp-nav-brand">
          <Image src={numaindaIcon} alt="Numainda" width={20} height={20} className="opacity-80" />
          <span>Numainda</span>
        </div>
        <ul className="sp-nav-links">
          <li><a href="#sp-benefits">Benefits</a></li>
          <li><a href="#sp-features">Features</a></li>
          <li><a href="#sp-process">Process</a></li>
          <li><a href="#sp-industries">Industries</a></li>
          <li><a href="#sp-pricing">Pricing</a></li>
          <li><a href="#sp-faq">FAQ</a></li>
        </ul>
        <a href="#sp-contact" className="sp-nav-cta">Book a Demo</a>
      </nav>

      {/* ═══ Hero ═══ */}
      <header id="sp-hero">
        <div className="sp-hero-copy">
          <div className="sp-marks" aria-hidden="true"><i /><i /><i /></div>
          <div className="hv" id="sb1">
            <b className="sp-hero-label">NUMAINDA AI</b>
            <span className="mi">Next-generation CSR</span>
          </div>
          <h1 className="hv" id="sb2">Scalable AI CSR<br />for modern<br />enterprises</h1>
          <div className="sp-hero-tags hv" id="sb3">
            <span>24/7 Support</span><span>·</span><span>API Native</span><span>·</span><span>Multilingual</span>
          </div>
          <div className="sp-player hv" id="sb4">
            <button className="sp-player-btn" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? '❚❚' : '▶'}
            </button>
            <div>
              <div className="sp-player-meta"><b>Live Call Active</b><span>Caller: Sindhi · Resolution: In Progress</span></div>
              <canvas ref={canvasRef} aria-hidden="true" />
            </div>
            <span className="sp-player-time">{fmt(heroSecs)}</span>
          </div>
        </div>
        <div className="sp-hero-visual hv" id="sb5">
          <div className="sp-panel">
            <div className="sp-panel-header">
              <span className="sp-panel-dot" />
              <span>Numainda AI · Live</span>
              <span className="sp-panel-time">{fmt(heroSecs)}</span>
            </div>
            <div className="sp-panel-body">
              <div className="sp-msg sp-msg-customer">
                <span className="sp-msg-label">Customer · Sindhi</span>
                <p>مان پنهنجي بل بابت ڄاڻڻ چاهيان ٿو</p>
              </div>
              <div className="sp-msg sp-msg-ai">
                <span className="sp-msg-label">Numainda AI</span>
                <p>توهان جو موجوده بل 2,450 روپيا آهي۔ ڇا مان وڌيڪ تفصيل ڏيان؟</p>
              </div>
              <div className="sp-msg sp-msg-customer">
                <span className="sp-msg-label">Customer · Sindhi</span>
                <p>ها، مهرباني ڪري</p>
              </div>
            </div>
            <div className="sp-panel-footer">
              <span className="sp-panel-resolved">✓ Resolved</span>
              <span>Response: 1.2s</span>
              <span>Satisfaction: High</span>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ Benefits ═══ */}
      <section id="sp-benefits">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">01</span><span>Why Numainda</span></div>

          <div className="sp-benefit rv">
            <div className="sp-benefit-main">
              <span className="sp-benefit-num">01</span>
              <h2>Always<br />Available</h2>
              <span className="mi">24/7 · 365 Days · Zero Downtime</span>
            </div>
            <div className="sp-benefit-detail">
              <p>Your customers don&apos;t clock out at 5pm. Peak hours, holidays, 3am emergencies — Numainda handles them all with the same quality and speed. No shift schedules. No overtime costs. No tired voices.</p>
            </div>
          </div>

          <div className="sp-benefit sp-benefit-alt rv">
            <div className="sp-benefit-main">
              <span className="sp-benefit-num">02</span>
              <h2>Every<br />Language</h2>
              <span className="mi">One Agent · Seven Languages · Native Fluency</span>
            </div>
            <div className="sp-benefit-detail">
              <p>A single AI agent that speaks Sindhi, Balochi, Punjabi, Pashto, Siraiki, Urdu, and English natively. No routing between language teams. No translation delays. Your customers hear their own language from the first second.</p>
            </div>
          </div>

          <div className="sp-benefit rv">
            <div className="sp-benefit-main">
              <span className="sp-benefit-num">03</span>
              <h2>Zero<br />Wait</h2>
              <span className="mi">No IVR · No Hold Music · No Queues</span>
            </div>
            <div className="sp-benefit-detail">
              <p>Customers connect instantly to an AI agent that understands their intent immediately. No &lsquo;Press 1 for English&rsquo; menus. No hold music. Just a conversation that solves their problem in seconds.</p>
            </div>
          </div>

          <div className="sp-benefit sp-benefit-alt rv">
            <div className="sp-benefit-main">
              <span className="sp-benefit-num">04</span>
              <h2>Total<br />Insight</h2>
              <span className="mi">100% Transcription · Real-time Analytics</span>
            </div>
            <div className="sp-benefit-detail">
              <p>Every single call is transcribed, analyzed for sentiment, and pushed to your dashboards automatically. No more sampling 5% of calls for quality. Every customer interaction becomes actionable data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section id="sp-features">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">02</span><span>Core Capabilities</span></div>
          <div className="sp-feat-grid">
            {heroFeatures.map((f, i) => (
              <article key={i} className={`sp-feat-card rv${expandedFeature === i ? ' expanded' : ''}`} onClick={() => setExpandedFeature(expandedFeature === i ? null : i)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setExpandedFeature(expandedFeature === i ? null : i); }}>
                <span className="sp-feat-num">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="sp-feat-expand">{expandedFeature === i ? '−' : '+'} Details</span>
                {expandedFeature === i && (
                  <div className="sp-feat-detail">
                    <ul>{f.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="sp-feat-compact rv">
            <h4>Additional Capabilities</h4>
            <ul>{compactFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* ═══ Process Flow ═══ */}
      <section id="sp-process">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">03</span><span>How It Works</span></div>
          <div className="sp-steps rv">
            {processSteps.map((s, i) => (
              <div key={i} className={`sp-step${activeStep === i ? ' active' : ''}`} onClick={() => setActiveStep(i)}>
                <span className="sp-step-dot">{String(i + 1).padStart(2, '0')}</span>
                <div className="sp-step-title">{s.title}</div>
                <div className="sp-step-sub">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="sp-step-panel rv" key={activeStep}>
            <span className="sp-step-panel-num">{String(activeStep + 1).padStart(2, '0')}</span>
            <div>
              <h3>{processSteps[activeStep].title}</h3>
              <p>{processSteps[activeStep].detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Industries ═══ */}
      <section id="sp-industries">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">04</span><span>Industries We Serve</span></div>
          <div className="sp-industry-grid">
            {industries.map((ind, i) => (
              <div key={i} className="sp-industry-card rv">
                <ind.Icon />
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <span className="sp-industry-example">{ind.example}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Pricing ═══ */}
      <section id="sp-pricing">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">05</span><span>Plans</span></div>
          <div className="sp-pricing-grid">
            {tiers.map((tier, i) => (
              <div key={i} className={`sp-tier rv${tier.highlighted ? ' sp-tier-highlight' : ''}`}>
                {tier.highlighted && <span className="sp-tier-badge">Most Popular</span>}
                <div className="sp-tier-name">{tier.name}</div>
                <div className="sp-tier-desc">{tier.desc}</div>
                <ul className="sp-tier-features">
                  {tier.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#sp-contact" className="sp-tier-cta">Contact Sales</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="sp-faq">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">06</span><span>Frequently Asked Questions</span></div>
          <div className="sp-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`sp-faq-item rv${expandedFaq === i ? ' open' : ''}`}>
                <button className="sp-faq-q" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="sp-faq-toggle">+</span>
                </button>
                {expandedFaq === i && <div className="sp-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section id="sp-contact">
        <div className="sp-wrap">
          <div className="sp-section-label rv"><span className="sp-label-num">07</span><span>Get Started</span></div>
          <div className="sp-contact-grid">
            <div className="sp-contact-copy rv">
              <h2>Deploy a<br />modern CSR.<br />No wait times,<br />ever.</h2>
              <p>Join the next generation of customer support with an AI agent that speaks your customers&apos; language natively.</p>
            </div>
            <form className="sp-form rv" onSubmit={(e) => e.preventDefault()}>
              <div className="sp-form-field">
                <label htmlFor="sp-name">Name</label>
                <input id="sp-name" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="sp-form-field">
                <label htmlFor="sp-email">Email</label>
                <input id="sp-email" type="email" placeholder="work@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="sp-form-field">
                <label htmlFor="sp-company">Company</label>
                <input id="sp-company" type="text" placeholder="Company name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>
              <div className="sp-form-field">
                <label htmlFor="sp-industry">Industry</label>
                <select id="sp-industry" value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })}>
                  <option value="">Select your industry</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="banking">Banking &amp; Fintech</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="bpo">BPOs &amp; Call Centers</option>
                  <option value="government">Government &amp; Agri-tech</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="sp-form-field">
                <label htmlFor="sp-phone">Phone</label>
                <input id="sp-phone" type="tel" placeholder="+92 300 1234567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <button type="submit" className="sp-form-submit">Book a Demo →</button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="sp-footer">
        <div className="sp-wrap">
          <div className="sp-footer-top">
            <div className="sp-footer-brand">
              <div className="sp-footer-brand-name">
                <Image src={numaindaIcon} alt="Numainda" width={18} height={18} className="opacity-70" />
                <span>Numainda</span>
              </div>
              <p>AI-powered customer service representative in every language.</p>
            </div>
            <div className="sp-footer-col">
              <h5>Product</h5>
              <ul>
                <li><a href="#sp-features">Features</a></li>
                <li><a href="#sp-process">How it Works</a></li>
                <li><a href="#sp-industries">Industries</a></li>
                <li><a href="#sp-pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="sp-footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="sp-footer-col">
              <h5>Resources</h5>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </div>
            <div className="sp-footer-col">
              <h5>Legal</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="sp-footer-bottom">
            <span>© {new Date().getFullYear()} Numainda · Pakistan</span>
            <div className="sp-footer-social">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
