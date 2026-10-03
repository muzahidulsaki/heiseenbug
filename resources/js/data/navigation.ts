import type { NavLink, Social } from '../types/content';

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }];


export const socials: Social[] = [
  { id: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/company/heiseenbug/' },
  { id: 'github', name: 'GitHub', href: 'https://github.com' },
  { id: 'twitter', name: 'X (Twitter)', href: 'https://x.com' },
  { id: 'instagram', name: 'Instagram', href: 'https://www.instagram.com' }];


export const contactDetails = {
  email: 'info@heiseenbug.com',
  phone: '+88 01825742024',
  location: 'Dhaka, Bangladesh . working remotely worldwide'
};