<template>
  <section class="section customers-section" id="customers">
    <div class="container">
      <div class="section-header reveal">
        <span class="label text-accent">Who It's For</span>
        <h2 class="display-lg">
          Built for industries<br />
          <span class="text-muted" style="font-family:var(--font-display); font-style:italic;">where every call counts.</span>
        </h2>
      </div>

      <div class="customers-grid">
        <div
          v-for="(c, i) in customers"
          :key="c.name"
          class="customer-card reveal"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <div class="customer-icon" v-html="c.icon"></div>
          <div class="customer-info">
            <h3 class="customer-name">{{ c.name }}</h3>
            <p class="body-sm text-muted">{{ c.desc }}</p>
            <div class="customer-examples">
              <span v-for="ex in c.examples" :key="ex" class="example-tag">{{ ex }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Users -->
      <div class="users-row reveal">
        <div class="users-divider">
          <span class="label text-muted">Platform Users</span>
        </div>
        <div class="users-cards">
          <div class="user-card" v-for="u in users" :key="u.type">
            <div class="user-icon" v-html="u.icon"></div>
            <div>
              <p class="user-type">{{ u.type }}</p>
              <p class="body-sm text-muted">{{ u.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const customers = [
  {
    name: 'Telecom',
    desc: 'Handle millions of balance, package, and billing queries in local languages at no extra cost.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zM12 18h.01"/></svg>`,
    examples: ['Jazz', 'Zong', 'Ufone', 'Telenor'],
  },
  {
    name: 'Banking & Fintech',
    desc: 'Resolve account queries, loan status, and transaction disputes in native languages instantly.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>`,
    examples: ['EasyPaisa', 'HBL', 'JazzCash', 'Meezan'],
  },
  {
    name: 'E-Commerce',
    desc: 'Handle order status, returns, and complaints in the buyer\'s native tongue automatically.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
    examples: ['Daraz', 'Local stores', 'D2C brands'],
  },
  {
    name: 'BPOs & Call Centers',
    desc: 'Replace or augment your agents with AI. Scale capacity without scaling headcount.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    examples: ['Outsourcing firms', 'Contact centers'],
  },
  {
    name: 'Government Services',
    desc: 'Serve citizens across rural Pakistan in their local languages at government scale.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    examples: ['NADRA', 'Agri-tech', 'Health portals'],
  },
];

const users = [
  {
    type: 'Business Admins (BAs)',
    desc: 'Configure AI agents, update knowledge bases, and monitor analytics dashboards.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
  {
    type: 'Business Customers (BCs)',
    desc: 'End customers who interact with the AI agent in their native language via phone or chat.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  },
];
</script>

<style scoped>
.customers-section {
  background: var(--clr-bg);
}
.section-header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 3.5rem;
}
.customers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 4rem;
}
.customer-card {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: border-color 0.25s, transform 0.25s;
}
.customer-card:hover {
  border-color: rgba(240,165,0,0.3);
  transform: translateY(-2px);
}
.customer-icon {
  width: 52px; height: 52px;
  flex-shrink: 0;
  background: var(--clr-accent-glow);
  border: 1px solid rgba(240,165,0,0.2);
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  color: var(--clr-accent);
}
.customer-name {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: var(--clr-text);
  font-family: var(--font-body);
}
.customer-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.85rem;
}
.example-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-pill);
  color: var(--clr-text-muted);
}

/* Users */
.users-row {
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.users-divider {
  padding: 1rem 1.75rem;
  background: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
}
.users-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--clr-border);
}
.user-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem 1.75rem;
  background: var(--clr-bg);
}
.user-icon {
  width: 40px; height: 40px;
  flex-shrink: 0;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  color: var(--clr-accent);
}
.user-type { font-weight: 700; font-size: 0.9rem; margin-bottom: 0.3rem; }

@media (max-width: 640px) {
  .users-cards { grid-template-columns: 1fr; }
}
</style>
