'use client';

import { useScrollReveal } from '@/src/hooks/useScrollReveal';
import ProgressBar from '@/src/components/landing/ProgressBar';
import NavBar from '@/src/components/landing/NavBar';
import HeroSection from '@/src/components/landing/HeroSection';
import BenefitsSection from '@/src/components/landing/BenefitsSection';
import FeaturesSection from '@/src/components/landing/FeaturesSection';
import ProcessSection from '@/src/components/landing/ProcessSection';
import IndustriesSection from '@/src/components/landing/IndustriesSection';
import PricingSection from '@/src/components/landing/PricingSection';
import FaqSection from '@/src/components/landing/FaqSection';
import ContactSection from '@/src/components/landing/ContactSection';
import Footer from '@/src/components/landing/Footer';
import './page.css';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <ProgressBar />
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ProcessSection />
      <IndustriesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
