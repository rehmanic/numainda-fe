'use client';

import { useState } from 'react';
import { heroFeatures, compactFeatures } from '@/src/data/landing';

export default function FeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <section id="sp-features" className="py-[clamp(60px,10vh,120px)] bg-ink text-paper">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-paper/10 rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">02</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">Core Capabilities</span>
        </div>
        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-[1px] bg-paper/10 border border-paper/10 mb-[clamp(30px,5vh,60px)]">
          {heroFeatures.map((f, i) => (
            <article 
              key={i} 
              className="bg-ink p-[clamp(24px,3vw,40px)] cursor-pointer transition-colors duration-400 relative hover:bg-[#1A1D24] group" 
              onClick={() => setExpandedFeature(expandedFeature === i ? null : i)} 
              tabIndex={0} 
              onKeyDown={(e) => { if (e.key === 'Enter') setExpandedFeature(expandedFeature === i ? null : i); }}
            >
              <div className={`absolute left-0 bottom-0 h-[2px] bg-coral transition-[width] duration-500 ease-[cubic-bezier(.3,.9,.3,1)] ${expandedFeature === i ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              <span className="block font-mono text-[10px] tracking-[.2em] text-coral mb-5">0{i + 1}</span>
              <h3 className="font-heading font-bold text-[clamp(18px,2.2vw,26px)] uppercase leading-[1.08] mb-3.5">{f.title}</h3>
              <p className="text-[12px] leading-[1.75] text-paper/50 max-w-[32ch]">{f.desc}</p>
              <span className="inline-block mt-[18px] font-mono text-[9px] tracking-[.18em] uppercase text-coral cursor-pointer transition-[letter-spacing] duration-300 group-hover:tracking-[.24em]">{expandedFeature === i ? '−' : '+'} Details</span>
              {expandedFeature === i && (
                <div className="mt-5 pt-5 border-t border-paper/10 animate-[sp-detail-in_.4s_cubic-bezier(.22,.61,.36,1)]">
                  <ul className="list-none flex flex-col gap-2.5">
                    {f.details.map((d, j) => (
                      <li key={j} className="text-[11.5px] leading-[1.5] text-paper/60 pl-[18px] relative">
                        <span className="absolute left-0 text-coral text-[10px]">→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="border border-paper/10 p-[clamp(22px,3vw,34px)] rv">
          <h4 className="font-mono text-[9px] tracking-[.2em] uppercase text-paper/40 mb-5">Additional Capabilities</h4>
          <ul className="list-none flex flex-wrap max-[560px]:flex-col gap-0">
            {compactFeatures.map((f, i) => (
              <li key={i} className="text-[11.5px] text-paper/60 px-[22px] py-[11px] border border-paper/10 -m-[0.5px] transition-colors duration-300 hover:bg-paper/5 hover:text-paper/85">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
