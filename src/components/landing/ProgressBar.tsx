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

  return <i id="sp-prog" />;
}
