<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import NavBar from '../components/landing/NavBar.vue';
import HeroSection from '../components/landing/HeroSection.vue';
import ProblemSection from '../components/landing/ProblemSection.vue';
import SolutionSection from '../components/landing/SolutionSection.vue';
import CustomersSection from '../components/landing/CustomersSection.vue';
import CtaSection from '../components/landing/CtaSection.vue';
import FooterSection from '../components/landing/FooterSection.vue';

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  els.forEach(el => observer.observe(el));
  return observer;
}

let observer: IntersectionObserver;
onMounted(() => { observer = initReveal(); });
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <div class="landing">
    <NavBar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <CustomersSection />
    <CtaSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.landing { min-height: 100vh; }
</style>
