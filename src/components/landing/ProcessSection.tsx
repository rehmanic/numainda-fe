'use client';

import { useState } from 'react';
import { processSteps } from '@/src/data/landing';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="sp-process">
      <div className="sp-wrap">
        <div className="sp-section-label rv"><span className="sp-label-num">03</span><span>How It Works</span></div>
        <div className="sp-steps rv">
          {processSteps.map((s, i) => (
            <div key={i} className={`sp-step${activeStep === i ? ' active' : ''}`} onClick={() => setActiveStep(i)}>
              <span className="sp-step-dot">{String(i + 1).padStart(2, '0')}</span>
              <div className="sp-step-title">{s.title}</div>
              <div className="sp-step-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="sp-step-panel" key={activeStep}>
          <span className="sp-step-panel-num">{String(activeStep + 1).padStart(2, '0')}</span>
          <div>
            <h3>{processSteps[activeStep].title}</h3>
            <p>{processSteps[activeStep].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
