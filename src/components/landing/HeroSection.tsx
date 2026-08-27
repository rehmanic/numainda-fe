'use client';

import { useEffect, useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function HeroSection() {
  const [playing, setPlaying] = useState(true);
  const [heroSecs, setHeroSecs] = useState(42);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  return (
    <header id="sp-hero">
      <div className="sp-hero-copy">
        <h1 className="hv" id="sb2">Speak your customer&apos;s language</h1>
        <div className="sp-hero-tags hv" id="sb3">
          <span>24/7 Support</span><span>·</span><span>API Native</span><span>·</span><span>Multilingual</span>
        </div>
        <div className="sp-player-container hv" id="sb4">
          <div className="sp-player">
            <button className="sp-player-btn" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
            <canvas ref={canvasRef} aria-hidden="true" />
            <span className="sp-player-time">{fmt(heroSecs)}</span>
          </div>
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
  );
}
