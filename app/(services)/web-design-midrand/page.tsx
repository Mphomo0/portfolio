import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Web Design Midrand | Fast, SEO-Ready Sites | Mpho Moipolai' },
  description:
    'Professional web design in Midrand, South Africa. Fast-loading, SEO-optimized websites for startups and small businesses. Free consultation available.',
  alternates: {
    canonical: 'https://www.mpho-moipolai.co.za/web-design-midrand',
  },
  openGraph: {
    title: 'Web Design in Midrand | Professional Websites',
    description:
      'Custom web design services in Midrand, Gauteng. Fast, responsive websites built with Next.js for South African businesses.',
    url: 'https://www.mpho-moipolai.co.za/web-design-midrand',
    siteName: 'Mpho Moipolai',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Web Design Midrand — Fast, SEO-Ready Sites by Mpho Moipolai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Midrand | Fast, SEO-Ready Sites | Mpho Moipolai',
    description:
      'Professional web design in Midrand, South Africa. Fast-loading, SEO-optimized websites for startups and small businesses.',
    creator: '@gift187',
    images: ['/opengraph-image'],
  },
}

export default function WebDesignMidrandPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
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
            name: 'Web Design Midrand',
            item: 'https://www.mpho-moipolai.co.za/web-design-midrand',
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Web Design Midrand',
        description:
          'Professional web design services in Midrand, South Africa, specializing in responsive and high-performance websites for businesses.',
        provider: { '@id': 'https://www.mpho-moipolai.co.za/#person' },
        areaServed: [
          { '@type': 'State', name: 'Gauteng' },
          { '@type': 'City', name: 'Midrand' },
          { '@type': 'Country', name: 'South Africa' },
        ],
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '3500',
          highPrice: '15000',
          priceCurrency: 'ZAR',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does a website cost in Midrand?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Website costs in Midrand range from R3,500-R15,000+ depending on complexity. Basic business websites start at R3,500, while e-commerce sites range from R8,000-R15,000 or more.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to design a website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A standard professional website takes 2-4 weeks from consultation to launch. E-commerce sites typically take 4-8 weeks depending on product catalog size.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer local SEO in Midrand?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all websites include basic SEO optimization with local Midrand and South Africa targeting. We optimize for local keywords and Google Business Profile integration.',
            },
          },
          {
            '@type': 'Question',
            name: 'What industries do you serve in Midrand?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We serve startups, small businesses, and entrepreneurs across Gauteng including Midrand, Johannesburg, Pretoria, and surrounding areas.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <nav className="mb-8">
          <Link
            href="/"
            className="text-violet-500 hover:text-violet-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Web Design in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Professional web design services in Midrand, Gauteng. We build
            fast, SEO-optimized websites that help startups and small businesses
            in South Africa attract more customers and grow their online
            presence.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">
            What is Professional Web Design?
          </h2>
          <p className="text-lg leading-relaxed">
            Professional web design is the process of creating visually
            appealing, user-friendly websites that load fast and rank well on
            search engines. In Midrand and across South Africa, businesses need
            websites that work on all devices, load under 3 seconds, and
            convert visitors into customers. Our approach combines aesthetic
            design with technical optimization, ensuring your website serves as
            a powerful marketing tool for your business.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Why Web Design Matters in Midrand
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Midrand sits between Johannesburg and Pretoria, making it a prime
            location for businesses targeting the Gauteng market. With over 50%
            of local searches happening on mobile devices, your website must be
            responsive and fast. A professionally designed website builds
            credibility, improves user experience, and helps you compete
            effectively in South Africa&apos;s digital marketplace.
          </p>
          <p>
            Ready to start your project?{' '}
            <Link href="/#contact" className="text-violet-500 hover:underline">
              Contact us today
            </Link>{' '}
            for a free consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="font-semibold mb-1">Discovery Call (Free)</h3>
                <p className="text-muted-foreground">We discuss your business goals, target audience, competitors, and budget. You leave with a clear project scope and fixed quote — no surprises.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="font-semibold mb-1">Design & Wireframes</h3>
                <p className="text-muted-foreground">We produce wireframes and a design direction based on your brand. You review and approve before a single line of code is written.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="font-semibold mb-1">Development & SEO</h3>
                <p className="text-muted-foreground">Your site is built in Next.js with on-page SEO, Core Web Vitals optimisation, schema markup, and mobile responsiveness baked in from day one.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="font-semibold mb-1">Launch & Handover</h3>
                <p className="text-muted-foreground">After testing across all devices and browsers, your site goes live. You get a 30-minute walkthrough, admin access, and 30 days of post-launch support.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-6">Real Client Results</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-semibold mb-1">Sozim Trading & Consultancy</h3>
              <p className="text-muted-foreground mb-2">Education platform built with Next.js, TypeScript, and Prisma. Achieved first-page Google rankings for key training and certification terms within 3 months of launch.</p>
              <Link href="https://www.sozim.co.za" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline text-sm">View site →</Link>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-semibold mb-1">Jiyology Building & Plumbing</h3>
              <p className="text-muted-foreground mb-2">Local service business website with Gauteng-targeted local SEO. Generated more leads in 3 months than the previous site did in a full year.</p>
              <Link href="https://www.jiyology.co.za" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline text-sm">View site →</Link>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Nostalgic Studio</h3>
              <p className="text-muted-foreground mb-2">Digital agency website achieving perfect Core Web Vitals scores. Designed to convert visitors into leads through clear service positioning and fast load times.</p>
              <Link href="https://www.nostalgic-studio.co.za" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline text-sm">View site →</Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Service Areas in Gauteng
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide web design services throughout Gauteng, including
            Midrand, Johannesburg, Pretoria, Sandton, Centurion, and surrounding
            areas. Our local expertise helps businesses target the right audience
            with location-specific SEO and content strategies.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <li className="bg-muted/30 rounded-lg p-3 text-center">Midrand</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">
              Johannesburg
            </li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Pretoria</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Sandton</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>
                Professional web design in Midrand costs R3,500-R15,000+
                depending on complexity and features required.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>
                Standard websites take 2-4 weeks from consultation to launch,
                with e-commerce sites taking 4-8 weeks.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>
                Mobile-responsive, fast-loading websites are essential for
                Midrand businesses targeting mobile users.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>
                All websites include basic SEO optimization with local Gauteng
                and South Africa targeting.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>
                Professional web design provides competitive advantage in the
                Gauteng digital marketplace.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold mb-3">
                How much does a website cost in Midrand?
              </h3>
              <p>
                Website costs in Midrand range from R3,500-R15,000+ depending
                on complexity. Basic business websites start at R3,500, while
                e-commerce sites range from R8,000-R15,000 or more. Factors
                include design complexity, number of pages, functionality, and
                content management system requirements.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold mb-3">
                How long does it take to design a website?
              </h3>
              <p>
                A standard professional website takes 2-4 weeks from
                consultation to launch. This includes design, development,
                content integration, and testing. E-commerce sites typically
                take 4-8 weeks depending on product catalog size and custom
                features.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold mb-3">
                Do you offer local SEO in Midrand?
              </h3>
              <p>
                Yes, all websites include basic SEO optimization with local
                Midrand and South Africa targeting. We optimize for local
                keywords, set up Google Business Profile integration, and ensure
                proper local schema markup for better visibility in local search
                results.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold mb-3">
                What industries do you serve in Midrand?
              </h3>
              <p>
                We serve startups, small businesses, and entrepreneurs across
                Gauteng including Midrand, Johannesburg, Pretoria, Sandton,
                Centurion, and surrounding areas. Our experience spans retail,
                professional services, healthcare, education, and technology
                sectors.
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="Related services" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/seo-services-midrand"
              className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium"
            >
              SEO Services Midrand
            </Link>
            <Link
              href="/nextjs-website-design"
              className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium"
            >
              Next.js Website Design
            </Link>
            <Link
              href="/ecommerce-website-development"
              className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium"
            >
              Ecommerce Development
            </Link>
            <Link
              href="/ux-ui-design"
              className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium"
            >
              UX/UI Design
            </Link>
            <Link
              href="/branding-design"
              className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium"
            >
              Branding &amp; Design
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
