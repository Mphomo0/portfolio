import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import Script from 'next/script'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mpho-moipolai.co.za'),
  title: {
    default:
      'Mpho Moipolai | Full Stack Web Developer | Next.js & React Expert',
    template: '%s | Mpho Moipolai',
  },
  description:
    'Full Stack Web Developer specializing in Next.js, React, and Node.js. I build fast, scalable, SEO-optimized web applications for startups and growing businesses.',
  applicationName: 'Mpho Moipolai Portfolio',
  authors: [{ name: 'Mpho Moipolai' }],
  creator: 'Mpho Moipolai',
  publisher: 'Mpho Moipolai',
  alternates: {
    canonical: '/',
  },
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
    title: 'Mpho Moipolai | Full Stack Web Developer',
    description:
      'Professional Full Stack Developer building scalable web applications with Next.js, React, and Node.js.',
    siteName: 'Mpho Moipolai',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mpho Moipolai - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mpho Moipolai | Full Stack Web Developer',
    description:
      'Professional Full Stack Developer specializing in Next.js, React, and Node.js.',
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

        {/* Structured Data - Person */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mpho Moipolai',
              url: 'https://www.mpho-moipolai.co.za',
              jobTitle: 'Full Stack Web Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              knowsAbout: [
                'Next.js',
                'React',
                'Node.js',
                'TypeScript',
                'Full Stack Development',
                'Web Application Development',
              ],
              areaServed: {
                '@type': 'Place',
                name: 'Johannesburg, South Africa',
              },
              sameAs: [
                'https://github.com/Mphomo0',
                'https://www.linkedin.com/in/mpho-moipolai-26b06286',
                'https://www.facebook.com/mbmoipolai',
                'https://www.instagram.com/mphomoipolai',
              ],
            }),
          }}
        />

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
                      name: 'Do you work with international clients?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes! I work with clients globally, delivering high-quality web applications remotely while maintaining clear communication and project management standards.',
                      },
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  serviceType: 'Full Stack Web Development',
                  provider: {
                    '@type': 'Person',
                    name: 'Mpho Moipolai',
                    url: 'https://www.mpho-moipolai.co.za',
                  },
                  areaServed: {
                    '@type': 'Place',
                    name: 'Johannesburg, South Africa',
                  },
                  description:
                    'Building fast, scalable, and SEO-optimized web applications using Next.js, React, and Node.js for startups and growing businesses.',
                },
                {
                  '@type': 'WebSite',
                  url: 'https://www.mpho-moipolai.co.za',
                  name: 'Mpho Moipolai Portfolio',
                  description:
                    'Portfolio website of Mpho Moipolai, a Full Stack Web Developer specializing in Next.js, React, and Node.js.',
                  publisher: {
                    '@type': 'Person',
                    name: 'Mpho Moipolai',
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
                    '@type': 'Person',
                    name: 'Mpho Moipolai',
                    url: 'https://www.mpho-moipolai.co.za',
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
                    '@type': 'Person',
                    name: 'Mpho Moipolai',
                    url: 'https://www.mpho-moipolai.co.za',
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
                    '@type': 'Person',
                    name: 'Mpho Moipolai',
                    url: 'https://www.mpho-moipolai.co.za',
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
                    '@type': 'Person',
                    name: 'Mpho Moipolai',
                    url: 'https://www.mpho-moipolai.co.za',
                  },
                  programmingLanguage: ['Next.js', 'TypeScript', 'Tailwind'],
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
