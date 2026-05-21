<template>
  <section class="section solution-section" id="solution">
    <div class="container">
      <!-- Header -->
      <div class="section-header reveal">
        <span class="label text-accent">The Solution</span>
        <h2 class="display-lg">
          Meet <em style="font-style:italic; color:var(--clr-accent)">Numainda</em> —<br />
          your AI CSR agent.
        </h2>
        <p class="body-lg text-muted" style="max-width:560px;">
          One unified AI agent that speaks every language, never sleeps, never tires, and improves itself instantly.
        </p>
      </div>

      <!-- Comparison -->
      <div class="comparison reveal reveal-delay-1">
        <div class="comp-col comp-before">
          <div class="comp-label-row">
            <span class="comp-badge danger">Before</span>
            <span class="body-sm text-muted">Human CSR</span>
          </div>
          <ul class="comp-list">
            <li v-for="b in before" :key="b">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              {{ b }}
            </li>
          </ul>
        </div>
        <div class="comp-divider">
          <div class="comp-divider-line"></div>
          <div class="comp-divider-icon">
            <img src="/numainda_icon.svg" alt="Numainda" width="40" height="40" />
          </div>
          <div class="comp-divider-line"></div>
        </div>
        <div class="comp-col comp-after">
          <div class="comp-label-row">
            <span class="comp-badge success">After</span>
            <span class="body-sm text-muted">Numainda AI</span>
          </div>
          <ul class="comp-list">
            <li v-for="a in after" :key="a">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              {{ a }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Solution cards -->
      <div class="solutions-grid">
        <div
          v-for="(sol, i) in solutions"
          :key="sol.title"
          class="sol-card reveal"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <div class="sol-icon-wrap" v-html="sol.icon"></div>
          <h3 class="sol-title">{{ sol.title }}</h3>
          <p class="body-sm text-muted">{{ sol.desc }}</p>
          <div class="sol-metric">
            <span class="sol-metric-value text-accent">{{ sol.metric }}</span>
            <span class="body-sm text-muted">{{ sol.metricLabel }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const before = [
  'Limited to 9-5 availability',
  'Supports 1-2 languages max',
  'Agent fatigue causes errors',
  'Training takes weeks',
  'Manual call review (0.1%)',
  'Separate teams per language',
];
const after = [
  '24/7 always-on availability',
  'Fluent in 7 languages natively',
  'Consistent quality, zero fatigue',
  'Knowledge updated in seconds',
  '100% auto-transcription & analytics',
  'One unified AI agent for all',
];

const solutions = [
  {
    title: '24/7 Scalable Availability',
    desc: 'Infinite concurrent AI agents deployed instantly. No queues, no peak-hour blackouts.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    metric: '∞', metricLabel: 'concurrent calls',
  },
  {
    title: 'Native Regional Languages',
    desc: 'Sindhi, Punjabi, Pashto, Balochi, Seraiki — spoken naturally, not translated.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>`,
    metric: '7', metricLabel: 'languages natively',
  },
  {
    title: 'Zero Fatigue Quality',
    desc: 'Every call handled with identical professionalism. No bad days, no tone issues.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    metric: '100%', metricLabel: 'consistent quality',
  },
  {
    title: 'Instant Knowledge Updates',
    desc: 'Update your knowledge base once — all agents know instantly. No retraining.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    metric: '<1s', metricLabel: 'propagation time',
  },
  {
    title: '100% Call Analytics',
    desc: 'Every call transcribed, analyzed, and surfaced as business intelligence automatically.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    metric: '100%', metricLabel: 'calls analyzed',
  },
  {
    title: 'Real-time API Integration',
    desc: 'Looks up balances, orders, and policies mid-call via live API — instant resolution.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    metric: 'Live', metricLabel: 'data resolution',
  },
];
</script>

<style scoped>
.solution-section {
  background: linear-gradient(180deg, var(--clr-bg-2) 0%, var(--clr-bg) 100%);
  position: relative;
}
.solution-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--clr-accent-glow), transparent);
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 3.5rem;
}

/* Comparison */
.comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 5rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}
.comp-label-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.comp-badge {
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.comp-badge.danger { background: var(--clr-danger-glow); color: var(--clr-danger); border: 1px solid rgba(255,59,59,0.2); }
.comp-badge.success { background: rgba(45,209,123,0.1); color: var(--clr-green); border: 1px solid rgba(45,209,123,0.2); }

.comp-list { display: flex; flex-direction: column; gap: 0.85rem; }
.comp-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  line-height: 1.4;
}
.comp-before .comp-list li svg { color: var(--clr-danger); flex-shrink: 0; margin-top: 2px; }
.comp-after .comp-list li { color: var(--clr-text); }
.comp-after .comp-list li svg { color: var(--clr-green); flex-shrink: 0; margin-top: 2px; }

.comp-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}
.comp-divider-line {
  flex: 1;
  width: 1px;
  background: var(--clr-border);
}
.comp-divider-icon {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-accent-glow);
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-accent);
}

/* Solution cards */
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.sol-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  cursor: default;
}
.sol-card:hover {
  border-color: rgba(240,165,0,0.35);
  box-shadow: var(--shadow-accent);
  transform: translateY(-3px);
}
.sol-icon-wrap {
  width: 44px; height: 44px;
  background: var(--clr-accent-glow);
  border: 1px solid rgba(240,165,0,0.2);
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  color: var(--clr-accent);
}
.sol-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--clr-text);
  font-family: var(--font-body);
}
.sol-metric {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--clr-border);
}
.sol-metric-value {
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1;
}

@media (max-width: 900px) {
  .comparison { grid-template-columns: 1fr; }
  .comp-divider { flex-direction: row; padding: 0; }
  .comp-divider-line { flex: 1; height: 1px; width: auto; }
  .solutions-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .solutions-grid { grid-template-columns: 1fr; }
}
</style>
