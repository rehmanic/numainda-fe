'use client';

import { useState } from 'react';
import { processSteps } from '@/src/data/landing';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="sp-process" className="py-[clamp(60px,10vh,120px)] border-t border-line">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-line rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">03</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">How It Works</span>
        </div>
        <div className="flex relative mb-[clamp(24px,4vh,48px)] max-[760px]:flex-wrap max-[760px]:gap-1.5 rv">
          <div className="absolute top-[14px] left-[30px] right-[30px] h-px bg-line z-0 max-[760px]:hidden"></div>
          {processSteps.map((s, i) => (
            <div
              key={i}
              className={`flex-1 max-[760px]:flex-[0_0_calc(33.33%-4px)] text-center cursor-pointer relative pt-[44px] max-[760px]:pt-[38px] transition-opacity duration-300 hover:opacity-100 ${activeStep !== i ? 'opacity-70' : 'opacity-100'}`}
              onClick={() => setActiveStep(i)}
            >
              <span className={`absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 border grid place-items-center font-mono text-[9px] tracking-[.04em] transition-all duration-350 ease-[cubic-bezier(.3,.9,.3,1)] z-10 ${activeStep === i ? 'bg-ink text-paper border-ink scale-115' : 'bg-paper text-mid border-line'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="font-heading font-semibold text-[12px] uppercase tracking-[.04em] mb-1">{s.title}</div>
              <div className="text-[9.5px] text-mid tracking-[.08em]">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="border border-line p-[clamp(24px,3.6vw,48px)] grid grid-cols-[auto_1fr] max-[760px]:grid-cols-1 gap-[clamp(20px,3vw,48px)] items-start animate-[sp-detail-in_.4s_cubic-bezier(.22,.61,.36,1)]" key={activeStep}>
          <span className="font-mono text-[48px] font-bold text-ink/10 leading-none max-[760px]:hidden">{String(activeStep + 1).padStart(2, '0')}</span>
          <div>
            <h3 className="font-heading font-bold text-[clamp(22px,2.8vw,36px)] uppercase leading-none mb-3.5">{processSteps[activeStep].title}</h3>
            <p className="text-[13.5px] leading-[1.8] text-mid max-w-[56ch]">{processSteps[activeStep].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
