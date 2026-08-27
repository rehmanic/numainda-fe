'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', industry: '', phone: '' });

  return (
    <section id="sp-contact">
      <div className="sp-wrap">
        <div className="sp-section-label rv"><span className="sp-label-num">07</span><span>Get Started</span></div>
        <div className="sp-contact-grid">
          <div className="sp-contact-copy rv">
            <h2>Deploy a<br />modern CSR.<br />No wait times,<br />ever.</h2>
            <p>Join the next generation of customer support with an AI agent that speaks your customers&apos; language natively.</p>
          </div>
          <form className="sp-form rv" onSubmit={(e) => e.preventDefault()}>
            <div className="sp-form-field">
              <label htmlFor="sp-name">Name</label>
              <input id="sp-name" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="sp-form-field">
              <label htmlFor="sp-email">Email</label>
              <input id="sp-email" type="email" placeholder="work@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="sp-form-field">
              <label htmlFor="sp-company">Company</label>
              <input id="sp-company" type="text" placeholder="Company name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
            </div>
            <div className="sp-form-field">
              <label htmlFor="sp-industry">Industry</label>
              <select id="sp-industry" value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })}>
                <option value="">Select your industry</option>
                <option value="telecom">Telecommunications</option>
                <option value="banking">Banking &amp; Fintech</option>
                <option value="ecommerce">E-commerce</option>
                <option value="bpo">BPOs &amp; Call Centers</option>
                <option value="government">Government &amp; Agri-tech</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="sp-form-field">
              <label htmlFor="sp-phone">Phone</label>
              <input id="sp-phone" type="tel" placeholder="+92 300 1234567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <button type="submit" className="sp-form-submit">Book a Demo →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
