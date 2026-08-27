'use client';

import { useEffect } from 'react';

/**
 * Orchestrates scroll-reveal animations for elements with `.rv` and `.hv` classes.
 * Respects `prefers-reduced-motion` by immediately showing all elements.
 */
export function useScrollReveal() {
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
}
