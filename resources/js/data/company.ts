import type { ProcessStep, Stat, Testimonial } from '../types/content';

export const stats: Stat[] = [
{ value: 120, suffix: '+', label: 'Projects delivered' },
{ value: 64, suffix: '+', label: 'Clients worldwide' },
{ value: 8, suffix: ' yrs', label: 'Building & debugging' }];


export const processSteps: ProcessStep[] = [
{
  title: 'Discover',
  duration: '1–2 weeks',
  description:
  'We sit with your team, map the workflow end to end, and find where time, money and patience leak out.',
  deliverables: ['Workflow audit', 'Opportunity map', 'Success metrics']
},
{
  title: 'Design',
  duration: '2–3 weeks',
  description:
  'Flows, prototypes and system architecture — tested with real users before a line of production code.',
  deliverables: ['Clickable prototype', 'Architecture plan', 'Roadmap']
},
{
  title: 'Develop',
  duration: '6–12 weeks',
  description:
  'Two-week sprints with a working demo at the end of each. You see progress, not status reports.',
  deliverables: ['Sprint demos', 'Test suites', 'Documentation']
},
{
  title: 'Deploy',
  duration: '1–2 weeks',
  description:
  'Staged rollouts, data migration and team training, so launch day is quiet — the good kind.',
  deliverables: ['Data migration', 'Training', 'Go-live runbook']
},
{
  title: 'Support',
  duration: 'Ongoing',
  description:
  'Monitoring, iteration and a named engineer who already knows your system when something needs attention.',
  deliverables: ['SLA monitoring', 'Quarterly reviews', 'Iteration']
}];


export const testimonials: Testimonial[] = [
{
  quote:
  'HeiSeenBug found three process bugs in our first workshop that we had been living with for years. The vision system they shipped pays for itself every month.',
  name: 'Anika Rao',
  role: 'Head of Operations',
  company: 'Kestrel Electronics',
  service: 'AI'
},
{
  quote:
  'Our finance team used to dread month-end. Now invoices flow through on their own and we spend that week on actual analysis.',
  name: 'Daniel Okafor',
  role: 'CFO',
  company: 'Meridian Freight',
  service: 'Automation'
},
{
  quote:
  'They treated teachers as users, not afterthoughts. Adoption across our twelve schools happened in a term, not a year.',
  name: 'Sofia Marchetti',
  role: 'Director of Learning',
  company: 'Northfield Academies',
  service: 'EdTech'
},
{
  quote:
  'Forty stores, one system, zero drama at go-live. I did not know an ERP migration could be boring in the best way.',
  name: 'Marcus Lindqvist',
  role: 'COO',
  company: 'Verde Retail Group',
  service: 'ERP'
}];


export const techRowOne = [
'Python',
'PyTorch',
'TensorFlow',
'OpenAI',
'LangChain',
'Hugging Face',
'FastAPI',
'OpenCV',
'n8n',
'UiPath'];


export const techRowTwo = [
'React',
'TypeScript',
'Node.js',
'Flutter',
'PostgreSQL',
'MongoDB',
'Odoo',
'AWS',
'Docker',
'Kubernetes'];