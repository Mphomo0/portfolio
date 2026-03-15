import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Services Midrand | Boost Your Visibility South Africa',
  description: 'Expert SEO services in Midrand to help your business rank higher on Google. Drive more organic traffic and grow your brand in South Africa.',
}

export default function SEOServicesMidrandPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "SEO Services Midrand",
        "description": "Professional search engine optimization services in Midrand, South Africa, helping businesses increase their online visibility and organic search rankings.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see SEO results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a long-term strategy. Typically, it takes 3-6 months to see significant improvements in organic rankings and traffic."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide local SEO for Midrand businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in local SEO to help Midrand businesses appear in local search results and Google Maps."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="seo-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold mb-8">SEO Services in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Drive more traffic to your business with expert SEO services in Midrand. We help you rank higher on search engines and reach your target audience in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why SEO is Essential for Your Business</h2>
          <p>Search Engine Optimization (SEO) is the backbone of any successful digital marketing strategy. In Midrand&apos;s competitive market, being visible on the first page of Google can make or break your business. Our SEO services focus on keyword research, on-page optimization, and high-quality link building to ensure your business stays ahead of the curve in South Africa.</p>
          <p className="mt-6">
            Ready to boost your organic traffic? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free audit.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">How long does it take to see SEO results?</h3>
                <p>SEO is a long-term strategy. Typically, it takes 3-6 months to see significant improvements in organic rankings and traffic in South Africa.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you provide local SEO for Midrand businesses?</h3>
                <p>Yes, we specialize in local SEO to help Midrand businesses appear in local search results and Google Maps, driving local foot traffic and leads.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
