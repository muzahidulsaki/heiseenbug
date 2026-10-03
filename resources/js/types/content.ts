export type ServiceId =
  | 'ai-automation'
  | 'edtech'
  | 'fintech'
  | 'retail'
  | 'ecommerce'
  | 'pharma'
  | 'startups'
  | 'ai'
  | 'automation'
  | 'erp';

export type Service = {
  id: ServiceId;
  label: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

export type ProjectCategory =
  | 'AI & Automation'
  | 'EdTech'
  | 'FinTech'
  | 'Retail'
  | 'E-Commerce'
  | 'Pharma'
  | 'Startups'
  | 'AI'
  | 'Automation'
  | 'ERP';

export type ProjectResult = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  stack: string[];
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type ProcessStep = {
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  service: ProjectCategory;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialId = 'linkedin' | 'github' | 'twitter' | 'instagram';

export type Social = {
  id: SocialId;
  name: string;
  href: string;
};