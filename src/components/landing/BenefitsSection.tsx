export default function BenefitsSection() {
  return (
    <section id="sp-benefits" className="py-[clamp(60px,10vh,120px)] border-t border-line">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-line rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">01</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">Why Numainda</span>
        </div>

        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(30px,5vw,80px)] max-[820px]:gap-[clamp(16px,3vh,30px)] items-center py-[clamp(40px,6vh,80px)] border-b border-line last:border-none last:pb-0 rv">
          <div className="relative max-[820px]:pl-6 max-[820px]:text-left">
            <div className="absolute right-[calc(-0.5*clamp(30px,5vw,80px))] top-0 bottom-0 w-px bg-line max-[820px]:left-0 max-[820px]:right-auto max-[820px]:h-auto"></div>
            <h2 className="font-heading font-bold text-[clamp(38px,5.4vw,76px)] uppercase leading-[.90] tracking-[-.02em] mb-[14px]">Always<br />Available</h2>
            <span className="font-mono font-medium text-[11px] leading-[1.5] tracking-[.2em] uppercase text-ink/80">24/7 · 365 Days · Zero Downtime</span>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] leading-[1.85] text-mid max-w-[42ch]">Your customers don&apos;t clock out at 5pm. Peak hours, holidays, 3am emergencies — Numainda handles them all with the same quality and speed. No shift schedules. No overtime costs. No tired voices.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(30px,5vw,80px)] max-[820px]:gap-[clamp(16px,3vh,30px)] items-center py-[clamp(40px,6vh,80px)] border-b border-line last:border-none last:pb-0 rv">
          <div className="relative text-right max-[820px]:text-left pr-6 max-[820px]:pr-0 max-[820px]:pl-6 col-start-2 max-[820px]:col-start-1 row-start-1 max-[820px]:row-start-1">
            <div className="absolute left-[calc(-0.5*clamp(30px,5vw,80px))] top-0 bottom-0 w-px bg-line max-[820px]:left-0 max-[820px]:right-auto max-[820px]:h-auto"></div>
            <h2 className="font-heading font-bold text-[clamp(38px,5.4vw,76px)] uppercase leading-[.90] tracking-[-.02em] mb-[14px]">Every<br />Language</h2>
            <span className="font-mono font-medium text-[11px] leading-[1.5] tracking-[.2em] uppercase text-ink/80">One Agent · Seven Languages · Native Fluency</span>
          </div>
          <div className="flex items-center justify-start col-start-1 row-start-1 max-[820px]:col-start-1 max-[820px]:row-start-2">
            <p className="text-[14px] leading-[1.85] text-mid max-w-[42ch]">A single AI agent that speaks Sindhi, Balochi, Punjabi, Pashto, Siraiki, Urdu, and English natively. No routing between language teams. No translation delays. Your customers hear their own language from the first second.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(30px,5vw,80px)] max-[820px]:gap-[clamp(16px,3vh,30px)] items-center py-[clamp(40px,6vh,80px)] border-b border-line last:border-none last:pb-0 rv">
          <div className="relative max-[820px]:pl-6 max-[820px]:text-left">
            <div className="absolute right-[calc(-0.5*clamp(30px,5vw,80px))] top-0 bottom-0 w-px bg-line max-[820px]:left-0 max-[820px]:right-auto max-[820px]:h-auto"></div>
            <h2 className="font-heading font-bold text-[clamp(38px,5.4vw,76px)] uppercase leading-[.90] tracking-[-.02em] mb-[14px]">Zero<br />Wait</h2>
            <span className="font-mono font-medium text-[11px] leading-[1.5] tracking-[.2em] uppercase text-ink/80">No IVR · No Hold Music · No Queues</span>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] leading-[1.85] text-mid max-w-[42ch]">Customers connect instantly to an AI agent that understands their intent immediately. No &lsquo;Press 1 for English&rsquo; menus. No hold music. Just a conversation that solves their problem in seconds.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(30px,5vw,80px)] max-[820px]:gap-[clamp(16px,3vh,30px)] items-center py-[clamp(40px,6vh,80px)] border-b border-line last:border-none last:pb-0 rv">
          <div className="relative text-right max-[820px]:text-left pr-6 max-[820px]:pr-0 max-[820px]:pl-6 col-start-2 max-[820px]:col-start-1 row-start-1 max-[820px]:row-start-1">
            <div className="absolute left-[calc(-0.5*clamp(30px,5vw,80px))] top-0 bottom-0 w-px bg-line max-[820px]:left-0 max-[820px]:right-auto max-[820px]:h-auto"></div>
            <h2 className="font-heading font-bold text-[clamp(38px,5.4vw,76px)] uppercase leading-[.90] tracking-[-.02em] mb-[14px]">Total<br />Insight</h2>
            <span className="font-mono font-medium text-[11px] leading-[1.5] tracking-[.2em] uppercase text-ink/80">100% Transcription · Real-time Analytics</span>
          </div>
          <div className="flex items-center justify-start col-start-1 row-start-1 max-[820px]:col-start-1 max-[820px]:row-start-2">
            <p className="text-[14px] leading-[1.85] text-mid max-w-[42ch]">Every single call is transcribed, analyzed for sentiment, and pushed to your dashboards automatically. No more sampling 5% of calls for quality. Every customer interaction becomes actionable data.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
