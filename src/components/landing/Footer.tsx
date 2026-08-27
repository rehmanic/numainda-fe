import Image from 'next/image';
import numaindaIcon from '@/src/assets/numainda_new_icon.svg';

export default function Footer() {
  return (
    <footer className="border-t border-line pt-[clamp(40px,6vh,72px)] pb-[clamp(20px,3vh,32px)]">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] max-[820px]:grid-cols-2 max-[500px]:grid-cols-1 gap-[clamp(20px,3vw,48px)] max-[820px]:gap-7 mb-[clamp(32px,5vh,56px)]">
          <div className="flex flex-col gap-2.5 max-[820px]:col-span-full">
            <div className="flex items-center gap-[9px] font-heading font-bold text-2xl text-coral">
              <Image src={numaindaIcon} alt="Numainda" width={18} height={18} className="opacity-70" />
              <span>Numainda</span>
            </div>
            <p className="text-[13px] leading-[1.7] text-mid max-w-[28ch]">AI-powered customer service representative in every language.</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[.1em] uppercase text-steel mb-4">Product</h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#sp-features" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Features</a></li>
              <li><a href="#sp-process" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">How it Works</a></li>
              <li><a href="#sp-industries" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Industries</a></li>
              <li><a href="#sp-pricing" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[.1em] uppercase text-steel mb-4">Company</h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">About</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Careers</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Blog</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Press</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[.1em] uppercase text-steel mb-4">Resources</h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Documentation</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">API Reference</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Support</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Status</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[.1em] uppercase text-steel mb-4">Legal</h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Privacy Policy</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Terms of Service</a></li>
              <li><a href="#" className="text-[12px] font-medium text-steel transition-colors duration-300 hover:text-ink">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 flex-wrap pt-[clamp(20px,3vh,32px)] border-t border-line text-[10px] font-medium tracking-[.1em] uppercase text-steel">
          <span>© {new Date().getFullYear()} Numainda · Pakistan</span>
          <div className="flex gap-[18px]">
            <a href="#" className="text-mid transition-colors duration-300 text-[9.5px] tracking-[.14em] hover:text-ink">Twitter</a>
            <a href="#" className="text-mid transition-colors duration-300 text-[9.5px] tracking-[.14em] hover:text-ink">LinkedIn</a>
            <a href="#" className="text-mid transition-colors duration-300 text-[9.5px] tracking-[.14em] hover:text-ink">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
