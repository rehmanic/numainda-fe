'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Benefits', href: '#sp-benefits' },
    { label: 'Features', href: '#sp-features' },
    { label: 'Process', href: '#sp-process' },
    { label: 'Industries', href: '#sp-industries' },
    { label: 'Pricing', href: '#sp-pricing' },
    { label: 'FAQ', href: '#sp-faq' },
  ];

  const handleMouseEnter = (idx: number) => {
    const el = navRefs.current[idx];
    if (el) {
      setHoverStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
      setHoveredIdx(idx);
    }
  };

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIdx(null);
  };

  return (
    <>
      <div className={`fixed inset-x-0 top-0 z-50 pt-4 px-4 sm:px-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${hidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
        <nav className="max-w-[1000px] mx-auto h-[64px] flex items-center justify-between px-2 pr-2 bg-ink/85 backdrop-blur-lg border border-paper/10 text-paper shadow-[0_8px_32px_rgba(18,20,26,0.24)]">
          <div className="flex items-center pl-5 font-heading font-bold text-xl tracking-[.02em] text-paper">
            <span>numainda</span>
          </div>

          <ul 
            className="flex relative list-none max-[1024px]:hidden h-full items-center"
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding Highlight */}
            <li 
              className="absolute h-[65%] bg-paper/15 transition-all duration-300 ease-out pointer-events-none"
              style={{ left: hoverStyle.left, width: hoverStyle.width, opacity: hoverStyle.opacity }}
              aria-hidden="true"
            />

            {navLinks.map((link, idx) => (
              <li 
                key={idx} 
                ref={(el) => { navRefs.current[idx] = el; }}
                className="px-4 py-2 relative z-10"
                onMouseEnter={() => handleMouseEnter(idx)}
              >
                <a href={link.href} className={`text-[12.5px] font-medium tracking-[.1em] uppercase transition-colors duration-300 ${hoveredIdx === idx ? 'text-coral' : 'text-paper/70'}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-2 max-[1024px]:hidden pl-2">
            <a href="#sp-contact" className="font-heading font-bold text-[11px] tracking-[.16em] uppercase bg-paper text-ink px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-coral hover:text-paper hover:scale-105 inline-block text-center">
              Book a Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="min-[1025px]:hidden w-11 h-11 flex items-center justify-center text-paper mr-1 z-50 transition-colors hover:bg-paper/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1025px]:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <ul className="flex flex-col items-center gap-8 list-none w-full px-6">
            {navLinks.map((link, idx) => (
              <li 
                key={idx}
                className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${mobileMenuOpen ? idx * 60 + 100 : 0}ms` }}
              >
                <a 
                  href={link.href} 
                  className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-[.05em] text-paper/90 hover:text-coral transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div 
            className={`mt-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${mobileMenuOpen ? navLinks.length * 60 + 150 : 0}ms` }}
          >
             <a 
                href="#sp-contact" 
                className="font-heading font-bold text-xs tracking-[.16em] uppercase bg-coral text-ink px-10 py-4 inline-block transition-transform active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </a>
          </div>
        </div>
      </div>
    </>
  );
}
