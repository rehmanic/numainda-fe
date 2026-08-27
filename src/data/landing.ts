import { Phone, Building2, ShoppingCart, Headphones, Landmark } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ── Feature Cards ────────────────────────────────────────── */
export const heroFeatures = [
  { title: 'Multilingual AI Agent', desc: 'Communicates natively in 7+ regional languages including Sindhi, Balochi, Punjabi, Pashto, and Siraiki.', details: ['Native language understanding — not translation', 'Automatic language detection from first utterance', 'Cultural context awareness per region', 'Seamless language switching mid-conversation'] },
  { title: 'Real-time API Integration', desc: 'Hooks directly into your databases, CRM, and billing systems for instant query resolution.', details: ['Direct database and CRM connectivity', 'Real-time account lookup and transaction processing', 'Zero human routing for data-dependent queries', 'Secure, encrypted data handling'] },
  { title: 'Automated Call Analytics', desc: '100% automated call transcription with sentiment analysis, demographics, and trend detection.', details: ['Every call transcribed and indexed automatically', 'Real-time sentiment scoring per interaction', 'Demographic and geographic trend dashboards', 'Exportable reports and API access to analytics'] },
];

export const compactFeatures = ['Fatigue-free, consistent quality', 'Instant knowledge base updates', 'Automated outbound routines', 'Natural voice synthesis', 'Peak hour auto-scaling', 'Sentiment detection'];

/* ── Process Steps ────────────────────────────────────────── */
export const processSteps = [
  { title: 'Call Received', sub: 'Instant pickup', detail: 'Customer calls your support line. Numainda answers instantly — no IVR menus, no hold queues. The AI agent greets the caller naturally and begins listening.' },
  { title: 'Language Detection', sub: 'Auto-identify', detail: 'Within the first few words, Numainda identifies the caller\'s language — whether it\'s Sindhi, Punjabi, Pashto, Balochi, Siraiki, Urdu, or English — and switches seamlessly.' },
  { title: 'Intent Parsing', sub: 'NLP engine', detail: 'The AI engine parses the customer\'s query using advanced NLP, extracting intent, sentiment, and context. It understands not just what they\'re saying, but what they need.' },
  { title: 'Data Lookup', sub: 'API fetch', detail: 'For queries that require account-specific information — billing, order status, plan details — Numainda fetches data in real-time from your connected systems via API.' },
  { title: 'Resolution', sub: 'Natural response', detail: 'The AI delivers a natural, conversational response in the customer\'s language. Complex issues are resolved on the spot; edge cases are escalated with full context attached.' },
  { title: 'Analytics', sub: 'Auto-logged', detail: 'Every interaction is transcribed, scored for sentiment, and pushed to your analytics dashboard. Patterns emerge. Insights surface. No manual call listening required.' },
];

/* ── Industries ───────────────────────────────────────────── */
export interface Industry {
  Icon: LucideIcon;
  title: string;
  desc: string;
  example: string;
}

export const industries: Industry[] = [
  { Icon: Phone, title: 'Telecommunications', desc: 'Handle millions of subscriber queries across carriers.', example: 'Balance inquiries · Plan changes · Complaints' },
  { Icon: Building2, title: 'Banking & Fintech', desc: 'Secure, compliant support for financial services.', example: 'Account queries · Disputes · Loan info' },
  { Icon: ShoppingCart, title: 'E-commerce', desc: 'Order tracking, returns, and product queries at scale.', example: 'Delivery status · Refunds · Recommendations' },
  { Icon: Headphones, title: 'BPOs & Call Centers', desc: 'Augment human agents and cut operational costs.', example: 'First-line handling · Agent assist · Overflow' },
  { Icon: Landmark, title: 'Government & Agri-tech', desc: 'Reach rural communities in their native language.', example: 'Registration · Info delivery · Complaints' },
];

/* ── Pricing Tiers ────────────────────────────────────────── */
export interface Tier {
  name: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
}

export const tiers: Tier[] = [
  { name: 'Small Business', desc: 'For startups and small teams getting started with AI support.', features: ['Up to 1,000 calls/month', '3 languages supported', 'Basic call analytics', 'Email support', 'Standard knowledge base'] },
  { name: 'Medium', desc: 'For growing businesses that need comprehensive AI coverage.', features: ['Up to 10,000 calls/month', 'All 7 languages supported', 'Advanced analytics & dashboards', 'API integration (up to 3 systems)', 'Priority support', 'Custom voice & tone settings', 'Automated outbound routines'], highlighted: true },
  { name: 'Enterprise', desc: 'For large organizations with custom requirements and high volume.', features: ['Unlimited calls', 'All languages + custom training', 'Full analytics suite with API', 'Unlimited API integrations', 'Dedicated account manager', 'Custom SLA', 'On-premise deployment option', 'White-label capability', 'Advanced security & compliance'] },
];

/* ── FAQs ─────────────────────────────────────────────────── */
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { q: 'What languages does Numainda support?', a: 'Numainda currently supports Sindhi, Balochi, Punjabi, Pashto, Siraiki, Urdu, and English. We continuously add support for more regional languages based on customer demand.' },
  { q: 'How does Numainda integrate with our existing systems?', a: 'Numainda connects via RESTful APIs to your existing CRM, billing, and database systems. Our team handles the integration process, and most setups are completed within 2–4 weeks.' },
  { q: 'How long does the setup process take?', a: 'A typical deployment takes 2–4 weeks from kickoff to live. This includes system integration, knowledge base configuration, voice customization, and testing.' },
  { q: 'Can Numainda handle multiple calls simultaneously?', a: 'Yes. Unlike human agents, Numainda scales instantly. Whether you receive 10 or 10,000 simultaneous calls, every customer gets the same immediate, high-quality response.' },
  { q: 'How is pricing structured?', a: 'We offer three tiers based on call volume and feature requirements: Small Business, Medium, and Enterprise. All plans are custom-quoted. Contact us for a detailed proposal.' },
  { q: 'Is there a trial or pilot program?', a: 'Yes. We offer a 30-day pilot program where you can test Numainda with a subset of your call volume before committing to a full deployment.' },
  { q: 'What kind of support do you provide?', a: 'All plans include email support. Medium and Enterprise plans include priority support with guaranteed response times. Enterprise plans come with a dedicated account manager.' },
  { q: 'Is our data secure?', a: 'Absolutely. All data is encrypted in transit and at rest. We are SOC 2 compliant and offer on-premise deployment options for organizations with strict data residency requirements.' },
];
