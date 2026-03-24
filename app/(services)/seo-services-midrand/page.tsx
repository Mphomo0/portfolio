import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Services Midrand | Google Ranking Expert',
  description: 'Expert SEO in Midrand. Local SEO, keyword research, on-page optimization. Rank higher on Google in South Africa.',
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
            "name": "How long does it take to see SEO results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a long-term strategy. Typically, it takes 3-6 months to see significant improvements in organic rankings and traffic. Local SEO for Midrand businesses may show results faster, usually 1-3 months."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide local SEO for Midrand businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in local SEO including Google Business Profile optimization, local keyword targeting, Midrand-area citations, and review management to dominate local search results."
            }
          },
          {
            "@type": "Question",
            "name": "How much does SEO cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO services in South Africa range from R2,000-R10,000/month depending on competition, keyword difficulty, and scope. One-time SEO audits start at R3,000."
            }
          },
          {
            "@type": "Question",
            "name": "What keywords should I target for my Midrand business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We conduct keyword research specific to your industry and location. Common Midrand targets include [service] Midrand, [service] Gauteng, and best [service] South Africa."
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
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">SEO Services in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Expert SEO services in Midrand, Gauteng. We help South African businesses rank higher on Google with local SEO, keyword research, and on-page optimization.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is SEO Services?</h2>
          <p className="text-lg leading-relaxed">
            SEO (Search Engine Optimization) is the practice of improving your website to rank higher on Google and other search engines. In South Africa, appearing on the first page of Google for relevant searches can increase traffic by 300% or more. Our SEO services include technical audits, keyword research, on-page optimization, content strategy, and link building. For Midrand businesses, local SEO ensures you appear in &quot;near me&quot; searches and Google Maps when potential customers search for your services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why SEO Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            With over 80% of South Africans using Google to find local businesses, SEO is essential for growth. Midrand businesses compete in the Gauteng market where organic visibility drives leads and sales. Unlike paid advertising, SEO provides long-term results—once you rank well, you maintain visibility without ongoing ad spend. Our data-driven approach targets keywords your customers actually search for.
          </p>
          <p>
            Ready to boost your rankings? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free SEO audit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Local SEO Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide SEO services throughout Gauteng including local SEO for Midrand, Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas.
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
              <span>SEO takes 3-6 months for significant results; local SEO in Midrand may show results in 1-3 months.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Ranking on first page of Google can increase organic traffic by 300% or more.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>SEO services in South Africa cost R2,000-R10,000/month depending on competition and scope.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Local SEO includes Google Business Profile, Midrand citations, and review management.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Unlike paid ads, SEO provides sustainable long-term visibility without ongoing ad costs.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to see SEO results?</h3>
                <p>SEO is a long-term strategy. Typically, it takes 3-6 months to see significant improvements in organic rankings and traffic. Local SEO for Midrand businesses may show results faster, usually 1-3 months, depending on competition and current website state.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide local SEO for Midrand businesses?</h3>
                <p>Yes, we specialize in local SEO including Google Business Profile optimization, local keyword targeting for Midrand and Gauteng, citation building across South African directories, and review management to dominate local search results.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does SEO cost in South Africa?</h3>
                <p>SEO services in South Africa range from R2,000-R10,000/month depending on competition, keyword difficulty, and scope. One-time SEO audits start at R3,000. Monthly retainers include ongoing optimization, content creation, and reporting.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What keywords should I target for my Midrand business?</h3>
                <p>We conduct keyword research specific to your industry, location, and competition. Common Midrand targets include [service] Midrand, [service] Gauteng, best [service] South Africa, and &quot;near me&quot; searches. We prioritize high-intent keywords with measurable search volume.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
