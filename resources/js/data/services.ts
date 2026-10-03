import type { Service } from '../types/content';

export const services: Service[] = [
  {
    id: 'ai-automation',
    label: '// ai & automation',
    title: 'AI & Automation',
    tagline: 'Intelligent workflows that scale.',
    description:
      'Custom LLM systems, RAG pipelines, computer vision, and end-to-end RPA integrations that replace repetitive work with reliable automation.',
    features: [
      'Custom LLM assistants & RAG pipelines',
      'Computer vision & automated inspection',
      'End-to-end RPA & API workflows',
      'Intelligent document processing (IDP)',
    ],
  },
  {
    id: 'edtech',
    label: '// edtech',
    title: 'EdTech',
    tagline: 'Learning that adapts.',
    description:
      'Adaptive learning platforms, student information systems, and assessment engines designed for modern educational institutions and training teams.',
    features: [
      'Adaptive learning & quiz engines',
      'Interactive LMS & course delivery',
      'Student information & records systems',
      'Comprehensive educator analytics',
    ],
  },
  {
    id: 'fintech',
    label: '// fintech',
    title: 'FinTech',
    tagline: 'Secure, high-velocity financial tech.',
    description:
      'Robust payment gateway integrations, automated reconciliation, fraud monitoring, and secure multi-currency transaction systems.',
    features: [
      'Payment gateways & digital wallets',
      'Automated reconciliation & audit logs',
      'Fraud detection & AML compliance',
      'Real-time financial analytics dashboards',
    ],
  },
  {
    id: 'retail',
    label: '// retail',
    title: 'Retail',
    tagline: 'Unified in-store and omnichannel ops.',
    description:
      'Real-time inventory synchronization across multi-store locations, modern cloud POS systems, and predictive replenishment tools.',
    features: [
      'Smart cloud POS & checkout systems',
      'Multi-store real-time inventory sync',
      'Customer loyalty & reward programs',
      'Footfall & sales performance analytics',
    ],
  },
  {
    id: 'ecommerce',
    label: '// e-commerce',
    title: 'E-Commerce',
    tagline: 'High-converting digital storefronts.',
    description:
      'Blazing-fast headless commerce architectures, personalized recommendation engines, cart recovery, and automated fulfillment workflows.',
    features: [
      'Headless commerce & custom store builds',
      'Smart product recommendation algorithms',
      'Automated order routing & dispatch',
      'Checkout optimization & cart recovery',
    ],
  },
  {
    id: 'pharma',
    label: '// pharma',
    title: 'Pharma',
    tagline: 'Compliant health & pharma solutions.',
    description:
      'Track-and-trace medicine inventory, batch verification, regulatory audit trails, and cold-chain compliance monitoring.',
    features: [
      'Regulatory compliance & tamper-proof audit trails',
      'Medicine batch tracking & expiry alerts',
      'E-prescription & pharmacy management',
      'Cold-chain IoT telemetry & alerts',
    ],
  },
  {
    id: 'startups',
    label: '// startups',
    title: 'Startups',
    tagline: 'Rapid MVP from zero to scale.',
    description:
      'Fast-paced product engineering, investor-ready MVPs, scalable cloud architecture, and technical guidance for high-growth ventures.',
    features: [
      'Rapid 4-to-8 week MVP buildout',
      'Cloud-native scalable architecture',
      'Product-market fit telemetry & metrics',
      'Fractional CTO & tech leadership',
    ],
  },
];