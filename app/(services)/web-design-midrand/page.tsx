import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Design Midrand | Professional Website Developer',
  description: 'Professional web design in Midrand, South Africa. Fast, SEO-optimized websites for startups and small businesses. Free consultation.',
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
            "name": "How much does a website cost in Midrand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website costs in Midrand range from R3,000-R15,000+ depending on complexity. Basic business websites start at R3,000, while e-commerce sites range from R8,000-R15,000 or more."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard professional website takes 2-4 weeks from consultation to launch. E-commerce sites typically take 4-8 weeks depending on product catalog size."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer local SEO in Midrand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all websites include basic SEO optimization with local Midrand and South Africa targeting. We optimize for local keywords and Google Business Profile integration."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you serve in Midrand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve startups, small businesses, and entrepreneurs across Gauteng including Midrand, Johannesburg, Pretoria, and surrounding areas."
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
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Web Design in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Professional web design services in Midrand, Gauteng. We build fast, SEO-optimized websites that help startups and small businesses in South Africa attract more customers and grow their online presence.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Professional Web Design?</h2>
          <p className="text-lg leading-relaxed">
            Professional web design is the process of creating visually appealing, user-friendly websites that load fast and rank well on search engines. In Midrand and across South Africa, businesses need websites that work on all devices, load under 3 seconds, and convert visitors into customers. Our approach combines aesthetic design with technical optimization, ensuring your website serves as a powerful marketing tool for your business.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Web Design Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            Midrand sits between Johannesburg and Pretoria, making it a prime location for businesses targeting the Gauteng market. With over 50% of local searches happening on mobile devices, your website must be responsive and fast. A professionally designed website builds credibility, improves user experience, and helps you compete effectively in South Africa&apos;s digital marketplace.
          </p>
          <p>
            Ready to start your project? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a free consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas in Gauteng</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide web design services throughout Gauteng, including Midrand, Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas. Our local expertise helps businesses target the right audience with location-specific SEO and content strategies.
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
              <span>Professional web design in Midrand costs R3,000-R15,000+ depending on complexity and features required.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Standard websites take 2-4 weeks from consultation to launch, with e-commerce sites taking 4-8 weeks.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Mobile-responsive, fast-loading websites are essential for Midrand businesses targeting mobile users.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>All websites include basic SEO optimization with local Gauteng and South Africa targeting.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Professional web design provides competitive advantage in the Gauteng digital marketplace.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does a website cost in Midrand?</h3>
                <p>Website costs in Midrand range from R3,000-R15,000+ depending on complexity. Basic business websites start at R3,000, while e-commerce sites range from R8,000-R15,000 or more. Factors include design complexity, number of pages, functionality, and content management system requirements.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to design a website?</h3>
                <p>A standard professional website takes 2-4 weeks from consultation to launch. This includes design, development, content integration, and testing. E-commerce sites typically take 4-8 weeks depending on product catalog size and custom features.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer local SEO in Midrand?</h3>
                <p>Yes, all websites include basic SEO optimization with local Midrand and South Africa targeting. We optimize for local keywords, set up Google Business Profile integration, and ensure proper local schema markup for better visibility in local search results.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What industries do you serve in Midrand?</h3>
                <p>We serve startups, small businesses, and entrepreneurs across Gauteng including Midrand, Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas. Our experience spans retail, professional services, healthcare, education, and technology sectors.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
