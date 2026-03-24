import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Hosting Midrand | Fast Reliable Hosting',
  description: 'Fast web hosting in Midrand. 99.9% uptime, SSL, daily backups. Reliable hosting for South African businesses.',
}

export default function WebHostingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Web Hosting",
        "description": "Secure and reliable web hosting services in Midrand, South Africa, specializing in high-performance hosting for small businesses.",
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
            "name": "What is included in your hosting plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All plans include free SSL certificates, daily automated backups, 99.9% uptime guarantee, CDN integration, and 24/7 technical support. Domain registration and email hosting also available."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website migrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide free website migration for new customers. Our team handles the entire process with zero downtime during transfer."
            }
          },
          {
            "@type": "Question",
            "name": "How much does web hosting cost in South Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web hosting in South Africa ranges from R99-R499/month for shared hosting. VPS hosting starts at R399/month. Dedicated servers range from R1,500-R5,000+/month."
            }
          },
          {
            "@type": "Question",
            "name": "What is the uptime guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We guarantee 99.9% uptime backed by service level agreements (SLA). Any downtime below this threshold entitles you to credits toward future hosting fees."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="hosting-schema"
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
          <h1 className="text-4xl font-bold mb-6">Web Hosting in Midrand</h1>
          <p className="text-xl leading-relaxed max-w-[65ch]">
            Fast and reliable web hosting in Midrand, Gauteng. We provide secure, scalable hosting solutions with 99.9% uptime for South African businesses.
          </p>
        </section>

        <section className="mb-12 bg-muted/30 rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">What is Web Hosting?</h2>
          <p className="text-lg leading-relaxed">
            Web hosting is the service that makes your website accessible on the internet. Quality hosting ensures fast page load times (under 3 seconds), high availability (99.9% uptime), and robust security (SSL, DDoS protection). In South Africa, local hosting improves website speed for local visitors and supports local SEO. Whether you need shared hosting for a small business site or a dedicated server for high-traffic applications, reliable hosting forms the foundation of your online presence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Quality Hosting Matters in Midrand</h2>
          <p className="text-lg leading-relaxed mb-6">
            Website speed directly impacts your Google rankings and user experience. Slow hosting leads to high bounce rates and lost customers. In South Africa, where internet speeds vary, quality hosting with CDN integration ensures consistent performance. Additionally, local hosting in Gauteng provides faster access for your target audience. Our hosting includes automated backups, SSL certificates, and 24/7 support to keep your business running smoothly.
          </p>
          <p>
            Need reliable hosting? <Link href="/#contact" className="text-violet-500 hover:underline">Contact us today</Link> for a hosting consultation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide web hosting services for businesses throughout Gauteng including Midrand, Johannesburg, Pretoria, Sandton, and surrounding areas.
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
              <span>Web hosting in South Africa costs R99-R5,000+/month depending on server type and resources.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>We guarantee 99.9% uptime backed by SLA with service credits for any downtime.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>All plans include free SSL, daily backups, CDN, and 24/7 technical support.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Free website migration included for new customers with zero downtime.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500">•</span>
              <span>Fast loading times improve Google rankings and reduce bounce rates significantly.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is included in your hosting plans?</h3>
                <p>All plans include free SSL certificates for secure HTTPS, daily automated backups, 99.9% uptime guarantee, CDN integration for fast global delivery, and 24/7 technical support. Domain registration and professional email hosting are also available.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer website migrations?</h3>
                <p>Yes, we provide free website migration for new customers moving from other hosts. Our team handles the entire transfer process including databases, files, and email configuration with zero downtime during the transition.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does web hosting cost in South Africa?</h3>
                <p>Web hosting in South Africa ranges from R99-R499/month for shared hosting suitable for small business websites. VPS (Virtual Private Server) hosting starts at R399/month for more resources. Dedicated servers range from R1,500-R5,000+/month for high-traffic applications.</p>
             </div>
             <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What is the uptime guarantee?</h3>
                <p>We guarantee 99.9% uptime backed by service level agreements (SLA). This translates to less than 9 hours of potential downtime per year. Any downtime below this threshold entitles you to credits toward future hosting fees.</p>
             </div>
          </div>
        </section>
      </article>
    </>
  )
}
