'use client';

import { useState } from 'react';
import { heroFeatures, compactFeatures } from '@/src/data/landing';

export default function FeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <section id="sp-features">
      <div className="sp-wrap">
        <div className="sp-section-label rv"><span className="sp-label-num">02</span><span>Core Capabilities</span></div>
        <div className="sp-feat-grid">
          {heroFeatures.map((f, i) => (
            <article key={i} className={`sp-feat-card${expandedFeature === i ? ' expanded' : ''}`} onClick={() => setExpandedFeature(expandedFeature === i ? null : i)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setExpandedFeature(expandedFeature === i ? null : i); }}>
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
  );
}
