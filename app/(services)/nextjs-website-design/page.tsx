import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Next.js Developer | High-Performance Websites' },
  description: 'Next.js websites in Midrand, South Africa. Server-side rendering, static generation, and built-in SEO for blazing-fast, high-ranking business websites.',
  alternates: {
    canonical: 'https://www.mpho-moipolai.co.za/nextjs-website-design',
  },
  openGraph: {
    title: 'Next.js Website Development | Fast & SEO-Friendly',
    description: 'Build your website with Next.js for lightning-fast speed, excellent SEO, and seamless user experience.',
    url: 'https://www.mpho-moipolai.co.za/nextjs-website-design',
    siteName: 'Mpho Moipolai',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function NextjsWebsiteDesignPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mpho-moipolai.co.za' },
          { '@type': 'ListItem', position: 2, name: 'Next.js Website Design', item: 'https://www.mpho-moipolai.co.za/nextjs-website-design' },
        ],
      },
      {
        "@type": "Service",
        "name": "Next.js Website Design",
        "description": "Custom Next.js website design and development services in Midrand, specializing in high-performance web applications.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": [
          { "@type": "State", "name": "Gauteng" },
          { "@type": "City", "name": "Midrand" },
          { "@type": "Country", "name": "South Africa" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose Next.js for my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Next.js offers superior performance with Server-Side Rendering (SSR) and Static Site Generation (SSG), excellent SEO, automatic image optimization, and great developer experience. It powers sites like Netflix, Uber, and TikTok."
            }
          },
          {
            "@type": "Question",
            "name": "Is Next.js good for SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Next.js excels at SEO with SSR and SSG for fast page loads, automatic meta tag generation, sitemaps, and structured data support. Sites load in under 2 seconds, a key Google ranking factor."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a Next.js website cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Next.js websites in South Africa cost R8,000-R25,000+ depending on complexity, custom features, and design requirements. The investment pays off with better SEO and faster performance."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Next.js and WordPress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Next.js is a React framework offering better performance, security, and SEO compared to WordPress. No plugins or theme dependencies, custom designs, no monthly hosting fees, and superior loading speeds."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Next.js Website Design in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            High-performance Next.js websites in Midrand, Gauteng. We build lightning-fast, SEO-optimized web applications that help South African businesses rank higher on Google and convert more visitors into customers.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Next.js Website Design?</h2>
          <p className="text-lg leading-relaxed">
            Next.js is a React-based framework that enables Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance and SEO. Unlike traditional websites, Next.js pages load instantly and are fully indexed by search engines. This framework powers websites for Netflix, Uber, TikTok, and thousands of businesses worldwide. In South Africa, Next.js websites typically load under 2 seconds, a critical factor for Google rankings and user experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Next.js for Your Business</h2>
          <p className="text-lg leading-relaxed mb-6">
            In today&apos;s competitive digital landscape, website speed directly impacts your bottom line. Studies show that a 1-second delay in page load time can reduce conversions by 7%. Next.js websites load 3-5x faster than traditional WordPress sites, improving your Google rankings, reducing bounce rates, and increasing sales. Our Next.js expertise ensures your website is future-proof and scales with your business.
          </p>
          <p>
            Want a high-performance website? <Link href="/#contact" className="text-violet-500 hover:underline">Get in touch</Link> to discuss your project.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="font-semibold mb-1">Discovery & Scoping (Free)</h3>
                <p className="text-muted-foreground">We audit your current site (if any), discuss your goals, and produce a fixed-price quote. You know exactly what you're getting before we start.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="font-semibold mb-1">Design in Next.js & Tailwind</h3>
                <p className="text-muted-foreground">We design directly in code using your brand colours, typography, and content. No Figma-to-code translation lag — what you see is what ships.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="font-semibold mb-1">Performance & SEO Optimisation</h3>
                <p className="text-muted-foreground">Images compressed, fonts preloaded, schema markup added, Core Web Vitals verified — before launch, not after. Most Next.js sites we ship score 95+ on Google PageSpeed.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="font-semibold mb-1">Deployment & Ongoing Support</h3>
                <p className="text-muted-foreground">Deployed to Vercel with automatic HTTPS, global CDN, and zero-downtime updates. Optional monthly retainer for content updates and monitoring.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-6">Real Client Results</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-semibold mb-1">Sozim Trading & Consultancy</h3>
              <p className="text-muted-foreground mb-2">Full Next.js + Prisma + MongoDB education platform. First-page Google rankings for primary training keywords within 3 months of launch.</p>
              <Link href="https://www.sozim.co.za" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline text-sm">View site →</Link>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-semibold mb-1">Nostalgic Studio</h3>
              <p className="text-muted-foreground mb-2">Next.js + Tailwind agency site with perfect Core Web Vitals. Exceptional Lighthouse performance and organic visibility from launch day.</p>
              <Link href="https://www.nostalgic-studio.co.za" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline text-sm">View site →</Link>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tanosa Group</h3>
              <p className="text-muted-foreground mb-2">Next.js agency website with seamless design-to-development workflow. Exceptional Core Web Vitals and measurable organic traffic growth after launch.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We build Next.js websites for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <li className="bg-muted/30 rounded-lg p-3 text-center">Midrand</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Johannesburg</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Pretoria</li>
            <li className="bg-muted/30 rounded-lg p-3 text-center">Sandton</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Next.js websites load under 2 seconds, improving Google rankings and user experience significantly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Server-Side Rendering (SSR) and Static Site Generation (SSG) ensure complete search engine indexing.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Next.js websites in South Africa cost R8,000-R25,000+ depending on complexity and features.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Automatic image optimization reduces bandwidth costs and improves mobile loading speeds.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>No plugin dependencies means better security and no monthly maintenance fees.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Why choose Next.js for my website?</h3>
                <p>Next.js offers superior performance with Server-Side Rendering (SSR) and Static Site Generation (SSG), excellent SEO out of the box, automatic image optimization, and great developer experience. It powers sites like Netflix, Uber, and TikTok, proving its enterprise-grade reliability.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Is Next.js good for SEO?</h3>
                <p>Yes, Next.js excels at SEO with SSR and SSG for fast page loads that Google rewards with higher rankings. It includes automatic meta tag generation, sitemaps, and structured data support. Sites load in under 2 seconds, a key Google ranking factor.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does a Next.js website cost in South Africa?</h3>
                <p>Next.js websites in South Africa cost R8,000-R25,000+ depending on complexity, custom features, and design requirements. While the initial investment is higher than WordPress, the superior performance, SEO benefits, and no monthly fees provide long-term value.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is the difference between Next.js and WordPress?</h3>
                <p>Next.js is a React framework offering better performance, security, and SEO compared to WordPress. With Next.js, there are no plugins or theme dependencies, fully custom designs, no monthly hosting fees, and superior loading speeds (under 2 seconds vs. 4-8 seconds for WordPress).</p>
             </div>
          </div>
        </section>
        <nav aria-label="Related services" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/web-design-midrand" className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium">Web Design Midrand</Link>
            <Link href="/seo-services-midrand" className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium">SEO Services Midrand</Link>
            <Link href="/ecommerce-website-development" className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium">Ecommerce Development</Link>
            <Link href="/ux-ui-design" className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium">UX/UI Design</Link>
            <Link href="/web-hosting" className="px-4 py-2 rounded-lg bg-muted/30 border border-border hover:border-violet-500/50 transition-colors text-sm font-medium">Web Hosting</Link>
          </div>
        </nav>
      </article>
    </>
  )
}
