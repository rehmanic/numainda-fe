import { industries } from '@/src/data/landing';

export default function IndustriesSection() {
  return (
    <section id="sp-industries" className="py-[clamp(60px,10vh,120px)] bg-ink text-paper">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-paper/10 rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">04</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">Industries We Serve</span>
        </div>
        <div className="grid grid-cols-5 max-[1000px]:grid-cols-3 max-[620px]:grid-cols-1 gap-[1px] bg-paper/10 border border-paper/10">
          {industries.map((ind, i) => (
            <div key={i} className="bg-ink p-[clamp(22px,2.8vw,36px)] transition-colors duration-350 hover:bg-[#1A1D24] group rv">
              <div className="w-[28px] h-[28px] text-paper opacity-70 mb-5 group-hover:opacity-100 group-hover:text-coral transition-all [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current [&>svg]:stroke-[1.4]">
                <ind.Icon />
              </div>
              <h3 className="font-heading font-semibold text-[15px] uppercase mb-2.5 tracking-[.02em]">{ind.title}</h3>
              <p className="text-[11.5px] leading-[1.7] text-paper/45 mb-3.5">{ind.desc}</p>
              <span className="font-mono font-medium text-[9px] tracking-[.14em] uppercase text-paper/30 leading-[1.6]">{ind.example}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
