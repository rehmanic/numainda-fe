import { tiers } from '@/src/data/landing';

export default function PricingSection() {
  return (
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
  );
}
