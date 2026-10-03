import React from 'react';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { socials } from '../../data/navigation';
import type { SocialId } from '../../types/content';

const ICONS: Record<SocialId, typeof GitHubLogoIcon> = {
  linkedin: LinkedInLogoIcon,
  github: GitHubLogoIcon,
  twitter: TwitterLogoIcon,
  instagram: InstagramLogoIcon
};

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul className={`flex gap-2 ${className}`}>
      {socials.map((s) => {
        const Icon = ICONS[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-fg/25 transition-[background-color,color,border-color] duration-150 hover:border-fg hover:bg-accent hover:text-accent-fg">
              
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>);

      })}
    </ul>);

}