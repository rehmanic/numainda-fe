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
    <header id="sp-hero" className="relative min-h-[100svh] pt-[var(--spacing-nav)] grid grid-cols-[1.05fr_.95fr] items-center gap-[clamp(20px,4vw,60px)] max-[920px]:grid-cols-1">
      <div className="pl-[var(--edge)] relative z-10 max-[920px]:pl-[var(--edge)] max-[920px]:pr-[var(--edge)]">
        <h1 className="font-heading font-bold text-[clamp(34px,5.6vw,80px)] leading-[.94] tracking-[-.02em] uppercase hv" id="sb2">AI Customer Service Representative</h1>
        <div className="mt-[18px] flex gap-4 flex-wrap text-[12px] font-semibold tracking-[.2em] uppercase text-ink/80 hv" id="sb3">
          <span>24/7 Support</span><span>·</span><span></span>Multilingual<span>·</span><span>Realtime</span>
        </div>
        <div className="mt-[clamp(20px,3.4vh,34px)] flex flex-col gap-3 items-start relative z-10 hv" id="sb4">
          <div className="bg-ink text-paper grid grid-cols-[auto_1fr_auto] gap-[clamp(12px,2vw,22px)] items-center p-[clamp(12px,1.8vw,18px)] w-full max-w-[min(560px,92vw)] max-[620px]:grid-cols-[auto_1fr]">
            <button className="w-[46px] h-[46px] rounded-full bg-paper text-ink border-0 cursor-pointer grid place-items-center flex-shrink-0 transition-transform duration-300 hover:scale-105" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
            <canvas ref={canvasRef} aria-hidden="true" className="w-full h-[34px] block" />
            <span className="text-[10px] tracking-[.1em] text-paper/55 tabular-nums max-[620px]:hidden">{fmt(heroSecs)}</span>
          </div>
        </div>
      </div>
      <div className="pr-[var(--edge)] flex items-center justify-end max-[920px]:px-[var(--edge)] max-[920px]:pb-[clamp(30px,5vh,60px)] max-[920px]:justify-center hv" id="sb5">
        <div className="w-full max-w-[440px] bg-ink text-paper border border-paper/10 font-mono max-[920px]:max-w-full">
          <div className="flex items-center gap-2.5 p-[14px_18px] border-b border-paper/10 text-[10px] tracking-[.12em] uppercase text-paper/55">
            <span className="w-[7px] h-[7px] rounded-full bg-[#4ADE80] shrink-0 animate-[sp-dot-pulse_1.8s_ease-in-out_infinite]" />
            <span>Numainda AI · Live</span>
            <span className="ml-auto tabular-nums">{fmt(heroSecs)}</span>
          </div>
          <div className="p-[18px] flex flex-col gap-3">
            <div className="p-[14px_16px] border border-paper/5 opacity-0 translate-y-[10px] animate-[sp-msg-in_.6s_cubic-bezier(.22,.61,.36,1)_forwards] [animation-delay:.9s]">
              <span className="block text-[12px] tracking-[.15em] uppercase text-paper/45 mb-2 font-medium">Customer · Sindhi</span>
              <p className="text-[20px] leading-[1.7] text-paper/80 font-arabic" dir="rtl">مان پنهنجي بل بابت ڄاڻڻ چاهيان ٿو</p>
            </div>
            <div className="p-[14px_16px] border border-coral/15 bg-paper/5 opacity-0 translate-y-[10px] animate-[sp-msg-in_.6s_cubic-bezier(.22,.61,.36,1)_forwards] [animation-delay:1.6s]">
              <span className="block text-[12px] tracking-[.15em] uppercase text-coral mb-2 font-medium">Numainda AI</span>
              <p className="text-[20px] leading-[1.7] text-paper/80 font-arabic" dir="rtl">توهان جو موجوده بل 2,450 روپيا آهي۔ ڇا مان وڌيڪ تفصيل ڏيان؟</p>
            </div>
            <div className="p-[14px_16px] border border-paper/5 opacity-0 translate-y-[10px] animate-[sp-msg-in_.6s_cubic-bezier(.22,.61,.36,1)_forwards] [animation-delay:2.3s]">
              <span className="block text-[12px] tracking-[.15em] uppercase text-paper/45 mb-2 font-medium">Customer · Sindhi</span>
              <p className="text-[20px] leading-[1.7] text-paper/80 font-arabic" dir="rtl">ها، مهرباني ڪري</p>
            </div>
          </div>
          <div className="flex gap-5 p-[14px_18px] border-t border-paper/5 text-[8.5px] tracking-[.16em] uppercase text-paper/35 opacity-0 translate-y-[6px] animate-[sp-msg-in_.5s_cubic-bezier(.22,.61,.36,1)_2.8s_forwards]">
            <span className="text-[#4ADE80]">✓ Resolved</span>
            <span>Response: 1.2s</span>
            <span>Satisfaction: High</span>
          </div>
        </div>
      </div>
    </header>
  );
}
