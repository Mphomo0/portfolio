import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Design Midrand | Professional Services South Africa',
  description: 'Top-tier web design services in Midrand. We create professional, fast, and SEO-optimized websites for startups and small businesses in South Africa.',
}

export default function WebDesignMidrandPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Web Design Midrand",
        "description": "Professional web design services in Midrand, South Africa, specializing in responsive and high-performance websites for businesses.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Midrand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of a website in Midrand depends on the complexity and features required. We offer competitive pricing for startups and small businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, a standard professional website takes 2-4 weeks from initial consultation to launch."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="web-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold mb-8">Web Design in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Elevate your online presence with professional web design in Midrand. We specialize in creating high-performance websites that drive results for businesses across South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Web Design is Essential for Your Business</h2>
          <p>In today&apos;s digital age, your website is often the first point of contact for potential customers. A well-designed website not only looks professional but also builds trust, improves user experience, and helps you stand out in the Midrand market. Our designs are focused on conversion and speed, ensuring your business stays ahead of the competition in South Africa.</p>
          <p className="mt-6">
            Ready to start your project? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free consultation.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">How much does a website cost in Midrand?</h3>
                <p>The cost of a website in Midrand depends on the complexity and features required. We offer competitive pricing for startups and small businesses.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">How long does it take to design a website?</h3>
                <p>Typically, a standard professional website takes 2-4 weeks from initial consultation to launch.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
