import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8fc' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mpho-moipolai.co.za'),
  title: {
    default: 'Mpho Moipolai | Web Design & SEO in Midrand',
    template: '%s | Mpho Moipolai',
  },
  description:
    'Web design and SEO services in Midrand, South Africa. Next.js developer specializing in fast, high-ranking websites. Free consultation.',
  alternates: {
    canonical: 'https://www.mpho-moipolai.co.za',
    languages: {
      'en-ZA': 'https://www.mpho-moipolai.co.za',
      'x-default': 'https://www.mpho-moipolai.co.za',
    },
  },
  applicationName: 'Mpho Moipolai Portfolio',
  keywords: [
    'Web Design Midrand',
    'SEO Services South Africa',
    'Next.js Developer',
    'Website Design Gauteng',
    'Ecommerce Development',
    'Full Stack Developer South Africa',
    'Web Developer Midrand',
  ],
  authors: [{ name: 'Mpho Moipolai', url: 'https://www.mpho-moipolai.co.za' }],
  creator: 'Mpho Moipolai',
  publisher: 'Mpho Moipolai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.mpho-moipolai.co.za',
    title: 'Mpho Moipolai | Web Design & SEO in Midrand',
    description:
      'Web design and SEO services in Midrand, South Africa. Next.js developer building fast websites that rank.',
    siteName: 'Mpho Moipolai',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mpho Moipolai | Web Design & SEO Midrand',
    description:
      'Next.js developer and SEO specialist in Midrand, South Africa.',
    creator: '@gift187',
  },
  verification: {
    google: 'laFdpgxVc-JO8ff3Ww6hJAmmbGQGE8zCmTAEfsZDPeU',
  },
}

// Global entity schema — server-rendered so all crawlers (Google, GPT, Claude, Perplexity) see it
const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.mpho-moipolai.co.za/#person',
      name: 'Mpho Moipolai',
      url: 'https://www.mpho-moipolai.co.za',
      jobTitle: 'Full Stack Web Developer & SEO Specialist',
      description:
        'Mpho Moipolai is a Full Stack Web Developer and SEO Specialist based in Midrand, South Africa, with 13+ years of experience building production-grade web applications using Next.js, React, and modern web technologies.',
      image: 'https://www.mpho-moipolai.co.za/images/logo/logo.webp',
      email: 'contact@mpho-moipolai.co.za',
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full Stack Web Developer & SEO Specialist',
        occupationLocation: { '@type': 'AdministrativeArea', name: 'Midrand' },
        skills:
          'Next.js, React, TypeScript, Node.js, SEO, GEO, AEO, Tailwind CSS, PostgreSQL, MongoDB, Prisma',
      },
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.mpho-moipolai.co.za/#organization',
      },
      knowsAbout: [
        'Web Design',
        'Web Development',
        'Next.js',
        'React',
        'SEO',
        'GEO',
        'AEO',
        'TypeScript',
        'Full Stack Development',
        'Ecommerce Development',
        'UX/UI Design',
        'Local SEO',
        'Technical SEO',
        'Core Web Vitals',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Halfway House',
        addressLocality: 'Midrand',
        addressRegion: 'Gauteng',
        postalCode: '1685',
        addressCountry: 'ZA',
      },
      sameAs: [
        'https://github.com/Mphomo0',
        'https://www.linkedin.com/in/mpho-moipolai-26b06286',
        'https://www.facebook.com/mbmoipolai',
        'https://www.instagram.com/mphomoipolai',
        'https://g.page/r/CZuns9Xe4wNDEBM',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.mpho-moipolai.co.za/#localbusiness',
      name: 'Mpho Moipolai Web Design & SEO',
      url: 'https://www.mpho-moipolai.co.za',
      logo: 'https://www.mpho-moipolai.co.za/images/logo/logo.webp',
      image: 'https://www.mpho-moipolai.co.za/images/logo/logo.webp',
      email: 'contact@mpho-moipolai.co.za',
      telephone: '+27793676883',
      description:
        'Expert web design and SEO services in Midrand, South Africa. Specializing in Next.js and high-performance digital solutions for startups and SMEs.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Halfway House',
        addressLocality: 'Midrand',
        addressRegion: 'Gauteng',
        postalCode: '1685',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -25.9984,
        longitude: 28.1263,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, Credit Card, EFT, PayFast',
      areaServed: [
        { '@type': 'City', name: 'Midrand' },
        { '@type': 'City', name: 'Johannesburg' },
        { '@type': 'City', name: 'Pretoria' },
        { '@type': 'City', name: 'Sandton' },
        { '@type': 'City', name: 'Centurion' },
        { '@type': 'State', name: 'Gauteng' },
        { '@type': 'Country', name: 'South Africa' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design & Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Design Midrand',
              url: 'https://www.mpho-moipolai.co.za/web-design-midrand',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Services Midrand',
              url: 'https://www.mpho-moipolai.co.za/seo-services-midrand',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js Website Design',
              url: 'https://www.mpho-moipolai.co.za/nextjs-website-design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ecommerce Development',
              url: 'https://www.mpho-moipolai.co.za/ecommerce-website-development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UX/UI Design',
              url: 'https://www.mpho-moipolai.co.za/ux-ui-design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Branding & Design',
              url: 'https://www.mpho-moipolai.co.za/branding-design',
            },
          },
        ],
      },
      sameAs: [
        'https://g.page/r/CZuns9Xe4wNDEBM',
        'https://www.facebook.com/mbmoipolai',
        'https://www.instagram.com/mphomoipolai',
        'https://www.linkedin.com/in/mpho-moipolai-26b06286',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.mpho-moipolai.co.za/#organization',
      name: 'Mpho Moipolai Digital',
      url: 'https://www.mpho-moipolai.co.za',
      logo: 'https://www.mpho-moipolai.co.za/images/logo/logo.webp',
      email: 'contact@mpho-moipolai.co.za',
      foundingDate: '2011',
      founder: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '3',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Ohentse Diseko' },
          reviewBody:
            'Mpho delivered our education platform on time and exceeded expectations. The website performance and SEO results speak for themselves - we now rank on the first page for our key terms.',
          itemReviewed: {
            '@type': 'Service',
            name: 'Website Development',
            provider: { '@id': 'https://www.mpho-moipolai.co.za/#organization' },
          },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Vormmia Sikaundi' },
          reviewBody:
            'Working with Mpho was seamless. His Next.js expertise combined with SEO knowledge helped our agency website achieve exceptional Core Web Vitals scores and organic visibility.',
          itemReviewed: {
            '@type': 'Service',
            name: 'Next.js Website Design',
            provider: { '@id': 'https://www.mpho-moipolai.co.za/#organization' },
          },
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Vusi Jiya' },
          reviewBody:
            'Our new website has generated more leads in 3 months than our previous site did in a year. The local SEO optimization for Soweto and Gauteng was exactly what we needed.',
          itemReviewed: {
            '@type': 'Service',
            name: 'Web Design & Local SEO',
            provider: { '@id': 'https://www.mpho-moipolai.co.za/#organization' },
          },
        },
      ],
      sameAs: [
        'https://www.linkedin.com/in/mpho-moipolai-26b06286',
        'https://github.com/Mphomo0',
        'https://www.facebook.com/mbmoipolai',
        'https://www.instagram.com/mphomoipolai',
        'https://g.page/r/CZuns9Xe4wNDEBM',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.mpho-moipolai.co.za/#website',
      url: 'https://www.mpho-moipolai.co.za',
      name: 'Mpho Moipolai | Web Design Midrand',
      description:
        'Portfolio and services website of Mpho Moipolai, a Full Stack Web Developer and SEO Specialist in Midrand, South Africa.',
      publisher: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
      inLanguage: 'en-ZA',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="6F4E7F1FC1EFA944472DB933122CB39F" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GA — lazyOnload keeps it off the critical path */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJ7Q1F7MPL"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJ7Q1F7MPL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Global entity schema — plain <script> so it's in the initial HTML for all crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
