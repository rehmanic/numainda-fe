'use client';

import { useEffect } from 'react';

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('sp-prog');
    if (!bar) return;
    const onScroll = () => { const h = document.documentElement.scrollHeight - window.innerHeight; bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <i id="sp-prog" className="fixed left-0 top-0 h-0.5 w-full bg-coral scale-x-0 origin-left z-80 will-change-transform" />;
}
