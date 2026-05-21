<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="/numainda_logo.svg" alt="Numainda" height="28" />
        <p class="body-sm text-muted footer-tagline">
          AI Customer Service in your language. Every language.
        </p>
        <div class="footer-langs">
          <span v-for="l in langs" :key="l" class="footer-lang-chip">{{ l }}</span>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col" v-for="col in links" :key="col.heading">
          <p class="label text-muted footer-col-heading">{{ col.heading }}</p>
          <ul>
            <li v-for="link in col.items" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span class="body-sm text-muted">© {{ year }} Numainda. Built in Pakistan 🇵🇰</span>
        <span class="body-sm text-muted">نمائندہ — ہر زبان میں آپ کی خدمت</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const langs = ['سنڌي', 'پنجابی', 'پښتو', 'بلوچی', 'سرائیکی', 'اردو', 'English'];
const links = [
  {
    heading: 'Product',
    items: [
      { label: 'Features', href: '#solution' },
      { label: 'Integrations', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: 'Request Demo', href: '#contact' },
      { label: 'Support', href: '#' },
      { label: 'hello@numainda.ai', href: 'mailto:hello@numainda.ai' },
    ],
  },
];
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-bg-2);
  padding-top: 4rem;
}
.footer-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
}
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-tagline { max-width: 280px; }
.footer-langs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}
.footer-lang-chip {
  font-size: 0.78rem;
  padding: 0.2rem 0.65rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-pill);
  color: var(--clr-text-muted);
  direction: rtl;
}
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.footer-col-heading { margin-bottom: 1rem; }
.footer-col ul { display: flex; flex-direction: column; gap: 0.6rem; }
.footer-col a {
  font-size: 0.875rem;
  color: var(--clr-text-muted);
  transition: color 0.2s;
}
.footer-col a:hover { color: var(--clr-text); }
.footer-bottom {
  border-top: 1px solid var(--clr-border);
  padding: 1.25rem 0;
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer-links { grid-template-columns: 1fr 1fr; }
  .footer-bottom-inner { flex-direction: column; gap: 0.5rem; text-align: center; }
}
</style>
