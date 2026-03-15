import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Branding & Design Midrand | Elevate Your Identity South Africa',
  description: 'Professional branding and design services in Midrand. We create unique logos and brand identities to help your business stand out in South Africa.',
}

export default function BrandingDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Branding & Design",
        "description": "Custom branding and graphic design services in Midrand, South Africa, focused on creating strong visual identities for businesses.",
        "provider": { "@id": "https://www.mpho-moipolai.co.za/#person" },
        "areaServed": { "@type": "Place", "name": "South Africa" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in a branding package?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, a branding package includes logo design, color palette, typography, and brand guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the branding process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The branding process usually takes 2-4 weeks, depending on the number of revisions and complexity of the project."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="branding-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8">Branding & Design in Midrand</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">Create a lasting impression with professional branding and design in Midrand. We specialize in developing unique visual identities that resonate with your target audience in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Branding & Design is Essential for Your Business</h2>
          <p>Your brand is more than just a logo; it&apos;s the essence of your business. In the competitive Midrand market, a strong brand identity helps you build trust, credibility, and recognition. Our branding services focus on telling your story through compelling visuals and consistent design, ensuring your business stands out from the crowd in South Africa.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">What is included in a branding package?</h3>
                <p>Typically, a branding package for Midrand businesses includes logo design, a cohesive color palette, typography selection, and comprehensive brand guidelines.</p>
             </div>
             <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold mb-2">How long does the branding process take?</h3>
                <p>The branding process usually takes 2-4 weeks, depending on the complexity of the project and the number of revisions needed to perfect your South African brand identity.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
