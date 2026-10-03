import type { Project } from '../types/content';

export const projects: Project[] = [
{
  id: 'sentinel-vision',
  title: 'Sentinel Vision',
  client: 'Kestrel Electronics',
  category: 'AI',
  year: '2026',
  summary: 'Computer vision that catches PCB defects on the line in under 40ms.',
  image: "/ec28c784-39b0-4a09-b88d-b24f5f6b421a.jpg",

  challenge:
  'Manual inspectors were reviewing 14,000 boards a day. Fatigue meant tiny solder defects slipped through, and returns were climbing every quarter.',
  solution:
  'We trained a defect-detection model on 220k labelled images and deployed it on edge devices beside each conveyor, with a review queue for borderline cases.',
  results: [
  { value: '98.7%', label: 'Detection accuracy' },
  { value: '−62%', label: 'Manual inspection time' },
  { value: '40ms', label: 'Per-board inference' }],

  stack: ['PyTorch', 'OpenCV', 'FastAPI', 'NVIDIA Jetson']
},
{
  id: 'parley',
  title: 'Parley',
  client: 'Nomad Telecom',
  category: 'AI',
  year: '2025',
  summary: 'A multilingual support assistant that resolves tickets in 12 languages.',
  image: "/f8e2a350-bac8-4d2d-8fea-7a4adcfe2103.jpg",

  challenge:
  'Support queues tripled after expanding into new markets, and hiring native speakers for every language was not sustainable.',
  solution:
  'A retrieval-grounded assistant connected to billing and network status, with clear hand-offs to humans and evaluation suites per language.',
  results: [
  { value: '71%', label: 'Tickets auto-resolved' },
  { value: '12', label: 'Languages supported' },
  { value: '4.7/5', label: 'Customer satisfaction' }],

  stack: ['OpenAI', 'LangChain', 'Python', 'PostgreSQL']
},
{
  id: 'flowdesk',
  title: 'FlowDesk',
  client: 'Meridian Freight',
  category: 'Automation',
  year: '2025',
  summary: 'Invoice extraction and approvals that run without anyone touching a spreadsheet.',
  image: "/bbb688db-795c-4308-ade2-ff5bc40e13d6.jpg",

  challenge:
  'Finance keyed in 9,000 carrier invoices a month by hand. Month-end close took eleven days and errors were routine.',
  solution:
  'Document AI extracts line items, rules match them to shipments, and exceptions route to the right approver in Slack — all logged into Odoo.',
  results: [
  { value: '9k', label: 'Invoices per month' },
  { value: '−84%', label: 'Processing time' },
  { value: '0.3%', label: 'Error rate' }],

  stack: ['n8n', 'Python', 'AWS Textract', 'Odoo']
},
{
  id: 'relay-onboard',
  title: 'Relay Onboard',
  client: 'Brightline Health',
  category: 'Automation',
  year: '2024',
  summary: 'New-hire onboarding that sets up accounts, docs and training on day zero.',
  image: "/fb5fc05a-4144-476f-ab86-c50b70165a5a.jpg",

  challenge:
  'Onboarding a clinician meant 27 manual tasks across HR, IT and compliance. New staff often waited a week for system access.',
  solution:
  'One trigger from the HR system now provisions accounts, sends documents for signature and assigns training, with a live checklist for managers.',
  results: [
  { value: '−90%', label: 'Setup time' },
  { value: '27', label: 'Tasks automated' },
  { value: '100%', label: 'Compliance docs captured' }],

  stack: ['Node.js', 'Zapier', 'Slack API', 'BambooHR API']
},
{
  id: 'lumen-learn',
  title: 'Lumen Learn',
  client: 'Northfield Academies',
  category: 'EdTech',
  year: '2026',
  summary: 'An adaptive learning platform that meets every student where they are.',
  image: "/4fdfafa6-b6e1-4307-8975-fe28f1af2ca6.jpg",

  challenge:
  'Twelve schools, one curriculum, and classrooms where students were years apart in ability. Teachers had no time to personalise.',
  solution:
  'A practice engine that adjusts difficulty per student, plus a teacher dashboard that flags who needs help before the next lesson.',
  results: [
  { value: '+23%', label: 'Assessment scores' },
  { value: '18k', label: 'Active students' },
  { value: '3.2×', label: 'Weekly practice time' }],

  stack: ['React', 'Node.js', 'PostgreSQL', 'TensorFlow']
},
{
  id: 'atlas-erp',
  title: 'Atlas ERP',
  client: 'Verde Retail Group',
  category: 'ERP',
  year: '2025',
  summary: 'Forty stores moved from five systems onto one ERP with zero downtime.',
  image: "/bfebf2ff-0605-4c06-9e67-c2c3413436e1.jpg",

  challenge:
  'Inventory, finance and HR lived in separate tools. Stock counts never matched and leadership reported on week-old data.',
  solution:
  'A phased Odoo rollout with custom replenishment logic, migrated data from legacy systems store by store, and trained 300 staff.',
  results: [
  { value: '40', label: 'Stores unified' },
  { value: '−35%', label: 'Stock-outs' },
  { value: '1', label: 'Source of truth' }],

  stack: ['Odoo', 'Python', 'PostgreSQL', 'Docker']
}];