<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="/" class="nav-logo">
        <img src="/numainda_logo.svg" alt="Numainda" height="32" />
      </a>
      <ul class="nav-links">
        <li><a href="#problem">Problem</a></li>
        <li><a href="#solution">Solution</a></li>
        <li><a href="#customers">Customers</a></li>
      </ul>
      <a href="#contact" class="btn-primary nav-cta">Request Demo</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const isScrolled = ref(false);
function onScroll() { isScrolled.value = window.scrollY > 40; }
onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: background 0.35s, backdrop-filter 0.35s, border-color 0.35s, padding 0.35s;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(13,15,18,0.8);
  backdrop-filter: blur(16px);
  border-color: var(--clr-border);
  padding: 0.85rem 0;
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-logo img { height: 32px; }
.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: auto;
}
.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--clr-text-muted);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--clr-text); }
.nav-cta {
  font-size: 0.8rem;
  padding: 0.6rem 1.35rem;
  margin-left: 0.5rem;
}
@media (max-width: 640px) {
  .nav-links { display: none; }
}
</style>
