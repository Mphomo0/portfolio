'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const PORTFOLIO_CONFIG = {
  name: 'Mpho Moipolai',
  location: 'Johannesburg, Gauteng, South Africa',
  social: {
    github: 'https://github.com/Mphomo0',
    linkedin: 'https://www.linkedin.com/in/mpho-moipolai-26b06286',
    facebook: 'https://www.facebook.com/mbmoipolai',
    instagram: 'https://www.instagram.com/mphomoipolai',
  },
} as const

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#contact', label: 'Contact' },
]

const GitHubIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect width='4' height='12' x='2' y='9' />
    <circle cx='4' cy='4' r='2' />
  </svg>
)

const FacebookIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
  </svg>
)

const InstagramIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
  </svg>
)

const socialLinks = [
  { name: 'GitHub', href: PORTFOLIO_CONFIG.social.github, icon: GitHubIcon },
  {
    name: 'LinkedIn',
    href: PORTFOLIO_CONFIG.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: 'Facebook',
    href: PORTFOLIO_CONFIG.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: PORTFOLIO_CONFIG.social.instagram,
    icon: InstagramIcon,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PORTFOLIO_CONFIG.name,
    url: 'https://mpho-moipolai.co.za',
    jobTitle: 'Full Stack Web Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    sameAs: Object.values(PORTFOLIO_CONFIG.social),
  }

  return (
    <>
      <Script
        id='footer-structured-data'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <footer
        className='py-12 bg-background border-t border-border/50'
        role='contentinfo'
        aria-label='Site footer'
      >
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
              {/* Logo & Description */}
              <div className='text-center md:text-left'>
                <Link
                  href='/'
                  className='text-xl font-bold text-foreground hover:text-primary transition-colors'
                  aria-label='Mpho Moipolai - Home'
                >
                  <Image
                    src='/images/logo/logo.webp'
                    alt='Mpho Moipolai Logo'
                    width={150}
                    height={150}
                    className='w-full h-full object-contain'
                  />
                </Link>
              </div>

              {/* Navigation */}
              <nav aria-label='Footer navigation'>
                <ul className='flex flex-wrap items-center justify-center gap-6'>
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <div
                className='flex items-center gap-4'
                aria-label='Social media links'
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 rounded-full bg-secondary hover:bg-muted transition-colors duration-300'
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className='mt-8 pt-8 border-t border-border/50 text-center'>
              <p className='text-sm text-muted-foreground'>
                © {currentYear} {PORTFOLIO_CONFIG.name}. Built with Next.js &
                Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
