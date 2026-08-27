'use client';

import { useState } from 'react';
import { faqs } from '@/src/data/landing';

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="sp-faq" className="py-[clamp(60px,10vh,120px)] border-t border-line">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-line rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">06</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">Frequently Asked Questions</span>
        </div>
        <div className="max-w-[820px]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-line group">
              <button 
                className="w-full bg-transparent border-none py-5 flex justify-between items-center gap-5 cursor-pointer text-left font-heading font-semibold text-[clamp(15px,1.8vw,18px)] text-ink transition-colors duration-300 hover:text-coral" 
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={`font-mono text-lg text-mid shrink-0 w-6 text-center transition-transform duration-300 ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {expandedFaq === i && <div className="text-[13.5px] leading-[1.85] text-mid pb-[22px] max-w-[60ch] animate-[sp-detail-in_.35s_cubic-bezier(.22,.61,.36,1)]">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
