import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import Script from 'next/script'
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
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mpho-moipolai.co.za'),
  title: {
    default: 'Web Design Midrand | Next.js Developer & SEO Expert South Africa',
    template: '%s | Mpho Moipolai',
  },
  description:
    'Professional web design in Midrand and South Africa. Specialized in Next.js, React, and SEO. I Build high-performance websites.',
  applicationName: 'Mpho Moipolai Portfolio',
  keywords: [
    'Web Design Midrand',
    'Website Design Midrand',
    'Web Design South Africa',
    'Next.js Website Design',
    'UI/UX Design Agency South Africa',
    'SEO Services Midrand',
    'Ecommerce Website Development South Africa',
    'Professional Web Developer Midrand',
  ],
  authors: [{ name: 'Mpho Moipolai' }],
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
    title: 'Web Design Midrand | Mpho Moipolai | Next.js Developer',
    description:
      'Expert web design and SEO services in Midrand. Building fast, scalable, and AI-optimized web applications with Next.js.',
    siteName: 'Mpho Moipolai',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mpho Moipolai - Web Design & SEO Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Midrand | Mpho Moipolai',
    description:
      'Professional Web Developer specializing in Next.js and SEO for Midrand businesses.',
    images: ['/images/og-image.jpg'],
    creator: '@gift187',
  },
  verification: {
    google: 'laFdpgxVc-JO8ff3Ww6hJAmmbGQGE8zCmTAEfsZDPeU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJ7Q1F7MPL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJ7Q1F7MPL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Global Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://www.mpho-moipolai.co.za/#person',
                  name: 'Mpho Moipolai',
                  url: 'https://www.mpho-moipolai.co.za',
                  jobTitle: 'Full Stack Web Developer & SEO Specialist',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Freelance',
                  },
                  knowsAbout: [
                    'Web Design Midrand',
                    'Next.js',
                    'React',
                    'SEO',
                    'AEO',
                    'GEO',
                    'TypeScript',
                    'Full Stack Development',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'South Africa',
                  },
                  sameAs: [
                    'https://github.com/Mphomo0',
                    'https://www.linkedin.com/in/mpho-moipolai-26b06286',
                    'https://www.facebook.com/mbmoipolai',
                    'https://www.instagram.com/mphomoipolai',
                  ],
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://www.mpho-moipolai.co.za/#localbusiness',
                  name: 'Mpho Moipolai Web Design & SEO',
                  url: 'https://www.mpho-moipolai.co.za',
                  logo: 'https://www.mpho-moipolai.co.za/images/logo/logo.webp',
                  image: 'https://www.mpho-moipolai.co.za/images/og-image.jpg',
                  description:
                    'Expert web design and SEO services in Midrand, South Africa. Specializing in Next.js and high-performance digital solutions.',
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
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '09:00',
                    closes: '17:00',
                  },
                  priceRange: '$$',
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://www.mpho-moipolai.co.za/#organization',
                  name: 'Mpho Moipolai Digital',
                  url: 'https://www.mpho-moipolai.co.za',
                  logo: 'https://www.mpho-moipolai.co.za/images/logo/logo.webp',
                  sameAs: [
                    'https://www.linkedin.com/in/mpho-moipolai-26b06286',
                    'https://github.com/Mphomo0',
                  ],
                },
                {
                  '@type': 'WebSite',
                  url: 'https://www.mpho-moipolai.co.za',
                  name: 'Mpho Moipolai | Web Design Midrand',
                  description:
                    'Portfolio website of Mpho Moipolai, a Full Stack Web Developer specializing in Next.js, React, and SEO.',
                  publisher: {
                    '@id': 'https://www.mpho-moipolai.co.za/#person',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://www.mpho-moipolai.co.za',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Projects',
                      item: 'https://www.mpho-moipolai.co.za/#projects',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Contact',
                      item: 'https://www.mpho-moipolai.co.za/#contact',
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* FAQ and Service Schema */}
        <Script
          id="faq-service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What does a full stack developer do?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'A Full Stack Developer handles both front-end and back-end development, building complete web applications using technologies like Next.js, React, Node.js, and databases, ensuring performance, scalability, and security.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Why hire a Next.js developer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Hiring a Next.js developer ensures your web application is SEO-friendly, fast, server-side rendered or statically generated, and built using a modern, scalable framework that supports both dynamic and static content.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How much does a website cost in South Africa?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Website costs in South Africa range from R3,000-R15,000+ depending on complexity. Basic business websites start at R3,000, e-commerce sites range from R8,000-R30,000, and custom Next.js websites start at R8,000.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How long does it take to build a website?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Standard websites take 2-4 weeks from consultation to launch. E-commerce sites take 4-8 weeks. Custom web applications take 6-12 weeks depending on complexity.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is SEO and why is it important?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'SEO (Search Engine Optimization) improves website visibility in search results. It takes 3-6 months to see results. Ranking on the first page of Google can increase organic traffic by 300% or more.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you offer local SEO in Midrand?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, local SEO includes Google Business Profile optimization, local keyword targeting for Midrand and Gauteng, citation building, and review management to dominate local search results.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the best web hosting in South Africa?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Quality web hosting in South Africa includes 99.9% uptime, free SSL, daily backups, CDN integration, and 24/7 support. Costs range from R99-R5,000/month depending on server type.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you work with international clients?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, I work with clients globally, delivering high-quality web applications remotely while maintaining clear communication and project management standards.',
                      },
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  serviceType: 'Web Design & SEO Services',
                  provider: {
                    '@id': 'https://www.mpho-moipolai.co.za/#person',
                  },
                  areaServed: {
                    '@type': 'Place',
                    name: 'South Africa',
                  },
                  description:
                    'Building fast, scalable, and SEO-optimized web applications using Next.js, React, and Node.js for startups and growing businesses in Midrand and across South Africa.',
                },
              ],
            }),
          }}
        />

        {/* Projects Schema */}
        <Script
          id="projects-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'SoftwareApplication',
                  name: 'Sozim Trading & Consultancy',
                  url: 'https://www.sozim.co.za/',
                  description:
                    'Education and professional development organisation offering career-focused courses, expert training, and recognised certificates.',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web Browser',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  creator: {
                    '@id': 'https://www.mpho-moipolai.co.za/#person',
                  },
                  programmingLanguage: [
                    'Next.js',
                    'TypeScript',
                    'Prisma',
                    'MongoDB',
                    'Tailwind',
                  ],
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Nostalgic Studio',
                  url: 'https://www.nostalgic-studio.co.za',
                  description:
                    'Digital design agency helping startups and growing businesses design high-converting websites, strong brand identities, and user-focused digital products.',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web Browser',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  creator: {
                    '@id': 'https://www.mpho-moipolai.co.za/#person',
                  },
                  programmingLanguage: ['Next.js', 'TypeScript', 'Tailwind'],
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Jiyology Building & Construction Plumbing',
                  url: 'https://www.jiyology.co.za/',
                  description:
                    'South African business providing professional building, construction, and plumbing services with a focus on quality and reliability.',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web Browser',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  creator: {
                    '@id': 'https://www.mpho-moipolai.co.za/#person',
                  },
                  programmingLanguage: ['Next.js', 'TypeScript', 'Tailwind'],
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Didee Holdings',
                  url: 'https://www.dideeholdings.co.za',
                  description:
                    'South African company delivering professional business solutions and services through a modern, responsive, and performance-optimized website.',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web Browser',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  creator: {
                    '@id': 'https://www.mpho-moipolai.co.za/#person',
                  },
                  programmingLanguage: ['Next.js', 'TypeScript', 'Tailwind'],
                },
              ],
            }),
          }}
        />

        {/* HowTo Schema for AI Citations */}
        <Script
          id="howto-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'HowTo',
                  name: 'How to Choose a Web Design Agency in South Africa',
                  description: 'A step-by-step guide to selecting the right web design agency for your business in South Africa.',
                  step: [
                    {
                      '@type': 'HowToStep',
                      name: 'Define Your Requirements',
                      text: 'List your business goals, target audience, required features, and budget before contacting agencies.',
                    },
                    {
                      '@type': 'HowToStep',
                      name: 'Check Portfolio and Reviews',
                      text: 'Review the agency portfolio for quality and relevance. Check Google reviews and testimonials from past clients.',
                    },
                    {
                      '@type': 'HowToStep',
                      name: 'Evaluate Technical Expertise',
                      text: 'Ensure they use modern technologies like Next.js, React, and implement SEO best practices for better Google rankings.',
                    },
                    {
                      '@type': 'HowToStep',
                      name: 'Request Detailed Quote',
                      text: 'Get a comprehensive quote including timeline, costs, hosting, maintenance, and post-launch support.',
                    },
                  ],
                },
                {
                  '@type': 'HowTo',
                  name: 'How to Improve Your Website SEO',
                  description: 'Essential steps to improve your website ranking on Google in South Africa.',
                  step: [
                    {
                      '@type': 'HowToStep',
                      name: 'Conduct Keyword Research',
                      text: 'Identify relevant keywords for your business, including local terms like "web design Midrand" or "SEO services South Africa".',
                    },
                    {
                      '@type': 'HowToStep',
                      name: 'Optimize On-Page Elements',
                      text: 'Ensure proper title tags, meta descriptions, header tags, and image alt text for all pages.',
                    },
                    {
                      '@type': 'HowToStep',
                      name: 'Improve Page Speed',
                      text: 'Optimize images, enable compression, use CDN, and ensure fast hosting. Aim for under 3 second load time.',
                    },
                    {
                      '@type': 'HowToStep',
                      name: 'Build Quality Backlinks',
                      text: 'Earn links from reputable South African websites and directories to improve domain authority.',
                    },
                  ],
                },
              ],
            }),
          }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
