import { tiers } from '@/src/data/landing';

export default function PricingSection() {
  return (
    <section id="sp-pricing" className="py-[clamp(60px,10vh,120px)] border-t border-line">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-line rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">05</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">Plans</span>
        </div>
        <div className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-[1px] bg-line border border-line">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-[clamp(26px,3.4vw,44px)] flex flex-col rv ${tier.highlighted ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
              {tier.highlighted && <span className="inline-block font-mono text-[8px] tracking-[.2em] uppercase text-coral mb-3">Most Popular</span>}
              <div className="font-heading font-bold text-xl uppercase tracking-[.02em] mb-2">{tier.name}</div>
              <div className={`text-[12.5px] leading-[1.7] mb-[clamp(20px,3vh,32px)] min-h-[3.4em] ${tier.highlighted ? 'text-paper/55' : 'text-mid'}`}>{tier.desc}</div>
              <ul className={`list-none flex-1 mb-[clamp(22px,3vh,36px)] border-t ${tier.highlighted ? 'border-paper/12' : 'border-line'}`}>
                {tier.features.map((f, j) => (
                  <li key={j} className={`text-[12px] leading-[1.5] py-2.5 pr-0 pl-5 border-b relative ${tier.highlighted ? 'border-paper/10 text-paper/65' : 'border-line text-mid'}`}>
                    <span className="absolute left-0 text-coral text-[11px]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#sp-contact" className={`block text-center font-heading font-bold text-[11px] tracking-[.16em] uppercase px-6 py-4 border bg-transparent cursor-pointer transition-all duration-300 no-underline ${tier.highlighted ? 'border-paper text-paper hover:bg-coral hover:border-coral hover:text-ink' : 'border-ink text-ink hover:bg-ink hover:text-paper'}`}>Contact Sales</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
