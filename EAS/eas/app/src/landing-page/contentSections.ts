import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Features', to: '#features' },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Documentation', to: DocsUrl },
  { name: 'FAQ', to: '#faq' },
];
export const features = [
  {
    name: 'Personalized Short Aliases',
    description: ' create easy-to-remember and shareable short email',
    icon: '😃',
    href: DocsUrl,
  },
  {
    name: 'Email Control',
    description: 'block spams or irrelevant emails.',
    icon: '🕹️',
    href: DocsUrl,
  },
  {
    name: 'Multi-Alias Management',
    description: 'create multiple aliases for different purposes',
    icon: '💡',
    href: DocsUrl,
  },
  {
    name: 'Security',
    description: 'Email aliases simply forward to their existing inbox securely.',
    icon: '🔐',
    href: DocsUrl,
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Why email should be simple?',
    answer: 'Simplify your email with this service by using easy-to-remember aliases that protect your privacy, help manage multiple communication streams, and eliminate spam—all without the hassle of multiple accounts or passwords.',
    href: '',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
