import type { ReactNode } from 'react';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';

/* Liens de la section Contact, avec le soulignement animé de Skiper UI (skiper40).
   Les icônes reprennent celles du site (classe .icon de css/style.css). */

const Icon = ({ children }: { children: ReactNode }) => (
  <svg className="icon text-(--accent-text)" viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

const LINKS: { href: string; label: string; icon: ReactNode; external?: boolean; download?: boolean }[] = [
  {
    href: 'https://github.com/gautier900',
    label: 'github.com/gautier900',
    external: true,
    icon: (
      <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/gautier-beley',
    label: 'linkedin.com/in/gautier-beley',
    external: true,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
  },
  {
    href: 'tel:+33637683088',
    label: '06 37 68 30 88',
    icon: (
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
    ),
  },
  {
    href: 'assets/cv.pdf',
    label: 'Télécharger mon CV (PDF)',
    download: true,
    icon: <path d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16" />,
  },
];

export function ContactLinks() {
  return (
    <ul className="mt-7 flex flex-col gap-5">
      {LINKS.map((link) => (
        <li key={link.href}>
          <Link001
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener' : undefined}
            download={link.download || undefined}
            className="w-fit gap-3 text-[1.1rem] font-medium text-foreground"
          >
            <Icon>{link.icon}</Icon>
            {link.label}
          </Link001>
        </li>
      ))}
    </ul>
  );
}
