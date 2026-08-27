'use client';

import { useState } from 'react';
import { faqs } from '@/src/data/landing';

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="sp-faq">
      <div className="sp-wrap">
        <div className="sp-section-label rv"><span className="sp-label-num">06</span><span>Frequently Asked Questions</span></div>
        <div className="sp-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`sp-faq-item${expandedFaq === i ? ' open' : ''}`}>
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
  );
}
