import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js Website Design Midrand | High Performance South Africa',
  description: 'Fast, secure, and SEO-friendly Next.js website design in Midrand. We build modern web applications for startups and small businesses in South Africa.',
}

export default function NextjsWebsiteDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Next.js Website Design",
        "description": "Custom Next.js website design and development services in Midrand, specializing in high-performance web applications.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose Next.js for my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Next.js offers superior performance, excellent SEO out of the box, and a great developer experience, making it perfect for modern web applications."
            }
          },
          {
            "@type": "Question",
            "name": "Is Next.js good for SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Next.js supports Server-Side Rendering (SSR) and Static Site Generation (SSG), which are critical for search engine indexing and performance."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="nextjs-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold mb-8">Next.js Website Design in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Build the future of the web with Next.js website design in Midrand. We create lightning-fast, highly scalable web applications that provide an unmatched user experience in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Next.js is Essential for Your Business</h2>
          <p>In the modern digital landscape, speed and performance are non-negotiable. Next.js is the preferred framework for businesses that want to provide a seamless, fast-loading experience for their users. Our Next.js design services in Midrand ensure your website is not only visually stunning but also technically superior, providing a solid foundation for your business growth in South Africa.</p>
          <p className="mt-6">
            Want a high-performance website? <Link href="/#contact" className="text-violet-500 hover:underline">Get in touch</Link> to discuss your Next.js project.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Why choose Next.js for my website?</h3>
                <p>Next.js offers superior performance, excellent SEO out of the box, and a great developer experience, making it perfect for modern web applications in Midrand.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Is Next.js good for SEO?</h3>
                <p>Yes, Next.js supports Server-Side Rendering (SSR) and Static Site Generation (SSG), which are critical for search engine indexing and performance in the South African market.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
