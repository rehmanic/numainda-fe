<template>
  <section class="hero">
    <!-- Background mesh -->
    <div class="hero-mesh" aria-hidden="true">
      <div class="mesh-orb orb-1"></div>
      <div class="mesh-orb orb-2"></div>
      <div class="mesh-grid"></div>
    </div>

    <div class="container hero-content">
      <!-- Badge -->
      <div class="hero-badge reveal">
        <span class="badge-dot"></span>
        <span class="label text-accent">AI-Powered Customer Service</span>
      </div>

      <!-- Heading -->
      <h1 class="display-xl hero-heading reveal reveal-delay-1">
        Your customers speak<br />
        <em class="accent-italic">their language.</em><br />
        <span class="hero-heading-sub">Does your support?</span>
      </h1>

      <!-- Sub -->
      <p class="body-lg text-muted hero-sub reveal reveal-delay-2">
        Numainda deploys AI customer service agents fluent in Sindhi, Punjabi,
        Pashto, Balochi, Seraiki, Urdu &amp; English — available 24/7, never tired.
      </p>

      <!-- CTA row -->
      <div class="hero-cta-row reveal reveal-delay-3">
        <a href="#contact" class="btn-primary" id="hero-cta-demo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 3l14 9-14 9V3z"/></svg>
          Request a Demo
        </a>
        <a href="#problem" class="btn-ghost" id="hero-cta-learn">
          See the Problem
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </a>
      </div>

      <!-- Language pills -->
      <div class="lang-pills reveal reveal-delay-4">
        <span v-for="lang in languages" :key="lang.name" class="lang-pill">
          <span class="lang-flag">{{ lang.flag }}</span>
          {{ lang.name }}
        </span>
      </div>
    </div>

    <!-- Floating phone mockup -->
    <div class="hero-visual reveal reveal-delay-2" aria-hidden="true">
      <div class="phone-card">
        <div class="phone-header">
          <div class="phone-dot red"></div>
          <div class="phone-dot yellow"></div>
          <div class="phone-dot green"></div>
          <span class="phone-title body-sm text-muted">Numainda Agent</span>
        </div>
        <div class="chat-messages">
          <div v-for="(msg, i) in chatMessages" :key="i"
            class="chat-msg" :class="msg.side"
            :style="{ animationDelay: `${i * 0.6 + 0.5}s` }">
            <div class="chat-bubble">
              <span class="chat-lang label">{{ msg.lang }}</span>
              <p>{{ msg.text }}</p>
            </div>
          </div>
        </div>
        <div class="phone-input-bar">
          <div class="phone-input-fake">مجھے مدد چاہیے...</div>
          <div class="phone-send-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const languages = [
  { name: 'Sindhi', flag: '🌊' },
  { name: 'Punjabi', flag: '🌾' },
  { name: 'Pashto', flag: '⛰️' },
  { name: 'Balochi', flag: '🏜️' },
  { name: 'Seraiki', flag: '🌺' },
  { name: 'Urdu', flag: '🇵🇰' },
  { name: 'English', flag: '🌐' },
];
const chatMessages = [
  { side: 'left',  lang: 'Sindhi',  text: 'منهنجو بيلنس ڪيئن چيڪ ڪجي؟' },
  { side: 'right', lang: 'AI',      text: 'آپ کا بیلنس 2,340 روپے ہے۔' },
  { side: 'left',  lang: 'Punjabi', text: 'ਮੇਰਾ ਨੈੱਟ ਪੈਕੇਜ ਕਦੋਂ ਖਤਮ ਹੋਵੇਗਾ?' },
  { side: 'right', lang: 'AI',      text: 'آپ کا پیکیج 3 دن بعد ختم ہوگا۔' },
];
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 10rem clamp(1.25rem, 4vw, 2.5rem) 6rem;
  max-width: var(--content-width);
  margin: 0 auto;
  position: relative;
}

/* Mesh background */
.hero-mesh {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.mesh-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}
.orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(240,165,0,0.12) 0%, transparent 70%);
  top: -100px; right: -100px;
  animation: orbFloat 12s ease-in-out infinite;
}
.orb-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%);
  bottom: 0; left: -100px;
  animation: orbFloat 16s ease-in-out infinite reverse;
}
.mesh-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 50%, black 0%, transparent 75%);
}
@keyframes orbFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(1.06); }
}

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 100%;
  padding: 0;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--clr-accent-glow);
  border: 1px solid rgba(240,165,0,0.25);
  border-radius: var(--radius-pill);
  padding: 0.4rem 1rem;
  width: fit-content;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--clr-accent);
  box-shadow: 0 0 8px var(--clr-accent);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--clr-accent); }
  50% { opacity: 0.6; box-shadow: 0 0 20px var(--clr-accent); }
}
.hero-heading { color: var(--clr-text); }
.accent-italic { color: var(--clr-accent); font-style: italic; }
.hero-heading-sub { color: var(--clr-text-muted); }
.hero-sub { max-width: 520px; }
.hero-cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Language pills */
.lang-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.lang-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.8rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--clr-text-muted);
  transition: border-color 0.2s, color 0.2s;
}
.lang-pill:hover { border-color: rgba(240,165,0,0.4); color: var(--clr-text); }
.lang-flag { font-size: 1rem; }

/* Phone card */
.hero-visual {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}
.phone-card {
  width: 340px;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card), var(--shadow-accent);
}
.phone-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--clr-border);
  background: var(--clr-surface-2);
}
.phone-dot {
  width: 11px; height: 11px;
  border-radius: 50%;
}
.phone-dot.red { background: #ff5f57; }
.phone-dot.yellow { background: #ffbd2e; }
.phone-dot.green { background: #28c840; }
.phone-title { margin-left: auto; }

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  min-height: 240px;
}
.chat-msg {
  display: flex;
  opacity: 0;
  animation: fadeInChat 0.4s ease forwards;
}
.chat-msg.left { justify-content: flex-start; }
.chat-msg.right { justify-content: flex-end; }
@keyframes fadeInChat {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}
.chat-bubble {
  max-width: 80%;
  padding: 0.6rem 0.9rem;
  border-radius: var(--radius-md);
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-border);
}
.chat-msg.right .chat-bubble {
  background: var(--clr-accent-glow);
  border-color: rgba(240,165,0,0.25);
}
.chat-lang { color: var(--clr-accent); display: block; margin-bottom: 0.2rem; }
.chat-msg.right .chat-lang { color: var(--clr-text-muted); }
.chat-bubble p { font-size: 0.82rem; line-height: 1.5; direction: rtl; }

.phone-input-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-top: 1px solid var(--clr-border);
  background: var(--clr-surface-2);
}
.phone-input-fake {
  flex: 1;
  font-size: 0.82rem;
  color: var(--clr-text-dim);
  direction: rtl;
}
.phone-send-btn {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--clr-accent);
  color: #0d0f12;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 8rem;
    gap: 3rem;
  }
  .hero-badge { margin: 0 auto; }
  .hero-sub { margin: 0 auto; }
  .hero-cta-row { justify-content: center; }
  .lang-pills { justify-content: center; }
  .hero-visual { display: none; }
}
</style>
