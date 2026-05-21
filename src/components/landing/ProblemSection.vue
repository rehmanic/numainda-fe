<template>
  <section class="section problem-section" id="problem">
    <div class="container">
      <!-- Section header -->
      <div class="section-header reveal">
        <span class="label text-danger">The Problem</span>
        <h2 class="display-lg problem-title">
          Your call center is<br />
          <em class="text-danger" style="font-style:italic;">failing your customers.</em>
        </h2>
        <p class="body-lg text-muted" style="max-width:560px;">
          Millions of Pakistanis are underserved because their language isn't spoken —
          and because human CSRs simply can't scale.
        </p>
      </div>

      <!-- Stats ticker -->
      <div class="stats-row reveal reveal-delay-1">
        <div class="stat-card" v-for="stat in stats" :key="stat.label">
          <span class="stat-value text-danger">{{ stat.value }}</span>
          <span class="stat-label body-sm text-muted">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Problem grid -->
      <div class="problems-grid">
        <div
          v-for="(problem, i) in problems"
          :key="problem.title"
          class="problem-card reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <div class="problem-icon-wrap">
            <span class="problem-icon" v-html="problem.icon"></span>
          </div>
          <h3 class="problem-card-title">{{ problem.title }}</h3>
          <p class="body-sm text-muted">{{ problem.desc }}</p>
          <div class="problem-severity">
            <div
              class="severity-bar"
              :style="{ width: problem.severity + '%' }"
            ></div>
          </div>
          <span class="body-sm text-danger" style="font-size:0.72rem;">Impact: {{ problem.impact }}</span>
        </div>
      </div>

      <!-- Bottom callout -->
      <div class="problem-callout reveal">
        <div class="callout-line"></div>
        <p class="display-md callout-text">
          Every missed call is a<br />
          <span class="text-danger">missed customer.</span>
        </p>
        <div class="callout-line"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '62%', label: 'calls go unanswered at peak hours' },
  { value: '6+', label: 'regional languages underserved' },
  { value: '3×', label: 'higher cost for 24/7 human CSRs' },
  { value: '40%', label: 'CSR turnover rate annually' },
];

const problems = [
  {
    title: 'Peak Hour Blackout',
    desc: 'Queues overflow during peak hours — customers wait, abandon calls, and churn.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    severity: 90, impact: 'Critical',
  },
  {
    title: '24/7 Is Too Expensive',
    desc: 'Round-the-clock human staffing drains budgets. Night shifts cost 3× more.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    severity: 80, impact: 'High',
  },
  {
    title: 'No Regional Language Support',
    desc: 'Sindhi, Balochi, Pashto, Seraiki speakers get zero native support. They give up.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>`,
    severity: 95, impact: 'Critical',
  },
  {
    title: 'Outdated IVR Menus',
    desc: '"Press 1 for Urdu, press 2 for…" — frustrating, slow, and customers hate it.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
    severity: 70, impact: 'Medium',
  },
  {
    title: 'Agent Fatigue & Mistakes',
    desc: 'Human agents tire. Quality drops. Wrong info, tone issues, escalations spike.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    severity: 75, impact: 'High',
  },
  {
    title: 'Missed Insights',
    desc: 'Manually reviewing 0.1% of calls means 99.9% of customer intel is lost forever.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    severity: 65, impact: 'Medium',
  },
  {
    title: 'Slow Knowledge Updates',
    desc: 'New policies take weeks to train into agents. Wrong info flows for months.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
    severity: 60, impact: 'Medium',
  },
  {
    title: 'Delayed Follow-ups',
    desc: 'Tickets opened. Customers waiting. No automated follow-up. Satisfaction tanks.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    severity: 72, impact: 'High',
  },
  {
    title: 'Manual Data Lookup',
    desc: 'Agents waste 40% of call time looking up info in disparate systems.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
    severity: 68, impact: 'High',
  },
  {
    title: 'Dedicated Language Silos',
    desc: 'Separate teams per language = siloed ops, duplicate costs, management overhead.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    severity: 78, impact: 'High',
  },
];
</script>

<style scoped>
.problem-section {
  position: relative;
  background: linear-gradient(180deg, var(--clr-bg) 0%, var(--clr-bg-2) 100%);
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 3.5rem;
}
.problem-title { margin-top: 0.5rem; }

/* Stats row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--clr-border);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 4rem;
}
.stat-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.75rem 1.5rem;
  background: var(--clr-surface);
  transition: background 0.2s;
}
.stat-card:hover { background: var(--clr-surface-2); }
.stat-value {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1;
}
.stat-label { color: var(--clr-text-muted); max-width: 160px; }

/* Problems grid */
.problems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 5rem;
}
.problem-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  cursor: default;
}
.problem-card:hover {
  border-color: rgba(255, 59, 59, 0.3);
  box-shadow: var(--shadow-danger);
  transform: translateY(-3px);
}
.problem-icon-wrap {
  width: 44px; height: 44px;
  background: var(--clr-danger-glow);
  border: 1px solid rgba(255,59,59,0.2);
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  color: var(--clr-danger);
}
.problem-card-title {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--clr-text);
}

/* Severity bar */
.problem-severity {
  height: 3px;
  background: rgba(255,59,59,0.12);
  border-radius: 2px;
  overflow: hidden;
}
.severity-bar {
  height: 100%;
  background: var(--clr-danger);
  border-radius: 2px;
  transition: width 0.8s ease;
}

/* Callout */
.problem-callout {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
}
.callout-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--clr-border), transparent);
}
.callout-text { white-space: nowrap; }

/* Responsive */
@media (max-width: 768px) {
  .stats-row { grid-template-columns: 1fr 1fr; }
  .problem-callout { flex-direction: column; gap: 1rem; }
  .callout-text { white-space: normal; }
  .callout-line { display: none; }
}
@media (max-width: 480px) {
  .stats-row { grid-template-columns: 1fr; }
}
</style>
