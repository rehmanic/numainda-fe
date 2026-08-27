'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', industry: '', phone: '' });

  return (
    <section id="sp-contact" className="py-[clamp(60px,10vh,120px)] bg-ink text-paper">
      <div className="max-w-[1360px] mx-auto px-[clamp(14px,2.8vw,40px)]">
        <div className="flex items-center gap-4 mb-[clamp(40px,6vh,72px)] pb-4 border-b border-paper/10 rv">
          <span className="font-mono text-[48px] tracking-[.1em] text-steel font-medium leading-none">07</span>
          <span className="font-heading text-[32px] font-bold tracking-[.05em] uppercase text-coral">Get Started</span>
        </div>
        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(30px,6vw,100px)] items-start">
          <div className="max-[820px]:mb-4 rv">
            <h2 className="font-heading font-bold text-[clamp(28px,4.2vw,60px)] uppercase leading-[.94] mb-4">Deploy a<br />modern CSR.<br />No wait times,<br />ever.</h2>
            <p className="text-[14px] leading-[1.8] text-paper/55 max-w-[36ch]">Join the next generation of customer support with an AI agent that speaks your customers&apos; language natively.</p>
          </div>
          <form className="flex flex-col gap-3.5 rv" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sp-name" className="font-mono text-[9px] tracking-[.18em] uppercase text-paper/40">Name</label>
              <input 
                id="sp-name" 
                type="text" 
                placeholder="Your full name" 
                className="bg-transparent border border-paper/15 p-[14px_16px] text-paper font-mono text-[13px] outline-none transition-colors duration-300 appearance-none rounded-none placeholder:text-paper/25 focus:border-paper/40"
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sp-email" className="font-mono text-[9px] tracking-[.18em] uppercase text-paper/40">Email</label>
              <input 
                id="sp-email" 
                type="email" 
                placeholder="work@company.com" 
                className="bg-transparent border border-paper/15 p-[14px_16px] text-paper font-mono text-[13px] outline-none transition-colors duration-300 appearance-none rounded-none placeholder:text-paper/25 focus:border-paper/40"
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sp-company" className="font-mono text-[9px] tracking-[.18em] uppercase text-paper/40">Company</label>
              <input 
                id="sp-company" 
                type="text" 
                placeholder="Company name" 
                className="bg-transparent border border-paper/15 p-[14px_16px] text-paper font-mono text-[13px] outline-none transition-colors duration-300 appearance-none rounded-none placeholder:text-paper/25 focus:border-paper/40"
                value={formData.company} 
                onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sp-industry" className="font-mono text-[9px] tracking-[.18em] uppercase text-paper/40">Industry</label>
              <select 
                id="sp-industry" 
                className="bg-transparent border border-paper/15 p-[14px_16px] text-paper font-mono text-[13px] outline-none transition-colors duration-300 appearance-none rounded-none focus:border-paper/40 cursor-pointer text-paper/70 [&>option]:bg-ink [&>option]:text-paper"
                value={formData.industry} 
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              >
                <option value="">Select your industry</option>
                <option value="telecom">Telecommunications</option>
                <option value="banking">Banking &amp; Fintech</option>
                <option value="ecommerce">E-commerce</option>
                <option value="bpo">BPOs &amp; Call Centers</option>
                <option value="government">Government &amp; Agri-tech</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sp-phone" className="font-mono text-[9px] tracking-[.18em] uppercase text-paper/40">Phone</label>
              <input 
                id="sp-phone" 
                type="tel" 
                placeholder="+92 300 1234567" 
                className="bg-transparent border border-paper/15 p-[14px_16px] text-paper font-mono text-[13px] outline-none transition-colors duration-300 appearance-none rounded-none placeholder:text-paper/25 focus:border-paper/40"
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              />
            </div>
            <button type="submit" className="font-heading font-bold text-[12px] tracking-[.16em] uppercase bg-paper text-ink px-[34px] py-[18px] border-none cursor-pointer mt-2 transition-all duration-300 hover:bg-coral hover:-translate-y-0.5">Book a Demo →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
