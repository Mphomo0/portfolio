import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Branding Design Midrand | Logo Brand Identity',
  description: 'Professional branding design in Midrand. Logo design, brand identity, brand guidelines for South African businesses.',
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
            "name": "What is included in a branding package?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branding packages include logo design, color palette, typography, brand guidelines, business card design, and social media templates. Full brand identity packages include stationery, letterhead, and brand style guides."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the branding process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The branding process takes 2-4 weeks depending on complexity. Logo design alone takes 1-2 weeks. Full brand identity projects take 3-4 weeks including all deliverables."
            }
          },
          {
            "@type": "Question",
            "name": "How much does branding cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branding in South Africa ranges from R3,000-R15,000+. Logo design starts at R3,000. Complete brand identity packages range from R8,000-R15,000+ including all brand assets and guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "Why is branding important for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branding helps small businesses appear established and trustworthy. Consistent branding increases recognition by 80% and builds customer trust, leading to higher conversion rates."
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
        <nav className="mb-8">
          <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors">
            ← Back to Home
          </Link>
        </nav>
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Branding & Design in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Professional branding and design in Midrand, Gauteng. We create unique logos and brand identities that help South African businesses stand out from the competition.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Branding & Design?</h2>
          <p className="text-lg leading-relaxed">
            Branding is the process of creating a unique identity for your business—it&apos;s more than just a logo. Effective branding includes your visual identity (logo, colors, typography), brand voice and messaging, brand guidelines for consistency, and overall brand experience. In South Africa, strong branding increases customer recognition by 80% and builds trust that converts visitors into loyal customers. Your brand is the foundation of all your marketing efforts.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Branding Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            In Gauteng&apos;s competitive market, your brand differentiates you from hundreds of similar businesses. Small businesses with consistent branding appear more established and trustworthy. Good branding builds emotional connections with customers, increases perceived value, and supports all your marketing efforts—from your website to social media to printed materials. Investing in professional branding pays dividends through customer trust and loyalty.
          </p>
          <p>
            Need a new brand identity? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free branding consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide branding and design for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
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
              <span>Branding in South Africa costs R3,000-R15,000+ depending on package complexity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Logo design alone takes 1-2 weeks; full brand identity takes 3-4 weeks.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Strong branding increases customer recognition by up to 80%.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Complete packages include logo, colors, typography, and brand guidelines.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Consistent branding builds trust and increases conversion rates significantly.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is included in a branding package?</h3>
                <p>Branding packages include logo design with multiple concepts and revisions, cohesive color palette with hex codes, typography selection with web fonts, comprehensive brand guidelines document, business card design, and social media profile templates. Full brand identity packages include letterhead, email signatures, and complete brand style guides.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does the branding process take?</h3>
                <p>The branding process takes 2-4 weeks depending on complexity and revision rounds. Logo design alone takes 1-2 weeks from concept to final files. Full brand identity projects including all deliverables take 3-4 weeks. Rush orders may be accommodated with additional fees.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does branding cost in South Africa?</h3>
                <p>Branding in South Africa ranges from R3,000-R15,000+ depending on package complexity. Logo design alone starts at R3,000. Complete brand identity packages range from R8,000-R15,000+ including logo, color palette, typography, brand guidelines, business cards, and stationery.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Why is branding important for small businesses?</h3>
                <p>Branding helps small businesses appear established and trustworthy in competitive markets. Studies show consistent branding increases recognition by 80%, builds customer trust, and leads to higher conversion rates. Good branding is an investment that pays dividends through customer loyalty and perceived value.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
