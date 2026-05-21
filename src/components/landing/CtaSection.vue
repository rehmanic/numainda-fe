<template>
  <section class="cta-section" id="contact">
    <div class="cta-mesh" aria-hidden="true">
      <div class="cta-orb"></div>
    </div>
    <div class="container cta-inner">
      <div class="cta-content reveal">
        <span class="label text-accent">Get Started</span>
        <h2 class="display-lg cta-heading">
          Ready to give every<br />customer a voice?
        </h2>
        <p class="body-lg text-muted">
          Join the future of multilingual customer service in Pakistan.
          Request a demo and see Numainda live.
        </p>
        <form class="cta-form" @submit.prevent="submit" id="demo-form">
          <div class="form-row">
            <input
              v-model="form.name"
              id="form-name"
              type="text"
              placeholder="Your name"
              required
              class="form-input"
            />
            <input
              v-model="form.company"
              id="form-company"
              type="text"
              placeholder="Company"
              class="form-input"
            />
          </div>
          <input
            v-model="form.email"
            id="form-email"
            type="email"
            placeholder="Work email"
            required
            class="form-input"
          />
          <button type="submit" class="btn-primary cta-submit" id="cta-submit-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 3l14 9-14 9V3z"/></svg>
            Request a Demo
          </button>
          <p v-if="submitted" class="form-success text-green">
            ✓ Thanks! We'll be in touch within 24 hours.
          </p>
        </form>
      </div>

      <div class="cta-visual reveal reveal-delay-2" aria-hidden="true">
        <div class="metrics-card">
          <p class="label text-muted" style="margin-bottom:1.25rem;">Live System Metrics</p>
          <div class="metric-row" v-for="m in metrics" :key="m.label">
            <div class="metric-info">
              <span class="metric-dot" :style="{ background: m.color }"></span>
              <span class="body-sm">{{ m.label }}</span>
            </div>
            <div class="metric-bar-wrap">
              <div class="metric-bar" :style="{ width: m.pct + '%', background: m.color }"></div>
            </div>
            <span class="metric-val" :style="{ color: m.color }">{{ m.val }}</span>
          </div>
          <div class="metrics-footer">
            <div class="live-pill">
              <span class="live-dot"></span>
              <span class="label">System Operational</span>
            </div>
            <span class="body-sm text-muted">Updated live</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const form = ref({ name: '', company: '', email: '' });
const submitted = ref(false);
function submit() { submitted.value = true; }

const metrics = [
  { label: 'Calls Handled Today',  val: '12,847',  pct: 88,  color: '#f0a500' },
  { label: 'Avg. Resolution Time', val: '1m 12s',  pct: 95,  color: '#2dd17b' },
  { label: 'Languages Active',     val: '7 / 7',   pct: 100, color: '#2dd17b' },
  { label: 'Agent Uptime',         val: '99.98%',  pct: 100, color: '#2dd17b' },
  { label: 'Customer Satisfaction',val: '94.2%',   pct: 94,  color: '#f0a500' },
];
</script>

<style scoped>
.cta-section {
  position: relative;
  background: linear-gradient(180deg, var(--clr-bg) 0%, var(--clr-bg-2) 100%);
  overflow: hidden;
  padding: var(--section-gap) 0;
}
.cta-mesh {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.cta-orb {
  position: absolute;
  width: 800px; height: 800px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(240,165,0,0.06) 0%, transparent 65%);
  border-radius: 50%;
}
.cta-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}
.cta-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.cta-heading { margin-top: 0.25rem; }

/* Form */
.cta-form { display: flex; flex-direction: column; gap: 0.75rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.form-input {
  width: 100%;
  padding: 0.85rem 1.1rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  color: var(--clr-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}
.form-input::placeholder { color: var(--clr-text-dim); }
.form-input:focus { border-color: rgba(240,165,0,0.45); }
.cta-submit { width: 100%; justify-content: center; padding: 1rem; }
.form-success {
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.75rem;
  background: rgba(45,209,123,0.08);
  border: 1px solid rgba(45,209,123,0.2);
  border-radius: var(--radius-md);
}

/* Metrics card */
.metrics-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-card), var(--shadow-accent);
}
.metric-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.metric-info { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; }
.metric-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.metric-bar-wrap {
  width: 80px;
  height: 4px;
  background: rgba(255,255,255,0.07);
  border-radius: 2px;
  overflow: hidden;
}
.metric-bar { height: 100%; border-radius: 2px; transition: width 1s ease; }
.metric-val { font-size: 0.8rem; font-weight: 700; min-width: 60px; text-align: right; }
.metrics-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--clr-border);
}
.live-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--clr-green);
}
.live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--clr-green);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--clr-green); }
  50% { opacity: 0.5; box-shadow: 0 0 16px var(--clr-green); }
}

@media (max-width: 900px) {
  .cta-inner { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
